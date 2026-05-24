"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/langues", label: "Langues" },
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#apropos", label: "À propos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#accueil" aria-label="Kemetlingua AI accueil">
          <Logo size={40} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/85 transition hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/85 transition hover:text-gold-400"
          >
            Connexion
          </a>
          <a
            href="/signup"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-[#1a0f00] shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
          >
            S&apos;inscrire
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
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-border px-4 py-2 text-center text-sm font-medium"
              >
                Connexion
              </a>
              <a
                href="/signup"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-gold-500 px-4 py-2 text-center text-sm font-semibold text-[#1a0f00]"
              >
                S&apos;inscrire
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
