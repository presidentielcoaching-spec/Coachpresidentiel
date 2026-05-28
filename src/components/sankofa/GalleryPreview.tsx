import Link from "next/link";
import { NFTS } from "@/lib/sankofa/data";
import { Headphones, Glasses, Cuboid, ArrowUpRight } from "lucide-react";

const WALL = [NFTS[1], NFTS[14], NFTS[30], NFTS[45], NFTS[60]];

export function GalleryPreview() {
  return (
    <div className="sankofa-glass relative overflow-hidden rounded-[36px] p-1">
      <div className="relative h-[420px] overflow-hidden rounded-[32px]">
        {/* Floor */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,16,31,0) 0%, rgba(212,175,55,0.08) 60%, rgba(241,195,74,0.18) 100%)",
            transform: "perspective(600px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        />
        <div className="absolute inset-0 sankofa-grid-bg opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(241,195,74,0.18), transparent 60%)",
          }}
        />

        {/* Spotlights */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 px-6 perspective-[1200px]">
          {WALL.map((n, i) => {
            const rotateY = (i - 2) * 12;
            const scale = 1 - Math.abs(i - 2) * 0.06;
            return (
              <div
                key={n.id}
                className="relative sankofa-float"
                style={{
                  transform: `rotateY(${rotateY}deg) scale(${scale})`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <div
                  className="relative h-64 w-44 rounded-2xl border border-[var(--color-sankofa-gold-500)]/40 shadow-[0_30px_60px_-20px_rgba(241,195,74,0.4)] sankofa-shimmer"
                  style={{ background: n.image }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] text-[var(--color-sankofa-ivory)]">
                    <div className="font-semibold truncate">{n.name}</div>
                    <div className="text-[var(--color-sankofa-gold-400)]">
                      {n.price} {n.currency}
                    </div>
                  </div>
                </div>
                {/* Light beam */}
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(247,231,164,0.9), transparent 70%)",
                    filter: "blur(8px)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Visitor avatar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] text-[var(--color-sankofa-ivory-soft)] backdrop-blur">
          <span className="sankofa-pulse-dot" />
          14 visiteurs · Salle Sankofa
        </div>
      </div>

      <div className="grid gap-4 px-6 py-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-wrap items-center gap-3">
          <span className="sankofa-chip">
            <Cuboid size={11} /> Galerie immersive 3D
          </span>
          <span className="sankofa-chip">
            <Headphones size={11} /> Audio storytelling
          </span>
          <span className="sankofa-chip">
            <Glasses size={11} /> VR · AR · Vision Pro
          </span>
        </div>
        <Link
          href="/sankofa/gallery"
          className="sankofa-btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-xs"
        >
          Entrer dans le musée <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
