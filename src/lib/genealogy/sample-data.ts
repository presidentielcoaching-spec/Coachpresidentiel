import type { ArchiveRecord, ArchiveType } from "./types";

export const SAMPLE_ARCHIVES: ArchiveRecord[] = [
  // ── Registre des fugitifs ──────────────────────────────────────────
  {
    id: "fug_001",
    type: "fugitif",
    name: "Marie-Joseph Angélique",
    age: "29 ans",
    date: "1734-04-10",
    location: "Montréal, Nouvelle-France",
    origin: "Madère (Portugal)",
    owner: "Thérèse de Couagne, veuve Francheville",
    source: "Archives nationales du Québec — Procès criminels, 1734",
    notes:
      "Connue pour avoir tenté de fuir vers la Nouvelle-Angleterre avec Claude Thibault.",
  },
  {
    id: "fug_002",
    type: "fugitif",
    name: "Louis dit Coffi",
    age: "32 ans",
    date: "1791-08-22",
    location: "Cap-Français, Saint-Domingue",
    origin: "Côte de l'Or",
    ethnie: "Akan",
    plantation: "Habitation Galliffet",
    owner: "Habitation Galliffet",
    source: "Affiches américaines, n°68, 1791",
    notes: "Description : taille moyenne, marques d'initiation au visage.",
  },
  {
    id: "fug_003",
    type: "fugitif",
    name: "Rosalie",
    age: "24 ans",
    date: "1806-03-15",
    location: "Pointe-à-Pitre, Guadeloupe",
    origin: "Sénégambie",
    ethnie: "Wolof",
    owner: "Sieur Pinel",
    source: "Gazette de la Guadeloupe, 1806",
    notes: "Récompense offerte de 50 livres tournois.",
  },
  {
    id: "fug_004",
    type: "fugitif",
    name: "Jean-Baptiste",
    age: "40 ans",
    date: "1822-11-02",
    location: "Saint-Pierre, Martinique",
    origin: "Né dans la colonie",
    plantation: "Habitation Lajus",
    owner: "Habitation Lajus",
    source: "Journal officiel de la Martinique, 1822",
    notes: "Parle français et créole. Marqué d'une cicatrice au bras gauche.",
  },
  {
    id: "fug_005",
    type: "fugitif",
    name: "Cécile",
    age: "19 ans",
    date: "1838-07-19",
    location: "La Nouvelle-Orléans, Louisiane",
    origin: "Née à Saint-Domingue",
    owner: "M. Dupré",
    source: "New Orleans Bee, 1838",
    notes: "Aurait rejoint la communauté marronne du bayou Lafourche.",
  },

  // ── Registre des affranchissements ─────────────────────────────────
  {
    id: "aff_001",
    type: "affranchissement",
    name: "Toussaint Bréda (Louverture)",
    date: "1776-12-25",
    location: "Saint-Domingue",
    plantation: "Habitation Bréda",
    owner: "Bayon de Libertat",
    source: "Acte notarié, étude Bordier",
    notes: "Affranchi à l'âge de 33 ans environ.",
  },
  {
    id: "aff_002",
    type: "affranchissement",
    name: "Marie-Jeanne",
    age: "28 ans",
    date: "1789-05-12",
    location: "Basse-Terre, Guadeloupe",
    owner: "Sieur de Léogane",
    source: "Registre d'affranchissement, ANOM",
    notes:
      "Affranchissement gratuit pour services rendus, avec ses deux enfants.",
  },
  {
    id: "aff_003",
    type: "affranchissement",
    name: "Pierre dit Beausoleil",
    age: "45 ans",
    date: "1815-09-30",
    location: "Cayenne, Guyane française",
    owner: "Veuve Charpentier",
    source: "ANOM, Série G — Affranchissements",
    notes: "Rachat de liberté pour la somme de 2 000 livres.",
  },
  {
    id: "aff_004",
    type: "affranchissement",
    name: "Rose-Aimée",
    age: "22 ans",
    date: "1831-02-18",
    location: "Fort-Royal, Martinique",
    owner: "M. de Vaugirard",
    source: "Registre de l'état civil libre, 1831",
    notes: "Inscrite sous le nom patronymique « Léger » par décision officielle.",
  },
  {
    id: "aff_005",
    type: "affranchissement",
    name: "Jean-Louis Toussaint",
    age: "37 ans",
    date: "1848-04-27",
    location: "Saint-Pierre, Martinique",
    source: "Décret du 27 avril 1848 — Abolition de l'esclavage",
    notes: "Affranchissement général. Nouveau nom de famille attribué : Lestin.",
  },

  // ── Registre des esclaves (recensements) ───────────────────────────
  {
    id: "esc_001",
    type: "esclave",
    name: "Habitation Clément — recensement",
    date: "1817",
    location: "Le François, Martinique",
    plantation: "Habitation Clément",
    owner: "Famille Clément",
    source: "Recensement nominatif de 1817, ANOM",
    notes:
      "127 personnes recensées : 58 hommes, 64 femmes, 5 enfants en bas âge.",
  },
  {
    id: "esc_002",
    type: "esclave",
    name: "Émilie",
    age: "16 ans",
    date: "1826-01-01",
    location: "Habitation Sainte-Marie, Guadeloupe",
    origin: "Née dans la colonie",
    plantation: "Habitation Sainte-Marie",
    owner: "Sieur Boudet",
    source: "Matricule individuelle n°4421",
    notes: "Tâches : domestique. Mère : Marguerite, matricule 4128.",
  },
  {
    id: "esc_003",
    type: "esclave",
    name: "Habitation La Mahaudière — recensement",
    date: "1840",
    location: "Anse-Bertrand, Guadeloupe",
    plantation: "Habitation La Mahaudière",
    owner: "M. Douillard-Mahaudière",
    source: "Procès-verbal de visite, archives départementales",
    notes:
      "Procès retentissant relatif aux conditions de détention des esclaves.",
  },
  {
    id: "esc_004",
    type: "esclave",
    name: "Habitation Bréda — recensement",
    date: "1772",
    location: "Plaine du Nord, Saint-Domingue",
    plantation: "Habitation Bréda",
    owner: "Comte de Noé",
    source: "Inventaire après décès, étude Grimperel",
    notes: "Mention de Toussaint, cocher, 33 ans environ.",
  },
  {
    id: "esc_005",
    type: "esclave",
    name: "Habitation Beauport — recensement",
    date: "1836",
    location: "Le Moule, Guadeloupe",
    plantation: "Habitation Beauport",
    owner: "Famille Coquille-Dupuy",
    source: "Registre des matricules, série 6M",
    notes: "243 individus matriculés, dont 31 enfants nés depuis 1830.",
  },

  // ── Cartes de migration ────────────────────────────────────────────
  {
    id: "mig_001",
    type: "migration",
    name: "Adèle Pétronille",
    date: "1854-06-12",
    origin: "Pointe-à-Pitre, Guadeloupe",
    destination: "Colón, Panama",
    source: "Liste des passagers — vapeur La Sémillante",
    notes: "Engagée pour les travaux du chemin de fer transisthmique.",
  },
  {
    id: "mig_002",
    type: "migration",
    name: "François Désiré Auguste",
    date: "1923-09-04",
    origin: "Saint-Pierre, Martinique",
    destination: "Le Havre, France",
    source: "Manifeste passagers — Compagnie Générale Transatlantique",
    notes: "Carte d'identité coloniale n°M-1923-0871.",
  },
  {
    id: "mig_003",
    type: "migration",
    name: "Solange Marie-Claire",
    date: "1963-04-18",
    origin: "Fort-de-France, Martinique",
    destination: "Paris (Orly), France",
    source: "BUMIDOM — registre des arrivées 1963",
    notes:
      "Affectée comme aide-soignante à l'hôpital de la Pitié-Salpêtrière.",
  },
  {
    id: "mig_004",
    type: "migration",
    name: "Hippolyte Saint-Cyr",
    date: "1916-02-22",
    origin: "Cayenne, Guyane française",
    destination: "Marseille, France",
    source: "Registre de mobilisation — Bataillon des Antilles",
    notes:
      "Mobilisé dans le cadre de la Première Guerre mondiale, retour en 1919.",
  },
  {
    id: "mig_005",
    type: "migration",
    name: "Eulalie Joséphine",
    date: "1909-11-30",
    origin: "Saint-Louis du Sénégal",
    destination: "Bordeaux, France",
    source: "Liste de débarquement — port de Bordeaux",
    notes: "Accompagnée de deux enfants : Joseph (4 ans) et Marie (2 ans).",
  },
  {
    id: "mig_006",
    type: "migration",
    name: "Léopold Boniface",
    date: "1937-07-08",
    origin: "Cotonou, Dahomey",
    destination: "Dakar, AOF",
    source: "Registre des déplacements intérieurs AOF",
    notes: "Affecté comme commis à l'administration coloniale.",
  },

  // ── Actes de vente et d'achat ──────────────────────────────────────
  {
    id: "vte_001",
    type: "vente",
    name: "Vente de Jean-Pierre, 25 ans",
    date: "1789-03-14",
    location: "Saint-Pierre, Martinique",
    ethnie: "Kongo",
    owner: "De Vincent Lagarde à Sieur Mauduit",
    source: "Étude notariale Grémion, minute n°142",
    notes: "Prix : 1 800 livres tournois. Vendu avec garantie d'usage.",
  },
  {
    id: "vte_002",
    type: "vente",
    name: "Vente collective — 17 captifs",
    date: "1802-10-09",
    location: "Cap-Français, Saint-Domingue",
    origin: "Côte d'Angole",
    owner: "Compagnie de Guinée → divers planteurs",
    ship: "Le Saint-Esprit",
    source: "Acte notarié, étude Defaucamberge",
    notes:
      "Vente sur le quai à l'arrivée du navire. Mention de 4 décès durant la traversée.",
  },
  {
    id: "vte_003",
    type: "vente",
    name: "Vente de Marguerite et sa fille Lucie (3 ans)",
    date: "1821-05-22",
    location: "La Nouvelle-Orléans, Louisiane",
    owner: "De M. Marigny à M. Destrehan",
    source: "Notarial Archives, New Orleans, vol. XLIV",
    notes: "Mère et enfant vendues ensemble. Prix : 950 piastres.",
  },

  // ── Registres paroissiaux ──────────────────────────────────────────
  {
    id: "par_001",
    type: "paroissial",
    name: "Baptême de Joseph, mulâtre libre",
    date: "1768-08-15",
    location: "Paroisse Saint-Louis, Saint-Domingue",
    source: "Registre paroissial, ANOM, état civil colonial",
    notes:
      "Parrain : François Dupuy. Marraine : Catherine, négresse libre.",
  },
  {
    id: "par_002",
    type: "paroissial",
    name: "Mariage de Pierre et Rose-Marie",
    date: "1832-11-04",
    location: "Paroisse du Mouillage, Saint-Pierre, Martinique",
    source: "Registre paroissial, ADM",
    notes:
      "Deux libres de couleur. Témoins : Jean-Charles Lestin, Augustin Désir.",
  },
  {
    id: "par_003",
    type: "paroissial",
    name: "Sépulture d'Adélaïde, 67 ans",
    date: "1851-02-28",
    location: "Paroisse Sainte-Anne, Guadeloupe",
    source: "Registre paroissial, ADG",
    notes: "Veuve d'André Coquet. Ancienne affranchie de 1848.",
  },

  // ── Manifestes de navires négriers ─────────────────────────────────
  {
    id: "nav_001",
    type: "navire",
    name: "Le Bonne-Mère",
    date: "1742-07-12",
    origin: "Ouidah, Royaume du Dahomey",
    destination: "Cap-Français, Saint-Domingue",
    ship: "Le Bonne-Mère (capitaine Bernard de Nantes)",
    source: "Slave Voyages, ID 32401",
    notes:
      "Cargaison déclarée : 312 captifs embarqués. 47 décès durant la traversée.",
  },
  {
    id: "nav_002",
    type: "navire",
    name: "L'Aurore",
    date: "1786-04-05",
    origin: "Île de Gorée, Sénégal",
    destination: "Pointe-à-Pitre, Guadeloupe",
    ship: "L'Aurore (capitaine Le Mée)",
    source: "Slave Voyages, ID 33215 — Archives départementales 44",
    notes: "245 captifs, dont 92 femmes et 38 enfants.",
  },
  {
    id: "nav_003",
    type: "navire",
    name: "La Marie-Séraphique",
    date: "1769-11-22",
    origin: "Loango, Côte d'Angole",
    destination: "Cap-Français",
    ship: "La Marie-Séraphique (armateur Gruel, Nantes)",
    source: "Aquarelle conservée au Château des ducs de Bretagne",
    notes:
      "Document iconographique majeur : plan du navire avec disposition des captifs.",
  },
  {
    id: "nav_004",
    type: "navire",
    name: "Le Soleil d'Afrique",
    date: "1816-09-30",
    origin: "Bonny, golfe du Biafra",
    destination: "Salvador de Bahia, Brésil",
    ship: "Le Soleil d'Afrique",
    source: "Slave Voyages, ID 41280",
    notes: "Capture illégale après l'abolition britannique. 218 captifs.",
  },

  // ── Archives judiciaires coloniales ────────────────────────────────
  {
    id: "jud_001",
    type: "judiciaire",
    name: "Procès de Makandal",
    date: "1758-01-20",
    location: "Cap-Français, Saint-Domingue",
    source: "Greffe du Conseil supérieur du Cap",
    notes:
      "Houngan accusé d'empoisonnement, condamné au bûcher. Devenu figure de la résistance.",
  },
  {
    id: "jud_002",
    type: "judiciaire",
    name: "Affaire Lucile Delaune",
    date: "1840-06-18",
    location: "Pointe-à-Pitre, Guadeloupe",
    plantation: "Habitation La Mahaudière",
    source: "Cour royale, ADG, série 2U",
    notes:
      "Plainte pour traitements inhumains. Procès suivi par la presse abolitionniste.",
  },
  {
    id: "jud_003",
    type: "judiciaire",
    name: "Conjuration des esclaves de Saint-Pierre",
    date: "1822-10-12",
    location: "Saint-Pierre, Martinique",
    source: "Cour prévôtale, ANOM",
    notes: "21 esclaves jugés pour complot. 8 condamnations capitales.",
  },

  // ── Certificats de liberté ─────────────────────────────────────────
  {
    id: "cer_001",
    type: "certificat",
    name: "Certificat de liberté — Jean-François",
    date: "1849-06-12",
    location: "Cayenne, Guyane française",
    source: "Décret du 27 avril 1848 — registre des nouveaux libres",
    notes:
      "Nom patronymique attribué : Augustin. Numéro de matricule : 2841.",
  },
  {
    id: "cer_002",
    type: "certificat",
    name: "Certificat de liberté — Sophronie",
    date: "1848-08-22",
    location: "Basse-Terre, Guadeloupe",
    source: "Registre des affranchis 1848, ADG",
    notes: "Nom attribué : Délivrance. Inscription comme blanchisseuse.",
  },
  {
    id: "cer_003",
    type: "certificat",
    name: "Certificat individuel de rachat — Honoré",
    date: "1839-03-04",
    location: "Saint-Denis, La Réunion",
    source: "ANOM, série G — Bourbon",
    notes: "Liberté rachetée par sa mère pour 1 200 francs.",
  },

  // ── Documents militaires coloniaux ─────────────────────────────────
  {
    id: "mil_001",
    type: "militaire",
    name: "Bataillon des Tirailleurs sénégalais",
    date: "1857",
    location: "Saint-Louis du Sénégal",
    source: "Service historique de la Défense, série GR 2H",
    notes:
      "Création du corps par Louis Faidherbe. Liste nominative des premiers engagés.",
  },
  {
    id: "mil_002",
    type: "militaire",
    name: "Pension de soldat — Aristide Mocquereau",
    date: "1919-05-15",
    location: "Fort-de-France, Martinique",
    source: "Bataillon des Antilles, SHD",
    notes:
      "Engagé volontaire 1914, blessé à Verdun. Pension accordée à 60 %.",
  },
  {
    id: "mil_003",
    type: "militaire",
    name: "Régistre des Bossales armés",
    date: "1791-09-08",
    location: "Plaine du Nord, Saint-Domingue",
    source: "Archives de l'armée révolutionnaire — Bois Caïman",
    notes:
      "Insurrection générale. Liste partielle des combattants identifiés.",
  },
];

