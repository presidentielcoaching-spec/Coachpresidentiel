import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { ArchiveBrowser } from "@/components/genealogy/ArchiveBrowser";

export const metadata = {
  title: "Archives judiciaires coloniales — Racines & Mémoire",
};

export default function JudiciairesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <ArchiveBrowser type="judiciaire" />
      </main>
      <Footer />
    </>
  );
}
