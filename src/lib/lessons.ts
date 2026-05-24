export type VocabItem = {
  native: string;
  french: string;
  pronunciation?: string;
};

export type QuizItem = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

export type PronunciationItem = {
  phrase: string;
  french: string;
  hint?: string;
};

export type LessonContent = {
  intro: string;
  speechLang: string;
  vocab: VocabItem[];
  quiz: QuizItem[];
  pronunciation: PronunciationItem[];
};

const EWONDO_SALUTATIONS: LessonContent = {
  intro:
    "Apprends à saluer en Ewondo, langue bantoue parlée au Cameroun. Les salutations sont au cœur du respect et du lien social.",
  speechLang: "fr-FR",
  vocab: [
    { native: "Mbolo", french: "Bonjour", pronunciation: "mm-bo-lo" },
    { native: "Mbolo mingi", french: "Bonsoir", pronunciation: "mm-bo-lo mm-in-ji" },
    { native: "Wele", french: "Comment ça va ?", pronunciation: "we-le" },
    { native: "Awa", french: "Je vais bien", pronunciation: "a-wa" },
    { native: "Akiba", french: "Merci", pronunciation: "a-ki-ba" },
    { native: "Ka olu", french: "S'il te plaît", pronunciation: "ka o-lu" },
    { native: "Wakala", french: "Au revoir", pronunciation: "wa-ka-la" },
    { native: "Zen", french: "Oui", pronunciation: "zen" },
  ],
  quiz: [
    {
      question: "Comment dit-on « Bonjour » en Ewondo ?",
      options: ["Akiba", "Mbolo", "Wele", "Awa"],
      correctIndex: 1,
      explanation: "Mbolo est la salutation universelle de la journée.",
    },
    {
      question: "Quelle expression signifie « Merci » ?",
      options: ["Akiba", "Mbolo mingi", "Ka olu", "Zen"],
      correctIndex: 0,
      explanation: "Akiba exprime la gratitude.",
    },
    {
      question: "« Wele » se traduit par…",
      options: ["Bonsoir", "Au revoir", "Comment ça va ?", "Oui"],
      correctIndex: 2,
    },
    {
      question: "Pour dire « Je vais bien », on utilise…",
      options: ["Ka olu", "Awa", "Wakala", "Zen"],
      correctIndex: 1,
    },
    {
      question: "Que dit-on en partant ?",
      options: ["Mbolo", "Akiba", "Wakala", "Awa"],
      correctIndex: 2,
      explanation: "Wakala est l'équivalent d'« au revoir ».",
    },
  ],
  pronunciation: [
    { phrase: "Mbolo", french: "Bonjour", hint: "Insiste sur la première syllabe." },
    { phrase: "Akiba mingi", french: "Merci beaucoup" },
    { phrase: "Wele wo ?", french: "Comment vas-tu, toi ?" },
  ],
};

const WOLOF_SALUTATIONS: LessonContent = {
  intro:
    "Le Wolof, langue véhiculaire du Sénégal et de la Gambie. Saluer est un art : on prend toujours le temps de demander des nouvelles.",
  speechLang: "fr-FR",
  vocab: [
    { native: "Salam aleikum", french: "Bonjour (formel)" },
    { native: "Nanga def", french: "Comment vas-tu ?" },
    { native: "Maa ngi fi", french: "Je vais bien" },
    { native: "Jërejëf", french: "Merci" },
    { native: "Ba beneen", french: "À la prochaine" },
    { native: "Waaw", french: "Oui" },
    { native: "Déedéet", french: "Non" },
    { native: "Naka nga tudd ?", french: "Comment t'appelles-tu ?" },
  ],
  quiz: [
    {
      question: "Comment salue-t-on formellement en Wolof ?",
      options: ["Nanga def", "Salam aleikum", "Waaw", "Jërejëf"],
      correctIndex: 1,
    },
    {
      question: "« Jërejëf » signifie…",
      options: ["Bonjour", "Au revoir", "Merci", "Oui"],
      correctIndex: 2,
    },
    {
      question: "Pour répondre « Je vais bien », on dit…",
      options: ["Maa ngi fi", "Ba beneen", "Déedéet", "Waaw"],
      correctIndex: 0,
    },
    {
      question: "« Déedéet » veut dire…",
      options: ["Oui", "Merci", "Non", "À bientôt"],
      correctIndex: 2,
    },
  ],
  pronunciation: [
    { phrase: "Nanga def ?", french: "Comment vas-tu ?", hint: "Ton montant sur « def »." },
    { phrase: "Jërejëf bu baax", french: "Merci beaucoup" },
    { phrase: "Maa ngi fi rekk", french: "Je vais bien, c'est tout." },
  ],
};

