import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Wallet,
  Shield,
  Globe2,
  Gem,
} from "lucide-react";
import { NFTS, getArtistById, getCollectionById } from "@/lib/sankofa/data";

const HERO_NFTS = [NFTS[0], NFTS[14], NFTS[28], NFTS[42], NFTS[55]];

export function SankofaHero() {
  const featured = HERO_NFTS[0];
  const featuredArtist = getArtistById(featured.artistId);
  const featuredCollection = getCollectionById(featured.collectionId);

  return (
    <section className="relative overflow-hidden sankofa-cosmos-bg">
      <div className="absolute inset-0 sankofa-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 sankofa-noise opacity-50 pointer-events-none" />

      {/* Decorative orbits */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[680px] w-[680px] rounded-full border border-[var(--color-sankofa-gold-500)]/15 sankofa-orbit">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-[var(--color-sankofa-gold-400)] shadow-[0_0_20px_4px_rgba(241,195,74,0.4)]" />
      </div>
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full border border-[var(--color-sankofa-cosmos-bright)]/15">
        <div className="absolute right-0 top-1/2 h-2.5 w-2.5 rounded-full bg-[var(--color-sankofa-cosmos-bright)] shadow-[0_0_20px_4px_rgba(79,109,255,0.4)] sankofa-float" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-20 pb-28 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="sankofa-chip">
            <Sparkles size={11} /> Saison 01 · Sankofa Genesis live
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-[68px]">
            <span className="text-sankofa-gold">Own History.</span>
            <br />
            <span className="text-sankofa-cosmos">Collect Legacy.</span>
            <br />
            <span className="text-[var(--color-sankofa-ivory)]">Build the Future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-sankofa-ivory-soft)] md:text-lg">
            La première marketplace NFT consacrée à l'héritage africain et
            à l'économie créative Web3. Achetez, vendez, exposez et tokenisez
            le patrimoine — sur 5 blockchains, en multilingue, avec une IA
            curatoriale embarquée.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/sankofa/marketplace"
              className="sankofa-btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              Explorer la marketplace <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/sankofa/create"
              className="sankofa-btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              <Sparkles size={14} /> Frapper un NFT
            </Link>
            <Link
              href="/sankofa/gallery"
              className="sankofa-btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              <Gem size={14} /> Visite immersive
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-lg sm:grid-cols-4">
            {[
              { icon: Wallet, label: "5 blockchains" },
              { icon: Shield, label: "Audits SlowMist" },
              { icon: Globe2, label: "64 pays" },
              { icon: Sparkles, label: "IA curatoriale" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-3 py-2.5"
              >
                <Icon
                  size={14}
                  className="text-[var(--color-sankofa-gold-400)]"
                />
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-sankofa-ivory-soft)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: featured NFT showcase */}
        <div className="relative">
          <div className="sankofa-tile-3d relative mx-auto max-w-md">
            <div className="sankofa-tile-3d-inner relative overflow-hidden rounded-[36px] border border-[var(--color-sankofa-gold-500)]/30 shadow-[0_60px_120px_-40px_rgba(241,195,74,0.35)]">
              <div
                className="aspect-[4/5] sankofa-shimmer"
                style={{ background: featured.image }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 sankofa-chip backdrop-blur">
                <span className="sankofa-pulse-dot" /> Mint live
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-sankofa-gold-400)]">
                  {featuredCollection?.name}
                </div>
                <div className="text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
                  {featured.name}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 rounded-full ring-2 ring-[var(--color-sankofa-gold-400)]/50"
                      style={{ background: featuredArtist?.avatar }}
                    />
                    <div>
                      <div className="text-xs text-[var(--color-sankofa-ivory)]">
                        {featuredArtist?.name}
                      </div>
                      <div className="text-[10px] text-[var(--color-sankofa-muted)]">
                        {featuredArtist?.handle}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
                      Mint
                    </div>
                    <div className="text-sm font-semibold text-sankofa-gold">
                      {featured.price} {featured.currency}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating thumbs */}
            <div className="absolute -left-8 -bottom-8 hidden md:flex flex-col gap-3 sankofa-float">
              {HERO_NFTS.slice(1, 4).map((n) => (
                <div
                  key={n.id}
                  className="h-20 w-20 rounded-2xl border border-[var(--color-sankofa-border)] sankofa-shimmer shadow-xl"
                  style={{ background: n.image }}
                />
              ))}
            </div>

            <div className="absolute -right-10 top-10 hidden md:block">
              <div className="sankofa-glass rounded-2xl px-4 py-3 sankofa-float">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
                  Plus haute enchère 24h
                </div>
                <div className="mt-1 text-xl font-semibold text-sankofa-gold">
                  142.8 ETH
                </div>
                <div className="text-[10px] text-emerald-300">
                  ▲ Middle Passage #03
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sankofa-divider mx-auto max-w-7xl" />
    </section>
  );
}
