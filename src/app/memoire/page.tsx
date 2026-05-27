import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { MemoryRecorder } from "@/components/genealogy/MemoryRecorder";

export const metadata = {
  title: "Mémoire orale — Racines & Mémoire",
  description:
    "Enregistrez, transcrivez et préservez les récits familiaux, les chants traditionnels et la transmission orale.",
};

export default function MemoirePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Bibliothèque vivante
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            Mémoire orale &amp; récits ancestraux
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Enregistrez la parole des anciens, archivez chants traditionnels,
            spiritualités, langues ancestrales et récits de transmission.
            L&apos;audio reste sur votre appareil — vous décidez ensuite ce
            qui se partage.
          </p>
        </header>
        <div className="mt-8">
          <MemoryRecorder />
        </div>
      </main>
      <Footer />
    </>
  );
}
