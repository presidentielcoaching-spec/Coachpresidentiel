export interface Testimonial {
  name: string;
  role: string;
  program: string;
  avatar: string; // gradient classes
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aïcha Diallo",
    role: "Entrepreneure",
    program: "Intelligence Artificielle",
    avatar: "from-amber-400 to-orange-500",
    rating: 5,
    quote:
      "Grâce à la formation IA, j'ai automatisé 70% de mon activité et lancé un nouveau service basé sur l'IA. Un investissement qui a changé mon business.",
  },
  {
    name: "Kouadio N'Guessan",
    role: "Trader indépendant",
    program: "Trading",
    avatar: "from-emerald-400 to-teal-500",
    rating: 5,
    quote:
      "La rigueur de la formation Trading et le suivi personnalisé m'ont permis de devenir constant. La psychologie du trader a été un déclic.",
  },
  {
    name: "Fatou Sow",
    role: "Cadre dirigeante",
    program: "Art Oratoire",
    avatar: "from-rose-400 to-pink-500",
    rating: 5,
    quote:
      "Je redoutais la prise de parole. Aujourd'hui je présente devant mon comité de direction avec assurance. Une transformation totale.",
  },
  {
    name: "Ibrahim Touré",
    role: "Étudiant en finance",
    program: "Trading",
    avatar: "from-sky-400 to-indigo-500",
    rating: 5,
    quote:
      "Des formateurs disponibles, des sessions live concrètes et une communauté qui pousse vers le haut. Je recommande à 100%.",
  },
  {
    name: "Mariam Coulibaly",
    role: "Consultante marketing",
    program: "Intelligence Artificielle",
    avatar: "from-violet-400 to-fuchsia-500",
    rating: 5,
    quote:
      "Le module Marketing IA est une mine d'or. J'ai doublé ma productivité et la qualité de mes contenus clients.",
  },
  {
    name: "Serge Kambou",
    role: "Manager commercial",
    program: "Art Oratoire",
    avatar: "from-cyan-400 to-blue-500",
    rating: 5,
    quote:
      "Storytelling, argumentation, gestion du trac… des outils que j'utilise chaque jour. Mon leadership a clairement gagné en impact.",
  },
];

export interface FaqItem {
  category: "Paiements" | "Formations" | "Certificats" | "Suivi pédagogique";
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    category: "Paiements",
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons Orange Money, Wave, ainsi que les cartes Visa et Mastercard. Tous les paiements sont sécurisés.",
  },
  {
    category: "Paiements",
    question: "Puis-je payer en plusieurs tranches ?",
    answer:
      "Oui. Selon la formation, le paiement peut être échelonné en 3, 4 ou 5 tranches sans frais cachés. Vous recevez automatiquement un reçu et une facture PDF.",
  },
  {
    category: "Formations",
    question: "Combien de temps durent les formations ?",
    answer:
      "L'Art Oratoire et le Trading durent 2 mois, l'Intelligence Artificielle s'étend sur 1 an. Chaque parcours inclut un suivi personnalisé.",
  },
  {
    category: "Formations",
    question: "Les cours sont-ils accessibles à tout moment ?",
    answer:
      "Oui, votre espace apprenant et vos supports sont disponibles 24h/24. Les sessions live sont également enregistrées et rejouables.",
  },
  {
    category: "Certificats",
    question: "Vais-je recevoir un certificat ?",
    answer:
      "À la fin de chaque formation, vous obtenez un certificat numérique vérifiable, que vous pouvez partager sur LinkedIn et votre CV.",
  },
  {
    category: "Suivi pédagogique",
    question: "Comment se passe le suivi personnalisé ?",
    answer:
      "Vous bénéficiez d'un mentor dédié, de feedbacks réguliers, d'une messagerie directe avec les formateurs et d'un calendrier de sessions live.",
  },
  {
    category: "Suivi pédagogique",
    question: "Y a-t-il une communauté d'apprenants ?",
    answer:
      "Oui, vous rejoignez une communauté privée pour échanger, réseauter et progresser ensemble tout au long de votre parcours.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string; // gradient
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-erreurs-trader-debutant",
    title: "Les 5 erreurs fatales du trader débutant",
    category: "Trading",
    excerpt:
      "Sur-trading, absence de stop-loss, émotions… Découvrez les pièges les plus courants et comment les éviter dès vos premiers pas.",
    date: "2026-05-28",
    readTime: "6 min",
    cover: "from-emerald-500 to-teal-700",
    author: "Équipe Trading",
  },
  {
    slug: "ia-generative-business",
    title: "Comment l'IA générative transforme les PME africaines",
    category: "Intelligence Artificielle",
    excerpt:
      "De la création de contenu à l'automatisation, l'IA générative ouvre des opportunités inédites pour les entrepreneurs.",
    date: "2026-05-20",
    readTime: "8 min",
    cover: "from-amber-400 to-orange-600",
    author: "Équipe IA",
  },
  {
    slug: "prise-parole-impactante",
    title: "7 techniques pour une prise de parole impactante",
    category: "Leadership",
    excerpt:
      "Le langage corporel, le silence, le storytelling… maîtrisez les leviers qui captivent une audience.",
    date: "2026-05-12",
    readTime: "5 min",
    cover: "from-rose-500 to-pink-700",
    author: "Équipe Art Oratoire",
  },
  {
    slug: "discipline-reussite",
    title: "La discipline : le vrai secret de la réussite",
    category: "Développement Personnel",
    excerpt:
      "Pourquoi la constance bat le talent. Construisez des routines qui font la différence sur le long terme.",
    date: "2026-05-04",
    readTime: "4 min",
    cover: "from-violet-500 to-indigo-700",
    author: "Coaching Présidentiel",
  },
  {
    slug: "lancer-business-2026",
    title: "Lancer son business en 2026 : le guide complet",
    category: "Entrepreneuriat",
    excerpt:
      "Idée, validation, financement, croissance. Les étapes clés pour transformer votre projet en entreprise rentable.",
    date: "2026-04-26",
    readTime: "10 min",
    cover: "from-sky-500 to-blue-700",
    author: "Coaching Présidentiel",
  },
  {
    slug: "agents-ia-autonomes",
    title: "Créer vos premiers agents IA autonomes",
    category: "Intelligence Artificielle",
    excerpt:
      "Comprenez le fonctionnement des agents intelligents et apprenez à les déployer pour automatiser vos tâches.",
    date: "2026-04-18",
    readTime: "9 min",
    cover: "from-fuchsia-500 to-purple-700",
    author: "Équipe IA",
  },
];

export const blogCategories = [
  "Tous",
  "Trading",
  "Intelligence Artificielle",
  "Leadership",
  "Développement Personnel",
  "Entrepreneuriat",
];
