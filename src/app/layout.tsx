import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWARegister } from "@/components/PWARegister";
import { ConciergeWidget } from "@/components/ConciergeWidget";

export const metadata: Metadata = {
  title: "Kemetlingua AI — Nos langues. Notre héritage. Notre futur.",
  description:
    "L'IA panafricaine premium dédiée aux langues africaines et à la transmission culturelle. Wolof, Yoruba, Swahili, Lingala, Ewondo et bien plus.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kemetlingua",
  },
  keywords: [
    "langues africaines",
    "Kemet",
    "apprendre wolof",
    "apprendre yoruba",
    "apprendre swahili",
    "IA africaine",
    "afro-futurisme",
    "diaspora",
    "Kemetlingua",
  ],
  authors: [{ name: "Kemetlingua AI" }],
  openGraph: {
    title: "Kemetlingua AI — Nos langues. Notre héritage. Notre futur.",
    description:
      "Reconnecte-toi à la langue de tes ancêtres grâce à l'IA panafricaine.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#090b1a",
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
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <ConciergeWidget />
        <PWARegister />
      </body>
    </html>
  );
}
