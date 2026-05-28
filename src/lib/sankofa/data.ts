import type {
  Artist,
  Category,
  Chain,
  ChainInfo,
  Collection,
  DaoProposal,
  Drop,
  Nft,
} from "./types";

export const CHAINS: ChainInfo[] = [
  { id: "ethereum", name: "Ethereum", symbol: "ETH", color: "#6b8aff" },
  { id: "polygon", name: "Polygon", symbol: "MATIC", color: "#a855f7" },
  { id: "solana", name: "Solana", symbol: "SOL", color: "#14f195" },
  { id: "base", name: "Base", symbol: "ETH", color: "#0052ff" },
  { id: "bnb", name: "BNB Chain", symbol: "BNB", color: "#f3ba2f" },
];

export const CATEGORIES: { id: Category; label: string; tagline: string }[] = [
  {
    id: "heritage",
    label: "Héritage Africain",
    tagline: "Symboles, rites, royaumes — la racine vivante.",
  },
  {
    id: "civilizations",
    label: "Civilisations Anciennes",
    tagline: "De Kemet à Songhaï, l'or de l'histoire.",
  },
  {
    id: "sankofa",
    label: "Sankofa",
    tagline: "Revenir chercher ce qui a été oublié.",
  },
  {
    id: "diaspora",
    label: "Diaspora Noire",
    tagline: "De Bahia à Brooklyn, l'écho de la mémoire.",
  },
  {
    id: "memory",
    label: "Mémoire de l'Esclavage",
    tagline: "Honorer, transmettre, ne jamais oublier.",
  },
  {
    id: "tribal",
    label: "Art Tribal Digital",
    tagline: "Masques, scarifications, totems pixellisés.",
  },
  {
    id: "afrobeat",
    label: "Afrobeat & Sonore",
    tagline: "Le rythme devient propriété.",
  },
  {
    id: "ai-art",
    label: "IA Art Génératif",
    tagline: "L'intelligence artistique du continent.",
  },
  {
    id: "artifacts",
    label: "Artefacts Réimaginés",
    tagline: "Le patrimoine pillé, restitué en pixels.",
  },
  {
    id: "music",
    label: "Musique NFT",
    tagline: "Royalties, droits, masters tokenisés.",
  },
  {
    id: "tickets",
    label: "Billets Événementiels",
    tagline: "Pass NFT pour les nuits cultes.",
  },
  {
    id: "realestate",
    label: "Immobilier Tokenisé",
    tagline: "Fractions d'or, fractions de pierre.",
  },
];

// CSS gradient "images" — each NFT has a unique, generated visual identity
// so the platform looks rich without any external image assets.
const ART: string[] = [
  "linear-gradient(135deg, #f1c34a 0%, #cd7f32 40%, #1e3a8a 100%)",
  "radial-gradient(circle at 20% 20%, #d946ef 0%, #1e3a8a 45%, #050309 100%)",
  "conic-gradient(from 45deg at 60% 40%, #f7e7a4, #cd7f32, #1e3a8a, #050309, #f7e7a4)",
  "linear-gradient(160deg, #050309 0%, #1e3a8a 50%, #4f6dff 100%)",
  "radial-gradient(ellipse at 70% 30%, #f1c34a 0%, #8a4f1d 50%, #050309 100%)",
  "linear-gradient(45deg, #cd7f32 0%, #f7e7a4 25%, #2dd4bf 60%, #1e3a8a 100%)",
  "conic-gradient(from 0deg at 50% 50%, #f1c34a, #d946ef, #4f6dff, #2dd4bf, #f1c34a)",
  "linear-gradient(200deg, #6d28d9 0%, #d946ef 50%, #f1c34a 100%)",
  "radial-gradient(circle at 50% 100%, #f1c34a 0%, #cd7f32 30%, #14101f 70%)",
  "linear-gradient(115deg, #050309 0%, #8a4f1d 40%, #f1c34a 100%)",
  "conic-gradient(from 180deg at 30% 70%, #2dd4bf, #1e3a8a, #d946ef, #f1c34a, #2dd4bf)",
  "linear-gradient(135deg, #1e3a8a 0%, #6d28d9 50%, #cd7f32 100%)",
  "radial-gradient(circle at 25% 75%, #d4af37 0%, #cd7f32 40%, #1e3a8a 80%, #050309 100%)",
  "linear-gradient(45deg, #f7e7a4 0%, #cd7f32 30%, #d946ef 65%, #4f6dff 100%)",
  "conic-gradient(from 90deg at 70% 30%, #f1c34a, #050309, #cd7f32, #1e3a8a, #f1c34a)",
  "linear-gradient(180deg, #050309 0%, #14101f 30%, #1e3a8a 70%, #4f6dff 100%)",
  "radial-gradient(ellipse at 0% 0%, #f1c34a 0%, #d946ef 35%, #050309 80%)",
  "linear-gradient(280deg, #2dd4bf 0%, #4f6dff 40%, #6d28d9 80%, #050309 100%)",
  "conic-gradient(from 270deg at 50% 50%, #f7e7a4 0%, #cd7f32 25%, #8a4f1d 50%, #1e3a8a 75%, #f7e7a4 100%)",
  "linear-gradient(135deg, #cd7f32 0%, #050309 50%, #d946ef 100%)",
  "radial-gradient(circle at 80% 20%, #f1c34a 0%, #1e3a8a 60%, #050309 100%)",
  "linear-gradient(225deg, #f7e7a4 0%, #4f6dff 50%, #d946ef 100%)",
  "conic-gradient(from 45deg at 50% 50%, #1e3a8a, #cd7f32, #f1c34a, #6d28d9, #1e3a8a)",
  "linear-gradient(160deg, #f1c34a 0%, #cd7f32 25%, #050309 60%, #1e3a8a 100%)",
];

