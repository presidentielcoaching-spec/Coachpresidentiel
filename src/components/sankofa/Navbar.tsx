"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Wallet,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { SankofaLogo } from "./Logo";
import { CHAINS } from "@/lib/sankofa/data";

const NAV_LINKS = [
  { href: "/sankofa/marketplace", label: "Marketplace" },
  { href: "/sankofa/gallery", label: "Galerie 3D" },
  { href: "/sankofa/collections", label: "Collections" },
  { href: "/sankofa/artists", label: "Artistes" },
  { href: "/sankofa/launchpad", label: "Launchpad" },
  { href: "/sankofa/dao", label: "DAO" },
];

export function SankofaNavbar() {
  const [open, setOpen] = useState(false);
  const [chainOpen, setChainOpen] = useState(false);
  const [chain, setChain] = useState(CHAINS[0]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-sankofa-border)] bg-[rgba(5,3,9,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/sankofa" className="flex items-center gap-3 group">
          <SankofaLogo size={38} />
          <div className="leading-none">
            <div className="text-[15px] font-semibold tracking-wide text-sankofa-gold">
              LEGACY SANKOFA
            </div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-sankofa-muted)]">
              NFT · Web3 · Patrimoine
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-[var(--color-sankofa-ivory-soft)] transition hover:text-[var(--color-sankofa-gold-400)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-sankofa-muted)]"
            />
            <input
              type="search"
              placeholder="Œuvres, artistes, collections…"
              className="h-9 w-56 rounded-full border border-[var(--color-sankofa-border)] bg-black/40 pl-9 pr-3 text-xs text-[var(--color-sankofa-ivory)] placeholder:text-[var(--color-sankofa-muted)] focus:border-[var(--color-sankofa-gold-500)] focus:outline-none"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setChainOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-[var(--color-sankofa-border)] bg-black/40 px-3 py-2 text-xs text-[var(--color-sankofa-ivory-soft)] hover:border-[var(--color-sankofa-gold-500)]"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: chain.color }}
              />
              {chain.name}
              <ChevronDown size={12} />
            </button>
            {chainOpen && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-[var(--color-sankofa-border)] bg-[var(--color-sankofa-elevated)] shadow-2xl">
                {CHAINS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setChain(c);
                      setChainOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs hover:bg-white/5"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    {c.name}
                    <span className="ml-auto text-[10px] text-[var(--color-sankofa-muted)]">
                      {c.symbol}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/sankofa/create"
            className="hidden xl:inline-flex items-center gap-1.5 sankofa-btn-ghost px-3 py-2 text-xs"
          >
            <Sparkles size={13} /> Mint
          </Link>

          <button className="sankofa-btn-gold inline-flex items-center gap-2 px-4 py-2 text-xs">
            <Wallet size={14} />
            Connecter Wallet
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden text-[var(--color-sankofa-ivory)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-sankofa-border)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-[var(--color-sankofa-ivory-soft)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/sankofa/create"
                onClick={() => setOpen(false)}
                className="sankofa-btn-ghost px-4 py-2 text-sm text-center"
              >
                Mint un NFT
              </Link>
              <button className="sankofa-btn-gold px-4 py-2 text-sm">
                Connecter Wallet
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
