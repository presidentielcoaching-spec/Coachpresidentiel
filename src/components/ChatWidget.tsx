"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Msg {
  from: "bot" | "user";
  text: string;
}

const quickReplies = [
  "Quelles formations proposez-vous ?",
  "Comment payer en plusieurs fois ?",
  "Y a-t-il un certificat ?",
];

const botAnswers: Record<string, string> = {
  formation:
    "Nous proposons 3 formations : Trading (100 000 FCFA), Art Oratoire (30 000 FCFA) et Intelligence Artificielle (250 000 FCFA). Souhaitez-vous des détails sur l'une d'elles ?",
  pay: "Vous pouvez payer via Orange Money, Wave, Visa ou Mastercard, et échelonner en 3 à 5 tranches selon la formation. 💳",
  certificat:
    "Oui ! Chaque formation délivre un certificat numérique vérifiable que vous pouvez ajouter à votre CV et LinkedIn. 🎓",
  default:
    "Merci pour votre message ! Un conseiller vous répondra rapidement. Vous pouvez aussi nous écrire sur WhatsApp pour une réponse immédiate. 😊",
};

function answer(q: string): string {
  const l = q.toLowerCase();
  if (l.includes("formation") || l.includes("cours")) return botAnswers.formation;
  if (l.includes("pay") || l.includes("tranche") || l.includes("prix"))
    return botAnswers.pay;
  if (l.includes("certificat") || l.includes("diplôme"))
    return botAnswers.certificat;
  return botAnswers.default;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Bonjour 👋 Je suis l'assistant IA de Coaching Présidentiel. Comment puis-je vous aider ?",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: answer(text) }]);
    }, 600);
  };

  return (
    <>
      {/* WhatsApp button */}
      <a
        href="https://wa.me/2250700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.5 5.205l-.999 3.648 3.748-.952zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[30rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-premium animate-fade-up">
          <div className="bg-navy-gradient flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-bold !text-white">Assistant IA</div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  En ligne
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-cloud p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-sm bg-navy text-white"
                      : "rounded-bl-sm bg-white text-navy shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {messages.length <= 1 && (
              <div className="space-y-2 pt-1">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full rounded-xl border border-border bg-white px-3 py-2 text-left text-xs font-medium text-navy/80 transition-colors hover:border-gold-300 hover:text-gold-600"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre message…"
              className="flex-1 rounded-full border border-border bg-cloud px-4 py-2.5 text-sm focus:border-gold-300 focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-navy transition-transform hover:scale-105"
              aria-label="Envoyer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy shadow-gold transition-transform hover:scale-110"
        aria-label="Ouvrir le chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