const art = (i: number) => ART[i % ART.length];

export const ARTISTS: Artist[] = [
  {
    id: "ayowole",
    handle: "@ayowole.eth",
    name: "Ayowole Ọdẹ",
    origin: "Lagos · Nigeria",
    bio: "Peintre numérique yoruba. Explore les Òrìṣà à travers l'IA générative et la photogrammétrie 3D.",
    avatar: art(0),
    cover: art(2),
    verified: true,
    followers: 48230,
    volume: 312.4,
    pieces: 47,
    joinedYear: 2022,
    level: "Legendary",
  },
  {
    id: "amani",
    handle: "@amani.sol",
    name: "Amani Nyong'o",
    origin: "Nairobi · Kenya",
    bio: "Photographe afro-futuriste. Capture les visions du peuple Maasaï dans un cosmos numérique.",
    avatar: art(1),
    cover: art(4),
    verified: true,
    followers: 21044,
    volume: 187.9,
    pieces: 33,
    joinedYear: 2023,
    level: "Master",
  },
  {
    id: "khadim",
    handle: "@khadim.base",
    name: "Khadim Diop",
    origin: "Dakar · Sénégal",
    bio: "Calligraphe ajami et architecte de masques digitaux. Co-fondateur du collectif Wolof3.",
    avatar: art(3),
    cover: art(6),
    verified: true,
    followers: 17890,
    volume: 142.6,
    pieces: 58,
    joinedYear: 2021,
    level: "Master",
  },
  {
    id: "ifeoma",
    handle: "@ifeoma.eth",
    name: "Ifeoma Nwosu",
    origin: "Brooklyn · USA",
    bio: "Diaspora igbo. Tisse la mémoire du Middle Passage en hyper-collages volumétriques.",
    avatar: art(5),
    cover: art(7),
    verified: true,
    followers: 64012,
    volume: 421.8,
    pieces: 29,
    joinedYear: 2022,
    level: "Legendary",
  },
  {
    id: "marius",
    handle: "@marius.polygon",
    name: "Marius Mensah",
    origin: "Accra · Ghana",
    bio: "Sculpteur 3D des symboles Adinkra. Animations cinétiques et compositions sonores en NFT.",
    avatar: art(8),
    cover: art(10),
    verified: true,
    followers: 12440,
    volume: 88.2,
    pieces: 71,
    joinedYear: 2023,
    level: "Griot",
  },
  {
    id: "nala",
    handle: "@nala.eth",
    name: "Nala Mokoena",
    origin: "Johannesburg · Afrique du Sud",
    bio: "Artiste IA. Mêle gqom, dialectes zoulous et latent spaces dans des paysages oniriques.",
    avatar: art(11),
    cover: art(13),
    verified: true,
    followers: 33020,
    volume: 256.3,
    pieces: 41,
    joinedYear: 2023,
    level: "Master",
  },
  {
    id: "zora",
    handle: "@zora.bnb",
    name: "Zora Bekele",
    origin: "Addis-Abeba · Éthiopie",
    bio: "Réinvente les manuscrits Ge'ez en tableaux génératifs sacrés.",
    avatar: art(14),
    cover: art(16),
    verified: true,
    followers: 9088,
    volume: 67.5,
    pieces: 24,
    joinedYear: 2024,
    level: "Griot",
  },
  {
    id: "kemi",
    handle: "@kemi.eth",
    name: "Kemi Adeyemi",
    origin: "Salvador · Brésil",
    bio: "Candomblé numérique. Orixás et samba-reggae en holographies tokenisées.",
    avatar: art(17),
    cover: art(19),
    verified: true,
    followers: 28910,
    volume: 198.0,
    pieces: 36,
    joinedYear: 2022,
    level: "Master",
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "sankofa-genesis",
    slug: "sankofa-genesis",
    name: "Sankofa Genesis",
    category: "sankofa",
    description:
      "La collection inaugurale. 1000 oiseaux Sankofa générés par IA, chacun gardien d'un proverbe akan oublié.",
    banner: art(2),
    cover: art(0),
    artistId: "khadim",
    chain: "ethereum",
    items: 1000,
    owners: 612,
    floor: 1.84,
    volume: 1248.9,
    verified: true,
  },
  {
    id: "orisha-codex",
    slug: "orisha-codex",
    name: "Òrìṣà Codex",
    category: "heritage",
    description:
      "Un codex vivant des 401 Òrìṣà yoruba. Chaque NFT déverrouille un audio storytelling enregistré à Ifẹ̀.",
    banner: art(5),
    cover: art(1),
    artistId: "ayowole",
    chain: "ethereum",
    items: 401,
    owners: 318,
    floor: 3.2,
    volume: 1812.5,
    verified: true,
  },
  {
    id: "middle-passage",
    slug: "middle-passage",
    name: "Middle Passage — Échos",
    category: "memory",
    description:
      "Hommage 1-of-1. Œuvres uniques sur cuivre numérique tokenisées en faveur de la mémoire transatlantique.",
    banner: art(7),
    cover: art(3),
    artistId: "ifeoma",
    chain: "base",
    items: 12,
    owners: 12,
    floor: 18.4,
    volume: 412.6,
    verified: true,
  },
  {
    id: "kemet-revival",
    slug: "kemet-revival",
    name: "Kemet Revival",
    category: "civilizations",
    description:
      "Réincarnations 3D des divinités égyptiennes. Modèles photogrammétriques scannés au Caire.",
    banner: art(9),
    cover: art(4),
    artistId: "marius",
    chain: "polygon",
    items: 144,
    owners: 121,
    floor: 0.42,
    volume: 88.4,
    verified: true,
  },
  {
    id: "afrobeat-vaults",
    slug: "afrobeat-vaults",
    name: "Afrobeat Vaults",
    category: "afrobeat",
    description:
      "Royalties d'inédits afrobeat directement encodées en NFT, share avec les détenteurs.",
    banner: art(11),
    cover: art(6),
    artistId: "kemi",
    chain: "solana",
    items: 222,
    owners: 197,
    floor: 4.5,
    volume: 612.0,
    verified: true,
  },
  {
    id: "latent-veld",
    slug: "latent-veld",
    name: "Latent Veld",
    category: "ai-art",
    description:
      "Paysages oniriques générés à partir de chants zoulous et de modèles diffusion entraînés en interne.",
    banner: art(13),
    cover: art(8),
    artistId: "nala",
    chain: "ethereum",
    items: 333,
    owners: 280,
    floor: 0.78,
    volume: 412.0,
    verified: true,
  },
  {
    id: "maasai-cosmos",
    slug: "maasai-cosmos",
    name: "Maasai Cosmos",
    category: "tribal",
    description:
      "Portraits photogrammétriques de guerriers Maasaï replacés dans un cosmos d'or et de bronze.",
    banner: art(15),
    cover: art(10),
    artistId: "amani",
    chain: "base",
    items: 256,
    owners: 211,
    floor: 0.91,
    volume: 318.8,
    verified: true,
  },
  {
    id: "geez-manuscripts",
    slug: "geez-manuscripts",
    name: "Ge'ez Manuscripts",
    category: "artifacts",
    description:
      "Folios Ge'ez réimaginés. Chaque page intègre un audio liturgique enregistré à Lalibela.",
    banner: art(17),
    cover: art(11),
    artistId: "zora",
    chain: "polygon",
    items: 88,
    owners: 71,
    floor: 0.61,
    volume: 54.2,
    verified: true,
  },
];

