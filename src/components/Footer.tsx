import { Logo } from "./Logo";
import { COLLECTION } from "@/lib/collection";

const COLUMNS = [
  {
    title: "Collection",
    links: [
      { label: "Les Gardiens", href: "#gardiens" },
      { label: "Le Lore", href: "#lore" },
      { label: "Rareté", href: "#rarete" },
      { label: "Roadmap", href: "#feuille-de-route" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "OpenSea", href: COLLECTION.opensea, external: true },
      { label: "Contrat (BaseScan)", href: "#contract", external: true },
      { label: "Vérifier provenance", href: "#provenance" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { label: "X / Twitter", href: COLLECTION.twitter, external: true },
      { label: "Discord", href: COLLECTION.discord, external: true },
      { label: "Newsletter", href: "#whitelist" },
      { label: "Presse", href: `mailto:${COLLECTION.email}` },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions", href: "#conditions" },
      { label: "Confidentialité", href: "#confidentialite" },
      { label: "Licence d'usage NFT", href: "#licence" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size={44} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Sankofa Legacy est une édition Genesis ultra-rare de 5 NFT
              1-of-1, frappés sur Base. Une mémoire africaine ancrée on-chain —
              pour qu&apos;elle ne se perde plus jamais.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted">
              <span className="rounded-full border border-gold-500/30 px-2.5 py-1 text-gold-300">
                Blockchain · Base
              </span>
              <span className="rounded-full border border-border px-2.5 py-1">
                5 / 5 disponibles
              </span>
              <span className="rounded-full border border-border px-2.5 py-1">
                Royalties 7.5%
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
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
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
          <p>
            © {new Date().getFullYear()} {COLLECTION.creator}. Tous droits
            réservés.
          </p>
          <p className="italic font-display text-gold-400/80">
            « Se wo were fi na wosankofa a yenkyi. »
          </p>
        </div>
      </div>
    </footer>
  );
}
