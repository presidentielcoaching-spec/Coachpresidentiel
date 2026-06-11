import { TrendingUp, Mic, BrainCircuit, type LucideIcon } from "lucide-react";

export type FormationIcon = "trading" | "oratoire" | "ia";

export const formationIcons: Record<FormationIcon, LucideIcon> = {
  trading: TrendingUp,
  oratoire: Mic,
  ia: BrainCircuit,
};

export interface Formation {
  slug: string;
  title: string;
  tagline: string;
  icon: FormationIcon;
  price: number; // FCFA
  priceLabel: string;
  duration: string;
  installments: number;
  installmentLabel: string;
  accent: "trading" | "oratoire" | "ia";
  level: string;
  modules: string[];
  outcomes: string[];
  featured?: boolean;
}

export const formations: Formation[] = [
  {
    slug: "trading",
    title: "Trading",
    tagline:
      "Maîtrisez les marchés financiers et bâtissez une discipline de trader professionnel.",
    icon: "trading",
    price: 100000,
    priceLabel: "100 000 FCFA",
    duration: "2 mois de formation + suivi personnalisé",
    installments: 4,
    installmentLabel: "4 tranches possibles",
    accent: "trading",
    level: "Débutant à avancé",
    modules: [
      "Analyse technique",
      "Analyse fondamentale",
      "Gestion du risque",
      "Trading Forex",
      "Trading indices",
      "Psychologie du trader",
      "Sessions Live",
    ],
    outcomes: [
      "Lire et anticiper les mouvements de marché",
      "Construire un plan de trading rentable",
      "Gérer votre capital avec discipline",
    ],
  },
  {
    slug: "art-oratoire",
    title: "Art Oratoire",
    tagline:
      "Prenez la parole avec impact, persuadez et affirmez votre leadership.",
    icon: "oratoire",
    price: 30000,
    priceLabel: "30 000 FCFA",
    duration: "2 mois de formation + suivi personnalisé",
    installments: 3,
    installmentLabel: "3 tranches possibles",
    accent: "oratoire",
    level: "Tous niveaux",
    modules: [
      "Prise de parole en public",
      "Leadership verbal",
      "Storytelling",
      "Communication persuasive",
      "Débats et argumentation",
      "Gestion du trac",
    ],
    outcomes: [
      "Captiver n'importe quelle audience",
      "Structurer un discours mémorable",
      "Transformer le trac en énergie",
    ],
  },
  {
    slug: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    tagline:
      "Exploitez l'IA pour automatiser, créer et générer de nouveaux revenus.",
    icon: "ia",
    price: 250000,
    priceLabel: "250 000 FCFA",
    duration: "1 an de formation + suivi personnalisé",
    installments: 5,
    installmentLabel: "5 tranches possibles",
    accent: "ia",
    level: "Débutant à expert",
    featured: true,
    modules: [
      "Initiation à l'IA",
      "ChatGPT et IA génératives",
      "Automatisation des tâches",
      "Création de contenus",
      "Marketing IA",
      "Productivité IA",
      "Création d'agents intelligents",
      "Monétisation des outils IA",
    ],
    outcomes: [
      "Automatiser votre activité avec l'IA",
      "Créer et vendre des outils intelligents",
      "Développer des agents IA autonomes",
    ],
  },
];

export const accentStyles: Record<
  Formation["accent"],
  { bg: string; text: string; ring: string; soft: string }
> = {
  trading: {
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    ring: "ring-emerald-500/30",
    soft: "bg-emerald-50",
  },
  oratoire: {
    bg: "bg-rose-500",
    text: "text-rose-600",
    ring: "ring-rose-500/30",
    soft: "bg-rose-50",
  },
  ia: {
    bg: "bg-gold-400",
    text: "text-gold-500",
    ring: "ring-gold-400/30",
    soft: "bg-gold-50",
  },
};

export function getFormation(slug: string) {
  return formations.find((f) => f.slug === slug);
}

export function formatFcfa(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
}
