export type MapPoint = {
  id: string;
  name: string;
  category:
    | "port-negrier"
    | "port-destination"
    | "marronnage"
    | "plantation"
    | "royaume"
    | "affranchissement";
  region: string;
  modernCountry: string;
  /** Approx longitude/latitude (decimal degrees) */
  lng: number;
  lat: number;
  description: string;
  period?: string;
};

export const MAP_POINTS: MapPoint[] = [
  // ── Ports négriers africains ─────────────────────────────────────
  {
    id: "goree",
    name: "Île de Gorée",
    category: "port-negrier",
    region: "Sénégambie",
    modernCountry: "Sénégal",
    lng: -17.4,
    lat: 14.67,
    period: "XVe — XIXe s.",
    description:
      "Maison des Esclaves et porte du voyage sans retour. Patrimoine mondial UNESCO.",
  },
  {
    id: "saint-louis",
    name: "Saint-Louis du Sénégal",
    category: "port-negrier",
    region: "Sénégambie",
    modernCountry: "Sénégal",
    lng: -16.49,
    lat: 16.03,
    period: "XVIIe — XIXe s.",
    description: "Comptoir français sur le fleuve Sénégal.",
  },
  {
    id: "ouidah",
    name: "Ouidah",
    category: "port-negrier",
    region: "Côte des Esclaves",
    modernCountry: "Bénin",
    lng: 2.08,
    lat: 6.36,
    period: "XVIIe — XIXe s.",
    description:
      "Principal port du royaume du Dahomey. Route des Esclaves vers la « Porte du non-retour ».",
  },
  {
    id: "elmina",
    name: "Elmina",
    category: "port-negrier",
    region: "Côte de l'Or",
    modernCountry: "Ghana",
    lng: -1.35,
    lat: 5.08,
    period: "XVe — XIXe s.",
    description:
      "Premier fort européen construit en Afrique sub-saharienne (1482). Patrimoine mondial UNESCO.",
  },
  {
    id: "bonny",
    name: "Bonny",
    category: "port-negrier",
    region: "Golfe du Biafra",
    modernCountry: "Nigeria",
    lng: 7.17,
    lat: 4.43,
    period: "XVIIe — XIXe s.",
    description: "Port majeur d'exportation depuis le royaume Igbo.",
  },
  {
    id: "loango",
    name: "Loango",
    category: "port-negrier",
    region: "Côte d'Angole",
    modernCountry: "République du Congo",
    lng: 11.83,
    lat: -4.65,
    period: "XVIe — XIXe s.",
    description: "Royaume Kongo. Plus grand pourvoyeur vers le Brésil.",
  },
  {
    id: "luanda",
    name: "Luanda",
    category: "port-negrier",
    region: "Angole",
    modernCountry: "Angola",
    lng: 13.23,
    lat: -8.81,
    period: "XVIe — XIXe s.",
    description: "Port portugais. Plus de 2 millions de captifs déportés.",
  },
  {
    id: "kilwa",
    name: "Kilwa",
    category: "port-negrier",
    region: "Océan Indien",
    modernCountry: "Tanzanie",
    lng: 39.51,
    lat: -8.96,
    period: "VIIIe — XIXe s.",
    description:
      "Route swahilie de la traite vers le Golfe persique et les Mascareignes.",
  },

  // ── Ports de destination ──────────────────────────────────────────
  {
    id: "cap-francais",
    name: "Cap-Français",
    category: "port-destination",
    region: "Caraïbes",
    modernCountry: "Haïti",
    lng: -72.2,
    lat: 19.76,
    period: "XVIIe — XVIIIe s.",
    description: "Premier port d'arrivée de la perle des Antilles.",
  },
  {
    id: "saint-pierre",
    name: "Saint-Pierre",
    category: "port-destination",
    region: "Caraïbes",
    modernCountry: "Martinique",
    lng: -61.18,
    lat: 14.74,
    period: "XVIIe — XIXe s.",
    description: "« Petit Paris » des Antilles. Détruit en 1902 par la Pelée.",
  },
  {
    id: "pointe-a-pitre",
    name: "Pointe-à-Pitre",
    category: "port-destination",
    region: "Caraïbes",
    modernCountry: "Guadeloupe",
    lng: -61.54,
    lat: 16.24,
    description: "Principal port négrier de la Guadeloupe.",
  },
  {
    id: "salvador",
    name: "Salvador de Bahia",
    category: "port-destination",
    region: "Brésil",
    modernCountry: "Brésil",
    lng: -38.51,
    lat: -12.97,
    period: "XVIe — XIXe s.",
    description: "Plus grand port négrier d'Amérique. 1,5 million de captifs.",
  },
  {
    id: "charleston",
    name: "Charleston",
    category: "port-destination",
    region: "Amérique du Nord",
    modernCountry: "États-Unis",
    lng: -79.94,
    lat: 32.78,
    description:
      "Principal port d'arrivée en Amérique du Nord (40 % des captifs vers les futurs USA).",
  },
  {
    id: "cartagena",
    name: "Carthagène des Indes",
    category: "port-destination",
    region: "Amérique du Sud",
    modernCountry: "Colombie",
    lng: -75.51,
    lat: 10.39,
    description: "Hub espagnol de redistribution vers l'Amérique espagnole.",
  },

  // ── Zones de marronnage ──────────────────────────────────────────
  {
    id: "palmares",
    name: "Quilombo dos Palmares",
    category: "marronnage",
    region: "Nordeste brésilien",
    modernCountry: "Brésil",
    lng: -36.4,
    lat: -9.0,
    period: "1605 — 1694",
    description:
      "République libre fondée par Ganga Zumba et défendue par Zumbi. Jusqu'à 30 000 habitants.",
  },
  {
    id: "morne-rouge",
    name: "Morne-Rouge / Pitons du Carbet",
    category: "marronnage",
    region: "Caraïbes",
    modernCountry: "Martinique",
    lng: -61.13,
    lat: 14.74,
    description: "Refuge des nègres marrons dans les hauteurs de l'île.",
  },
  {
    id: "bahoruco",
    name: "Sierra de Bahoruco",
    category: "marronnage",
    region: "Hispaniola",
    modernCountry: "République Dominicaine",
    lng: -71.5,
    lat: 18.2,
    period: "XVIIe — XVIIIe s.",
    description: "Royaume marron du Bahoruco, mené par le roi Sébastien Lemba.",
  },
  {
    id: "saramaka",
    name: "Pays Saramaka",
    category: "marronnage",
    region: "Guyane / Suriname",
    modernCountry: "Suriname",
    lng: -55.5,
    lat: 4.5,
    period: "XVIIIe s. — auj.",
    description: "Société marronne reconnue par traité en 1762.",
  },

  // ── Royaumes africains historiques ───────────────────────────────
  {
    id: "mali",
    name: "Empire du Mali",
    category: "royaume",
    region: "Soudan occidental",
    modernCountry: "Mali / Sénégal / Guinée",
    lng: -8.0,
    lat: 13.0,
    period: "XIIIe — XVIe s.",
    description: "Mansa Moussa, Tombouctou, université de Sankoré.",
  },
  {
    id: "songhai",
    name: "Empire Songhaï",
    category: "royaume",
    region: "Soudan occidental",
    modernCountry: "Mali / Niger",
    lng: -1.5,
    lat: 16.7,
    period: "XVe — XVIe s.",
    description: "Plus vaste empire d'Afrique de l'Ouest sous Askia Muhammad.",
  },
  {
    id: "benin",
    name: "Royaume du Bénin",
    category: "royaume",
    region: "Golfe de Guinée",
    modernCountry: "Nigeria",
    lng: 5.63,
    lat: 6.34,
    period: "XIIIe — XIXe s.",
    description: "Cité-État de Benin City. Bronzes du Bénin pillés en 1897.",
  },
  {
    id: "kongo",
    name: "Royaume du Kongo",
    category: "royaume",
    region: "Afrique centrale",
    modernCountry: "Angola / RDC",
    lng: 14.0,
    lat: -6.0,
    period: "XIVe — XIXe s.",
    description: "Christianisation au XVIe s. Reine Nzinga.",
  },
  {
    id: "ashanti",
    name: "Empire Ashanti",
    category: "royaume",
    region: "Côte de l'Or",
    modernCountry: "Ghana",
    lng: -1.62,
    lat: 6.69,
    period: "XVIIe — XXe s.",
    description: "Confédération akan. Tabouret d'Or. Capitale Kumasi.",
  },
  {
    id: "dahomey",
    name: "Royaume du Dahomey",
    category: "royaume",
    region: "Golfe de Guinée",
    modernCountry: "Bénin",
    lng: 2.33,
    lat: 7.2,
    period: "XVIIe — XIXe s.",
    description: "Amazones (Agojié). Résistance contre la conquête française (1894).",
  },

  // ── Plantations majeures ──────────────────────────────────────────
  {
    id: "breda",
    name: "Habitation Bréda",
    category: "plantation",
    region: "Saint-Domingue",
    modernCountry: "Haïti",
    lng: -72.25,
    lat: 19.66,
    description: "Lieu de naissance de Toussaint Louverture.",
  },
  {
    id: "clement",
    name: "Habitation Clément",
    category: "plantation",
    region: "Caraïbes",
    modernCountry: "Martinique",
    lng: -60.9,
    lat: 14.6,
    description: "Domaine sucrier puis distillerie de rhum. Site mémoriel.",
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  tag:
    | "traite"
    | "résistance"
    | "abolition"
    | "diaspora"
    | "mémoire";
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1444",
    title: "Premiers captifs déportés au Portugal",
    description:
      "Lagos (Portugal) accueille la première vente publique de 235 Africains capturés par Lançarote de Lagos.",
    tag: "traite",
  },
  {
    year: "1492",
    title: "Découverte des Amériques",
    description:
      "Ouverture du « Nouveau Monde » et déclenchement de la traite transatlantique systématique.",
    tag: "traite",
  },
  {
    year: "1518",
    title: "Premier voyage négrier direct",
    description:
      "Charles Quint autorise le transport direct d'Afrique vers les Amériques.",
    tag: "traite",
  },
  {
    year: "1605",
    title: "Fondation du Quilombo dos Palmares",
    description:
      "République marronne du Brésil, défendue durant 89 ans. Zumbi en devient le roi.",
    tag: "résistance",
  },
  {
    year: "1619",
    title: "Premiers Africains en Virginie",
    description:
      "Vingt « négros » débarquent à Point Comfort, point de départ de l'esclavage en Amérique anglaise.",
    tag: "diaspora",
  },
  {
    year: "1685",
    title: "Code Noir",
    description:
      "Édit royal de Louis XIV régissant le statut des esclaves dans les colonies françaises.",
    tag: "traite",
  },
  {
    year: "1739",
    title: "Insurrection de Stono",
    description:
      "Soulèvement d'Africains kongo en Caroline du Sud, mené par Jemmy.",
    tag: "résistance",
  },
  {
    year: "1758",
    title: "Procès de Makandal",
    description:
      "Houngan saint-domingois condamné au bûcher. Devient figure de la résistance vaudou.",
    tag: "résistance",
  },
  {
    year: "1791",
    title: "Insurrection du Bois Caïman",
    description:
      "Cérémonie vaudou dans le nord de Saint-Domingue, déclenchement de la Révolution haïtienne.",
    tag: "résistance",
  },
  {
    year: "1794",
    title: "Première abolition française",
    description:
      "La Convention abolit l'esclavage dans les colonies françaises (16 pluviôse an II).",
    tag: "abolition",
  },
  {
    year: "1802",
    title: "Rétablissement par Bonaparte",
    description:
      "Loi du 20 mai rétablit l'esclavage. Soulèvement de Delgrès en Guadeloupe.",
    tag: "résistance",
  },
  {
    year: "1804",
    title: "Indépendance d'Haïti",
    description:
      "Première république noire indépendante au monde, proclamée par Dessalines.",
    tag: "résistance",
  },
  {
    year: "1807-1808",
    title: "Abolitions britannique et américaine de la traite",
    description:
      "Slave Trade Act au Royaume-Uni (1807) et interdiction d'importer aux États-Unis (1808).",
    tag: "abolition",
  },
  {
    year: "1834",
    title: "Abolition britannique",
    description:
      "Slavery Abolition Act : libération progressive dans l'empire britannique.",
    tag: "abolition",
  },
  {
    year: "1848",
    title: "Abolition française définitive",
    description:
      "Décret du 27 avril porté par Victor Schœlcher. 250 000 personnes libérées.",
    tag: "abolition",
  },
  {
    year: "1865",
    title: "13e amendement (États-Unis)",
    description:
      "Abolition de l'esclavage aux États-Unis après la guerre de Sécession.",
    tag: "abolition",
  },
  {
    year: "1888",
    title: "Lei Áurea (Brésil)",
    description:
      "Dernier pays d'Amérique à abolir l'esclavage, sous la princesse Isabelle.",
    tag: "abolition",
  },
  {
    year: "1963",
    title: "Création du BUMIDOM",
    description:
      "Bureau pour le développement des migrations des départements d'outre-mer.",
    tag: "diaspora",
  },
  {
    year: "2001",
    title: "Loi Taubira (France)",
    description:
      "Reconnaissance de la traite et de l'esclavage comme crimes contre l'humanité.",
    tag: "mémoire",
  },
  {
    year: "2015",
    title: "Décennie internationale des personnes d'ascendance africaine",
    description:
      "Programme ONU 2015-2024 : reconnaissance, justice, développement.",
    tag: "mémoire",
  },
];

