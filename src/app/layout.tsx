import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sankofa Legacy — Les Gardiens Africains de l'Ether",
  description:
    "Édition Genesis ultra-rare de 5 NFT 1-of-1. Cinq Gardiens, cinq civilisations africaines ancrées dans la blockchain. Frappés sur Base. Whitelist ouverte.",
  keywords: [
    "NFT afrofuturiste",
    "Sankofa",
    "NFT Afrique",
    "art digital africain",
    "OpenSea collection",
    "NFT 1-of-1",
    "blockchain Base",
    "héritage africain",
  ],
  authors: [{ name: "Sankofa Studio" }],
  openGraph: {
    title: "Sankofa Legacy — Les Gardiens Africains de l'Ether",
    description:
      "Cinq Gardiens. Cinq civilisations. Une mémoire restaurée on-chain.",
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