function makeNft(
  i: number,
  collectionId: string,
  artistId: string,
  category: Category,
  chain: Chain,
  baseName: string,
  basePrice: number,
): Nft {
  const currencies: Record<Chain, string> = {
    ethereum: "ETH",
    polygon: "MATIC",
    solana: "SOL",
    base: "ETH",
    bnb: "BNB",
  };
  const rarities: Nft["rarity"][] = [
    "Common",
    "Rare",
    "Rare",
    "Epic",
    "Mythic",
    "One of One",
  ];
  const rarity = rarities[i % rarities.length];
  const auctionable = i % 5 === 2;
  return {
    id: `${collectionId}-${i}`,
    tokenId: `#${(1000 + i).toString()}`,
    name: `${baseName} ${String.fromCharCode(65 + (i % 26))}${i.toString().padStart(2, "0")}`,
    description:
      "Œuvre numérique signée, frappée sur la blockchain, accompagnée d'un certificat de provenance et d'un audio storytelling.",
    image: art(i + collectionId.length),
    collectionId,
    artistId,
    category,
    chain,
    price: +(basePrice * (0.8 + (i % 6) * 0.18)).toFixed(3),
    currency: currencies[chain],
    lastSale: +(basePrice * (0.6 + (i % 4) * 0.12)).toFixed(3),
    rarity,
    rarityRank: 1 + i * 3,
    likes: 80 + ((i * 137) % 1500),
    views: 1200 + ((i * 421) % 12000),
    edition:
      rarity === "One of One"
        ? { current: 1, total: 1 }
        : { current: 1 + (i % 9), total: 10 + (i % 90) },
    auction: auctionable
      ? {
          endsAt: new Date(
            Date.now() + (3 + (i % 10)) * 60 * 60 * 1000,
          ).toISOString(),
          highestBid: +(basePrice * 1.1).toFixed(3),
          bids: 4 + (i % 18),
        }
      : undefined,
    traits: [
      { trait_type: "Origine", value: ["Lagos", "Dakar", "Nairobi", "Accra", "Salvador"][i % 5] },
      { trait_type: "Pigment", value: ["Or 24k", "Bronze", "Indigo", "Ivoire", "Cuivre"][i % 5] },
      { trait_type: "Symbole", value: ["Sankofa", "Adinkra", "Ankh", "Nsibidi", "Akoma"][i % 5] },
      { trait_type: "Rythme", value: ["Afrobeat", "Gqom", "Sabar", "Samba", "Highlife"][i % 5] },
    ],
  };
}

