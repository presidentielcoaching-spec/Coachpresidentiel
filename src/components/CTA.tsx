"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="inscription" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-purple" />
      <div className="absolute inset-0 -z-10 pattern-kente opacity-30" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Reconnecte-toi à{" "}
          <span className="text-gradient-gold">tes racines</span>
          <br />
          dès aujourd&apos;hui.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          Rejoins des milliers d&apos;Africains du continent et de la diaspora qui
          réapprennent leurs langues maternelles, paternelles et ancestrales.
        </p>

        <form
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            Adresse e-mail
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder="ton@email.com"
            className="flex-1 rounded-full border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground placeholder:text-muted focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-[#1a0f00] shadow-xl shadow-gold-500/25 transition hover:bg-gold-400"
          >
            Commencer gratuitement
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </button>
        </form>

        <p className="mt-4 text-xs text-muted">
          Aucune carte requise · Disponible Web, iOS et Android
        </p>
      </div>
    </section>
  );
}
