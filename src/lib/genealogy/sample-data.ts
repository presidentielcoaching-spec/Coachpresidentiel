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
    name: "Procès de François Makandal",
    date: "1758-01-20",
    location: "Cap-Français, Saint-Domingue",
    court: "Conseil supérieur du Cap-Français",
    verdict:
      "Condamnation au bûcher pour empoisonnement et lèse-majesté divine.",
    figures: ["François Makandal", "Procureur général Courtin"],
    archiveRef: "ANOM, COL F3/88, fol. 252-281",
    source: "Greffe du Conseil supérieur du Cap — Mémoire de Sébastien Courtin",
    notes:
      "Maroon évadé de la plantation Lenormand de Mézy, hougan vaudou, accusé d'avoir organisé un vaste réseau d'empoisonnement contre les colons (1751-1757). Capturé en janvier 1758 à un bamboche sur l'habitation Dufresne. Exécuté le 20 janvier au Cap. Sa figure devient centrale dans le panthéon de la résistance haïtienne : son nom (« mandingue » → maker, talisman) reste synonyme d'amulette de pouvoir.",
    externalLinks: [
      {
        label: "Mémoire de Courtin — édition Pluchon (1987)",
        url: "https://www.persee.fr",
      },
    ],
  },
  {
    id: "jud_002",
    type: "judiciaire",
    name: "Affaire La Mahaudière — Lucile et la fille Stéphani",
    date: "1840-06-18",
    location: "Anse-Bertrand, Guadeloupe",
    plantation: "Habitation La Mahaudière",
    court: "Cour d'assises de la Pointe-à-Pitre",
    verdict:
      "Acquittement du maître Douillard-Mahaudière (1841). Verdict scandale en métropole, relance le mouvement abolitionniste.",
    figures: [
      "Dadou (esclave plaignante)",
      "Lucile (martyrisée)",
      "Maître Douillard-Mahaudière",
      "Bissette (avocat à Paris)",
    ],
    archiveRef: "Archives départementales de la Guadeloupe, série 2U/2",
    source:
      "Cour d'assises ADG · Le Siècle, Le National (presse abolitionniste 1840-1842)",
    notes:
      "Lucile, esclave de l'habitation, est trouvée enchaînée 22 mois dans un cachot souterrain. Dénoncée par Dadou. Schoelcher et Bissette s'emparent de l'affaire. L'acquittement du maître par un jury blanc devient un argument décisif dans la marche vers 1848.",
    externalLinks: [
      {
        label: "Schoelcher — Des colonies françaises (1842)",
        url: "https://gallica.bnf.fr",
      },
    ],
  },
  {
    id: "jud_003",
    type: "judiciaire",
    name: "Conjuration de Saint-Pierre",
    date: "1822-10-12",
    location: "Saint-Pierre, Martinique",
    court: "Cour prévôtale extraordinaire",
    verdict:
      "21 esclaves jugés. 8 condamnations à mort par décapitation, 7 aux galères à perpétuité, 6 condamnations diverses.",
    figures: ["Magloire (cuisinier)", "Marie-Élisabeth", "François"],
    archiveRef: "ANOM, COL E 365 · ADM, série U",
    source: "Cour prévôtale, Bulletin officiel de la Martinique, 1822",
    notes:
      "Complot d'insurrection générale prévu pour la fête de la Toussaint. Dénoncé par la trahison d'une domestique. Procès expéditif suivi d'exécutions publiques sur la Savane. La répression marque le passage à l'usage systématique des cours prévôtales.",
  },
  {
    id: "jud_004",
    type: "judiciaire",
    name: "Affaire Furcy — procès en liberté",
    date: "1817-1843",
    location: "Saint-Denis, La Réunion → Cour de cassation, Paris",
    court:
      "Tribunal de première instance de Saint-Denis · Cour royale de Bourbon · Cour royale de Paris",
    verdict:
      "Furcy reconnu libre par arrêt du 23 décembre 1843, 26 ans après le dépôt de sa requête.",
    figures: [
      "Furcy Madeleine",
      "Joseph Lory (maître présumé)",
      "Louis Gilbert Boucher (procureur)",
      "Adolphe Thierry (avocat à Paris)",
    ],
    archiveRef:
      "ANOM, série F (1817-1843) · Archives départementales de La Réunion, 7M",
    source:
      "Archives nationales d'Outre-mer · Mohammed Aïssaoui, L'Affaire de l'esclave Furcy (Gallimard, 2010)",
    notes:
      "Furcy, fils d'une affranchie indienne du Bengale, réclame sa liberté en 1817 en arguant que sa mère était libre au moment de sa naissance. Procès le plus long de l'histoire coloniale française. Sa victoire 26 ans plus tard inspire les abolitionnistes.",
    externalLinks: [
      {
        label: "Dossier ANOM numérisé",
        url: "https://anom.archivesnationales.culture.gouv.fr",
      },
    ],
  },
  {
    id: "jud_005",
    type: "judiciaire",
    name: "Procès de Vincent Ogé et Jean-Baptiste Chavannes",
    date: "1791-02-25",
    location: "Cap-Français, Saint-Domingue",
    court: "Conseil supérieur du Cap-Français",
    verdict:
      "Roués vifs sur la place d'Armes, têtes exposées sur les routes. Effets précipitent l'insurrection générale du 22 août 1791.",
    figures: [
      "Vincent Ogé (libre de couleur, négociant)",
      "Jean-Baptiste Chavannes",
    ],
    archiveRef: "ANOM, COL CC9A/4 · Arrêt imprimé du 9 mars 1791",
    source: "Conseil supérieur du Cap · Discours de Mirabeau à l'Assemblée",
    notes:
      "Après le rejet du décret de mai 1791 reconnaissant les droits politiques des libres de couleur, Ogé organise un soulèvement armé. Capturé en Saint-Domingue espagnole. Le supplice barbare provoque la rupture définitive entre libres de couleur et planteurs blancs.",
  },
  {
    id: "jud_006",
    type: "judiciaire",
    name: "Massacre du Zong",
    date: "1781-11-29",
    location:
      "Atlantique (eaux jamaïcaines) → Cour du Banc du Roi, Westminster",
    court: "Gregson v. Gilbert (court of King's Bench)",
    verdict:
      "Premier jugement (1783) en faveur des armateurs ; appel renversé. L'affaire devient procès de la traite elle-même.",
    figures: [
      "Capitaine Luke Collingwood",
      "James Kelsall (premier officier)",
      "Olaudah Equiano (témoin abolitionniste)",
      "Granville Sharp (procureur militant)",
      "Lord Mansfield (juge)",
    ],
    archiveRef:
      "The National Archives (UK), HCA 30/603, 32/86 · British Library, Add MSS 12076",
    source:
      "National Archives UK · J. Walvin, The Zong (Yale, 2011) · peinture de J.M.W. Turner (1840)",
    notes:
      "Le capitaine fait jeter 132 captifs vivants à la mer pour toucher l'assurance, prétextant un manque d'eau. Le procès porte sur l'indemnisation — non sur les meurtres. Mobilise Equiano et Sharp, accélère le mouvement abolitionniste britannique vers 1807.",
    externalLinks: [
      {
        label: "Zong massacre — UK Parliament archives",
        url: "https://www.parliament.uk",
      },
    ],
  },
  {
    id: "jud_007",
    type: "judiciaire",
    name: "Somerset v. Stewart",
    date: "1772-06-22",
    location: "Westminster Hall, Londres",
    court: "Court of King's Bench (Lord Mansfield)",
    verdict:
      "« The state of slavery is of such a nature... it can only be supported by positive law. » James Somerset libéré.",
    figures: [
      "James Somerset",
      "Charles Stewart",
      "Lord Mansfield (William Murray)",
      "Granville Sharp (organisateur de la défense)",
    ],
    archiveRef: "20 State Trials 1, 98 ER 499 · Lofft 1",
    source:
      "English Reports · Granville Sharp Papers, Hardwicke Court",
    notes:
      "Esclave amené de Boston à Londres, évadé puis recapturé. La décision pose qu'aucun statut d'esclave n'existe en common law anglaise sans loi positive. N'abolit pas l'esclavage colonial mais fonde la jurisprudence anti-esclavagiste métropolitaine.",
    externalLinks: [
      {
        label: "Somerset case — Yale Avalon project",
        url: "https://avalon.law.yale.edu",
      },
    ],
  },
  {
    id: "jud_008",
    type: "judiciaire",
    name: "Affaire de la Mulâtresse Solitude",
    date: "1802-11-29",
    location: "Basse-Terre, Guadeloupe",
    court: "Conseil de guerre du général Richepance",
    verdict:
      "Pendue le lendemain de son accouchement (29 novembre 1802). Devient héroïne nationale guadeloupéenne.",
    figures: [
      "Solitude (née v. 1772)",
      "Louis Delgrès",
      "Joseph Ignace",
      "Général Antoine Richepance",
    ],
    archiveRef: "Service historique de la Défense, GR 7YD/1, GR 8YD",
    source: "SHD · A. Lara, La Mulâtresse Solitude (1972) · A. Schwarz-Bart, roman (1972)",
    notes:
      "Combattante du soulèvement contre le rétablissement de l'esclavage par Bonaparte. Enceinte au moment de sa capture après l'explosion du fort de Matouba (28 mai 1802). Son exécution différée jusqu'à la naissance illustre la cruauté du système : sauver l'enfant — bien marchand — avant de pendre la mère.",
  },
  {
    id: "jud_009",
    type: "judiciaire",
    name: "United States v. The Amistad",
    date: "1839-1841",
    location: "New Haven, Connecticut → Cour suprême des États-Unis",
    court:
      "U.S. District Court (Conn.) · Circuit Court · Supreme Court (40 U.S. 518)",
    verdict:
      "9 mars 1841 : 35 Mende libérés. Justice Story rédige l'opinion majoritaire.",
    figures: [
      "Sengbe Pieh (Joseph Cinqué)",
      "John Quincy Adams (avocat devant la Cour suprême)",
      "Roger Sherman Baldwin",
      "Lewis Tappan (Comité Amistad)",
    ],
    archiveRef: "National Archives, RG 21 (US District Court, Conn.)",
    source:
      "U.S. Supreme Court Records · 40 U.S. 518 · Yale Amistad Committee Papers",
    notes:
      "53 captifs Mende, embarqués illégalement à Lomboko (Sierra Leone) sur le négrier portugais Tecora, sont vendus à La Havane et embarqués sur la goélette Amistad. Soulèvement mené par Sengbe Pieh. Le navire dérive vers Long Island. Procès devenu emblématique : l'État libre du Connecticut juge la question même de la traite illégale post-1808.",
    externalLinks: [
      {
        label: "Amistad case files — National Archives",
        url: "https://www.archives.gov",
      },
    ],
  },
  {
    id: "jud_010",
    type: "judiciaire",
    name: "Procès de Denmark Vesey",
    date: "1822-06-19",
    location: "Charleston, Caroline du Sud",
    court: "Court of Magistrates and Freeholders",
    verdict:
      "Denmark Vesey et 34 autres pendus. 31 déportés hors de l'État. 27 acquittés.",
    figures: [
      "Denmark Vesey (charpentier libre)",
      "Peter Poyas",
      "Monday Gell",
      "Gullah Jack Pritchard (prêtre africain)",
    ],
    archiveRef:
      "South Carolina Department of Archives and History, Charleston District 1822",
    source:
      "An Official Report of the Trials of Sundry Negroes (Lionel Kennedy & Thomas Parker, 1822)",
    notes:
      "Vesey, ancien esclave ayant racheté sa liberté grâce à un billet de loterie, planifie en 1822 le plus vaste soulèvement projeté en Amérique du Nord (jusqu'à 9 000 participants). Dénoncé en juin. Le procès, mené à huis clos, débouche sur l'adoption du Negro Seamen Act (1822) restreignant les déplacements des marins noirs en Caroline.",
  },
  {
    id: "jud_011",
    type: "judiciaire",
    name: "Procès de Nat Turner",
    date: "1831-11-05",
    location: "Comté de Southampton, Virginie",
    court: "Southampton County Court of Oyer and Terminer",
    verdict:
      "Pendu le 11 novembre 1831. Environ 56 esclaves jugés, 30 exécutés, 100+ tués sans procès.",
    figures: [
      "Nat Turner (prédicateur baptiste)",
      "Thomas R. Gray (avocat-confesseur)",
    ],
    archiveRef:
      "Library of Virginia, Southampton County Records, 1831 · LoC, Manuscript Division",
    source:
      "The Confessions of Nat Turner (T.R. Gray, 1831) · Library of Virginia",
    notes:
      "Insurrection du 21-22 août 1831 : environ 60 Blancs tués. Réprimée en deux jours, suivie de massacres aveugles. Les législatures du Sud durcissent massivement les codes esclavagistes (interdiction d'alphabétisation, restriction de la prédication noire).",
    externalLinks: [
      {
        label: "Confessions of Nat Turner — Documenting the American South",
        url: "https://docsouth.unc.edu",
      },
    ],
  },
  {
    id: "jud_012",
    type: "judiciaire",
    name: "Dred Scott v. Sandford",
    date: "1857-03-06",
    location: "Washington, D.C.",
    court: "Cour suprême des États-Unis (60 U.S. 393)",
    verdict:
      "7 voix contre 2. Dred Scott débouté. « Les personnes d'ascendance africaine ne peuvent pas être citoyens. » Missouri Compromise déclaré inconstitutionnel.",
    figures: [
      "Dred Scott",
      "Harriet Robinson Scott (épouse, co-plaignante)",
      "Chief Justice Roger B. Taney",
    ],
    archiveRef: "National Archives, RG 267 — Case Files of the Supreme Court",
    source: "60 U.S. 393 · Missouri Historical Society",
    notes:
      "L'une des décisions les plus infamantes de l'histoire judiciaire américaine. Précipite la guerre de Sécession. Annulée par les 13e (1865) et 14e (1868) amendements.",
  },
  {
    id: "jud_013",
    type: "judiciaire",
    name: "Procès de Sam Sharpe — Baptist War",
    date: "1832-05-23",
    location: "Montego Bay, Jamaïque",
    court: "Cour martiale de l'île de la Jamaïque",
    verdict:
      "Sam Sharpe pendu. Plus de 340 esclaves exécutés au total. 14 missionnaires baptistes blancs persécutés.",
    figures: [
      "Samuel « Daddy » Sharpe (diacre baptiste)",
      "Révérend William Knibb",
    ],
    archiveRef:
      "Jamaica Archives, 1B/5/14 · Baptist Missionary Society Archives (Oxford)",
    source: "Jamaica Archives · BMS Angus Library, Regent's Park College",
    notes:
      "Grève générale dégénérée en révolte (25 décembre 1831 — 4 janvier 1832), impliquant 60 000 esclaves. La répression brutale et la défense baptiste accélèrent l'abolition britannique de 1833-1834. Sam Sharpe est désigné Héros national jamaïcain en 1975.",
    externalLinks: [
      {
        label: "Baptist Missionary Society Archives",
        url: "https://centres.regents.ox.ac.uk/angus-library/",
      },
    ],
  },
  {
    id: "jud_014",
    type: "judiciaire",
    name: "Procès des révoltés de Demerara",
    date: "1823-08-23",
    location: "Demerara (Guyane britannique)",
    court: "Cour martiale du gouverneur John Murray",
    verdict:
      "Plus de 200 esclaves tués, 47 condamnés à mort. Révérend John Smith condamné — mort en prison avant exécution.",
    figures: [
      "Jack Gladstone",
      "Quamina (père, diacre)",
      "Révérend John Smith (London Missionary Society)",
    ],
    archiveRef: "TNA UK, CO 111/39-44 · LMS Archives, SOAS",
    source:
      "Colonial Office records · E. Williams, From Columbus to Castro (1970)",
    notes:
      "13 000 esclaves se révoltent sur 60 plantations sucrières. La répression et la mort de John Smith (« Demerara martyr ») mobilisent l'opinion britannique et accélèrent le débat parlementaire vers le Slavery Abolition Act de 1833.",
  },
  {
    id: "jud_015",
    type: "judiciaire",
    name: "Procès de Tula — soulèvement de Curaçao",
    date: "1795-10-03",
    location: "Willemstad, Curaçao (colonie hollandaise)",
    court: "Conseil colonial hollandais",
    verdict:
      "Tula exécuté par rouage et démembrement le 3 octobre 1795. Bastián Karpata et Pedro Wakao pendus.",
    figures: ["Tula Rigaud", "Bastián Karpata", "Pedro Wakao", "Mercier"],
    archiveRef:
      "Nationaal Archief Den Haag, 1.05.12.01 · Archivo Nacional Aruba",
    source:
      "Nationaal Archief · Karwan FM (mémoire orale, Curaçao)",
    notes:
      "Soulèvement du 17 août 1795 sur la plantation Knip, inspiré par la Révolution française et la révolution haïtienne en cours. Tula réclame l'application des droits humains. Plus de 1 000 insurgés. Tula proclamé héros national de Curaçao en 2010 ; le 17 août est journée de la liberté.",
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