export const NFTS: Nft[] = [
  ...Array.from({ length: 14 }, (_, i) =>
    makeNft(i, "sankofa-genesis", "khadim", "sankofa", "ethereum", "Sankofa Bird", 1.8),
  ),
  ...Array.from({ length: 10 }, (_, i) =>
    makeNft(i, "orisha-codex", "ayowole", "heritage", "ethereum", "Òrìṣà", 3.2),
  ),
  ...Array.from({ length: 6 }, (_, i) =>
    makeNft(i, "middle-passage", "ifeoma", "memory", "base", "Echoes", 18.4),
  ),
  ...Array.from({ length: 8 }, (_, i) =>
    makeNft(i, "kemet-revival", "marius", "civilizations", "polygon", "Kemet", 0.42),
  ),
  ...Array.from({ length: 9 }, (_, i) =>
    makeNft(i, "afrobeat-vaults", "kemi", "afrobeat", "solana", "Groove", 4.5),
  ),
  ...Array.from({ length: 10 }, (_, i) =>
    makeNft(i, "latent-veld", "nala", "ai-art", "ethereum", "Veld", 0.78),
  ),
  ...Array.from({ length: 8 }, (_, i) =>
    makeNft(i, "maasai-cosmos", "amani", "tribal", "base", "Cosmos", 0.91),
  ),
  ...Array.from({ length: 6 }, (_, i) =>
    makeNft(i, "geez-manuscripts", "zora", "artifacts", "polygon", "Folio", 0.61),
  ),
];

