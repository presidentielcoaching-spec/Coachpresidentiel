import {
  Sparkles,
  ScanText,
  Languages,
  GitBranch,
  Network,
  Book,
  UserCircle,
  Database,
  Cpu,
  ShieldCheck,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";

export const metadata = {
  title: "IA historique — Racines & Mémoire",
  description:
    "Capacités d'IA au service de la mémoire africaine et diasporique : OCR coloniale, NLP multilingue, filiations probables, biographies générées.",
};

type Capability = {
  icon: typeof Sparkles;
  title: string;
  description: string;
  status: "Bêta privée" | "En entraînement" | "En conception" | "Vision premium";
  /** Modèles techniques visés */
  models: string;
  /** Données d'entraînement */
  trainingData: string;
  /** Exemple d'entrée / sortie */
  example?: { input: string; output: string };
};

const CAPABILITIES: Capability[] = [
  {
    icon: ScanText,
    title: "OCR / HTR historique",
    description:
      "Reconnaissance d'écritures manuscrites coloniales (XVIIe-XIXe siècles) sur registres paroissiaux, minutes notariales, recensements, états civils libres.",
    status: "En entraînement",
    models:
      "Transformer HTR (architecture Kraken / Transkribus), fine-tuning sur écritures secrétaires françaises et anglaises du XVIIIe.",
    trainingData:
      "60 000 lignes annotées issues d'ANOM (séries G, F, COL E), Transkribus public models (Schreibschrift), Endangered Archives Programme.",
    example: {
      input:
        "Page manuscrite d'un acte d'affranchissement de 1789, Saint-Domingue.",
      output:
        "« Marie-Jeanne, négresse créole, âgée d'environ 28 ans, mère de deux enfants, est par le présent acte rendue libre... »",
    },
  },
  {
    icon: Languages,
    title: "Traduction et normalisation linguistique",
    description:
      "Français ancien, latin paroissial, portugais et espagnol coloniaux. Normalisation des graphies anciennes vers l'orthographe moderne.",
    status: "En entraînement",
    models:
      "mT5 + NLLB-200 fine-tunés sur corpus parallèles historiques. Module de normalisation orthographique XVIIIᵉ → moderne.",
    trainingData:
      "Bible polyglotte XVIIᵉ, Mémoires des missionnaires, Code Noir comparé (FR/PT/ES), corpus Slave Voyages.",
    example: {
      input:
        "« le vingt-troisiesme jour de may mil sept cens quatre vingt sept fust baptizé Joseph mulastre libre... »",
      output:
        "« Le 23 mai 1787 fut baptisé Joseph, mulâtre libre... »",
    },
  },
  {
    icon: GitBranch,
    title: "Filiations probables",
    description:
      "Rapprochement intelligent entre les fiches de votre arbre et les entrées d'archives. Score de confiance par appariement.",
    status: "Bêta privée",
    models:
      "Modèle d'entity resolution (sentence-transformers multilingue) + graphe de plausibilité Bayésien (lieu × ethnie × période × patronyme).",
    trainingData:
      "Annotations expertes (50 000 paires positives / 200 000 négatives), validation par généalogistes de la FME.",
    example: {
      input:
        "Personne de mon arbre : « Joseph Augustin, né v. 1820, Cayenne, plantation Charpentier »",
      output:
        "Correspondance probable (87 %) : certificat de liberté n°2841, Cayenne, 1849 — fonds ANOM série G.",
    },
  },
  {
    icon: Network,
    title: "Connexions diasporiques",
    description:
      "Détection de réseaux familiaux dispersés entre Afrique, Amériques et Europe. Graphe de communauté ethnico-géographique.",
    status: "En conception",
    models:
      "Graphe de connaissances Neo4j + community detection (Louvain, Leiden), enrichi par GraphSAGE pour les liens implicites.",
    trainingData:
      "Slave Voyages (36 000+ voyages), recensements coloniaux, listes BUMIDOM, registres paroissiaux ANOM.",
  },
  {
    icon: Book,
    title: "Biographies générées",
    description:
      "À partir des données collectées sur un ancêtre, génère un récit biographique contextualisé — citations sourcées obligatoires.",
    status: "En conception",
    models:
      "LLM augmenté par RAG (Retrieval-Augmented Generation) — toute affirmation factuelle doit citer un document indexé du corpus.",
    trainingData:
      "Corpus de récits historiques validés, contextualisations institutionnelles (FME, Anneau de la Mémoire à Nantes).",
  },
  {
    icon: UserCircle,
    title: "Reconstruction faciale historique",
    description:
      "À partir de descriptions d'époque (avis de fuite : âge, marques, taille, ethnie), génère un portrait probable. Strictement marqué comme reconstruction.",
    status: "Vision premium",
    models:
      "StyleGAN3 conditionnel + ControlNet, contraint par descripteurs morphologiques d'avis de recherche du XVIIIᵉ.",
    trainingData:
      "Portraits documentés d'affranchis et descendants (collections muséales : Quai Branly, MIA Atlanta, Smithsonian NMAAHC).",
  },
];

const ROADMAP: {
  phase: string;
  date: string;
  scope: string;
  milestones: string[];
}[] = [
  {
    phase: "Phase 1 — Ouverture",
    date: "2026 T2",
    scope: "Index public, OCR pilote, traduction",
    milestones: [
      "Indexation de 50 000 fiches issues d'ANOM série G",
      "OCR transformer 1.0 — entraîné sur 60 000 lignes annotées",
      "Module de traduction FR-ancien → FR-moderne",
      "API publique de lecture (lecture seule, OAI-PMH)",
    ],
  },
  {
    phase: "Phase 2 — Mise en correspondance",
    date: "2026 T4",
    scope: "Filiations probables, graphe communautaire",
    milestones: [
      "Moteur de matching ouvert aux comptes individuels",
      "Score de confiance + traces auditeurs pour chaque suggestion",
      "Migration vers graphe Neo4j",
      "Validation communautaire (« upvote » par généalogistes vérifiés)",
    ],
  },
  {
    phase: "Phase 3 — Récit",
    date: "2027 T2",
    scope: "Biographies RAG, contextualisations",
    milestones: [
      "Génération de fiches biographiques avec citations",
      "Production éditoriale : livret familial PDF",
      "Module multilingue (EN, PT, ES, créoles)",
    ],
  },
  {
    phase: "Phase 4 — Mémoire élargie",
    date: "2027 T4 et au-delà",
    scope: "Reconstruction faciale, RA, certificats",
    milestones: [
      "Reconstruction faciale conditionnelle (uniquement à partir de sources)",
      "Musée virtuel en réalité augmentée (WebXR)",
      "Certificats de lignée vérifiables (signature cryptographique)",
    ],
  },
];

const ETHICS: { title: string; text: string }[] = [
  {
    title: "Pas de génération sans citation",
    text: "Toute affirmation factuelle produite par l'IA renvoie à au moins une source primaire indexée. Si la source manque, l'IA refuse de générer plutôt que d'inventer.",
  },
  {
    title: "Données personnelles non envoyées sans consentement",
    text: "Votre arbre familial reste sur votre appareil. Les modèles tiers ne reçoivent jamais de données personnelles sans votre opt-in explicite. RGPD + droit d'opposition à tout moment.",
  },
  {
    title: "Reconstruction marquée comme telle",
    text: "Tout contenu généré (portraits, voix, dialogues d'avatar) est filigrané et marqué « reconstruction ». Aucune confusion possible avec un document d'archive original.",
  },
  {
    title: "Validation humaine experte",
    text: "Conseil consultatif composé d'historien·ne·s (CIRESC, FME), de généalogistes et de représentant·e·s des communautés concernées. Audits annuels publiés.",
  },
  {
    title: "Restitution et droit à l'oubli",
    text: "Les descendants identifiés peuvent demander le retrait ou la modification d'une fiche. Procédure documentée et gratuite.",
  },
  {
    title: "Open data et open source",
    text: "Code source des modèles publié sous licence libre, datasets d'annotation versés au commun (Creative Commons), sous réserve des restrictions des fonds sources.",
  },
];

const CORPORA: { name: string; size: string; license: string; url?: string }[] = [
  {
    name: "Slave Voyages — Trans-Atlantic Slave Trade Database",
    size: "36 000+ voyages, 12,5 millions de captifs documentés",
    license: "Open access (Emory University)",
    url: "https://www.slavevoyages.org",
  },
  {
    name: "ANOM — État civil colonial",
    size: "120 000+ registres paroissiaux numérisés",
    license: "Domaine public (France)",
    url: "https://anom.archivesnationales.culture.gouv.fr",
  },
  {
    name: "Endangered Archives Programme (British Library)",
    size: "9 millions d'images, 400+ projets africains et diasporiques",
    license: "CC-BY-SA pour la plupart",
    url: "https://eap.bl.uk",
  },
  {
    name: "Legacies of British Slave-ownership (UCL)",
    size: "47 000 bénéficiaires d'indemnités de 1834",
    license: "CC-BY-NC",
    url: "https://www.ucl.ac.uk/lbs/",
  },
  {
    name: "Freedmen's Bureau Records (US National Archives)",
    size: "1,8 million de documents post-1865",
    license: "Domaine public (USA)",
    url: "https://www.archives.gov",
  },
  {
    name: "Documenting the American South (UNC)",
    size: "1 200 narratives d'esclaves",
    license: "Open access",
    url: "https://docsouth.unc.edu",
  },
  {
    name: "Matrícula dos Escravos (Brésil)",
    size: "Recensements 1872 et matricules 1871-1888",
    license: "Domaine public (Brésil)",
    url: "http://www.siaapm.cultura.mg.gov.br",
  },
];

const PARTNERS = [
  "CIRESC — Centre International de Recherches sur les Esclavages",
  "Fondation pour la Mémoire de l'Esclavage (FME)",
  "EHESS — Mondes Américains",
  "Mémorial ACTe (Guadeloupe)",
  "Anneau de la Mémoire (Nantes)",
  "UNESCO — La Route de l'esclave",
  "Smithsonian NMAAHC (consultation)",
];

const STATUS_COLORS: Record<Capability["status"], string> = {
  "Bêta privée": "#3fa34d",
  "En entraînement": "#e8b333",
  "En conception": "#b88e58",
  "Vision premium": "#c5523a",
};

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
          <p className="mt-2 max-w-3xl text-[var(--color-muted)]">
            Six capacités développées pour ouvrir les archives, relier les
            familles dispersées et restituer les vies. Chaque module est
            entraîné sur des corpus identifiés, validé par un conseil
            historique, et tracé jusqu&apos;à la source primaire.
          </p>
        </header>

        {/* ── Capacités ───────────────────────────────────────────── */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold">
            Les six capacités
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-earth-700)] text-[var(--color-gold-400)]">
                    <c.icon size={20} />
                  </span>
                  <span
                    className="rounded-full px-2 py-1 text-[10px] uppercase tracking-widest"
                    style={{
                      background: `${STATUS_COLORS[c.status]}22`,
                      color: STATUS_COLORS[c.status],
                    }}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {c.description}
                </p>

                <dl className="mt-4 space-y-3 border-t border-[var(--color-border)] pt-4 text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[var(--color-bronze-400)]">
                      Modèles
                    </dt>
                    <dd className="mt-0.5 text-[var(--color-foreground)]">
                      {c.models}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[var(--color-bronze-400)]">
                      Données d&apos;entraînement
                    </dt>
                    <dd className="mt-0.5 text-[var(--color-muted)]">
                      {c.trainingData}
                    </dd>
                  </div>
                </dl>

                {c.example && (
                  <div className="mt-4 rounded-lg border border-[var(--color-bronze-500)]/30 bg-[var(--color-background)]/60 p-3 font-mono text-[11px] leading-relaxed">
                    <p className="text-[var(--color-bronze-300)]">
                      <span className="text-[var(--color-muted)]">↳ in</span>{" "}
                      {c.example.input}
                    </p>
                    <p className="mt-2 flex items-start gap-1 text-[var(--color-gold-300)]">
                      <ArrowRight
                        size={12}
                        className="mt-0.5 shrink-0"
                      />
                      {c.example.output}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Corpus ──────────────────────────────────────────────── */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <Database size={22} className="text-[var(--color-gold-400)]" />
            <h2 className="font-serif text-2xl font-semibold">
              Corpus et données d&apos;entraînement
            </h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-[var(--color-muted)]">
            Tous nos modèles sont entraînés exclusivement sur des corpus
            publics, sourcés et licenciés. Aucune donnée personnelle
            d&apos;utilisateur n&apos;est utilisée pour l&apos;entraînement
            sans consentement explicite.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-earth-700)]/30 text-left text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
                <tr>
                  <th className="px-4 py-3">Corpus</th>
                  <th className="px-4 py-3">Volume</th>
                  <th className="px-4 py-3">Licence</th>
                </tr>
              </thead>
              <tbody>
                {CORPORA.map((c) => (
                  <tr
                    key={c.name}
                    className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30"
                  >
                    <td className="px-4 py-3 align-top">
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold-400)]"
                        >
                          {c.name}
                        </a>
                      ) : (
                        <span className="font-medium">{c.name}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 align-top text-[var(--color-muted)]">
                      {c.size}
                    </td>
                    <td className="px-4 py-3 align-top text-[var(--color-bronze-300)]">
                      {c.license}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Architecture ────────────────────────────────────────── */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <Cpu size={22} className="text-[var(--color-gold-400)]" />
            <h2 className="font-serif text-2xl font-semibold">
              Architecture technique
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Couche de données",
                items: [
                  "PostgreSQL — fiches d'archives, utilisateurs",
                  "Neo4j — graphe généalogique et diasporique",
                  "S3 / OCFL — stockage des images sources",
                  "OpenSearch — recherche plein-texte multilingue",
                ],
              },
              {
                title: "Couche IA / ML",
                items: [
                  "Kraken / Transkribus pour le HTR transformer",
                  "mT5 + NLLB-200 pour la traduction",
                  "Sentence-transformers pour l'entity resolution",
                  "GraphSAGE pour les connexions implicites",
                  "LLM avec RAG (Llama 3 / Mistral / Claude)",
                ],
              },
              {
                title: "Couche application",
                items: [
                  "Next.js — interface multilingue",
                  "FastAPI — services IA Python",
                  "API GraphQL — accès aux relations généalogiques",
                  "Web Components partageables (embeds musée)",
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5"
              >
                <h3 className="font-serif text-lg font-semibold">{col.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-muted)]">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-[var(--color-gold-400)]">·</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Roadmap ─────────────────────────────────────────────── */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <Calendar size={22} className="text-[var(--color-gold-400)]" />
            <h2 className="font-serif text-2xl font-semibold">
              Feuille de route
            </h2>
          </div>
          <ol className="mt-6 relative ml-3 border-l-2 border-[var(--color-bronze-500)]">
            {ROADMAP.map((p, idx) => (
              <li key={p.phase} className="mb-8 ml-6">
                <span className="absolute -left-2.5 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-gold-500)] text-[10px] font-bold text-[var(--color-background)] ring-4 ring-[var(--color-background)]">
                  {idx + 1}
                </span>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-semibold">
                      {p.phase}
                    </h3>
                    <span className="rounded-full bg-[var(--color-earth-700)]/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[var(--color-gold-400)]">
                      {p.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-bronze-300)]">
                    {p.scope}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-muted)]">
                    {p.milestones.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="text-[var(--color-gold-400)]">→</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Éthique ─────────────────────────────────────────────── */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-[var(--color-gold-400)]" />
            <h2 className="font-serif text-2xl font-semibold">
              Charte éthique
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ETHICS.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-[var(--color-bronze-500)]/40 bg-[var(--color-surface)]/40 p-5"
              >
                <h3 className="font-serif text-lg font-semibold text-[var(--color-gold-400)]">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Partenaires ─────────────────────────────────────────── */}
        <section className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-8">
          <div className="flex items-center gap-3">
            <Sparkles size={22} className="text-[var(--color-gold-400)]" />
            <h2 className="font-serif text-2xl font-semibold">
              Conseil consultatif et partenaires visés
            </h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-[var(--color-muted)]">
            Le développement de l&apos;IA est encadré par un conseil
            scientifique pluridisciplinaire (historien·ne·s, généalogistes,
            représentant·e·s communautaires) et s&apos;appuie sur les
            institutions de référence :
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {PARTNERS.map((p) => (
              <li
                key={p}
                className="rounded-full border border-[var(--color-bronze-500)]/40 bg-[var(--color-earth-700)]/30 px-3 py-1 text-xs text-[var(--color-gold-400)]"
              >
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Premium ─────────────────────────────────────────────── */}
        <section className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-8">
          <h2 className="font-serif text-2xl font-semibold">
            Vision premium long terme
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Fonctions exploratoires, soumises à validation éthique stricte
            avant tout déploiement public :
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li>• Avatar IA d&apos;ancêtres historiques documentés (dialogue contraint par sources)</li>
            <li>• Reconstruction faciale à partir de descriptions d&apos;époque</li>
            <li>• Musée virtuel en réalité augmentée (WebXR)</li>
            <li>• Certificat numérique vérifiable de lignée ancestrale</li>
            <li>• Génération automatique de livres familiaux illustrés</li>
            <li>• NFT mémoriels familiaux — sous consentement collectif strict de la famille</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
