export type Chain = "ethereum" | "polygon" | "solana" | "base" | "bnb";

export type ChainInfo = {
  id: Chain;
  name: string;
  symbol: string;
  color: string;
};

export type Category =
  | "heritage"
  | "civilizations"
  | "sankofa"
  | "diaspora"
  | "memory"
  | "tribal"
  | "afrobeat"
  | "ai-art"
  | "artifacts"
  | "music"
  | "tickets"
  | "realestate";

export type Artist = {
  id: string;
  handle: string;
  name: string;
  origin: string;
  bio: string;
  avatar: string;
  cover: string;
  verified: boolean;
  followers: number;
  volume: number;
  pieces: number;
  joinedYear: number;
  level: "Initiate" | "Griot" | "Master" | "Legendary";
};

export type Collection = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  banner: string;
  cover: string;
  artistId: string;
  chain: Chain;
  items: number;
  owners: number;
  floor: number;
  volume: number;
  verified: boolean;
};

export type Nft = {
  id: string;
  tokenId: string;
  name: string;
  description: string;
  image: string; // CSS gradient or url
  collectionId: string;
  artistId: string;
  category: Category;
  chain: Chain;
  price: number; // in chain native
  currency: string; // ETH / SOL / MATIC ...
  lastSale?: number;
  rarity: "Common" | "Rare" | "Epic" | "Mythic" | "One of One";
  rarityRank?: number;
  likes: number;
  views: number;
  edition?: { current: number; total: number };
  auction?: {
    endsAt: string; // ISO
    highestBid: number;
    bids: number;
  };
  traits?: { trait_type: string; value: string }[];
};

export type Drop = {
  id: string;
  title: string;
  artistId: string;
  collectionId: string;
  startsAt: string;
  endsAt: string;
  supply: number;
  mintPrice: number;
  currency: string;
  chain: Chain;
  cover: string;
  description: string;
  highlights: string[];
};

export type DaoProposal = {
  id: string;
  title: string;
  category: "Treasury" | "Curation" | "Grants" | "Governance";
  status: "Active" | "Passed" | "Rejected";
  votesFor: number;
  votesAgainst: number;
  endsAt: string;
  description: string;
};
