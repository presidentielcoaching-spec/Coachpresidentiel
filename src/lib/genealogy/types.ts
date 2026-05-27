export type Gender = "M" | "F" | "X";

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  colonialName?: string;
  gender?: Gender;
  birthDate?: string;
  deathDate?: string;
  birthPlace?: string;
  ethnie?: string;
  village?: string;
  region?: string;
  country?: string;
  colony?: string;
  plantation?: string;
  notes?: string;
  fatherId?: string;
  motherId?: string;
};

export type ArchiveType =
  | "fugitif"
  | "affranchissement"
  | "esclave"
  | "migration"
  | "vente"
  | "paroissial"
  | "navire"
  | "judiciaire"
  | "certificat"
  | "militaire";

export type ArchiveRecord = {
  id: string;
  type: ArchiveType;
  name: string;
  age?: string;
  date?: string;
  location?: string;
  origin?: string;
  destination?: string;
  owner?: string;
  ethnie?: string;
  plantation?: string;
  ship?: string;
  source: string;
  notes?: string;
};

export type TestimonyCategory =
  | "Résistance"
  | "Marronnage"
  | "Spiritualité"
  | "Colonisation"
  | "Héritage culturel"
  | "Diaspora"
  | "Transmission";

export type Testimony = {
  id: string;
  title: string;
  author: string;
  category: TestimonyCategory;
  language?: string;
  durationSec?: number;
  audioUrl?: string;
  text?: string;
  createdAt: string;
};
