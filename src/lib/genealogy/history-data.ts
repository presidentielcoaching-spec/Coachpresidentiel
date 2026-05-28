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
  region?: string;
  source?: string;
  link?: string;
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1441",
    title: "Premiers Africains capturés et déportés",
    description:
      "Antão Gonçalves et Nuno Tristão débarquent au Cap-Blanc et capturent 12 Africains qu'ils ramènent à Lisbonne — point de départ documenté de la traite atlantique.",
    tag: "traite",
    region: "Mauritanie / Portugal",
    source: "Crónica de Guiné de Gomes Eanes de Zurara (1453)",
  },
  {
    year: "1444",
    title: "Première vente publique de captifs à Lagos",
    description:
      "Lançarote de Lagos ramène 235 Africains capturés. Vente publique organisée le 8 août sur la place de Lagos en présence de l'infant Henri le Navigateur.",
    tag: "traite",
    region: "Portugal",
    source: "Crónica de Guiné, ch. 25 · Slave Voyages — Trans-Atlantic database",
  },
  {
    year: "1481",
    title: "Construction du fort São Jorge da Mina (Elmina)",
    description:
      "Premier fort européen en Afrique sub-saharienne, sur la Côte de l'Or. Deviendra hub majeur de la traite. Patrimoine UNESCO depuis 1979.",
    tag: "traite",
    region: "Côte de l'Or (Ghana)",
    source: "UNESCO World Heritage — Forts and Castles, Volta, Greater Accra",
    link: "https://whc.unesco.org/en/list/34/",
  },
  {
    year: "1492",
    title: "Premier voyage de Christophe Colomb",
    description:
      "Ouverture du « Nouveau Monde » européen et préfiguration de la systématisation de la traite vers les Amériques.",
    tag: "traite",
    region: "Caraïbes",
  },
  {
    year: "1502",
    title: "Premiers Africains à Hispaniola",
    description:
      "Première mention documentée d'esclaves africains au gouvernement de Nicolás de Ovando, à Saint-Domingue espagnole.",
    tag: "diaspora",
    region: "Hispaniola",
    source: "Archivo General de Indias, Séville, Patronato",
  },
  {
    year: "1518",
    title: "Première autorisation impériale de la traite directe",
    description:
      "Charles Quint accorde un asiento (licence) à Lorenzo de Gouvenod pour transporter 4 000 captifs directement d'Afrique vers les Amériques, sans transit par l'Espagne.",
    tag: "traite",
    region: "Empire espagnol",
    source: "Archivo General de Indias, Indiferente 419, lib. 7",
  },
  {
    year: "1526",
    title: "Premier soulèvement servile aux Amériques",
    description:
      "À San Miguel de Gualdape (actuelle Caroline du Sud / Géorgie), des captifs africains de l'expédition de Lucas Vázquez de Ayllón se révoltent et s'enfuient — premiers marrons d'Amérique du Nord.",
    tag: "résistance",
    region: "Amérique du Nord espagnole",
    source: "Peter Martyr d'Anghiera, Decades of the New World (1530)",
  },
  {
    year: "1605",
    title: "Fondation du Quilombo dos Palmares",
    description:
      "Vaste république marronne dans le sertão du Pernambouc. Jusqu'à 30 000 habitants. Défendue 89 ans, dernier roi : Zumbi (mort en 1695).",
    tag: "résistance",
    region: "Brésil (Pernambouc / Alagoas)",
    source: "Décio Freitas, Palmares: a guerra dos escravos (1973)",
  },
  {
    year: "1619",
    title: "Premiers Africains à Point Comfort, Virginie",
    description:
      "Le navire White Lion débarque « 20 and odd Negroes » à Point Comfort — point de départ documenté de l'esclavage en Amérique anglaise.",
    tag: "diaspora",
    region: "Virginie (colonie anglaise)",
    source: "Lettre de John Rolfe à Sir Edwin Sandys, 1619 — Ferrar Papers",
  },
  {
    year: "1655",
    title: "Conquête anglaise de la Jamaïque, formation des Marrons",
    description:
      "Les esclaves espagnols libérés par les Anglais se réfugient dans les Blue Mountains et le Cockpit Country. Naissance des communautés marronnes jamaïcaines.",
    tag: "résistance",
    region: "Jamaïque",
    source: "Mavis Campbell, The Maroons of Jamaica (1988)",
  },
  {
    year: "1685",
    title: "Code Noir de Louis XIV",
    description:
      "Édit royal de mars 1685 codifiant en 60 articles le statut juridique des esclaves dans les colonies françaises d'Amérique. Préparé par Colbert, promulgué par Louis XIV.",
    tag: "traite",
    region: "Colonies françaises",
    source: "Édit du roi servant de règlement (Code Noir) — texte intégral, ANOM",
    link: "https://anom.archivesnationales.culture.gouv.fr",
  },
  {
    year: "1739",
    title: "Insurrection de Stono",
    description:
      "Le 9 septembre, 60 à 100 esclaves d'origine kongo, menés par Jemmy, marchent vers la Floride espagnole en quête de liberté. Plus grande insurrection servile des 13 colonies anglaises avant 1776.",
    tag: "résistance",
    region: "Caroline du Sud",
    source: "Mark M. Smith, Stono: Documenting and Interpreting a Southern Slave Revolt (2005)",
  },
  {
    year: "1739",
    title: "Traité avec les Marrons de la Jamaïque",
    description:
      "Après 84 ans de guerre, le gouverneur Edward Trelawny reconnaît l'autonomie territoriale des Marrons sous le commandement de Cudjoe et Nanny. Première reconnaissance d'un État marron par une puissance coloniale.",
    tag: "résistance",
    region: "Jamaïque",
    source: "Treaty with Captain Cudjoe, 1 March 1739 — Jamaica Archives",
  },
  {
    year: "1758",
    title: "Exécution de François Makandal",
    description:
      "Hougan saint-domingois condamné au bûcher au Cap-Français le 20 janvier. Devient figure centrale du panthéon de résistance vaudou.",
    tag: "résistance",
    region: "Saint-Domingue",
    source: "Mémoire de Sébastien Courtin (1758) · ANOM, COL F3/88",
  },
  {
    year: "1772",
    title: "Somerset v. Stewart — Lord Mansfield",
    description:
      "Décision du Court of King's Bench : l'esclavage n'a pas de fondement en common law anglaise. Libère James Somerset. Pose les fondements du droit anti-esclavagiste métropolitain.",
    tag: "abolition",
    region: "Angleterre",
    source: "Somerset v. Stewart, 98 ER 499 (1772)",
  },
  {
    year: "1777",
    title: "Vermont, premier État à abolir l'esclavage",
    description:
      "La Constitution du Vermont interdit l'esclavage adulte. Premier acte abolitionniste constitutionnel sur le continent américain.",
    tag: "abolition",
    region: "Amérique du Nord",
    source: "Vermont Constitution, July 8, 1777, Chapter I, Article 1",
  },
  {
    year: "1781",
    title: "Massacre du Zong",
    description:
      "Le capitaine Collingwood jette 132 captifs vivants à la mer pour toucher l'assurance. Procès en 1783 sur l'indemnisation. Mobilise Equiano et Sharp ; accélère l'abolitionnisme britannique.",
    tag: "résistance",
    region: "Atlantique / Angleterre",
    source: "James Walvin, The Zong (Yale, 2011)",
  },
  {
    year: "1788",
    title: "Société des Amis des Noirs",
    description:
      "Fondée à Paris par Brissot, Mirabeau, Condorcet, Grégoire, La Fayette. Première société abolitionniste française, inspirée de la Society for the Abolition of the Slave Trade (Londres, 1787).",
    tag: "abolition",
    region: "France",
    source: "Marcel Dorigny et Bernard Gainot, La Société des Amis des Noirs (1998)",
  },
  {
    year: "1791",
    title: "Cérémonie du Bois Caïman et insurrection générale",
    description:
      "Cérémonie vaudou présidée par Dutty Boukman et Cécile Fatiman dans la nuit du 14 août. L'insurrection éclate le 22 août dans la Plaine du Nord — début de la Révolution haïtienne.",
    tag: "résistance",
    region: "Saint-Domingue",
    source: "Carolyn Fick, The Making of Haiti (1990)",
  },
  {
    year: "1794",
    title: "Première abolition française (16 pluviôse an II)",
    description:
      "Décret de la Convention nationale, sous la pression des députés noirs Belley, Mills et Dufay, et du soulèvement haïtien. « Tous les hommes, sans distinction de couleur, domiciliés dans les colonies, sont citoyens français. »",
    tag: "abolition",
    region: "République française",
    source: "Décret du 4 février 1794, Archives parlementaires",
  },
  {
    year: "1795",
    title: "Soulèvement de Tula à Curaçao",
    description:
      "17 août : Tula Rigaud mène 1 000 insurgés contre l'esclavage sur la plantation Knip. Réprimé en octobre. Tula proclamé héros national en 2010.",
    tag: "résistance",
    region: "Curaçao (Antilles néerlandaises)",
    source: "Nationaal Archief Den Haag, 1.05.12.01",
  },
  {
    year: "1802",
    title: "Rétablissement de l'esclavage par Bonaparte",
    description:
      "Loi du 20 mai (30 floréal an X). Soulèvements de Louis Delgrès en Guadeloupe (sacrifice de Matouba, 28 mai) et de Solitude (exécutée le 29 novembre).",
    tag: "résistance",
    region: "République française",
    source: "Bulletin des lois, an X · SHD, GR 8YD",
  },
  {
    year: "1804",
    title: "Indépendance d'Haïti — 1ʳᵉ république noire",
    description:
      "Proclamation par Jean-Jacques Dessalines le 1ᵉʳ janvier à Gonaïves. Premier État indépendant d'Amérique latine, premier abolissant définitivement l'esclavage par sa Constitution (1805).",
    tag: "résistance",
    region: "Haïti",
    source: "Acte de l'Indépendance, 1ᵉʳ janvier 1804 — Archives nationales d'Haïti",
  },
  {
    year: "1807",
    title: "Slave Trade Act britannique",
    description:
      "Le Parlement de Westminster abolit la traite atlantique dans tout l'Empire britannique. Application effective à partir du 1er mai 1807.",
    tag: "abolition",
    region: "Empire britannique",
    source: "An Act for the Abolition of the Slave Trade, 25 March 1807",
  },
  {
    year: "1811",
    title: "German Coast Uprising (Louisiane)",
    description:
      "Charles Deslondes, esclave créole, mène la plus grande révolte servile de l'histoire des États-Unis : 200 à 500 esclaves marchent sur la Nouvelle-Orléans (8-10 janvier).",
    tag: "résistance",
    region: "Louisiane",
    source: "Daniel Rasmussen, American Uprising (Harper, 2011)",
  },
  {
    year: "1815",
    title: "Congrès de Vienne — déclaration anti-traite",
    description:
      "Le 8 février, les puissances européennes condamnent collectivement la traite « comme étant répugnante aux principes d'humanité et de la morale universelle ». Engagement non contraignant.",
    tag: "abolition",
    region: "Europe",
    source: "Acte final du Congrès de Vienne, art. 118",
  },
  {
    year: "1822",
    title: "Procès de Denmark Vesey",
    description:
      "Charpentier libre de Charleston, condamné et pendu pour avoir projeté la plus vaste insurrection servile d'Amérique du Nord (jusqu'à 9 000 participants).",
    tag: "résistance",
    region: "Caroline du Sud",
    source: "An Official Report of the Trials of Sundry Negroes (1822)",
  },
  {
    year: "1823",
    title: "Insurrection de Demerara",
    description:
      "13 000 esclaves se révoltent sur 60 plantations sucrières. La mort en prison du missionnaire John Smith (« Demerara martyr ») mobilise l'opinion britannique vers l'abolition.",
    tag: "résistance",
    region: "Guyane britannique",
    source: "TNA UK, CO 111/39-44",
  },
  {
    year: "1831-1832",
    title: "Baptist War / Sam Sharpe",
    description:
      "60 000 esclaves jamaïcains en grève générale (25 décembre 1831 — 4 janvier 1832). Plus de 340 exécutions. Sam Sharpe, diacre baptiste, pendu le 23 mai 1832 — Héros national jamaïcain depuis 1975.",
    tag: "résistance",
    region: "Jamaïque",
    source: "Jamaica Archives, 1B/5/14",
  },
  {
    year: "1831",
    title: "Insurrection de Nat Turner",
    description:
      "21-22 août : prédicateur baptiste, mène l'insurrection la plus meurtrière pour les Blancs aux États-Unis (env. 60 victimes). Pendu le 11 novembre. Provoque le durcissement massif des codes esclavagistes du Sud.",
    tag: "résistance",
    region: "Virginie",
    source: "The Confessions of Nat Turner (T.R. Gray, 1831)",
  },
  {
    year: "1834",
    title: "Slavery Abolition Act britannique",
    description:
      "Effectif au 1er août 1834. Émancipation graduelle (apprentissage jusqu'en 1838). 800 000 personnes libérées. Indemnité de 20 millions £ versée aux propriétaires d'esclaves — recensée par le projet « Legacies of British Slave-ownership » (UCL).",
    tag: "abolition",
    region: "Empire britannique",
    source: "Slavery Abolition Act 1833 (3 & 4 Will. IV c. 73)",
    link: "https://www.ucl.ac.uk/lbs/",
  },
  {
    year: "1839",
    title: "Soulèvement de l'Amistad",
    description:
      "53 captifs Mende, embarqués illégalement à Lomboko, se révoltent sur la goélette Amistad. Procès devant la Cour suprême américaine : libérés le 9 mars 1841 (John Quincy Adams plaide).",
    tag: "résistance",
    region: "Atlantique / Connecticut",
    source: "U.S. v. The Amistad, 40 U.S. 518 (1841)",
  },
  {
    year: "1843",
    title: "Victoire de Furcy à la Cour royale de Paris",
    description:
      "Après 26 ans de procédure (1817-1843), Furcy Madeleine, esclave de La Réunion, est reconnu libre par arrêt du 23 décembre. Plus long procès d'émancipation de l'histoire coloniale française.",
    tag: "abolition",
    region: "La Réunion / France",
    source: "Mohammed Aïssaoui, L'Affaire de l'esclave Furcy (Gallimard, 2010)",
  },
  {
    year: "1848",
    title: "Abolition française définitive (Schoelcher)",
    description:
      "Décret du 27 avril porté par Victor Schoelcher au nom du gouvernement provisoire de la Deuxième République. Effet immédiat. 250 000 personnes libérées dans les colonies françaises.",
    tag: "abolition",
    region: "Colonies françaises",
    source: "Décret du 27 avril 1848, Bulletin officiel",
  },
  {
    year: "1850",
    title: "Fugitive Slave Act (États-Unis)",
    description:
      "Renforcement de la loi de 1793. Oblige les habitants des États libres à coopérer à la recapture des fugitifs. Décuple l'activité de l'Underground Railroad et la militance abolitionniste.",
    tag: "traite",
    region: "États-Unis",
    source: "Fugitive Slave Act, 18 September 1850",
  },
  {
    year: "1857",
    title: "Dred Scott v. Sandford",
    description:
      "60 U.S. 393 : la Cour suprême des États-Unis nie la citoyenneté aux personnes d'ascendance africaine. Décision parmi les plus infamantes de l'histoire judiciaire américaine.",
    tag: "traite",
    region: "États-Unis",
    source: "Dred Scott v. Sandford, 60 U.S. 393 (1857)",
  },
  {
    year: "1863",
    title: "Emancipation Proclamation",
    description:
      "1ᵉʳ janvier : Abraham Lincoln proclame libres tous les esclaves des États en rébellion. Mesure de guerre devenue acte fondateur de l'abolition américaine.",
    tag: "abolition",
    region: "États-Unis",
    source: "Emancipation Proclamation, National Archives, 1 January 1863",
  },
  {
    year: "1865",
    title: "13e amendement (États-Unis)",
    description:
      "Ratifié le 6 décembre : « Neither slavery nor involuntary servitude... shall exist within the United States. » Abolit constitutionnellement l'esclavage, à l'exception des condamnés.",
    tag: "abolition",
    region: "États-Unis",
    source: "U.S. Constitution, Thirteenth Amendment",
  },
  {
    year: "1871",
    title: "Loi du Ventre Libre (Brésil)",
    description:
      "Lei do Ventre Livre (Loi Rio Branco) : les enfants nés d'esclaves sont déclarés libres. Première étape de l'abolition brésilienne progressive.",
    tag: "abolition",
    region: "Brésil",
    source: "Lei nº 2.040 de 28 de Setembro de 1871",
  },
  {
    year: "1885",
    title: "Conférence de Berlin",
    description:
      "Partage colonial de l'Afrique entre puissances européennes. Conséquences directes sur les migrations forcées, la traite intérieure et les déplacements de populations.",
    tag: "diaspora",
    region: "Berlin / Afrique",
    source: "Acte général de la Conférence de Berlin, 26 février 1885",
  },
  {
    year: "1888",
    title: "Lei Áurea (Brésil)",
    description:
      "13 mai : la princesse Isabelle abolit l'esclavage au Brésil sans indemnité ni programme d'intégration. Dernier pays d'Amérique à le faire. 1,5 million de personnes libérées.",
    tag: "abolition",
    region: "Brésil",
    source: "Lei nº 3.353 de 13 de Maio de 1888",
  },
  {
    year: "1900",
    title: "Premier Congrès panafricain (Londres)",
    description:
      "Organisé par Henry Sylvester Williams (Trinidad) à Westminster Town Hall. W.E.B. Du Bois y prononce « To the Nations of the World ». Naissance du panafricanisme moderne.",
    tag: "mémoire",
    region: "Londres",
    source: "Marika Sherwood, Origins of Pan-Africanism (Routledge, 2011)",
  },
  {
    year: "1915-1925",
    title: "Mouvement Garvey — Black Star Line",
    description:
      "Marcus Garvey (Jamaïque) fonde l'UNIA-ACL et la Black Star Line. Plus grand mouvement de masse noir de l'histoire (6 millions de membres revendiqués).",
    tag: "diaspora",
    region: "Caraïbes / Amérique du Nord",
    source: "Marcus Garvey, Philosophy and Opinions (1923)",
  },
  {
    year: "1920-1930",
    title: "Harlem Renaissance",
    description:
      "Renaissance artistique et intellectuelle afro-américaine à Harlem. Langston Hughes, Zora Neale Hurston, Duke Ellington, Aaron Douglas redéfinissent l'esthétique noire moderne.",
    tag: "mémoire",
    region: "New York",
    source: "Alain Locke, The New Negro (1925)",
  },
  {
    year: "1934",
    title: "Manifeste de la Négritude",
    description:
      "Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas fondent L'Étudiant noir. Naissance de la Négritude comme mouvement littéraire et politique de réaffirmation.",
    tag: "mémoire",
    region: "Paris",
    source: "L'Étudiant noir, n°1, mars 1935",
  },
  {
    year: "1956",
    title: "1ᵉʳ Congrès des écrivains et artistes noirs (Sorbonne)",
    description:
      "Organisé par Présence africaine sous la présidence de Jean Price-Mars. Rassemble Césaire, Senghor, Wright, Fanon, James Baldwin — fondation intellectuelle des indépendances.",
    tag: "mémoire",
    region: "Paris",
    source: "Présence africaine, n°8-9-10, juin-novembre 1956",
  },
  {
    year: "1960",
    title: "Année de l'Afrique",
    description:
      "17 États africains accèdent à l'indépendance en une seule année. Réorganisation politique du continent — racines des migrations contemporaines.",
    tag: "diaspora",
    region: "Afrique",
    source: "Résolution AGNU 1514 (XV), 14 décembre 1960",
  },
  {
    year: "1963",
    title: "Création du BUMIDOM",
    description:
      "Bureau pour le développement des migrations dans les départements d'outre-mer. Organise la migration de 160 000 Antillais, Guyanais et Réunionnais vers la métropole (1963-1981).",
    tag: "diaspora",
    region: "France / DOM",
    source: "Décret du 26 avril 1963 — Archives nationales, BUMIDOM",
  },
  {
    year: "1998",
    title: "150e anniversaire de l'abolition française",
    description:
      "Commémorations nationales. Marche silencieuse du 23 mai à Paris (40 000 personnes à l'appel du Comité Marche du 23 mai 1998).",
    tag: "mémoire",
    region: "France",
    source: "Rapport CPME — Comité pour une commémoration unitaire",
  },
  {
    year: "2001",
    title: "Loi Taubira (France)",
    description:
      "Loi du 21 mai 2001 : la République française reconnaît la traite et l'esclavage comme crimes contre l'humanité. Première reconnaissance législative au monde.",
    tag: "mémoire",
    region: "France",
    source: "Loi nº 2001-434 du 21 mai 2001",
  },
  {
    year: "2006",
    title: "Journée nationale du 10 mai",
    description:
      "Instituée par décret du 31 mars 2006 : Journée nationale des mémoires de la traite, de l'esclavage et de leurs abolitions.",
    tag: "mémoire",
    region: "France",
    source: "Décret nº 2006-388 du 31 mars 2006",
  },
  {
    year: "2012",
    title: "Inauguration du Mémorial ACTe (Guadeloupe)",
    description:
      "Centre caribéen d'expressions et de mémoire de la traite et de l'esclavage. Ouvert au public en mai 2015 à Pointe-à-Pitre.",
    tag: "mémoire",
    region: "Guadeloupe",
    source: "Mémorial ACTe — site officiel",
    link: "https://memorial-acte.fr",
  },
  {
    year: "2015-2024",
    title: "Décennie internationale des personnes d'ascendance africaine",
    description:
      "Programme ONU « Reconnaissance, justice et développement ». Résolution AGNU 68/237 du 23 décembre 2013.",
    tag: "mémoire",
    region: "Mondial",
    source: "Résolution AGNU 68/237",
    link: "https://www.un.org/fr/observances/decade-people-african-descent",
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
