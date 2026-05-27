import {
  Sparkles,
  ScanText,
  Languages,
  GitBranch,
  Network,
  Book,
  UserCircle,
} from "lucide-react";
import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";

export const metadata = {
  title: "IA historique — Racines & Mémoire",
};

const CAPABILITIES = [
  {
    icon: ScanText,
    title: "OCR historique",
    description:
      "Reconnaissance d'écritures manuscrites coloniales (registres paroissiaux, minutes notariales, recensements).",
    status: "En développement",
  },
  {
    icon: Languages,
    title: "Traduction d'archives",
    description:
      "Français ancien, latin paroissial, portugais colonial, espagnol — pour ouvrir les fonds à tous.",
    status: "En développement",
  },
  {
    icon: GitBranch,
    title: "Filiations probables",
    description:
      "Suggestions de rapprochements entre fiches d'archives et personnes de votre arbre.",
    status: "Bêta privée",
  },
  {
    icon: Network,
    title: "Connexions diasporiques",
    description:
      "Détection de réseaux familiaux dispersés entre Afrique, Amériques et Europe.",
    status: "En développement",
  },
  {
    icon: Book,
    title: "Biographies générées",
    description:
      "À partir des données collectées, générer un récit biographique contextualisé d'un ancêtre.",
    status: "En développement",
  },
  {
    icon: UserCircle,
    title: "Avatar d'ancêtre",
    description:
      "Reconstruction faciale historique et dialogue avec une figure ancestrale documentée.",
    status: "Vision premium",
  },
];

export default function IAPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Intelligence artificielle au service de la mémoire
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            IA historique
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Six capacités d&apos;IA développées pour ouvrir les archives,
            relier les familles dispersées et restituer les vies.
            Les modules sont progressivement activés à mesure que les
            modèles sont entraînés et validés.
          </p>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-earth-700)] text-[var(--color-gold-400)]">
                  <c.icon size={20} />
                </span>
                <span className="rounded-full bg-[var(--color-bronze-500)]/20 px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--color-bronze-300)]">
                  {c.status}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-xl font-semibold">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {c.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-[var(--color-bronze-500)]/40 bg-[var(--color-surface)]/30 p-8">
          <Sparkles
            size={20}
            className="text-[var(--color-gold-400)]"
            aria-hidden
          />
          <h2 className="mt-3 font-serif text-2xl font-semibold">
            Comment fonctionne notre IA ?
          </h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Les modèles sont entraînés sur des corpus publics d&apos;archives
            (ANOM, Slave Voyages, Library of Congress, Endangered Archives
            Programme). Chaque suggestion est tracée jusqu&apos;à sa source
            primaire — pas de génération sans citation. Les données
            personnelles de votre arbre ne sont jamais envoyées à un
            modèle tiers sans consentement explicite.
          </p>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Pile technique cible : OCR transformer pour les écritures
            manuscrites, NLP multilingue, graphe de connaissances Neo4j
            pour les filiations, modèles de matching probabiliste pour
            les rapprochements entre fiches.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-8">
          <h2 className="font-serif text-2xl font-semibold">
            Fonctions premium en vision
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li>• Avatar IA d&apos;ancêtres historiques documentés</li>
            <li>• Reconstruction faciale à partir de descriptions d&apos;époque</li>
            <li>• Musée virtuel en réalité augmentée</li>
            <li>• NFT mémoriels familiaux (avec consentement strict)</li>
            <li>• Certificat numérique de lignée ancestrale</li>
            <li>• Génération automatique de livres familiaux illustrés</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