export const ARCHIVE_LABELS: Record<
  ArchiveType,
  { title: string; subtitle: string; sourceHint: string }
> = {
  fugitif: {
    title: "Registre des fugitifs",
    subtitle:
      "Avis de fuite et descriptions publiés dans les gazettes coloniales.",
    sourceHint: "Affiches américaines · Gazettes coloniales · ANOM",
  },
  affranchissement: {
    title: "Registre des affranchissements",
    subtitle:
      "Actes de libération individuelle, rachats et affranchissements collectifs.",
    sourceHint: "ANOM Série G · Études notariales · Décret de 1848",
  },
  esclave: {
    title: "Registre des esclaves",
    subtitle:
      "Recensements nominatifs, matricules d'habitation et inventaires.",
    sourceHint: "Recensements coloniaux · Inventaires après décès",
  },
  migration: {
    title: "Cartes de migration",
    subtitle:
      "Listes de passagers, manifestes maritimes et registres d'arrivée.",
    sourceHint: "BUMIDOM · Compagnies maritimes · Archives portuaires",
  },
  vente: {
    title: "Actes de vente et d'achat",
    subtitle:
      "Minutes notariales documentant les transactions sur les personnes.",
    sourceHint: "Études notariales · ANOM · Notarial Archives (USA)",
  },
  paroissial: {
    title: "Registres paroissiaux",
    subtitle:
      "Baptêmes, mariages, sépultures dans les paroisses coloniales.",
    sourceHint: "État civil colonial · Archives diocésaines",
  },
  navire: {
    title: "Manifestes de navires négriers",
    subtitle:
      "Cargaisons humaines : ports d'embarquement, capitaines, traversées.",
    sourceHint: "Slave Voyages · Châteaux des ducs de Bretagne · ADLA",
  },
  judiciaire: {
    title: "Archives judiciaires coloniales",
    subtitle:
      "Procès, conjurations, plaintes : la justice à l'épreuve de l'esclavage.",
    sourceHint: "Conseils supérieurs · Cours royales · ANOM",
  },
  certificat: {
    title: "Certificats de liberté",
    subtitle:
      "Documents attestant le statut d'homme ou de femme libre.",
    sourceHint: "Registres post-1848 · ANOM Série G",
  },
  militaire: {
    title: "Documents militaires coloniaux",
    subtitle:
      "Engagements, pensions, registres des corps coloniaux et insurrectionnels.",
    sourceHint: "SHD · ANOM · Mémoire des hommes",
  },
};
