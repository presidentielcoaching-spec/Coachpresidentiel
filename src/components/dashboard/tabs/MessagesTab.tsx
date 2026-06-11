"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { messages } from "@/lib/dashboard-data";

interface Chat {
  from: "me" | "them";
  text: string;
  time: string;
}

const conversation: Chat[] = [
  { from: "them", text: "Bonjour Awa ! Excellent travail sur ton dernier exercice d'analyse technique. 👏", time: "10:20" },
  { from: "them", text: "Pense à bien placer ton stop-loss avant chaque entrée, c'est essentiel.", time: "10:21" },
  { from: "me", text: "Merci beaucoup ! Oui je vais appliquer ça dès la prochaine session live.", time: "10:23" },
  { from: "them", text: "Parfait. On en reparle jeudi pendant le live de 19h. 💪", time: "10:24" },
];

export function MessagesTab() {
  const [active, setActive] = useState(0);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState(conversation);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setChat((c) => [...c, { from: "me", text: input, time: "Maintenant" }]);
    setInput("");
  };

  return (
    <div className="grid h-[calc(100vh-12rem)] gap-0 overflow-hidden rounded-3xl border border-border bg-white lg:grid-cols-[20rem_1fr]">
      {/* Conversation list */}
      <div className="border-r border-border">
        <div className="border-b border-border p-4">
          <h3 className="font-bold text-navy">Messagerie</h3>
          <p className="text-xs text-muted">Échangez avec vos formateurs</p>
        </div>
        <div>
          {messages.map((m, i) => (
            <button
              key={m.from}
              onClick={() => setActive(i)}
              className={`flex w-full items-center gap-3 border-b border-border p-4 text-left transition-colors ${
                active === i ? "bg-cloud" : "hover:bg-cloud/60"
              }`}
            >
              <span
                className={`h-11 w-11 shrink-0 rounded-full bg-gradient-to-br ${m.avatar}`}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="truncate text-sm font-semibold text-navy">
                    {m.from}
                  </span>
                  <span className="text-[11px] text-muted">{m.time}</span>
                </div>
                <p className="truncate text-xs text-muted">{m.preview}</p>
              </div>
              {m.unread && (
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active chat */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 border-b border-border p-4">
          <span
            className={`h-10 w-10 rounded-full bg-gradient-to-br ${messages[active].avatar}`}
          />
          <div>
            <div className="text-sm font-bold text-navy">
              {messages[active].from}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> En
              ligne
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto bg-cloud p-5">
          {chat.map((c, i) => (
            <div
              key={i}
              className={`flex ${
                c.from === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm ${
                  c.from === "me"
                    ? "rounded-br-sm bg-navy text-white"
                    : "rounded-bl-sm bg-white text-navy shadow-sm"
                }`}
              >
                {c.text}
                <div
                  className={`mt-1 text-[10px] ${
                    c.from === "me" ? "text-white/50" : "text-muted"
                  }`}
                >
                  {c.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={send}
          className="flex items-center gap-2 border-t border-border p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message…"
            className="flex-1 rounded-full border border-border bg-cloud px-4 py-2.5 text-sm focus:border-gold-300 focus:outline-none"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-navy"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
