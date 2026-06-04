import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIT-MAX — Salle de sport à Koumassi, Abidjan | Musculation & Cardio",
  description:
    "FIT-MAX est une salle de sport moderne et accessible au cœur de Koumassi (Boulevard Antananarivo, Abidjan). Musculation, cardio et coaching personnalisé pour tous les niveaux.",
  keywords: [
    "salle de sport Abidjan",
    "salle de sport Koumassi",
    "musculation Abidjan",
    "cardio Koumassi",
    "coaching personnalisé",
    "fitness Abidjan",
    "FIT-MAX",
    "gym Koumassi",
    "Boulevard Antananarivo",
  ],
  authors: [{ name: "FIT-MAX" }],
  openGraph: {
    title: "FIT-MAX — Salle de sport moderne à Koumassi, Abidjan",
    description:
      "Musculation, cardio et coaching personnalisé au cœur de Koumassi. Équipements de qualité, sécurité et bien-être pour tous les niveaux.",
    type: "website",
    locale: "fr_FR",
    siteName: "FIT-MAX",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
