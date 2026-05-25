"use client";

import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { COLLECTION } from "@/lib/collection";

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#gardiens", label: "Les Gardiens" },
  { href: "#lore", label: "Le Lore" },
  { href: "#rarete", label: "Rareté" },
  { href: "#feuille-de-route", label: "Roadmap" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#accueil" aria-label="Sankofa Legacy accueil">
          <Logo size={40} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/85 transition hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#whitelist"
            className="rounded-full border border-gold-500/40 px-5 py-2 text-sm font-medium text-gold-300 transition hover:border-gold-400 hover:text-gold-200"
          >
            Whitelist
          </a>
          <a
            href={COLLECTION.opensea}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-[#1a0f00] shadow-lg shadow-gold-500/25 transition hover:bg-gold-400"
          >
            OpenSea
            <ExternalLink size={14} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground/80 lg:hidden"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <ul className="space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/85 hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <a
                href="#whitelist"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-gold-500/40 px-4 py-2 text-center text-sm font-medium text-gold-300"
              >
                Whitelist
              </a>
              <a
                href={COLLECTION.opensea}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-gold-500 px-4 py-2 text-center text-sm font-semibold text-[#1a0f00]"
              >
                OpenSea
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
