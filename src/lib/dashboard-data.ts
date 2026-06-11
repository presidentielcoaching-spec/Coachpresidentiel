export interface Course {
  title: string;
  formation: string;
  progress: number;
  lessons: number;
  completed: number;
  accent: string;
  nextLesson: string;
}

export const courses: Course[] = [
  {
    title: "Trading — Maîtrise complète",
    formation: "Trading",
    progress: 68,
    lessons: 42,
    completed: 28,
    accent: "from-emerald-500 to-teal-600",
    nextLesson: "Module 5 — Gestion avancée du risque",
  },
  {
    title: "Intelligence Artificielle de A à Z",
    formation: "IA",
    progress: 34,
    lessons: 96,
    completed: 33,
    accent: "from-amber-400 to-orange-600",
    nextLesson: "Module 4 — Création d'agents intelligents",
  },
  {
    title: "Art Oratoire & Leadership",
    formation: "Art Oratoire",
    progress: 92,
    lessons: 30,
    completed: 27,
    accent: "from-rose-500 to-pink-600",
    nextLesson: "Module 6 — Gestion du trac",
  },
];

export interface Resource {
  title: string;
  course: string;
  size: string;
  type: "PDF" | "Slides" | "Excel";
}

export const resources: Resource[] = [
  { title: "Guide complet de l'analyse technique", course: "Trading", size: "4.2 Mo", type: "PDF" },
  { title: "Checklist du plan de trading", course: "Trading", size: "820 Ko", type: "PDF" },
  { title: "Prompts IA essentiels", course: "IA", size: "1.1 Mo", type: "PDF" },
  { title: "Modèle d'automatisation no-code", course: "IA", size: "2.4 Mo", type: "Excel" },
  { title: "Structure d'un discours percutant", course: "Art Oratoire", size: "640 Ko", type: "Slides" },
  { title: "Exercices de respiration & diction", course: "Art Oratoire", size: "510 Ko", type: "PDF" },
];

export interface Quiz {
  title: string;
  course: string;
  questions: number;
  status: "À faire" | "Réussi" | "En cours";
  score?: number;
}

export const quizzes: Quiz[] = [
  { title: "Analyse technique — Niveau 1", course: "Trading", questions: 15, status: "Réussi", score: 87 },
  { title: "Gestion du risque", course: "Trading", questions: 12, status: "En cours" },
  { title: "Fondamentaux de l'IA", course: "IA", questions: 20, status: "Réussi", score: 92 },
  { title: "Prompt engineering", course: "IA", questions: 18, status: "À faire" },
  { title: "Storytelling", course: "Art Oratoire", questions: 10, status: "À faire" },
];

export interface Certificate {
  title: string;
  status: "Délivré" | "En cours";
  date?: string;
  id?: string;
}

export const certificates: Certificate[] = [
  { title: "Fondamentaux du Trading", status: "Délivré", date: "12 mars 2026", id: "CP-TR-2026-0481" },
  { title: "Initiation à l'Intelligence Artificielle", status: "Délivré", date: "28 avril 2026", id: "CP-IA-2026-0732" },
  { title: "Art Oratoire — Niveau avancé", status: "En cours" },
];

export interface Message {
  from: string;
  role: string;
  preview: string;
  time: string;
  unread?: boolean;
  avatar: string;
}

export const messages: Message[] = [
  {
    from: "M. Diomandé",
    role: "Formateur Trading",
    preview: "Excellent travail sur ton dernier exercice ! Pense à...",
    time: "10:24",
    unread: true,
    avatar: "from-emerald-400 to-teal-500",
  },
  {
    from: "Mme Koné",
    role: "Mentor IA",
    preview: "Voici les ressources pour ton projet d'agent IA.",
    time: "Hier",
    avatar: "from-amber-400 to-orange-500",
  },
  {
    from: "Support pédagogique",
    role: "Équipe",
    preview: "Ton certificat de Trading est disponible 🎓",
    time: "2 j",
    avatar: "from-sky-400 to-indigo-500",
  },
];

export interface LiveSession {
  title: string;
  course: string;
  date: string;
  time: string;
  coach: string;
  accent: string;
}

export const liveSessions: LiveSession[] = [
  { title: "Live — Analyse des marchés en direct", course: "Trading", date: "14 JUIN", time: "19h00 - 20h30", coach: "M. Diomandé", accent: "bg-emerald-500" },
  { title: "Atelier — Construire un agent IA", course: "IA", date: "16 JUIN", time: "18h00 - 19h30", coach: "Mme Koné", accent: "bg-amber-500" },
  { title: "Coaching — Prise de parole", course: "Art Oratoire", date: "18 JUIN", time: "17h00 - 18h00", coach: "M. Bakayoko", accent: "bg-rose-500" },
];