export type ExternalSource = {
  id: string;
  name: string;
  url: string;
  description: string;
  region: string;
};

export const EXTERNAL_SOURCES: ExternalSource[] = [
  {
    id: "slavevoyages",
    name: "Slave Voyages",
    url: "https://www.slavevoyages.org",
    description:
      "Base de données de référence : 36 000+ voyages négriers, 12 millions de captifs documentés.",
    region: "International",
  },
  {
    id: "unesco-routes",
    name: "UNESCO — La Route de l'esclave",
    url: "https://www.unesco.org/fr/routes-enslaved-peoples",
    description:
      "Projet international de réflexion sur les routes de la traite et leurs héritages.",
    region: "International",
  },
  {
    id: "anom",
    name: "Archives nationales d'Outre-mer (ANOM)",
    url: "https://anom.archivesnationales.culture.gouv.fr",
    description:
      "État civil colonial, recensements, registres d'affranchissements, fonds judiciaires.",
    region: "France",
  },
  {
    id: "loc",
    name: "Library of Congress — African American",
    url: "https://www.loc.gov/collections/?fa=subject:african+americans",
    description:
      "Collections numérisées : esclavage, abolitionnisme, narratives d'esclaves WPA.",
    region: "États-Unis",
  },
  {
    id: "national-archives-uk",
    name: "National Archives (UK)",
    url: "https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/slavery/",
    description: "Guides de recherche sur la traite et l'abolition britanniques.",
    region: "Royaume-Uni",
  },
  {
    id: "national-archives-us",
    name: "National Archives (USA)",
    url: "https://www.archives.gov/research/african-americans",
    description: "Recensements, Freedmen's Bureau, militaires de couleur.",
    region: "États-Unis",
  },
  {
    id: "endangered-archives",
    name: "Endangered Archives Programme (British Library)",
    url: "https://eap.bl.uk",
    description: "Numérisation de fonds africains et diasporiques fragiles.",
    region: "International",
  },
  {
    id: "memoire-esclavage",
    name: "Fondation pour la Mémoire de l'Esclavage",
    url: "https://memoire-esclavage.org",
    description: "Ressources, expositions, archives de la FME.",
    region: "France",
  },
  {
    id: "anq",
    name: "Bibliothèque et Archives nationales du Québec",
    url: "https://www.banq.qc.ca",
    description: "Archives judiciaires de la Nouvelle-France (procès Angélique).",
    region: "Canada",
  },
  {
    id: "matricula",
    name: "Matrícula dos Escravos (Brésil)",
    url: "http://www.siaapm.cultura.mg.gov.br",
    description: "Recensements brésiliens de 1872 et matricules d'escravos.",
    region: "Brésil",
  },
];
