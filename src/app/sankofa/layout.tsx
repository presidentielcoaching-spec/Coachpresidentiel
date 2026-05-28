import type { Metadata } from "next";
import { SankofaNavbar } from "@/components/sankofa/Navbar";
import { SankofaFooter } from "@/components/sankofa/Footer";
import { SankofaTicker } from "@/components/sankofa/Ticker";

export const metadata: Metadata = {
  title: "Legacy Sankofa NFT — Own History. Collect Legacy. Build the Future.",
  description:
    "La première marketplace NFT culturelle dédiée à l'héritage africain et aux artistes Web3 internationaux. Achetez, vendez, exposez et tokenisez le patrimoine.",
  keywords: [
    "NFT",
    "marketplace",
    "Afrique",
    "Sankofa",
    "Web3",
    "art numérique",
    "métavers",
    "Ethereum",
    "Solana",
    "Polygon",
    "Base",
  ],
  openGraph: {
    title: "Legacy Sankofa NFT",
    description:
      "Own History. Collect Legacy. Build the Future. La marketplace NFT culturelle africaine.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function SankofaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sankofa-root min-h-screen flex flex-col">
      <SankofaTicker />
      <SankofaNavbar />
      <main className="flex-1">{children}</main>
      <SankofaFooter />
    </div>
  );
}
