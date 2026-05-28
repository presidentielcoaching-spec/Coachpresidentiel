import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BadgeCheck,
  Heart,
  Eye,
  Share2,
  ShieldCheck,
  Gavel,
  Zap,
  Clock,
  Tag,
} from "lucide-react";
import {
  NFTS,
  getArtistById,
  getChain,
  getCollectionById,
  getNftById,
  nftsByCollection,
} from "@/lib/sankofa/data";
import { NftCard } from "@/components/sankofa/NftCard";

export function generateStaticParams() {
  return NFTS.map((n) => ({ id: n.id }));
}

const HISTORY = [
  { event: "Vente", from: "0x9a2f…b18c", to: "0x4c1b…e771", price: 1.92, ts: "Il y a 3 jours" },
  { event: "Mint", from: "—", to: "0x9a2f…b18c", price: 0.0, ts: "Il y a 12 jours" },
  { event: "Enchère", from: "0x55ab…1d44", to: "—", price: 1.8, ts: "Il y a 18 jours" },
];

export default async function NftDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const nft = getNftById(id);
  if (!nft) return notFound();
  const artist = getArtistById(nft.artistId);
  const collection = getCollectionById(nft.collectionId);
  const chain = getChain(nft.chain);
  const more = nftsByCollection(nft.collectionId)
    .filter((n) => n.id !== nft.id)
    .slice(0, 4);

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href={`/sankofa/collections/${collection?.slug}`}
          className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)] hover:text-[var(--color-sankofa-gold-200)]"
        >
          ← {collection?.name}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="sankofa-tile-3d">
            <div className="sankofa-tile-3d-inner relative overflow-hidden rounded-[36px] border border-[var(--color-sankofa-gold-500)]/30 shadow-[0_60px_120px_-40px_rgba(241,195,74,0.35)]">
              <div
                className="aspect-square sankofa-shimmer"
                style={{ background: nft.image }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              <div className="absolute top-4 left-4 sankofa-chip backdrop-blur">
                {nft.rarity}
              </div>
              {nft.auction && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-sankofa-mint)] backdrop-blur">
                  <span className="sankofa-pulse-dot" /> LIVE · {nft.auction.bids} enchères
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              {collection?.name} · {nft.tokenId}
            </div>
            <h1 className="mt-2 text-3xl font-semibold text-[var(--color-sankofa-ivory)] md:text-4xl">
              {nft.name}
            </h1>

            <Link
              href={`/sankofa/artists/${artist?.id}`}
              className="mt-4 inline-flex items-center gap-3 sankofa-glass rounded-2xl px-3 py-2"
            >
              <div
                className="h-9 w-9 rounded-full"
                style={{ background: artist?.avatar }}
              />
              <div>
                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-sankofa-ivory)]">
                  {artist?.name}
                  {artist?.verified && (
                    <BadgeCheck size={13} className="text-[var(--color-sankofa-gold-400)]" />
                  )}
                </div>
                <div className="text-[11px] text-[var(--color-sankofa-muted)]">
                  {artist?.handle}
                </div>
              </div>
            </Link>

            <div className="mt-5 flex items-center gap-4 text-[11px] text-[var(--color-sankofa-muted)]">
              <span className="inline-flex items-center gap-1">
                <Heart size={12} /> {nft.likes} likes
              </span>
              <span className="inline-flex items-center gap-1">
                <Eye size={12} /> {nft.views.toLocaleString("en-US")} vues
              </span>
              <span className="inline-flex items-center gap-1">
                <Tag size={12} /> Rang rareté #{nft.rarityRank}
              </span>
            </div>

            {/* Price card */}
            <div className="mt-6 sankofa-glass rounded-3xl p-6">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                    {nft.auction ? "Plus haute enchère" : "Prix actuel"}
                  </div>
                  <div className="mt-1 text-4xl font-semibold text-sankofa-gold">
                    {(nft.auction?.highestBid ?? nft.price).toLocaleString(
                      "en-US",
                      { maximumFractionDigits: 3 },
                    )}{" "}
                    <span className="text-base text-[var(--color-sankofa-ivory-soft)]">
                      {nft.currency}
                    </span>
                  </div>
                  {nft.lastSale && (
                    <div className="mt-1 text-[11px] text-[var(--color-sankofa-muted)]">
                      Dernière vente : {nft.lastSale} {nft.currency}
                    </div>
                  )}
                </div>
                {nft.auction && (
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                      Termine dans
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1 font-mono text-base font-semibold text-[var(--color-sankofa-mint)]">
                      <Clock size={13} /> 06:42:18
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 flex gap-2">
                {nft.auction ? (
                  <>
                    <button className="sankofa-btn-gold flex-1 inline-flex items-center justify-center gap-2 py-3 text-sm">
                      <Gavel size={14} /> Enchérir
                    </button>
                    <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-5 py-3 text-sm">
                      Acheter immédiatement
                    </button>
                  </>
                ) : (
                  <>
                    <button className="sankofa-btn-gold flex-1 inline-flex items-center justify-center gap-2 py-3 text-sm">
                      <Zap size={14} /> Acheter pour {nft.price} {nft.currency}
                    </button>
                    <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-5 py-3 text-sm">
                      Faire une offre
                    </button>
                  </>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-[var(--color-sankofa-ivory-soft)]">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-300" />
                  Smart contract audité
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-300" />
                  Provenance vérifiée
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-300" />
                  Carbone neutre
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
                Description
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-sankofa-ivory-soft)]">
                {nft.description}
              </p>
            </div>

            {/* Traits */}
            {nft.traits && (
              <div className="mt-6">
                <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
                  Traits
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {nft.traits.map((t) => (
                    <div
                      key={t.trait_type}
                      className="rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-3 py-3"
                    >
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                        {t.trait_type}
                      </div>
                      <div className="mt-1 text-sm text-[var(--color-sankofa-gold-200)]">
                        {t.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata */}
            <div className="mt-6 sankofa-glass rounded-2xl px-5 py-4 text-xs">
              <div className="grid grid-cols-2 gap-3 text-[var(--color-sankofa-ivory-soft)] md:grid-cols-3">
                <Meta label="Token Standard" value="ERC-721" />
                <Meta label="Blockchain" value={chain.name} />
                <Meta label="Contrat" value="0x12a8…fb09" />
                <Meta label="Token ID" value={nft.tokenId} />
                <Meta
                  label="Édition"
                  value={
                    nft.edition
                      ? `${nft.edition.current}/${nft.edition.total}`
                      : "—"
                  }
                />
                <Meta label="Royalties" value="7.5%" />
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs">
                <Heart size={12} /> Like
              </button>
              <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs">
                <Share2 size={12} /> Partager
              </button>
            </div>
          </div>
        </div>

        {/* History + offers */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="sankofa-glass rounded-3xl p-6">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              Historique on-chain
            </h3>
            <div className="mt-4 space-y-2">
              {HISTORY.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-4 py-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[var(--color-sankofa-gold-500)]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-sankofa-gold-300)]">
                      {h.event}
                    </span>
                    <span className="text-[var(--color-sankofa-ivory-soft)]">
                      {h.from} → {h.to}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sankofa-gold">
                      {h.price > 0 ? `${h.price} ${nft.currency}` : "—"}
                    </div>
                    <div className="text-[10px] text-[var(--color-sankofa-muted)]">
                      {h.ts}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sankofa-glass rounded-3xl p-6">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              Offres en cours
            </h3>
            <div className="mt-4 space-y-2 text-xs">
              {[
                { user: "0x77c1…aa9b", price: 1.62, expires: "2j" },
                { user: "0x12bb…02e1", price: 1.54, expires: "5j" },
                { user: "0x99ad…7820", price: 1.5, expires: "12h" },
              ].map((o, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-4 py-3"
                >
                  <span className="text-[var(--color-sankofa-ivory-soft)]">
                    {o.user}
                  </span>
                  <span className="text-sankofa-gold font-semibold">
                    {o.price} {nft.currency}
                  </span>
                  <span className="text-[var(--color-sankofa-muted)]">
                    expire dans {o.expires}
                  </span>
                  <button className="sankofa-btn-ghost px-3 py-1 text-[10px]">
                    Accepter
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More from collection */}
        {more.length > 0 && (
          <div className="mt-16 mb-10">
            <h3 className="text-xl font-semibold text-[var(--color-sankofa-ivory)]">
              Plus de {collection?.name}
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {more.map((n) => (
                <NftCard key={n.id} nft={n} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
        {label}
      </div>
      <div className="mt-0.5 font-mono text-[var(--color-sankofa-ivory)]">
        {value}
      </div>
    </div>
  );
}
