import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/fitmax/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-radial-fire pointer-events-none absolute inset-0 opacity-80" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Prêt à passer à <span className="text-gradient-fire">l&apos;action</span> ?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Rejoignez FIT-MAX et entraînez-vous dans un cadre moderne, sécurisé et
          motivant. Appelez-nous dès aujourd&apos;hui pour commencer.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-background transition-colors hover:bg-primary-400"
          >
            <Phone className="h-5 w-5" />
            {site.phone.display}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary-500/50 hover:bg-surface-elevated"
          >
            Nous trouver
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
