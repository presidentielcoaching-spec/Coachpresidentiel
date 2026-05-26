import { Navbar } from "@/components/genealogy/Navbar";
import { Footer } from "@/components/genealogy/Footer";
import { Hero } from "@/components/genealogy/Hero";
import { Features } from "@/components/genealogy/Features";
import { CTA } from "@/components/genealogy/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
