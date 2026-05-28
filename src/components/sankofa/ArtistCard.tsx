import Link from "next/link";
import { BadgeCheck, MapPin } from "lucide-react";
import type { Artist } from "@/lib/sankofa/types";
import { formatCompact } from "@/lib/sankofa/data";

const LEVEL_COLOR: Record<Artist["level"], string> = {
  Initiate: "bg-white/5 text-[var(--color-sankofa-muted)] border-white/10",
  Griot: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
  Master:
    "bg-[var(--color-sankofa-bronze)]/20 text-[var(--color-sankofa-bronze)] border-[var(--color-sankofa-bronze)]/50",
  Legendary:
    "bg-[var(--color-sankofa-gold-400)]/20 text-[var(--color-sankofa-gold-200)] border-[var(--color-sankofa-gold-400)]/60",
};

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/sankofa/artists/${artist.id}`}
      className="group sankofa-glass sankofa-glass-hover block overflow-hidden rounded-3xl"
    >
      <div className="relative h-24 overflow-hidden">
        <div
          className="absolute inset-0 transition duration-700 group-hover:scale-110"
          style={{ background: artist.cover }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sankofa-elevated)] via-transparent" />
      </div>

      <div className="-mt-10 flex flex-col items-center px-5 text-center">
        <div
          className="h-20 w-20 rounded-full ring-4 ring-[var(--color-sankofa-elevated)] shadow-xl"
          style={{ background: artist.avatar }}
        />
        <div className="mt-3 flex items-center gap-1.5">
          <h3 className="text-base font-semibold text-[var(--color-sankofa-ivory)]">
            {artist.name}
          </h3>
          {artist.verified && (
            <BadgeCheck size={14} className="text-[var(--color-sankofa-gold-400)]" />
          )}
        </div>
        <div className="text-[11px] text-[var(--color-sankofa-muted)]">
          {artist.handle}
        </div>
        <div className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
          <MapPin size={10} /> {artist.origin}
        </div>
        <span
          className={`mt-3 rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${LEVEL_COLOR[artist.level]}`}
        >
          {artist.level}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x divide-[var(--color-sankofa-border)] border-t border-[var(--color-sankofa-border)] text-center">
        <div className="px-2 py-3">
          <div className="text-sm font-semibold text-sankofa-gold">
            {formatCompact(artist.followers)}
          </div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
            Abonnés
          </div>
        </div>
        <div className="px-2 py-3">
          <div className="text-sm font-semibold text-sankofa-gold">
            {artist.pieces}
          </div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
            Œuvres
          </div>
        </div>
        <div className="px-2 py-3">
          <div className="text-sm font-semibold text-sankofa-gold">
            {formatCompact(artist.volume)}Ξ
          </div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
            Volume
          </div>
        </div>
      </div>
    </Link>
  );
}
