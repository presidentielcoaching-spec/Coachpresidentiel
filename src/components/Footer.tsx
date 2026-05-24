import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { label: "Langues", href: "#langues" },
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "Application mobile", href: "#mobile" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Groupes", href: "#groupes" },
      { label: "Événements", href: "#evenements" },
      { label: "Devenir contributeur", href: "#contribuer" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#apropos" },
      { label: "Mission", href: "#mission" },
      { label: "Presse", href: "#presse" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions", href: "#conditions" },
      { label: "Confidentialité", href: "#confidentialite" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="apropos" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size={44} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              La première plateforme IA dédiée aux langues africaines.
              Notre mission : préserver et transmettre le plus grand
              patrimoine linguistique du continent — pour les générations
              d&apos;aujourd&apos;hui et de demain.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-muted">
              <span className="rounded-full border border-border px-2.5 py-1">
                Made in 🌍 Africa
              </span>
              <span className="rounded-full border border-border px-2.5 py-1">
                21+ langues
              </span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/75 transition hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Kemetlingua AI. Tous droits réservés.</p>
          <p className="italic text-gold-400/80">
            « Nos langues, notre héritage. »
          </p>
        </div>
      </div>
    </footer>
  );
}
