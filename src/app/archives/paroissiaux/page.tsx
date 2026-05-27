import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { ArchiveBrowser } from "@/components/genealogy/ArchiveBrowser";

export const metadata = {
  title: "Registres paroissiaux — Racines & Mémoire",
};

export default function ParoissiauxPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <ArchiveBrowser type="paroissial" />
      </main>
      <Footer />
    </>
  );
}
