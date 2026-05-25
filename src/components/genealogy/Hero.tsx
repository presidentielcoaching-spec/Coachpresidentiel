import Link from "next/link";
import { TreePine, Archive, Users, ScrollText } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-radial-purple">
      <div className="pattern-kente">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
              <TreePine size={14} /> Racines &amp; Mémoire
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Retrouvez votre <span className="text-gradient-gold">arbre</span>
              <br />
              et toute votre descendance.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-muted)] md:text-xl">
              Un outil de mémoire familiale combiné à des archives historiques :
              registres de fugitifs, actes d&apos;affranchissement, recensements
              d&apos;esclaves et cartes de migration. Pour relier les noms aux
              vies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/arbre"
                className="rounded-full bg-[var(--color-gold-500)] px-6 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
              >
                Construire mon arbre
              </Link>
              <Link
                href="/archives"
                className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-primary-400)]"
              >
                Explorer les archives
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {[
              { icon: TreePine, label: "Arbre", value: "Sur 7 générations" },
              { icon: Users, label: "Descendance", value: "Branches infinies" },
              { icon: ScrollText, label: "Registres", value: "4 fonds couverts" },
              { icon: Archive, label: "Archives", value: "ANOM · BUMIDOM" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-4"
              >
                <Icon size={18} className="text-[var(--color-gold-400)]" />
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {label}
                </p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
