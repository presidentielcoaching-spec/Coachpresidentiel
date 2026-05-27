import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { EXTERNAL_SOURCES } from "@/lib/genealogy/history-data";

export const metadata = {
  title: "Sources internationales — Racines & Mémoire",
};

export default function SourcesPage() {
  const byRegion = EXTERNAL_SOURCES.reduce<
    Record<string, typeof EXTERNAL_SOURCES>
  >((acc, s) => {
    (acc[s.region] = acc[s.region] || []).push(s);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Vers les fonds primaires
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            Sources internationales
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Les institutions et bases de données de référence — pour
            poursuivre la recherche à la source, vérifier les fiches, et
            accéder aux documents originaux.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {Object.entries(byRegion).map(([region, sources]) => (
            <section key={region}>
              <h2 className="font-serif text-2xl font-semibold text-[var(--color-gold-400)]">
                {region}
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {sources.map((s) => (
                  <Link
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 transition hover:border-[var(--color-gold-500)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{s.name}</h3>
                      <ExternalLink
                        size={14}
                        className="text-[var(--color-muted)] transition group-hover:text-[var(--color-gold-400)]"
                      />
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {s.description}
                    </p>
                    <p className="mt-3 text-[10px] uppercase tracking-widest text-[var(--color-bronze-400)]">
                      {new URL(s.url).hostname}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
