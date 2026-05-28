"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Gavel, ArrowUpRight } from "lucide-react";
import { getLiveAuctions, getArtistById, getCollectionById, getChain } from "@/lib/sankofa/data";

function useCountdown(targetIso: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(targetIso).getTime() - now);
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { h, m, s };
}

function AuctionRow({ nft }: { nft: ReturnType<typeof getLiveAuctions>[number] }) {
  const c = useCountdown(nft.auction!.endsAt);
  const artist = getArtistById(nft.artistId);
  const collection = getCollectionById(nft.collectionId);
  const chain = getChain(nft.chain);
  return (
    <Link
      href={`/sankofa/nft/${nft.id}`}
      className="sankofa-glass sankofa-glass-hover flex items-center gap-4 rounded-2xl p-3"
    >
      <div
        className="h-16 w-16 flex-none rounded-xl sankofa-shimmer"
        style={{ background: nft.image }}
      />
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-gold-400)]">
          {collection?.name}
        </div>
        <div className="truncate text-sm font-semibold text-[var(--color-sankofa-ivory)]">
          {nft.name}
        </div>
        <div className="mt-0.5 text-[11px] text-[var(--color-sankofa-muted)]">
          {artist?.name} · {nft.auction!.bids} enchères
        </div>
      </div>
      <div className="hidden sm:block text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
          Plus haute
        </div>
        <div className="text-sm font-semibold text-sankofa-gold">
          {nft.auction!.highestBid} {chain.symbol}
        </div>
      </div>
      <div className="text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
          Termine dans
        </div>
        <div className="font-mono text-sm font-semibold text-[var(--color-sankofa-mint)]">
          {c.h.toString().padStart(2, "0")}:
          {c.m.toString().padStart(2, "0")}:
          {c.s.toString().padStart(2, "0")}
        </div>
      </div>
      <button className="hidden md:inline-flex items-center gap-1 rounded-full border border-[var(--color-sankofa-gold-500)]/40 bg-[var(--color-sankofa-gold-500)]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-sankofa-gold-200)]">
        <Gavel size={11} /> Enchérir
      </button>
    </Link>
  );
}

export function LiveAuctions() {
  const auctions = getLiveAuctions();
  return (
    <div className="sankofa-glass rounded-3xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="sankofa-pulse-dot" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-sankofa-mint)]">
            Live · enchères ouvertes
          </span>
        </div>
        <Link
          href="/sankofa/marketplace?sort=auctions"
          className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-sankofa-gold-400)] hover:text-[var(--color-sankofa-gold-200)]"
        >
          Voir tout <ArrowUpRight size={12} />
        </Link>
      </div>
      <div className="grid gap-2">
        {auctions.map((nft) => (
          <AuctionRow key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}
