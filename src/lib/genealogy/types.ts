export type Gender = "M" | "F" | "X";

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  gender?: Gender;
  birthDate?: string;
  deathDate?: string;
  birthPlace?: string;
  notes?: string;
  fatherId?: string;
  motherId?: string;
};

export type ArchiveType =
  | "fugitif"
  | "affranchissement"
  | "esclave"
  | "migration";

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
  source: string;
  notes?: string;
};
