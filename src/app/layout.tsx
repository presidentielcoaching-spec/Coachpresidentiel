import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Racines & Mémoire — Arbre généalogique et archives historiques",
  description:
    "Construisez votre arbre généalogique et explorez les archives historiques : registres de fugitifs, actes d'affranchissement, recensements d'esclaves, cartes de migration.",
  keywords: [
    "généalogie",
    "arbre généalogique",
    "descendance",
    "registre fugitifs",
    "affranchissement",
    "registre des esclaves",
    "cartes de migration",
    "archives coloniales",
    "ANOM",
    "BUMIDOM",
  ],
  authors: [{ name: "Racines & Mémoire" }],
  openGraph: {
    title: "Racines & Mémoire — Arbre généalogique et archives historiques",
    description:
      "Retrouver les noms, reconstituer les trajectoires. Arbre généalogique et archives historiques.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0614",
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
