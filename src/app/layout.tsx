import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const siteUrl = "https://coachingpresidentiel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Coaching Présidentiel — Académie d'élite en Trading, IA et Art Oratoire",
    template: "%s | Coaching Présidentiel",
  },
  description:
    "Développez les compétences qui façonnent les leaders de demain. Formations premium en Trading, Intelligence Artificielle et Art Oratoire avec accompagnement personnalisé et certificat.",
  keywords: [
    "formation trading",
    "formation intelligence artificielle",
    "formation art oratoire",
    "coaching présidentiel",
    "académie en ligne",
    "trading forex",
    "prise de parole en public",
    "IA générative",
    "formation certifiante",
    "Abidjan",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "Coaching Présidentiel" }],
  creator: "Coaching Présidentiel",
  openGraph: {
    title:
      "Coaching Présidentiel — Académie d'élite en Trading, IA et Art Oratoire",
    description:
      "Formez-vous auprès d'experts et bénéficiez d'un accompagnement personnalisé en Trading, Intelligence Artificielle et Art Oratoire.",
    type: "website",
    locale: "fr_FR",
    siteName: "Coaching Présidentiel",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Présidentiel — Académie d'élite",
    description:
      "Formations premium en Trading, Intelligence Artificielle et Art Oratoire.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl, languages: { "fr-FR": siteUrl, "en-US": `${siteUrl}/en` } },
};

export const viewport: Viewport = {
  themeColor: "#0a1f44",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Coaching Présidentiel",
  description:
    "Académie de formation en Trading, Intelligence Artificielle et Art Oratoire.",
  url: siteUrl,
  email: "contact@coachingpresidentiel.com",
  address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
  ],
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
