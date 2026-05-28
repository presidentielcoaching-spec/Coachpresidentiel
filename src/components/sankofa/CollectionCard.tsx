import Link from "next/link";
import { BadgeCheck, TrendingUp } from "lucide-react";
import type { Collection } from "@/lib/sankofa/types";
import {
  formatCompact,
  getArtistById,
  getChain,
  nftsByCollection,
} from "@/lib/sankofa/data";

export function CollectionCard({ collection }: { collection: Collection }) {
  const artist = getArtistById(collection.artistId);
  const chain = getChain(collection.chain);
  const items = nftsByCollection(collection.id).slice(0, 3);

  return (
    <Link
      href={`/sankofa/collections/${collection.slug}`}
      className="group sankofa-glass sankofa-glass-hover block overflow-hidden rounded-3xl"
    >
      <div className="relative h-32 overflow-hidden">
        <div
          className="absolute inset-0 transition duration-700 group-hover:scale-110"
          style={{ background: collection.banner }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sankofa-elevated)] via-transparent" />
      </div>

      <div className="-mt-10 px-5">
        <div className="grid grid-cols-3 gap-2">
          {items.map((n) => (
            <div
              key={n.id}
              className="aspect-square rounded-xl border border-[var(--color-sankofa-border)] sankofa-shimmer"
              style={{ background: n.image }}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pt-4 pb-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate text-base font-semibold text-[var(--color-sankofa-ivory)]">
                {collection.name}
              </h3>
              {collection.verified && (
                <BadgeCheck
                  size={14}
                  className="text-[var(--color-sankofa-gold-400)]"
                />
              )}
            </div>
            <div className="mt-0.5 text-[11px] text-[var(--color-sankofa-muted)]">
              par {artist?.name}
            </div>
          </div>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
            style={{
              color: chain.color,
              border: `1px solid ${chain.color}55`,
              backgroundColor: `${chain.color}1a`,
            }}
          >
            {chain.symbol}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-xs text-[var(--color-sankofa-muted)]">
          {collection.description}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat label="Floor" value={`${collection.floor} ${chain.symbol}`} />
          <Stat label="Items" value={formatCompact(collection.items)} />
          <Stat label="Volume" value={`${formatCompact(collection.volume)}`} />
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
          <span>{collection.owners} détenteurs</span>
          <span className="inline-flex items-center gap-1 text-emerald-300">
            <TrendingUp size={10} /> +12,4% / 7j
          </span>
        </div>
      </div>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-sankofa-border)] bg-black/30 px-2 py-2">
      <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
        {label}
      </div>
      <div className="mt-0.5 text-xs font-semibold text-sankofa-gold">
        {value}
      </div>
    </div>
  );
}
