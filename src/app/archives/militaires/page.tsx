import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { ArchiveBrowser } from "@/components/genealogy/ArchiveBrowser";

export const metadata = {
  title: "Documents militaires coloniaux — Racines & Mémoire",
};

export default function MilitairesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <ArchiveBrowser type="militaire" />
      </main>
      <Footer />
    </>
  );
}
