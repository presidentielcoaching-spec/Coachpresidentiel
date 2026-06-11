"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

export const dict: Dict = {
  // Nav
  "nav.formations": { fr: "Formations", en: "Programs" },
  "nav.why": { fr: "Pourquoi nous", en: "Why us" },
  "nav.dashboard": { fr: "Espace Apprenant", en: "Student Area" },
  "nav.blog": { fr: "Blog", en: "Blog" },
  "nav.faq": { fr: "FAQ", en: "FAQ" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.login": { fr: "Connexion", en: "Log in" },
  "nav.enroll": { fr: "S'inscrire", en: "Enroll" },

  // Hero
  "hero.badge": {
    fr: "Académie de formation d'élite",
    en: "Elite training academy",
  },
  "hero.title": {
    fr: "Développez les compétences qui façonnent les leaders de demain",
    en: "Develop the skills that shape tomorrow's leaders",
  },
  "hero.subtitle": {
    fr: "Formez-vous auprès d'experts et bénéficiez d'un accompagnement personnalisé en Trading, Intelligence Artificielle et Art Oratoire.",
    en: "Train with experts and receive personalised coaching in Trading, Artificial Intelligence and Public Speaking.",
  },
  "hero.cta1": { fr: "Commencer maintenant", en: "Get started now" },
  "hero.cta2": { fr: "Découvrir nos formations", en: "Explore our programs" },
  "hero.stat1": { fr: "Apprenants formés", en: "Students trained" },
  "hero.stat2": { fr: "Taux de satisfaction", en: "Satisfaction rate" },
  "hero.stat3": { fr: "Formateurs experts", en: "Expert mentors" },
  "hero.watch": { fr: "Voir la présentation", en: "Watch the intro" },

  // Formations section
  "formations.kicker": { fr: "Nos Formations", en: "Our Programs" },
  "formations.title": {
    fr: "Trois parcours d'excellence",
    en: "Three paths to excellence",
  },
  "formations.subtitle": {
    fr: "Des programmes intensifs, pratiques et certifiants, conçus pour des résultats concrets.",
    en: "Intensive, practical and certified programs designed for real results.",
  },
  "formations.enroll": { fr: "S'inscrire maintenant", en: "Enroll now" },
  "formations.details": { fr: "Voir le programme", en: "View curriculum" },
  "formations.from": { fr: "à partir de", en: "from" },
  "formations.popular": { fr: "Le plus populaire", en: "Most popular" },

  // Why
  "why.kicker": { fr: "Pourquoi nous choisir", en: "Why choose us" },
  "why.title": {
    fr: "Une académie pensée pour votre réussite",
    en: "An academy built for your success",
  },

  // Testimonials
  "testi.kicker": { fr: "Témoignages", en: "Testimonials" },
  "testi.title": {
    fr: "Ils ont transformé leur avenir",
    en: "They transformed their future",
  },

  // CTA
  "cta.title": {
    fr: "Prêt à rejoindre l'élite ?",
    en: "Ready to join the elite?",
  },
  "cta.subtitle": {
    fr: "Rejoignez des centaines d'apprenants ambitieux et commencez votre transformation dès aujourd'hui.",
    en: "Join hundreds of ambitious learners and begin your transformation today.",
  },
  "cta.button": { fr: "Commencer maintenant", en: "Get started now" },

  // FAQ
  "faq.kicker": { fr: "FAQ", en: "FAQ" },
  "faq.title": {
    fr: "Questions fréquentes",
    en: "Frequently asked questions",
  },

  // Footer
  "footer.tagline": {
    fr: "L'académie qui façonne les leaders de demain à travers le Trading, l'IA et l'Art Oratoire.",
    en: "The academy shaping tomorrow's leaders through Trading, AI and Public Speaking.",
  },
  "footer.programs": { fr: "Formations", en: "Programs" },
  "footer.company": { fr: "Académie", en: "Academy" },
  "footer.legal": { fr: "Informations légales", en: "Legal" },
  "footer.follow": { fr: "Suivez-nous", en: "Follow us" },
  "footer.rights": {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
};

interface LangContext {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict | string) => string;
}

const Ctx = createContext<LangContext | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("cp-lang") as Lang | null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("cp-lang", l);
    document.documentElement.lang = l;
  };

  const t = (key: string) => dict[key]?.[lang] ?? key;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
