import Link from "next/link";
import {
  Footprints,
  KeyRound,
  ScrollText,
  Map,
  Ship,
  Gavel,
  ShieldCheck,
  Sword,
  Receipt,
  Church,
} from "lucide-react";
import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { ARCHIVE_LABELS, SAMPLE_ARCHIVES } from "@/lib/genealogy/sample-data";
import type { ArchiveType } from "@/lib/genealogy/types";

export const metadata = {
  title: "Archives historiques — Racines & Mémoire",
  description:
    "Dix fonds documentaires : fugitifs, affranchissements, esclaves, migration, navires négriers, judiciaires, militaires, paroissiaux, ventes, certificats.",
};

const SECTIONS: {
  type: ArchiveType;
  href: string;
  icon: typeof Footprints;
}[] = [
  { type: "fugitif", href: "/archives/fugitifs", icon: Footprints },
  {
    type: "affranchissement",
    href: "/archives/affranchissement",
    icon: KeyRound,
  },
  { type: "esclave", href: "/archives/esclaves", icon: ScrollText },
  { type: "migration", href: "/archives/migration", icon: Map },
  { type: "navire", href: "/archives/navires", icon: Ship },
  { type: "vente", href: "/archives/vente-achat", icon: Receipt },
  { type: "paroissial", href: "/archives/paroissiaux", icon: Church },
  { type: "judiciaire", href: "/archives/judiciaires", icon: Gavel },
  { type: "certificat", href: "/archives/certificats", icon: ShieldCheck },
  { type: "militaire", href: "/archives/militaires", icon: Sword },
];

export default function ArchivesPage() {
  const counts = SECTIONS.reduce<Record<string, number>>((acc, s) => {
    acc[s.type] = SAMPLE_ARCHIVES.filter((r) => r.type === s.type).length;
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Centre d&apos;archives
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            Archives historiques
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Dix fonds documentaires pour retrouver les traces des ancêtres
            là où l&apos;état civil reste muet — depuis les manifestes de
            navires négriers jusqu&apos;aux certificats de liberté de 1848.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map(({ type, href, icon: Icon }) => {
            const labels = ARCHIVE_LABELS[type];
            return (
              <Link
                key={type}
                href={href}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 transition hover:border-[var(--color-gold-500)] hover:bg-[var(--color-surface-elevated)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-earth-700)] text-[var(--color-gold-400)]">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full bg-[var(--color-earth-700)]/40 px-3 py-1 text-xs text-[var(--color-gold-400)]">
                    {counts[type]} fiches
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-xl font-semibold">
                  {labels.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {labels.subtitle}
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-[var(--color-bronze-400)]">
                  Sources · {labels.sourceHint}
                </p>
              </Link>
            );
          })}
        </div>

        <section className="mt-12 rounded-2xl border border-[var(--color-bronze-500)]/40 bg-[var(--color-surface)]/30 p-6">
          <h2 className="font-serif text-2xl font-semibold">
            À propos de ces archives
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Les fiches présentées sont indexées à partir de sources publiques
            (ANOM, Slave Voyages, Library of Congress, gazettes coloniales,
            recensements départementaux, registres BUMIDOM, manifestes de
            compagnies maritimes, Fondation pour la Mémoire de l&apos;Esclavage).
            Chaque entrée renvoie à sa source d&apos;origine pour vérification.
            La base s&apos;enrichira au fil du temps via le pipeline d&apos;OCR
            et de validation communautaire.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
