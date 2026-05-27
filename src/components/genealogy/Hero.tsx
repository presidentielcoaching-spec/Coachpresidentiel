import Link from "next/link";
import { Sun, Archive, Users, Map, Mic, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-radial-earth">
      <div className="pattern-adinkra">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-bronze-500)]/60 bg-[var(--color-surface)]/60 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
              <Sun size={14} /> Sanctuaire numérique
            </span>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] md:text-7xl">
              Les noms <span className="text-gradient-gold">retrouvent</span>
              <br />
              leurs vies.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)] md:text-xl">
              Reconstruisez votre arbre africain et diasporique. Croisez avec
              les registres d&apos;esclavage, les manifestes négriers, les
              archives coloniales. Préservez les mémoires orales, cartographiez
              les migrations forcées et volontaires.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/arbre"
                className="rounded-full bg-[var(--color-gold-500)] px-6 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
              >
                Construire mon arbre
              </Link>
              <Link
                href="/archives"
                className="rounded-full border border-[var(--color-bronze-500)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-gold-400)]"
              >
                Explorer les archives
              </Link>
              <Link
                href="/cartographie"
                className="rounded-full border border-[var(--color-bronze-500)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-gold-400)]"
              >
                Cartographie historique
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Users, label: "Arbre", value: "Multi-générations" },
              {
                icon: Archive,
                label: "Registres",
                value: "10 fonds couverts",
              },
              { icon: Map, label: "Cartographie", value: "Atlantique noir" },
              {
                icon: Sparkles,
                label: "Chronologie",
                value: "1444 → aujourd'hui",
              },
              { icon: Mic, label: "Mémoire orale", value: "Audio + récits" },
              { icon: Sun, label: "Sources", value: "ANOM · UNESCO · SV" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-4"
              >
                <Icon size={18} className="text-[var(--color-gold-400)]" />
                <p className="mt-2 text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
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
