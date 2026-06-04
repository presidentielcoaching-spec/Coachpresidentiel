export const site = {
  name: "FIT-MAX",
  tagline: "Salle de sport moderne au cœur de Koumassi",
  address: {
    street: "Boulevard Antananarivo 809",
    city: "Koumassi, Abidjan",
    full: "Boulevard Antananarivo 809, Abidjan (Koumassi)",
    mapsQuery: "Boulevard Antananarivo 809, Koumassi, Abidjan",
  },
  phone: {
    display: "+225 07 00 11 92 18",
    href: "tel:+2250700119218",
    whatsapp: "https://wa.me/2250700119218",
  },
  facebook: "https://www.facebook.com/search/top?q=Fitmax%20Koumassi",
  hours: [
    { day: "Lundi", range: "07h00 – 22h00" },
    { day: "Mardi", range: "07h00 – 22h00" },
    { day: "Mercredi", range: "07h00 – 22h00" },
    { day: "Jeudi", range: "07h00 – 22h00" },
    { day: "Vendredi", range: "07h00 – 22h00" },
    { day: "Samedi", range: "07h00 – 21h00" },
    { day: "Dimanche", range: "07h00 – 18h00" },
  ],
  /** Heures d'affluence les plus basses — idéal pour s'entraîner au calme */
  quietTimes: [
    { day: "Mardi", moment: "Matin" },
    { day: "Jeudi", moment: "Après-midi" },
    { day: "Dimanche", moment: "Matin" },
  ],
} as const;

export const navLinks = [
  { label: "Installations", href: "#installations" },
  { label: "Horaires", href: "#horaires" },
  { label: "Affluence", href: "#affluence" },
  { label: "Contact", href: "#contact" },
] as const;
