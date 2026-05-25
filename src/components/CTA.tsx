"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { COLLECTION } from "@/lib/collection";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <section
      id="whitelist"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-cosmic" />
      <div className="absolute inset-0 -z-10 pattern-hieroglyph opacity-40" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/5 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-gold-300">
          Whitelist Genesis · 25 places
        </span>
        <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Inscris ton nom dans{" "}
          <span className="text-gradient-gold">la lignée</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          La whitelist offre mint anticipé, prix réduit (0.12 ETH au lieu de
          0.18), et choix prioritaire parmi les cinq Gardiens. Les candidatures
          sont validées manuellement.
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-gold-500/40 bg-gold-500/5 p-8">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-500/20">
              <Check className="text-gold-400" size={28} />
            </div>
            <p className="font-display text-xl">Candidature reçue.</p>
            <p className="text-sm text-foreground/75">
              Un Gardien va passer en revue ta demande. Réponse sous 72h à
              l&apos;adresse fournie.
            </p>
          </div>
        ) : (
          <form
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground placeholder:text-muted focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
            />
            <input
              type="text"
              required
              placeholder="Adresse wallet (0x… ou nom.eth)"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              pattern="^(0x[a-fA-F0-9]{40}|[a-z0-9-]+\.eth)$"
              title="Adresse EVM (0x…) ou nom ENS (nom.eth)"
              className="rounded-full border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground placeholder:text-muted focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-[#1a0f00] shadow-xl shadow-gold-500/25 transition hover:bg-gold-400"
            >
              Postuler à la Whitelist
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-muted">
          Ne jamais partager ta seed phrase · Validation manuelle ·{" "}
          <a
            href={`mailto:${COLLECTION.email}`}
            className="underline hover:text-gold-300"
          >
            Question ? Contacte le studio
          </a>
        </p>
      </div>
    </section>
  );
}
