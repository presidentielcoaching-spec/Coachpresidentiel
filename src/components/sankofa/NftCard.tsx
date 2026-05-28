import Link from "next/link";
import { Heart, Eye, Gavel, Zap } from "lucide-react";
import type { Nft } from "@/lib/sankofa/types";
import {
  getArtistById,
  getCollectionById,
  getChain,
  formatCompact,
} from "@/lib/sankofa/data";

export function NftCard({ nft }: { nft: Nft }) {
  const artist = getArtistById(nft.artistId);
  const collection = getCollectionById(nft.collectionId);
  const chain = getChain(nft.chain);
  const isAuction = !!nft.auction;

  return (
    <Link
      href={`/sankofa/nft/${nft.id}`}
      className="group sankofa-glass sankofa-glass-hover sankofa-tile-3d block overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-square overflow-hidden sankofa-tile-3d-inner">
        <div
          className="absolute inset-0 sankofa-shimmer transition duration-700 group-hover:scale-105"
          style={{ background: nft.image }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className="flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur"
            style={{
              backgroundColor: `${chain.color}26`,
              color: chain.color,
              border: `1px solid ${chain.color}55`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: chain.color }}
            />
            {chain.symbol}
          </span>
          <span
            className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${
              nft.rarity === "One of One"
                ? "bg-[var(--color-sankofa-gold-400)]/20 text-[var(--color-sankofa-gold-200)] border border-[var(--color-sankofa-gold-400)]/50"
                : nft.rarity === "Mythic"
                  ? "bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/40"
                  : nft.rarity === "Epic"
                    ? "bg-violet-500/20 text-violet-200 border border-violet-400/40"
                    : "bg-white/5 text-[var(--color-sankofa-ivory-soft)] border border-white/15"
            }`}
          >
            {nft.rarity}
          </span>
        </div>

        {isAuction && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-sankofa-mint)] backdrop-blur">
            <span className="sankofa-pulse-dot" />
            LIVE · {nft.auction!.bids} bids
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-gold-400)]">
              {collection?.name}
            </div>
            <div className="truncate text-base font-semibold text-[var(--color-sankofa-ivory)]">
              {nft.name}
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[var(--color-sankofa-ivory-soft)]">
            <span className="inline-flex items-center gap-1">
              <Heart size={11} className="text-[var(--color-sankofa-bronze)]" />
              {formatCompact(nft.likes)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye size={11} />
              {formatCompact(nft.views)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3.5">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
            {isAuction ? "Enchère la plus haute" : "Prix"}
          </div>
          <div className="truncate text-sm font-semibold text-sankofa-gold">
            {(isAuction ? nft.auction!.highestBid : nft.price).toLocaleString(
              "en-US",
              { maximumFractionDigits: 3 },
            )}{" "}
            {nft.currency}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="h-7 w-7 rounded-full ring-1 ring-[var(--color-sankofa-border)]"
            style={{ background: artist?.avatar }}
            title={artist?.name}
          />
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-[var(--color-sankofa-gold-500)]/40 bg-[var(--color-sankofa-gold-500)]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-sankofa-gold-200)] hover:bg-[var(--color-sankofa-gold-500)]/20"
          >
            {isAuction ? (
              <>
                <Gavel size={11} /> Enchérir
              </>
            ) : (
              <>
                <Zap size={11} /> Acheter
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
