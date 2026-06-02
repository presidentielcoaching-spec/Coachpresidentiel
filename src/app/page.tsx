import { Navbar } from "@/components/fitmax/Navbar";
import { Hero } from "@/components/fitmax/Hero";
import { Installations } from "@/components/fitmax/Installations";
import { Hours } from "@/components/fitmax/Hours";
import { Affluence } from "@/components/fitmax/Affluence";
import { Contact } from "@/components/fitmax/Contact";
import { CTA } from "@/components/fitmax/CTA";
import { Footer } from "@/components/fitmax/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Installations />
        <Hours />
        <Affluence />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
