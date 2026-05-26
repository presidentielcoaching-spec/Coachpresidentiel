import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary-800)]/40 via-[var(--color-surface-elevated)] to-[var(--color-background)] p-10 md:p-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Chaque nom retrouvé est une <span className="text-gradient-gold">victoire sur l&apos;oubli</span>.
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Commencez par votre propre fiche, ajoutez vos parents, vos
            grands-parents — puis comparez avec les registres historiques.
            Les données restent sur votre appareil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/arbre"
              className="rounded-full bg-[var(--color-gold-500)] px-6 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
            >
              Créer mon arbre
            </Link>
            <Link
              href="/archives"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--color-primary-400)]"
            >
              Parcourir les archives
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
