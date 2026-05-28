import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { HistoricalTimeline } from "@/components/genealogy/HistoricalTimeline";

export const metadata = {
  title: "Chronologie historique — Racines & Mémoire",
  description:
    "Frise interactive : traite, résistance, abolitions, diaspora et mémoire.",
};

export default function TimelinePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <header className="border-b border-[var(--color-border)] pb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
            Frise mémorielle
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            Chronologie historique
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
            Du premier voyage négrier (1444) à la Décennie internationale
            des personnes d&apos;ascendance africaine — sept siècles de
            traite, de résistance, d&apos;abolitions et de mémoire.
          </p>
        </header>
        <div className="mt-10">
          <HistoricalTimeline />
        </div>
      </main>
      <Footer />
    </>
  );
}
