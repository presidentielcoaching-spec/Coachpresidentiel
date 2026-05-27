import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { HistoricalMap } from "@/components/genealogy/HistoricalMap";

export const metadata = {
  title: "Cartographie historique — Racines & Mémoire",
  description:
    "Carte interactive de l'atlantique noir : ports négriers, royaumes, marronnage, plantations.",
};

export default function CartographiePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Atlas mémoriel
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            Cartographie historique
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Routes de la traite transatlantique, royaumes africains historiques,
            ports négriers, ports de destination, zones de marronnage et
            plantations majeures. Cliquez sur un repère pour en lire le détail.
          </p>
        </header>
        <div className="mt-8">
          <HistoricalMap />
        </div>
      </main>
      <Footer />
    </>
  );
}
