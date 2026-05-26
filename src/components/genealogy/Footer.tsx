import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Racines &amp; Mémoire — Honorer les vies,
          retrouver les noms.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/arbre" className="hover:text-[var(--color-foreground)]">
            Arbre
          </Link>
          <Link
            href="/descendance"
            className="hover:text-[var(--color-foreground)]"
          >
            Descendance
          </Link>
          <Link
            href="/archives"
            className="hover:text-[var(--color-foreground)]"
          >
            Archives
          </Link>
        </div>
      </div>
    </footer>
  );
}
