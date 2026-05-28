import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-bronze-500)]/40 bg-[var(--color-surface)]/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl font-semibold">
              Racines &amp; Mémoire
            </h3>
            <p className="mt-2 max-w-md text-sm text-[var(--color-muted)]">
              Honorer les vies, retrouver les noms. Un sanctuaire numérique
              pour la mémoire africaine et diasporique.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
              Généalogie
            </p>
            <ul className="mt-3 space-y-1 text-sm text-[var(--color-muted)]">
              <li>
                <Link href="/arbre">Arbre</Link>
              </li>
              <li>
                <Link href="/descendance">Descendance</Link>
              </li>
              <li>
                <Link href="/ia">IA historique</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
              Mémoire
            </p>
            <ul className="mt-3 space-y-1 text-sm text-[var(--color-muted)]">
              <li>
                <Link href="/archives">Archives</Link>
              </li>
              <li>
                <Link href="/cartographie">Cartographie</Link>
              </li>
              <li>
                <Link href="/timeline">Chronologie</Link>
              </li>
              <li>
                <Link href="/memoire">Mémoire orale</Link>
              </li>
              <li>
                <Link href="/sources">Sources</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Racines &amp; Mémoire — Données
          conservées localement. Sources publiques citées sur chaque fiche.
        </p>
      </div>
    </footer>
  );
}
