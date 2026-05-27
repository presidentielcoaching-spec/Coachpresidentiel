"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, RotateCcw, Send, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "kemetlingua_koffi_chat_v1";

const QUICK_PROMPTS = [
  { label: "Comment souscrire ?", text: "Comment je peux souscrire au Premium ?" },
  { label: "Quelles langues ?", text: "Quelles langues vous proposez ?" },
  { label: "Wave / Orange Money", text: "Comment payer avec Wave ou Orange Money ?" },
  { label: "Différence Mbote / Koffi", text: "Quelle différence entre toi (Koffi) et Mbote ?" },
];

export function ConciergeWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [unread, setUnread] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hide on routes that already host an immersive chat (Mbote on /ia)
  // or where a floating button would clash with the existing UI.
  if (pathname?.startsWith("/ia") || pathname?.startsWith("/lecons/")) {
    return null;
  }

  // Load persisted conversation
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Msg[];
        if (Array.isArray(parsed)) setMessages(parsed.slice(-20));
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-20)));
    } catch {
      // ignore quota
    }
  }, [messages]);

  // Scroll on new message
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  // Mark unread when closed and assistant just replied
  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  function startNew() {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || streaming) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    setMessages((m) => [...m, { role: "assistant", content: "" }]);
    let acc = "";

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        acc = `[${data.error ?? "Désolé, je rencontre un souci."}]`;
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
      if (!open) setUnread(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erreur réseau";
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: `[${msg}]` };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  // Greet on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "**Mbolo !** Je suis Koffi, ton agent d'accueil Kemetlingua. Comment puis-je t'aider aujourd'hui ?",
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function renderContent(text: string) {
    // very light markdown: **bold** and /links/
    const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const html = escaped
      .replace(
        /\*\*(.+?)\*\*/g,
        '<strong class="text-gold-400 font-semibold">$1</strong>',
      )
      .replace(
        /(^|\s)(\/[a-z][a-z0-9/_-]*)/g,
        '$1<a href="$2" class="text-gold-400 underline hover:text-gold-300">$2</a>',
      );
    return { __html: html };
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Discuter avec Koffi"
        className={`fixed bottom-4 right-4 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-[#1a0f00] shadow-2xl shadow-gold-500/40 transition hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 ${
          open ? "pointer-events-none scale-90 opacity-0" : ""
        }`}
      >
        <MessageCircle size={26} strokeWidth={2.2} />
        {unread && (
          <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-african-red text-[10px] font-bold text-white ring-2 ring-background">
            !
          </span>
        )}
        <span className="absolute -top-9 right-0 hidden whitespace-nowrap rounded-full bg-surface-elevated px-3 py-1 text-xs font-semibold text-foreground ring-1 ring-border sm:block">
          Discuter avec Koffi
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end p-0 sm:bottom-6 sm:right-6 sm:items-end sm:p-0">
          {/* Backdrop on mobile only */}
          <div
            className="absolute inset-0 bg-black/40 sm:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex h-full w-full flex-col overflow-hidden border-border bg-surface-elevated shadow-2xl shadow-primary-900/50 sm:h-[600px] sm:max-h-[80vh] sm:w-[380px] sm:rounded-2xl sm:border">
            {/* Header */}
            <header className="flex items-center gap-3 border-b border-border/60 bg-gradient-to-br from-primary-700 to-primary-900 px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-base font-bold text-[#1a0f00]">
                K
              </span>
              <div className="flex-1 leading-tight">
                <p className="text-sm font-bold">Koffi</p>
                <p className="text-[11px] text-foreground/70">
                  Agent d&apos;accueil Kemetlingua AI · en ligne
                </p>
              </div>
              <button
                onClick={startNew}
                title="Nouvelle conversation"
                className="grid h-8 w-8 place-items-center rounded-full text-foreground/70 hover:bg-background/40 hover:text-gold-400"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                title="Fermer"
                className="grid h-8 w-8 place-items-center rounded-full text-foreground/70 hover:bg-background/40"
              >
                <X size={16} />
              </button>
            </header>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-gold-500 to-african-orange text-[#1a0f00]"
                        : "bg-primary-600/40 text-primary-100"
                    }`}
                  >
                    {m.role === "user" ? "·" : "K"}
                  </span>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "rounded-tr-sm bg-gold-500/15"
                        : "rounded-tl-sm bg-background/60"
                    }`}
                    dangerouslySetInnerHTML={renderContent(m.content)}
                  />
                </div>
              ))}
              {streaming && messages[messages.length - 1]?.content === "" && (
                <div className="flex items-center gap-2 pl-9 text-xs text-muted">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold-400" />
                  Koffi écrit…
                </div>
              )}

              {messages.length <= 1 && !streaming && (
                <div className="pt-2">
                  <p className="mb-2 text-[11px] uppercase tracking-wider text-muted">
                    Suggestions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q.label}
                        onClick={() => send(q.text)}
                        className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/85 hover:border-gold-500/50 hover:text-gold-400"
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              className="flex items-center gap-2 border-t border-border/60 bg-background/40 p-3"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={streaming}
                placeholder="Pose ta question…"
                className="flex-1 rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-[#1a0f00] disabled:opacity-50"
                aria-label="Envoyer"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
