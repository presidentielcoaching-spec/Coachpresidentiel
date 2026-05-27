import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-[var(--color-bronze-500)]/40 bg-gradient-to-br from-[var(--color-earth-700)]/40 via-[var(--color-surface-elevated)] to-[var(--color-background)] p-10 md:p-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Notre mission
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
            « Le plus grand sanctuaire numérique de la{" "}
            <span className="text-gradient-gold">mémoire africaine</span> et
            diasporique. »
          </h2>
          <p className="mt-6 text-[var(--color-muted)]">
            Reconnecter, préserver, transmettre, restaurer, valoriser. Chaque
            nom retrouvé est une victoire sur l&apos;oubli — et un don aux
            générations à venir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/arbre"
              className="rounded-full bg-[var(--color-gold-500)] px-6 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
            >
              Inscrire ma lignée
            </Link>
            <Link
              href="/memoire"
              className="rounded-full border border-[var(--color-bronze-500)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--color-gold-400)]"
            >
              Préserver une mémoire
            </Link>
            <Link
              href="/sources"
              className="rounded-full border border-[var(--color-bronze-500)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--color-gold-400)]"
            >
              Sources internationales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
