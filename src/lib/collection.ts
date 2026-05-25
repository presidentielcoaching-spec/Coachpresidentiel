export const COLLECTION = {
  name: "Sankofa Legacy",
  subtitle: "Les Gardiens Africains de l'Ether",
  symbol: "SANKOFA",
  description:
    "Cinq Gardiens. Cinq civilisations. Une mémoire restaurée. Sankofa Legacy est une édition ultra-rare 1-of-1 qui ancre l'héritage spirituel africain dans la blockchain. Chaque NFT est unique, signé, et lié à un rituel d'activation off-chain transmis au détenteur.",
  totalSupply: 5,
  chain: "Base",
  chainNote: "Frais réduits, audience Coinbase, finalité rapide.",
  royaltyBps: 750,
  opensea: "https://opensea.io/collection/sankofa-legacy",
  twitter: "https://x.com/sankofalegacy",
  discord: "https://discord.gg/sankofalegacy",
  email: "presidentielcoaching@gmail.com",
  creator: "Sankofa Studio",
} as const;

export type Guardian = {
  id: number;
  slug: string;
  name: string;
  title: string;
  origin: string;
  element: string;
  story: string;
  attributes: { trait_type: string; value: string }[];
  image: string;
  thumb: string;
  accent: string;
};

export const GUARDIANS: Guardian[] = [
  {
    id: 1,
    slug: "nubian-329",
    name: "NUBIAN 329",
    title: "L'Architecte des Empires",
    origin: "Nubie / Kemet",
    element: "Soleil • Civilisation",
    story:
      "Premier Gardien de l'Ether. Son masque encode les plans de Méroé et les algorithmes pharaoniques. Il transmet à son détenteur la discipline de bâtir ce qui dure mille ans.",
    image: "/guardians/1.jpg",
    thumb: "/guardians/1.jpg",
    accent: "from-[#0f3a8a] via-[#1d6dd6] to-[#f5b942]",
    attributes: [
      { trait_type: "Tribu", value: "Nubienne" },
      { trait_type: "Origine", value: "Kemet / Soudan" },
      { trait_type: "Élément", value: "Soleil" },
      { trait_type: "Domaine", value: "Architecture & Civilisation" },
      { trait_type: "Aura", value: "Bleu Cobalt / Or" },
      { trait_type: "Énergie", value: "Bâtisseur" },
      { trait_type: "Rareté", value: "Genesis 1-of-1" },
    ],
  },
  {
    id: 2,
    slug: "zamzuu",
    name: "ZAMZUU",
    title: "La Sentinelle",
    origin: "Afrique de l'Est • Maasai",
    element: "Terre • Protection",
    story:
      "Le Gardien-Guerrier. Sa coiffe de plumes capte le vent des plaines et son bouclier neutralise les énergies adverses. Il protège les frontières spirituelles du détenteur.",
    image: "/guardians/2.jpg",
    thumb: "/guardians/2.jpg",
    accent: "from-[#3a0d0d] via-[#c5352b] to-[#fcd34d]",
    attributes: [
      { trait_type: "Tribu", value: "Maasai" },
      { trait_type: "Origine", value: "Kenya / Tanzanie" },
      { trait_type: "Élément", value: "Terre" },
      { trait_type: "Domaine", value: "Protection & Guerre Sacrée" },
      { trait_type: "Aura", value: "Plumes Noir / Crème" },
      { trait_type: "Énergie", value: "Sentinelle" },
      { trait_type: "Rareté", value: "Genesis 1-of-1" },
    ],
  },
  {
    id: 3,
    slug: "tellem",
    name: "TELLEM",
    title: "Le Lecteur d'Étoiles",
    origin: "Pays Dogon • Mali",
    element: "Cosmos • Sirius",
    story:
      "Le Gardien Astronome. Bien avant les télescopes, son peuple cartographiait Sirius B. Son masque est un instrument céleste : antennes vers les ancêtres, regard tourné vers ce qui n'est pas encore arrivé.",
    image: "/guardians/3.jpg",
    thumb: "/guardians/3.jpg",
    accent: "from-[#050a2e] via-[#1c2a8a] to-[#a394c0]",
    attributes: [
      { trait_type: "Tribu", value: "Dogon" },
      { trait_type: "Origine", value: "Mali" },
      { trait_type: "Élément", value: "Cosmos" },
      { trait_type: "Domaine", value: "Astronomie sacrée" },
      { trait_type: "Aura", value: "Bleu Nuit / Or" },
      { trait_type: "Énergie", value: "Oracle" },
      { trait_type: "Rareté", value: "Genesis 1-of-1" },
    ],
  },
  {
    id: 4,
    slug: "gelede",
    name: "GELEDE",
    title: "La Matriarche",
    origin: "Yoruba • Nigeria / Bénin",
    element: "Eau • Renouveau",
    story:
      "Gelede est la Mère-Source. Son masque incarne la puissance des Iyami, les Mères Anciennes. Elle restaure les cycles brisés et bénit la fertilité de tout projet né sous sa garde.",
    image: "/guardians/4.jpg",
    thumb: "/guardians/4.jpg",
    accent: "from-[#1a1138] via-[#7c3aed] to-[#e0a022]",
    attributes: [
      { trait_type: "Tribu", value: "Yoruba" },
      { trait_type: "Origine", value: "Nigeria / Bénin" },
      { trait_type: "Élément", value: "Eau" },
      { trait_type: "Domaine", value: "Rituel & Renouveau" },
      { trait_type: "Aura", value: "Iridescent / Or" },
      { trait_type: "Énergie", value: "Matriarche" },
      { trait_type: "Rareté", value: "Genesis 1-of-1" },
    ],
  },
  {
    id: 5,
    slug: "ashanti-lumiere",
    name: "ASHANTI",
    title: "L'Impératrice de Lumière",
    origin: "Akan • Ghana",
    element: "Lumière • Lignée royale",
    story:
      "Dernière des cinq, gardienne du Trône d'Or. Ses fibres optiques tressées portent la mémoire des reines-mères Ashanti. Son détenteur hérite d'une couronne invisible — l'autorité douce.",
    image: "/guardians/5.jpg",
    thumb: "/guardians/5.jpg",
    accent: "from-[#3b0f7a] via-[#e0a022] to-[#fde68a]",
    attributes: [
      { trait_type: "Tribu", value: "Ashanti / Akan" },
      { trait_type: "Origine", value: "Ghana" },
      { trait_type: "Élément", value: "Lumière" },
      { trait_type: "Domaine", value: "Lignée royale & Sagesse" },
      { trait_type: "Aura", value: "Or massif / Fibre optique" },
      { trait_type: "Énergie", value: "Impératrice" },
      { trait_type: "Rareté", value: "Genesis 1-of-1" },
    ],
  },
];
