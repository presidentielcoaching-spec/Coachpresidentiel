import { notFound } from "next/navigation";
import { BadgeCheck, MapPin, Share2, MessageCircle, UserPlus } from "lucide-react";
import {
  ARTISTS,
  formatCompact,
  getArtistById,
  nftsByArtist,
} from "@/lib/sankofa/data";
import { NftCard } from "@/components/sankofa/NftCard";

export function generateStaticParams() {
  return ARTISTS.map((a) => ({ id: a.id }));
}

const LEVEL_COLOR = {
  Initiate: "border-white/15 text-[var(--color-sankofa-muted)]",
  Griot: "border-emerald-400/50 text-emerald-300",
  Master: "border-[var(--color-sankofa-bronze)]/60 text-[var(--color-sankofa-bronze)]",
  Legendary: "border-[var(--color-sankofa-gold-400)]/70 text-[var(--color-sankofa-gold-200)]",
} as const;

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artist = getArtistById(id);
  if (!artist) return notFound();
  const works = nftsByArtist(artist.id);

  return (
    <div className="relative">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0" style={{ background: artist.cover }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sankofa-bg)] via-[var(--color-sankofa-bg)]/50 to-transparent" />
      </div>

      <div className="mx-auto -mt-24 max-w-7xl px-6">
        <div className="sankofa-glass rounded-[36px] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[160px_1fr_auto] md:items-center">
            <div
              className="h-36 w-36 rounded-full border-4 border-[var(--color-sankofa-elevated)] shadow-xl"
              style={{ background: artist.avatar }}
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="truncate text-3xl font-semibold text-[var(--color-sankofa-ivory)]">
                  {artist.name}
                </h1>
                {artist.verified && (
                  <BadgeCheck size={18} className="text-[var(--color-sankofa-gold-400)]" />
                )}
                <span
                  className={`rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${LEVEL_COLOR[artist.level]}`}
                >
                  {artist.level}
                </span>
              </div>
              <div className="mt-1 text-sm text-[var(--color-sankofa-muted)]">
                {artist.handle}
              </div>
              <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
                <MapPin size={11} /> {artist.origin} · Sur Sankofa depuis {artist.joinedYear}
              </div>
              <p className="mt-4 max-w-2xl text-sm text-[var(--color-sankofa-ivory-soft)]">
                {artist.bio}
              </p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <button className="sankofa-btn-gold inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs">
                <UserPlus size={12} /> Suivre · {formatCompact(artist.followers)}
              </button>
              <div className="flex gap-2">
                <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs">
                  <MessageCircle size={12} /> Message
                </button>
                <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs">
                  <Share2 size={12} /> Partager
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-sankofa-border)] bg-[var(--color-sankofa-border)] sm:grid-cols-4">
            <Stat label="Œuvres" value={artist.pieces.toString()} />
            <Stat label="Volume" value={`${formatCompact(artist.volume)} ETH`} />
            <Stat label="Followers" value={formatCompact(artist.followers)} />
            <Stat label="Rang" value="#18" />
          </div>
        </div>

        <div className="mt-12 mb-20">
          <h2 className="text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
            Œuvres de {artist.name.split(" ")[0]}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {works.map((n) => (
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
