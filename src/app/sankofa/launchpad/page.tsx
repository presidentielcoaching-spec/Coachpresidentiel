"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Sparkles, Rocket, Coins, ShieldCheck } from "lucide-react";
import { DROPS, getArtistById, getChain } from "@/lib/sankofa/data";

function useCountdown(iso: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(iso).getTime() - now);
  const d = Math.floor(diff / (24 * 60 * 60 * 1000));
  const h = Math.floor((diff / (60 * 60 * 1000)) % 24);
  const m = Math.floor((diff / (60 * 1000)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function DropCard({ drop }: { drop: (typeof DROPS)[number] }) {
  const c = useCountdown(drop.startsAt);
  const artist = getArtistById(drop.artistId);
  const chain = getChain(drop.chain);
  const live = c.d === 0 && c.h === 0 && c.m === 0 && c.s === 0;
  return (
    <div className="sankofa-glass sankofa-glass-hover overflow-hidden rounded-3xl">
      <div
        className="relative h-56 sankofa-shimmer"
        style={{ background: drop.cover }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
        <div className="absolute top-3 left-3 sankofa-chip backdrop-blur">
          {live ? (
            <>
              <span className="sankofa-pulse-dot" /> LIVE MINT
            </>
          ) : (
            <>
              <Calendar size={11} /> À venir
            </>
          )}
        </div>
        <div className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-[var(--color-sankofa-ivory-soft)] backdrop-blur">
          {chain.name}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-300)]">
            par {artist?.name}
          </div>
          <div className="text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
            {drop.title}
          </div>
        </div>
      </div>

      <div className="px-5 py-5">
        <p className="text-sm text-[var(--color-sankofa-muted)]">
          {drop.description}
        </p>

        <div className="mt-5 grid grid-cols-4 gap-1.5 text-center">
          {[
            { v: c.d, l: "Jours" },
            { v: c.h, l: "Heures" },
            { v: c.m, l: "Min" },
            { v: c.s, l: "Sec" },
          ].map((u) => (
            <div
              key={u.l}
              className="rounded-xl border border-[var(--color-sankofa-border)] bg-black/40 px-2 py-2"
            >
              <div className="font-mono text-xl font-semibold text-sankofa-gold">
                {u.v.toString().padStart(2, "0")}
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
                {u.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
              Supply
            </div>
            <div className="mt-0.5 font-semibold text-[var(--color-sankofa-ivory)]">
              {drop.supply}
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
              Prix mint
            </div>
            <div className="mt-0.5 font-semibold text-sankofa-gold">
              {drop.mintPrice} {drop.currency}
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
              Chain
            </div>
            <div className="mt-0.5 font-semibold text-[var(--color-sankofa-ivory)]">
              {chain.symbol}
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-1.5">
          {drop.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs text-[var(--color-sankofa-ivory-soft)]"
            >
              <Sparkles
                size={11}
                className="mt-1 flex-none text-[var(--color-sankofa-gold-400)]"
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-2">
          <button className="sankofa-btn-gold flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs">
            <Rocket size={12} /> Rejoindre l'allowlist
          </button>
          <Link
            href={`/sankofa/collections/${drop.collectionId}`}
            className="sankofa-btn-ghost inline-flex items-center justify-center px-4 py-2.5 text-xs"
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LaunchpadPage() {
  return (
    <div className="relative">
      <div className="border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="sankofa-chip">
            <Rocket size={11} /> Launchpad Sankofa
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-sankofa-gold">Les drops les plus attendus</span>
            <br />
            <span className="text-[var(--color-sankofa-ivory)]">
              du Web3 culturel africain.
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-muted)] md:text-base">
            Curation par un comité d'artistes et de gardiens culturels. Audits
            de smart contracts inclus, royalties on-chain, allowlist transparente.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {DROPS.map((d) => (
            <DropCard key={d.id} drop={d} />
          ))}
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {[
            {
              Icon: ShieldCheck,
              title: "Audits inclus",
              desc: "SlowMist + CertiK gratuits pour les projets du launchpad.",
            },
            {
              Icon: Coins,
              title: "Frais à 1%",
              desc: "Pendant les 30 premiers jours du drop. Royalties artistes 7,5%.",
            },
            {
              Icon: Sparkles,
              title: "Co-marketing global",
              desc: "Annonces sur les 12 chaînes Sankofa : newsletter 96k, IG 240k, Twitter 180k.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="sankofa-glass rounded-3xl p-5"
            >
              <b.Icon size={18} className="text-[var(--color-sankofa-gold-300)]" />
              <h4 className="mt-3 text-base font-semibold text-[var(--color-sankofa-ivory)]">
                {b.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--color-sankofa-muted)]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
