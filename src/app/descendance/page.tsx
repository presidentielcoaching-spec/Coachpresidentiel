import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { DescendantTree } from "@/components/genealogy/DescendantTree";

export const metadata = {
  title: "Descendance — Racines & Mémoire",
  description:
    "Visualisez la descendance complète d'un aïeul sur plusieurs générations.",
};

export default function DescendancePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Visualisation
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Descendance</h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Choisissez un aïeul dans votre registre pour voir l&apos;ensemble
            de sa descendance se déployer en arborescence.
          </p>
        </header>
        <div className="mt-8">
          <DescendantTree />
        </div>
      </main>
      <Footer />
    </>
  );
}
