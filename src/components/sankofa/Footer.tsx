import Link from "next/link";
import { SankofaLogo } from "./Logo";
import { Globe, Twitter, Github, Instagram, Send } from "lucide-react";

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Marketplace",
    links: [
      { href: "/sankofa/marketplace", label: "Toutes les œuvres" },
      { href: "/sankofa/collections", label: "Collections" },
      { href: "/sankofa/artists", label: "Artistes vérifiés" },
      { href: "/sankofa/launchpad", label: "Launchpad" },
      { href: "/sankofa/marketplace?sort=auctions", label: "Enchères live" },
    ],
  },
  {
    title: "Culture",
    links: [
      { href: "/sankofa/collections?cat=heritage", label: "Héritage africain" },
      { href: "/sankofa/collections?cat=civilizations", label: "Civilisations" },
      { href: "/sankofa/collections?cat=sankofa", label: "Sankofa" },
      { href: "/sankofa/collections?cat=diaspora", label: "Diaspora" },
      { href: "/sankofa/collections?cat=memory", label: "Mémoire" },
    ],
  },
  {
    title: "Outils",
    links: [
      { href: "/sankofa/create", label: "Mint un NFT" },
      { href: "/sankofa/dao", label: "DAO & votes" },
      { href: "/sankofa/stats", label: "Statistiques" },
      { href: "/sankofa/ai", label: "IA Suite" },
      { href: "/sankofa/docs", label: "Documentation Web3" },
    ],
  },
  {
    title: "Plateforme",
    links: [
      { href: "/sankofa/about", label: "À propos" },
      { href: "/sankofa/careers", label: "Carrières" },
      { href: "/sankofa/press", label: "Presse" },
      { href: "/sankofa/security", label: "Sécurité & audits" },
      { href: "/sankofa/legal", label: "Mentions légales" },
    ],
  },
];

export function SankofaFooter() {
  return (
    <footer className="relative border-t border-[var(--color-sankofa-border)] bg-black/60">
      <div className="sankofa-adinkra absolute inset-0 opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Link href="/sankofa" className="flex items-center gap-3">
              <SankofaLogo size={42} />
              <div>
                <div className="text-lg font-semibold text-sankofa-gold">
                  LEGACY SANKOFA
                </div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-sankofa-muted)]">
                  Own History · Collect Legacy
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-sankofa-muted)]">
              La marketplace NFT culturelle dédiée au patrimoine africain
              et à la créativité Web3. Tokeniser la mémoire, distribuer la
              valeur, élever les artistes.
            </p>

            <form className="mt-6 flex max-w-sm overflow-hidden rounded-full border border-[var(--color-sankofa-border)] bg-black/50">
              <input
                type="email"
                required
                placeholder="Votre e-mail"
                className="flex-1 bg-transparent px-4 py-2.5 text-xs text-[var(--color-sankofa-ivory)] placeholder:text-[var(--color-sankofa-muted)] focus:outline-none"
              />
              <button
                type="submit"
                className="sankofa-btn-gold flex items-center gap-1.5 px-4 text-xs"
              >
                <Send size={12} /> Newsletter
              </button>
            </form>

            <div className="mt-6 flex gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Github, label: "GitHub" },
                { Icon: Globe, label: "Discord" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-sankofa-border)] text-[var(--color-sankofa-ivory-soft)] hover:border-[var(--color-sankofa-gold-500)] hover:text-[var(--color-sankofa-gold-400)]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-sankofa-gold-400)]">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-[var(--color-sankofa-muted)] hover:text-[var(--color-sankofa-ivory)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="sankofa-divider mt-12" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)] md:flex-row">
          <span>© {new Date().getFullYear()} Legacy Sankofa NFT — Tous droits réservés</span>
          <span>Smart contracts audités · Carbone négatif · KYC sécurisé</span>
        </div>
      </div>
    </footer>
  );
}
