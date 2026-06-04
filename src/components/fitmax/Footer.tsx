import { Facebook, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/fitmax/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Salle de sport moderne et accessible au cœur de Koumassi.
              Musculation, cardio et coaching personnalisé pour tous les
              niveaux.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary-500/50 hover:text-primary-400"
              aria-label="Page Facebook officielle de FIT-MAX"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <a
                  href={site.phone.href}
                  className="transition-colors hover:text-foreground"
                >
                  {site.phone.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} FIT-MAX — Koumassi, Abidjan. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