const YORUBA_SALUTATIONS: LessonContent = {
  intro:
    "Le Yoruba, parlé au Nigeria et au Bénin, est une langue tonale. Les salutations varient selon le moment de la journée.",
  speechLang: "fr-FR",
  vocab: [
    { native: "Bawo", french: "Bonjour" },
    { native: "Ẹ kàárọ̀", french: "Bonjour (matin)" },
    { native: "Ẹ kú àárọ̀", french: "Bonjour (cordial)" },
    { native: "Ẹ kú àsálẹ́", french: "Bonsoir" },
    { native: "Ẹ ṣé", french: "Merci" },
    { native: "Ó dàbọ̀", french: "Au revoir" },
    { native: "Bẹ́ẹ̀ ni", french: "Oui" },
    { native: "Rárá", french: "Non" },
  ],
  quiz: [
    {
      question: "« Ẹ kàárọ̀ » est utilisé…",
      options: ["Le matin", "Le soir", "La nuit", "Au repas"],
      correctIndex: 0,
    },
    {
      question: "Comment dit-on « Merci » ?",
      options: ["Ó dàbọ̀", "Ẹ ṣé", "Bawo", "Rárá"],
      correctIndex: 1,
    },
    {
      question: "« Ó dàbọ̀ » signifie…",
      options: ["Bonjour", "Au revoir", "Oui", "Merci"],
      correctIndex: 1,
    },
    {
      question: "Pour dire « Non », on dit…",
      options: ["Bẹ́ẹ̀ ni", "Rárá", "Ẹ ṣé", "Bawo"],
      correctIndex: 1,
    },
  ],
  pronunciation: [
    { phrase: "Ẹ kàárọ̀", french: "Bonjour (matin)", hint: "Les accents marquent les tons." },
    { phrase: "Ẹ ṣé púpọ̀", french: "Merci beaucoup" },
    { phrase: "Ó dàbọ̀", french: "Au revoir" },
  ],
};

const SWAHILI_SALUTATIONS: LessonContent = {
  intro:
    "Le Swahili, langue véhiculaire de l'Afrique de l'Est, parlée par plus de 200 millions de personnes.",
  speechLang: "fr-FR",
  vocab: [
    { native: "Jambo", french: "Bonjour" },
    { native: "Habari", french: "Salut / Quelles nouvelles" },
    { native: "Nzuri", french: "Bien" },
    { native: "Asante", french: "Merci" },
    { native: "Karibu", french: "Bienvenue / De rien" },
    { native: "Kwaheri", french: "Au revoir" },
    { native: "Ndiyo", french: "Oui" },
    { native: "Hapana", french: "Non" },
  ],
  quiz: [
    {
      question: "Quelle salutation est universelle en Swahili ?",
      options: ["Asante", "Jambo", "Hapana", "Kwaheri"],
      correctIndex: 1,
    },
    {
      question: "« Asante » veut dire…",
      options: ["Au revoir", "Bonjour", "Merci", "Oui"],
      correctIndex: 2,
    },
    {
      question: "« Karibu » signifie…",
      options: ["Merci", "Bienvenue", "Au revoir", "Non"],
      correctIndex: 1,
    },
    {
      question: "Comment dit-on « Non » ?",
      options: ["Ndiyo", "Hapana", "Nzuri", "Jambo"],
      correctIndex: 1,
    },
  ],
  pronunciation: [
    { phrase: "Habari yako ?", french: "Comment vas-tu ?" },
    { phrase: "Asante sana", french: "Merci beaucoup" },
    { phrase: "Karibu sana", french: "Bienvenue chaleureusement" },
  ],
};

const REGISTRY: Record<string, Record<string, LessonContent>> = {
  ewo: { salutations: EWONDO_SALUTATIONS },
  wol: { salutations: WOLOF_SALUTATIONS },
  yor: { salutations: YORUBA_SALUTATIONS },
  swa: { salutations: SWAHILI_SALUTATIONS },
};

export function getLessonContent(
  languageCode: string,
  lessonSlug: string,
): LessonContent | null {
  return REGISTRY[languageCode]?.[lessonSlug] ?? null;
}

export function hasInteractiveLesson(
  languageCode: string,
  lessonSlug: string,
): boolean {
  return Boolean(REGISTRY[languageCode]?.[lessonSlug]);
}
