import Link from "next/link";
import {
  TreePine,
  Users,
  Footprints,
  KeyRound,
  ScrollText,
  Map,
  Ship,
  Gavel,
  ShieldCheck,
  Sword,
  Mic,
  Compass,
  Sparkles,
  BookOpen,
} from "lucide-react";

const FEATURES = [
  {
    icon: TreePine,
    href: "/arbre",
    title: "Arbre généalogique",
    description:
      "Inscrivez vos ancêtres avec ethnie, village, patronyme colonial, plantation et récits.",
  },
  {
    icon: Users,
    href: "/descendance",
    title: "Descendance",
    description:
      "Visualisez toute la descendance d'un aïeul, sur autant de générations que possible.",
  },
  {
    icon: Map,
    href: "/cartographie",
    title: "Cartographie historique",
    description:
      "Ports négriers, royaumes africains, zones marronnes, plantations — atlantique noir.",
  },
  {
    icon: Compass,
    href: "/timeline",
    title: "Chronologie",
    description:
      "Du premier voyage négrier (1444) à la Décennie internationale des personnes d'ascendance africaine.",
  },
  {
    icon: Mic,
    href: "/memoire",
    title: "Mémoire orale",
    description:
      "Enregistrez les voix des anciens, transcrivez les chants, archivez les récits.",
  },
  {
    icon: Sparkles,
    href: "/ia",
    title: "IA historique",
    description:
      "Reconnaissance d'écritures coloniales, suggestions de filiations, biographies générées.",
  },
  {
    icon: Footprints,
    href: "/archives/fugitifs",
    title: "Registre des fugitifs",
    description: "Avis de fuite et résistance dans les gazettes coloniales.",
  },
  {
    icon: KeyRound,
    href: "/archives/affranchissement",
    title: "Affranchissements",
    description: "Actes individuels, rachats, décret du 27 avril 1848.",
  },
  {
    icon: ScrollText,
    href: "/archives/esclaves",
    title: "Registre des esclaves",
    description:
      "Recensements nominatifs, matricules d'habitation, inventaires.",
  },
  {
    icon: Ship,
    href: "/archives/navires",
    title: "Manifestes négriers",
    description:
      "Cargaisons humaines : Ouidah, Gorée, Loango, Bonny vers les Amériques.",
  },
  {
    icon: Gavel,
    href: "/archives/judiciaires",
    title: "Archives judiciaires",
    description:
      "Procès, conjurations, plaintes : la justice à l'épreuve de l'esclavage.",
  },
  {
    icon: ShieldCheck,
    href: "/archives/certificats",
    title: "Certificats de liberté",
    description: "Documents attestant le statut libre, post-1848.",
  },
  {
    icon: Sword,
    href: "/archives/militaires",
    title: "Documents militaires",
    description:
      "Tirailleurs, Bataillon des Antilles, engagements et pensions.",
  },
  {
    icon: BookOpen,
    href: "/sources",
    title: "Sources internationales",
    description:
      "Slave Voyages, UNESCO, ANOM, Library of Congress, FME et plus.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Un sanctuaire pour <span className="text-gradient-gold">remonter</span>
          {" "}le fil.
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Quatorze portes d&apos;entrée — arbre, archives, cartes, voix —
          pour reconnecter les descendants africains à leurs racines et
          préserver la mémoire de l&apos;esclavage.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 transition hover:border-[var(--color-gold-500)] hover:bg-[var(--color-surface-elevated)]"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-earth-700)] text-[var(--color-gold-400)]">
              <feature.icon size={20} />
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              {feature.description}
            </p>
            <span className="mt-4 inline-block text-xs uppercase tracking-widest text-[var(--color-gold-400)] opacity-0 transition group-hover:opacity-100">
              Explorer →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
