import Link from "next/link";
import {
  TreePine,
  Users,
  Footprints,
  KeyRound,
  ScrollText,
  Map,
} from "lucide-react";

const FEATURES = [
  {
    icon: TreePine,
    href: "/arbre",
    title: "Arbre généalogique",
    description:
      "Saisissez vos ancêtres, vos parents, vos grands-parents — sur autant de générations que vous souhaitez. Visualisation immédiate.",
  },
  {
    icon: Users,
    href: "/descendance",
    title: "Descendance",
    description:
      "Choisissez un aïeul et voyez s'épanouir toutes les branches de sa descendance, sur plusieurs niveaux.",
  },
  {
    icon: Footprints,
    href: "/archives/fugitifs",
    title: "Registre des fugitifs",
    description:
      "Avis de fuite parus dans les gazettes coloniales, descriptions et primes — pour retracer les actes de résistance.",
  },
  {
    icon: KeyRound,
    href: "/archives/affranchissement",
    title: "Affranchissements",
    description:
      "Actes notariés, rachats de liberté, décret de 1848 : les actes qui ont fondé l'état civil libre.",
  },
  {
    icon: ScrollText,
    href: "/archives/esclaves",
    title: "Registre des esclaves",
    description:
      "Recensements nominatifs d'habitations, matricules individuels et inventaires après décès.",
  },
  {
    icon: Map,
    href: "/archives/migration",
    title: "Cartes de migration",
    description:
      "Listes de passagers, manifestes maritimes et registres BUMIDOM — pour suivre les parcours d'exil et de retour.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Six portes d&apos;entrée pour <span className="text-gradient-gold">remonter</span>
          {" "}le fil.
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Croisez votre arbre personnel avec les archives historiques pour
          retrouver les noms, les dates, les lieux — et reconstituer les
          trajectoires.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 transition hover:border-[var(--color-primary-400)] hover:bg-[var(--color-surface-elevated)]"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-800)]/60 text-[var(--color-gold-400)]">
              <feature.icon size={20} />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
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
