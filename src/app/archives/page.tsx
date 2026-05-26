import Link from "next/link";
import { Footprints, KeyRound, ScrollText, Map } from "lucide-react";
import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { ARCHIVE_LABELS, SAMPLE_ARCHIVES } from "@/lib/genealogy/sample-data";
import type { ArchiveType } from "@/lib/genealogy/types";

export const metadata = {
  title: "Archives historiques — Racines & Mémoire",
  description:
    "Centre d'archives : registres de fugitifs, affranchissements, registres des esclaves, cartes de migration.",
};

const SECTIONS: { type: ArchiveType; href: string; icon: typeof Footprints }[] =
  [
    { type: "fugitif", href: "/archives/fugitifs", icon: Footprints },
    {
      type: "affranchissement",
      href: "/archives/affranchissement",
      icon: KeyRound,
    },
    { type: "esclave", href: "/archives/esclaves", icon: ScrollText },
    { type: "migration", href: "/archives/migration", icon: Map },
  ];

export default function ArchivesPage() {
  const counts = SECTIONS.reduce<Record<ArchiveType, number>>(
    (acc, s) => {
      acc[s.type] = SAMPLE_ARCHIVES.filter((r) => r.type === s.type).length;
      return acc;
    },
    {
      fugitif: 0,
      affranchissement: 0,
      esclave: 0,
      migration: 0,
    },
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Centre d&apos;archives
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Archives historiques
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Quatre fonds documentaires pour retrouver les traces des ancêtres
            là où l&apos;état civil reste muet : avis de fuite, actes
            d&apos;affranchissement, recensements et listes de passagers.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SECTIONS.map(({ type, href, icon: Icon }) => {
            const labels = ARCHIVE_LABELS[type];
            return (
              <Link
                key={type}
                href={href}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 transition hover:border-[var(--color-primary-400)] hover:bg-[var(--color-surface-elevated)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-800)]/60 text-[var(--color-gold-400)]">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full bg-[var(--color-primary-800)]/40 px-3 py-1 text-xs text-[var(--color-gold-400)]">
                    {counts[type]} fiches
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold">{labels.title}</h2>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {labels.subtitle}
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
                  Sources · {labels.sourceHint}
                </p>
                <span className="mt-4 inline-block text-xs uppercase tracking-widest text-[var(--color-foreground)] opacity-0 transition group-hover:opacity-100">
                  Consulter →
                </span>
              </Link>
            );
          })}
        </div>

        <section className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-6">
          <h2 className="text-lg font-semibold">À propos de ces archives</h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Les fiches présentées sont indexées à partir de sources publiques
            (ANOM — Archives nationales d&apos;Outre-mer, gazettes coloniales,
            recensements départementaux, registres BUMIDOM, manifestes de
            compagnies maritimes). Cette base est destinée à la recherche
            généalogique et à la mémoire — chaque entrée renvoie à sa source
            d&apos;origine pour vérification.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
