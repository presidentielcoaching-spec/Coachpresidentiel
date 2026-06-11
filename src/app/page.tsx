import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { FormationsSection } from "@/components/home/FormationsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { PaymentBand } from "@/components/home/PaymentBand";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <StatsBand />
      <FormationsSection />
      <WhyChooseUs />
      <Testimonials />
      <PaymentBand />
      <FaqPreview />
      <CTA />
    </SiteShell>
  );
}
