import { notFound } from "next/navigation";
import Link from "next/link";
import { BadgeCheck, Share2 } from "lucide-react";
import {
  COLLECTIONS,
  formatCompact,
  getArtistById,
  getChain,
  getCollectionBySlug,
  nftsByCollection,
} from "@/lib/sankofa/data";
import { NftCard } from "@/components/sankofa/NftCard";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return notFound();
  const artist = getArtistById(collection.artistId);
  const chain = getChain(collection.chain);
  const items = nftsByCollection(collection.id);

  return (
    <div className="relative">
      {/* Banner */}
      <div className="relative h-72 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: collection.banner }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sankofa-bg)] via-[var(--color-sankofa-bg)]/60 to-transparent" />
      </div>

      <div className="mx-auto -mt-24 max-w-7xl px-6">
        <div className="sankofa-glass relative overflow-hidden rounded-[36px] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[140px_1fr_auto] md:items-center">
            <div
              className="h-32 w-32 rounded-3xl border border-[var(--color-sankofa-gold-500)]/40 sankofa-shimmer"
              style={{ background: collection.cover }}
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="truncate text-3xl font-semibold text-[var(--color-sankofa-ivory)]">
                  {collection.name}
                </h1>
                {collection.verified && (
                  <BadgeCheck
                    size={18}
                    className="text-[var(--color-sankofa-gold-400)]"
                  />
                )}
              </div>
              <div className="mt-1 text-sm text-[var(--color-sankofa-muted)]">
                par{" "}
                <Link
                  href={`/sankofa/artists/${artist?.id}`}
                  className="text-[var(--color-sankofa-gold-300)] hover:underline"
                >
                  {artist?.name}
                </Link>{" "}
                · {chain.name}
              </div>
              <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-ivory-soft)]">
                {collection.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="sankofa-btn-gold inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs">
                Suivre la collection
              </button>
              <button className="sankofa-btn-ghost inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs">
                <Share2 size={12} /> Partager
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-sankofa-border)] bg-[var(--color-sankofa-border)] sm:grid-cols-5">
            <Stat label="Floor" value={`${collection.floor} ${chain.symbol}`} />
            <Stat label="Volume" value={`${formatCompact(collection.volume)} ${chain.symbol}`} />
            <Stat label="Items" value={formatCompact(collection.items)} />
            <Stat label="Owners" value={formatCompact(collection.owners)} />
            <Stat label="Royalties" value="7.5%" />
          </div>
        </div>

        {/* Items */}
        <div className="mt-12 mb-20">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
              Œuvres de la collection
            </h2>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
              {items.length} pièces
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((n) => (
              <NftCard key={n.id} nft={n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--color-sankofa-elevated)] px-4 py-4 text-center">
      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
        {label}
      </div>
      <div className="mt-1 text-base font-semibold text-sankofa-gold">
        {value}
      </div>
    </div>
  );
}
