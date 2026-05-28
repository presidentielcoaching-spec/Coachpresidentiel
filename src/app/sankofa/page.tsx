import { SankofaHero } from "@/components/sankofa/Hero";
import { StatsStrip } from "@/components/sankofa/StatsStrip";
import { SectionHeader } from "@/components/sankofa/SectionHeader";
import { NftCard } from "@/components/sankofa/NftCard";
import { CollectionCard } from "@/components/sankofa/CollectionCard";
import { ArtistCard } from "@/components/sankofa/ArtistCard";
import { CategoriesGrid } from "@/components/sankofa/CategoriesGrid";
import { LiveAuctions } from "@/components/sankofa/LiveAuctions";
import { AiSuite } from "@/components/sankofa/AiSuite";
import { Roadmap } from "@/components/sankofa/Roadmap";
import { PremiumTiers } from "@/components/sankofa/PremiumTiers";
import { GalleryPreview } from "@/components/sankofa/GalleryPreview";
import { ARTISTS, COLLECTIONS, DROPS, NFTS, getArtistById } from "@/lib/sankofa/data";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function SankofaLandingPage() {
  const featuredNfts = NFTS.slice(0, 8);
  const topCollections = COLLECTIONS.slice(0, 4);
  const topArtists = ARTISTS.slice(0, 6);
  const nextDrop = DROPS[0];
  const dropArtist = getArtistById(nextDrop.artistId);

  return (
    <>
      <SankofaHero />
      <StatsStrip />

      {/* Featured NFTs */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Œuvres en vedette"
          title={
            <>
              Le meilleur de la <span className="text-sankofa-gold">création culturelle</span> en NFT
            </>
          }
          description="Une curation IA + comité humain. Chaque œuvre est vérifiée, datée, et accompagnée d'une histoire."
          ctaLabel="Explorer toute la marketplace"
          ctaHref="/sankofa/marketplace"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredNfts.map((nft) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>

      {/* Live auctions + categories */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Enchères live"
              title={<>Le bruit des marteaux <span className="text-sankofa-gold">on-chain</span></>}
            />
            <div className="mt-6">
              <LiveAuctions />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Catégories culturelles"
              title={<>Explorer par <span className="text-sankofa-gold">héritage</span></>}
            />
            <div className="mt-6">
              <CategoriesGrid />
            </div>
          </div>
        </div>
      </section>

      {/* Top collections */}
      <section className="relative border-y border-[var(--color-sankofa-border)] bg-black/30 sankofa-adinkra">
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="Collections phares"
            title={
              <>
                Le panthéon <span className="text-sankofa-cosmos">numérique</span> Sankofa
              </>
            }
            description="De Sankofa Genesis aux Manuscrits Ge'ez, des collections rares, signées, et historiquement documentées."
            ctaLabel="Voir les 240+ collections"
            ctaHref="/sankofa/collections"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topCollections.map((c) => (
              <CollectionCard key={c.id} collection={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Immersive gallery */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Musée numérique"
          title={
            <>
              Une <span className="text-sankofa-gold">galerie immersive</span> ouverte 24/7
            </>
          }
          description="Visitez le musée Sankofa en 3D, avec storytelling audio, lumières dynamiques, modes VR et expositions holographiques."
        />
        <div className="mt-10">
          <GalleryPreview />
        </div>
      </section>

      {/* Top artists */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader
          eyebrow="Les voix qui montent"
          title={
            <>
              Artistes <span className="text-sankofa-gold">vérifiés</span> · de Lagos à Brooklyn
            </>
          }
          description="Profils dynamiques, statistiques en temps réel, niveaux Griot et Legendary. Soutenez les artistes que vous croyez."
          ctaLabel="Annuaire complet"
          ctaHref="/sankofa/artists"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {topArtists.map((a) => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </div>
      </section>

      {/* Launchpad teaser */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="sankofa-glass overflow-hidden rounded-[36px] p-6 md:p-10 grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="sankofa-chip">
              <Sparkles size={11} /> Launchpad · prochain drop
            </span>
            <h3 className="mt-4 text-3xl font-semibold text-[var(--color-sankofa-ivory)] md:text-4xl">
              {nextDrop.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--color-sankofa-muted)] md:text-base">
              {nextDrop.description}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center max-w-md">
              <DropStat label="Supply" value={nextDrop.supply.toString()} />
              <DropStat
                label="Mint"
                value={`${nextDrop.mintPrice} ${nextDrop.currency}`}
              />
              <DropStat label="Chain" value="Ethereum" />
            </div>
            <ul className="mt-6 space-y-1.5 text-sm text-[var(--color-sankofa-ivory-soft)]">
              {nextDrop.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-sankofa-gold-400)]" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/sankofa/launchpad"
                className="sankofa-btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                Voir tous les drops <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/sankofa/create"
                className="sankofa-btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                Soumettre un projet
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl border border-[var(--color-sankofa-gold-500)]/30 sankofa-shimmer"
              style={{ background: nextDrop.cover }}
            />
            <div className="absolute -bottom-4 -left-4 sankofa-glass rounded-2xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                Curated by
              </div>
              <div className="mt-1 flex items-center gap-2">
                <div
                  className="h-7 w-7 rounded-full ring-2 ring-[var(--color-sankofa-gold-400)]/50"
                  style={{ background: dropArtist?.avatar }}
                />
                <div className="text-sm font-semibold text-[var(--color-sankofa-ivory)]">
                  {dropArtist?.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Suite */}
      <section className="relative border-y border-[var(--color-sankofa-border)] bg-black/30">
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="AI · suite intégrée"
            title={
              <>
                L'<span className="text-sankofa-cosmos">intelligence artistique</span> de Sankofa
              </>
            }
            description="Six modules IA propriétaires, entraînés sur des datasets africains et Web3. Au service des artistes, des collectionneurs et de la sécurité du marché."
          />
          <div className="mt-10">
            <AiSuite />
          </div>
        </div>
      </section>

      {/* Premium tiers */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Premium · $SANKO"
          title={
            <>
              Trois rangs, une <span className="text-sankofa-gold">confrérie</span>
            </>
          }
          description="Frais réduits, allowlist prioritaire, salons privés, vote DAO pondéré. Le token $SANKO active toute l'expérience premium."
        />
        <div className="mt-10">
          <PremiumTiers />
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative border-t border-[var(--color-sankofa-border)] bg-black/30">
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="Feuille de route"
            title={
              <>
                De la <span className="text-sankofa-gold">renaissance numérique</span> à l'économie créative mondiale
              </>
            }
          />
          <div className="mt-10">
            <Roadmap />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="sankofa-cosmos-bg absolute inset-0" />
        <div className="absolute inset-0 sankofa-adinkra opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <span className="sankofa-chip mx-auto">
            <Sparkles size={11} /> Rejoignez la confrérie
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-sankofa-gold">Own History.</span>{" "}
            <span className="text-sankofa-cosmos">Build the Future.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-sankofa-ivory-soft)] md:text-lg">
            14 000+ artistes, 96 000 collectionneurs, 64 pays. Construisons la première grande institution culturelle Web3 — ensemble.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/sankofa/marketplace"
              className="sankofa-btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              Explorer la marketplace <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/sankofa/dao"
              className="sankofa-btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              Rejoindre la DAO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DropStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-sankofa-border)] bg-black/40 px-3 py-3">
      <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
        {label}
      </div>
      <div className="mt-1 text-base font-semibold text-sankofa-gold">
        {value}
      </div>
    </div>
  );
}