export const DROPS: Drop[] = [
  {
    id: "drop-bantu-spectra",
    title: "Bantu Spectra — Phase I",
    artistId: "ayowole",
    collectionId: "orisha-codex",
    startsAt: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString(),
    endsAt: new Date(Date.now() + 96 * 60 * 60 * 1000).toISOString(),
    supply: 888,
    mintPrice: 0.22,
    currency: "ETH",
    chain: "ethereum",
    cover: art(2),
    description:
      "888 totems génératifs inspirés des cosmologies bantoues, déverrouillés par chant en wolof.",
    highlights: [
      "Allowlist communautaire ouverte 48h avant",
      "Audio storytelling intégré (15 min par totem)",
      "Royalties 7,5% reversées au collectif Wolof3",
    ],
  },
  {
    id: "drop-zulu-zenith",
    title: "Zulu Zenith",
    artistId: "nala",
    collectionId: "latent-veld",
    startsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    endsAt: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString(),
    supply: 333,
    mintPrice: 0.18,
    currency: "ETH",
    chain: "base",
    cover: art(13),
    description:
      "Paysages génératifs entraînés sur des chants gqom inédits, accompagnés de stems téléchargeables.",
    highlights: [
      "Mint progressif (dutch auction)",
      "Stems audio multipistes inclus",
      "Compatible Apple Vision Pro & Meta Quest",
    ],
  },
  {
    id: "drop-griot-keys",
    title: "Griot Keys",
    artistId: "kemi",
    collectionId: "afrobeat-vaults",
    startsAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    endsAt: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
    supply: 144,
    mintPrice: 1.4,
    currency: "SOL",
    chain: "solana",
    cover: art(19),
    description:
      "144 clés d'accès aux coffres-forts musicaux : un mois d'inédits afrobeat par détenteur.",
    highlights: [
      "Stream privé pendant 12 mois",
      "Backstage NFT au festival Felabration",
      "Vote DAO sur les prochaines signatures",
    ],
  },
];

export const DAO_PROPOSALS: DaoProposal[] = [
  {
    id: "prop-021",
    title: "Subventionner 10 artistes Sahel à hauteur de 50 ETH",
    category: "Grants",
    status: "Active",
    votesFor: 18920,
    votesAgainst: 1820,
    endsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    description:
      "Programme de bourses pour 10 artistes du Sahel sur 6 mois, avec mentorat et accès au studio 3D.",
  },
  {
    id: "prop-020",
    title: "Activer le launchpad sur Solana mainnet",
    category: "Governance",
    status: "Active",
    votesFor: 12440,
    votesAgainst: 4081,
    endsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    description:
      "Déployer le launchpad NFT sur Solana avec frais réduits à 1% pour les 100 premiers drops.",
  },
  {
    id: "prop-019",
    title: "Rachat de 1M $SANKO pour le trésor",
    category: "Treasury",
    status: "Passed",
    votesFor: 32100,
    votesAgainst: 2410,
    endsAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    description:
      "Le trésor effectue un rachat programmé de 1 000 000 $SANKO sur 30 jours pour soutenir l'écosystème.",
  },
  {
    id: "prop-018",
    title: "Curation : nouvelle galerie Afro-Caraïbes",
    category: "Curation",
    status: "Passed",
    votesFor: 28012,
    votesAgainst: 1980,
    endsAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    description:
      "Ajouter une galerie immersive dédiée aux diasporas caribéennes, curatée par un comité de 9 membres.",
  },
];

export const PLATFORM_STATS = {
  totalVolume: 184_320_000,
  totalSales: 412_088,
  artists: 14_320,
  collectors: 96_400,
  countriesRepresented: 64,
  carbonNeutral: true,
};

export function getArtistById(id: string): Artist | undefined {
  return ARTISTS.find((a) => a.id === id);
}

export function getCollectionById(id: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.id === id);
}

export function getNftById(id: string): Nft | undefined {
  return NFTS.find((n) => n.id === id);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getChain(id: Chain): ChainInfo {
  return CHAINS.find((c) => c.id === id) ?? CHAINS[0];
}

export function nftsByCollection(collectionId: string): Nft[] {
  return NFTS.filter((n) => n.collectionId === collectionId);
}

export function nftsByArtist(artistId: string): Nft[] {
  return NFTS.filter((n) => n.artistId === artistId);
}

export function getLiveAuctions(): Nft[] {
  return NFTS.filter((n) => n.auction).slice(0, 8);
}

export function formatCompact(n: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}
