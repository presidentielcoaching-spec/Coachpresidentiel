import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { FamilyTreeEditor } from "@/components/genealogy/FamilyTreeEditor";

export const metadata = {
  title: "Arbre généalogique — Racines & Mémoire",
  description:
    "Construisez votre arbre généalogique en saisissant vos ancêtres et descendants.",
};

export default function ArbrePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Mon registre familial
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Arbre généalogique
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Ajoutez vos parents, grands-parents et ancêtres connus.
            Les fiches sont reliées entre elles par les liens père / mère.
            Toutes les données restent sur votre appareil.
          </p>
        </header>
        <div className="mt-8">
          <FamilyTreeEditor />
        </div>
      </main>
      <Footer />
    </>
  );
}
