"use client";

import { useState } from "react";
import {
  Headphones,
  Glasses,
  Cuboid,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
} from "lucide-react";
import { COLLECTIONS, NFTS, nftsByCollection, getArtistById } from "@/lib/sankofa/data";

const ROOMS = COLLECTIONS.slice(0, 5).map((c) => ({
  collection: c,
  works: nftsByCollection(c.id).slice(0, 6),
}));

export default function GalleryPage() {
  const [room, setRoom] = useState(0);
  const [muted, setMuted] = useState(false);
  const current = ROOMS[room];
  const artist = getArtistById(current.collection.artistId);

  return (
    <div className="relative">
      {/* Header */}
      <div className="border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <span className="sankofa-chip">
            <Cuboid size={11} /> Musée immersif Sankofa
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-sankofa-gold">Visitez l'exposition.</span>{" "}
            <span className="text-[var(--color-sankofa-ivory)]">
              Écoutez l'histoire.
            </span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--color-sankofa-muted)]">
            5 salles thématiques · Audio storytelling 360° · Compatible Vision Pro & Quest 3
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* 3D room */}
        <div className="sankofa-glass relative overflow-hidden rounded-[36px]">
          <div className="relative h-[560px] overflow-hidden">
            {/* Floor */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,16,31,0) 0%, rgba(212,175,55,0.12) 60%, rgba(241,195,74,0.22) 100%)",
                transform: "perspective(700px) rotateX(60deg)",
                transformOrigin: "bottom",
              }}
            />
            {/* Back wall */}
            <div
              className="absolute inset-x-0 top-0 h-2/3"
              style={{ background: current.collection.banner, opacity: 0.18 }}
            />
            <div className="absolute inset-0 sankofa-grid-bg opacity-25" />
            <div className="absolute inset-0 sankofa-noise opacity-40" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 90%, rgba(241,195,74,0.25), transparent 60%)",
              }}
            />

            {/* Works on wall */}
            <div className="absolute inset-x-0 top-12 flex items-start justify-center gap-5 px-8 perspective-[1400px]">
              {current.works.map((w, i) => {
                const rotateY = (i - (current.works.length - 1) / 2) * 8;
                return (
                  <a
                    key={w.id}
                    href={`/sankofa/nft/${w.id}`}
                    className="relative block sankofa-float"
                    style={{
                      transform: `rotateY(${rotateY}deg)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div
                      className="relative h-72 w-48 rounded-2xl border border-[var(--color-sankofa-gold-500)]/40 shadow-[0_40px_80px_-20px_rgba(241,195,74,0.4)] sankofa-shimmer"
                      style={{ background: w.image }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-gold-400)]">
                          {w.tokenId}
                        </div>
                        <div className="truncate text-xs font-semibold text-[var(--color-sankofa-ivory)]">
                          {w.name}
                        </div>
                      </div>
                    </div>
                    {/* Spotlight */}
                    <div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(247,231,164,0.85), transparent 70%)",
                        filter: "blur(10px)",
                      }}
                    />
                    {/* Plaque */}
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 sankofa-glass rounded-full px-3 py-1 text-[10px] text-[var(--color-sankofa-gold-300)]">
                      {w.price} {w.currency}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* HUD */}
            <div className="absolute left-5 top-5 flex flex-col gap-2">
              <div className="sankofa-glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-gold-300)]">
                Salle {room + 1}/5 · {current.collection.name}
              </div>
              <div className="sankofa-glass rounded-full px-3 py-1.5 text-[10px] text-[var(--color-sankofa-ivory-soft)] inline-flex items-center gap-2">
                <Users size={11} /> 12 + 38 visiteurs anonymes
              </div>
            </div>

            <div className="absolute right-5 top-5 flex flex-col gap-2 items-end">
              <button
                onClick={() => setMuted((m) => !m)}
                className="sankofa-glass grid h-10 w-10 place-items-center rounded-full text-[var(--color-sankofa-gold-300)]"
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <div className="sankofa-glass flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] text-[var(--color-sankofa-ivory-soft)]">
                <Headphones size={11} /> Audio storytelling
              </div>
              <div className="sankofa-glass flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] text-[var(--color-sankofa-ivory-soft)]">
                <Glasses size={11} /> Mode VR disponible
              </div>
            </div>

            {/* Controls */}
            <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3">
              <button
                onClick={() =>
                  setRoom((r) => (r - 1 + ROOMS.length) % ROOMS.length)
                }
                className="sankofa-glass grid h-11 w-11 place-items-center rounded-full text-[var(--color-sankofa-ivory)]"
                aria-label="Salle précédente"
              >
                <ChevronLeft size={16} />
              </button>
              <button className="sankofa-btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-xs">
                <Play size={12} /> Lancer la visite guidée IA
              </button>
              <button
                onClick={() => setRoom((r) => (r + 1) % ROOMS.length)}
                className="sankofa-glass grid h-11 w-11 place-items-center rounded-full text-[var(--color-sankofa-ivory)]"
                aria-label="Salle suivante"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Caption */}
          <div className="grid gap-6 px-6 py-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
                Curated by {artist?.name}
              </div>
              <h3 className="mt-1 text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
                {current.collection.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[var(--color-sankofa-muted)]">
                {current.collection.description}
              </p>
            </div>
            <a
              href={`/sankofa/collections/${current.collection.slug}`}
              className="sankofa-btn-ghost inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.18em]"
            >
              Voir la collection
            </a>
          </div>
        </div>

        {/* Room selector */}
        <div className="mt-8">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
            Choisir une salle
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {ROOMS.map((r, i) => {
              const active = i === room;
              return (
                <button
                  key={r.collection.id}
                  onClick={() => setRoom(i)}
                  className={`sankofa-glass overflow-hidden rounded-2xl text-left transition ${
                    active
                      ? "ring-2 ring-[var(--color-sankofa-gold-500)] shadow-[0_20px_60px_-20px_rgba(241,195,74,0.35)]"
                      : ""
                  }`}
                >
                  <div
                    className="h-20 sankofa-shimmer"
                    style={{ background: r.collection.banner }}
                  />
                  <div className="px-3 py-2.5">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-sankofa-gold-400)]">
                      Salle {i + 1}
                    </div>
                    <div className="text-sm font-semibold text-[var(--color-sankofa-ivory)] truncate">
                      {r.collection.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Other exhibitions */}
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Holographique · Mois Sankofa",
              desc: "Projection grandeur nature dans 8 musées partenaires (Marrakech, Lagos, Dakar, NY…).",
              tag: "Itinérant",
            },
            {
              title: "Concert Afrobeat tokenisé",
              desc: "Live Burna Boy archivé en NFT 4K + stems. Détenteurs reçoivent un pass backstage.",
              tag: "À venir",
            },
            {
              title: "Mode VR : Pyramides de Méroé",
              desc: "Reconstruction photogrammétrique des pyramides nubiennes, accompagnée d'un narrateur.",
              tag: "Quest 3 · Vision Pro",
            },
          ].map((e) => (
            <div
              key={e.title}
              className="sankofa-glass sankofa-glass-hover rounded-3xl p-5"
            >
              <span className="sankofa-chip">{e.tag}</span>
              <h4 className="mt-3 text-base font-semibold text-[var(--color-sankofa-ivory)]">
                {e.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--color-sankofa-muted)]">
                {e.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature row */}
        <div className="mt-10 sankofa-glass rounded-3xl px-6 py-5 grid gap-3 md:grid-cols-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-sankofa-ivory-soft)]">
          <div className="flex items-center gap-2">
            <Cuboid size={13} className="text-[var(--color-sankofa-gold-300)]" />
            Rendu WebGL 60fps
          </div>
          <div className="flex items-center gap-2">
            <Headphones size={13} className="text-[var(--color-sankofa-gold-300)]" />
            Audio spatialisé Dolby Atmos
          </div>
          <div className="flex items-center gap-2">
            <Glasses size={13} className="text-[var(--color-sankofa-gold-300)]" />
            Compatible Apple Vision Pro
          </div>
        </div>
      </div>
    </div>
  );
}
