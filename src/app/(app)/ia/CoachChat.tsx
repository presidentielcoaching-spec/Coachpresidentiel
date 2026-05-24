"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Mic, Send, Volume2, VolumeX } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SCENARIOS: { key: string; icon: string; label: string }[] = [
  { key: "", icon: "💬", label: "Discussion libre" },
  { key: "se-presenter", icon: "👋", label: "Se présenter" },
  { key: "au-marche", icon: "🛒", label: "Au marché" },
  { key: "en-famille", icon: "👨‍👩‍👧", label: "En famille" },
  { key: "a-l-ecole", icon: "🏫", label: "À l'école" },
  { key: "en-taxi", icon: "🚕", label: "En taxi" },
  { key: "au-restaurant", icon: "🍲", label: "Au restaurant" },
];

type LangOption = { code: string; name: string; emoji: string; greeting: string };

export function CoachChat({
  userName,
  languages,
  hasAnthropicKey,
}: {
  userName: string;
  languages: LangOption[];
  hasAnthropicKey: boolean;
}) {
  const [language, setLanguage] = useState(languages[0]?.name ?? "Ewondo");
  const [scenario, setScenario] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [autoTts, setAutoTts] = useState(true);
  const [recording, setRecording] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const greeting = useMemo(() => {
    const l = languages.find((x) => x.name === language);
    return l?.greeting ?? "Mbote";
  }, [language, languages]);

  const recognition = useMemo(() => {
    if (typeof window === "undefined") return null;
    const SR =
      (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition })
        .SpeechRecognition ??
      (window as unknown as {
        webkitSpeechRecognition?: typeof window.SpeechRecognition;
      }).webkitSpeechRecognition;
    if (!SR) return null;
    const r = new SR();
    r.lang = "fr-FR";
    r.interimResults = false;
    r.continuous = false;
    return r;
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function speak(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const clean = text.replace(/\*\*/g, "").replace(/\[.*?\]/g, "");
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = "fr-FR";
    u.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  function startVoice() {
    if (!recognition) return;
    setRecording(true);
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const said = e.results[0]?.[0]?.transcript ?? "";
      if (said.trim()) {
        setInput(said);
        send(said);
      }
    };
    recognition.onerror = () => setRecording(false);
    recognition.onend = () => setRecording(false);
    recognition.start();
  }

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || streaming) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    let assistantSoFar = "";
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next,
          language,
          scenario,
        }),
      });

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        assistantSoFar = `[${data.error ?? "Erreur inconnue"}]`;
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: assistantSoFar };
          return copy;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantSoFar += chunk;
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: assistantSoFar };
          return copy;
        });
      }

      if (autoTts && assistantSoFar) speak(assistantSoFar);
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

  function startNew() {
    setMessages([
      {
        role: "assistant",
        content: `**${greeting} ${userName} !** Je suis Mbote, ton coach IA. Prêt à pratiquer ton ${language} ? Choisis un scénario à droite, ou pose-moi une question pour commencer.`,
      },
    ]);
  }

  useEffect(() => {
    if (messages.length === 0) startNew();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const disabled = !hasAnthropicKey;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="flex h-[calc(100vh-220px)] min-h-[480px] flex-col rounded-3xl border border-border bg-surface-elevated">
        <div className="flex items-center justify-between gap-3 border-b border-border/60 p-4">
          <div className="flex items-center gap-2">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setMessages([]);
              }}
              className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm font-semibold"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.name}>
                  {l.emoji} {l.name}
                </option>
              ))}
            </select>
            {scenario && (
              <span className="rounded-full bg-primary-600/30 px-3 py-1 text-xs font-semibold text-primary-100">
                {SCENARIOS.find((s) => s.key === scenario)?.label}
              </span>
            )}
          </div>
          <button
            onClick={() => setAutoTts((v) => !v)}
            title="Lecture vocale auto"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/60 text-foreground/80"
          >
            {autoTts ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto p-4"
        >
          {!hasAnthropicKey && (
            <div className="rounded-xl border border-african-orange/40 bg-african-orange/10 p-4 text-sm text-african-orange">
              Le coach IA est en attente de configuration : ajoute
              <code className="mx-1 rounded bg-background/60 px-1.5">
                ANTHROPIC_API_KEY
              </code>
              dans <code>.env</code> et redémarre le serveur.
            </div>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                m.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-gold-500 to-african-orange text-[#1a0f00]"
                    : "bg-primary-600/30 text-primary-200"
                }`}
              >
                {m.role === "user" ? userName[0] : "🤖"}
              </span>
              <div
                className={`relative max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  m.role === "user"
                    ? "rounded-tr-sm bg-gold-500/15 text-foreground"
                    : "rounded-tl-sm bg-background/60 text-foreground/90"
                }`}
              >
                <div
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: m.content
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gold-400">$1</strong>'),
                  }}
                />
                {m.role === "assistant" && m.content && !streaming && (
                  <button
                    onClick={() => speak(m.content)}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] text-gold-400 hover:underline"
                  >
                    <Volume2 size={11} /> Écouter
                  </button>
                )}
              </div>
            </div>
          ))}
          {streaming &&
            messages[messages.length - 1]?.content === "" && (
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="h-2 w-2 animate-bounce rounded-full bg-gold-400" />
                Mbote réfléchit…
              </div>
            )}
        </div>

        <form
          className="flex items-center gap-2 border-t border-border/60 p-3"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          {recognition && (
            <button
              type="button"
              disabled={disabled || streaming}
              onClick={startVoice}
              className={`grid h-11 w-11 place-items-center rounded-full text-[#1a0f00] disabled:opacity-50 ${
                recording
                  ? "bg-african-red text-white animate-pulse"
                  : "bg-gradient-to-br from-gold-500 to-african-orange"
              }`}
              aria-label="Parler"
            >
              <Mic size={18} />
            </button>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={disabled || streaming}
            placeholder={`Écris en français ou en ${language}…`}
            className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={disabled || streaming || !input.trim()}
            className="grid h-11 w-11 place-items-center rounded-full bg-primary-600 text-foreground disabled:opacity-50"
            aria-label="Envoyer"
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      <aside className="space-y-3">
        <div className="rounded-2xl border border-border bg-surface-elevated p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-400">
            Scénarios
          </h3>
          <ul className="mt-3 space-y-1.5">
            {SCENARIOS.map((s) => (
              <li key={s.key}>
                <button
                  onClick={() => {
                    setScenario(s.key);
                    setMessages([]);
                  }}
                  className={`flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition ${
                    scenario === s.key
                      ? "border-gold-500/60 bg-gold-500/10 text-gold-400"
                      : "border-border bg-background/40 hover:border-gold-500/40"
                  }`}
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="flex-1 text-xs font-medium">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface-elevated p-4 text-xs text-muted">
          <p className="font-semibold text-foreground/85">Astuce</p>
          <p className="mt-1">
            Clique sur le micro pour parler en français. Mbote te répond en{" "}
            {language} avec la traduction et écoute la prononciation à voix haute.
          </p>
        </div>
      </aside>
    </div>
  );
}
