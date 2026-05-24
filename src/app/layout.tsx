import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWARegister } from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "Afrilingua AI — Nos langues, notre héritage",
  description:
    "Apprenez, parlez et vivez les langues africaines avec l'IA. Wolof, Yoruba, Swahili, Lingala, Ewondo et bien plus — pour le continent et la diaspora.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Afrilingua",
  },
  keywords: [
    "langues africaines",
    "apprendre wolof",
    "apprendre yoruba",
    "apprendre swahili",
    "Duolingo africain",
    "EdTech Afrique",
    "Afrilingua",
  ],
  authors: [{ name: "Afrilingua AI" }],
  openGraph: {
    title: "Afrilingua AI — Nos langues, notre héritage",
    description:
      "La première plateforme IA pour apprendre les langues africaines. Reconnecte-toi à tes racines.",
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <PWARegister />
      </body>
    </html>
  );
}
