"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";

const NAV_LINKS = [
  { href: "/arbre", label: "Arbre" },
  { href: "/descendance", label: "Descendance" },
  { href: "/archives", label: "Archives" },
  { href: "/cartographie", label: "Cartographie" },
  { href: "/timeline", label: "Chronologie" },
  { href: "/memoire", label: "Mémoire orale" },
  { href: "/ia", label: "IA historique" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-bronze-500)]/40 bg-[var(--color-background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-bronze-500)] bg-[var(--color-earth-700)] text-[var(--color-gold-400)]">
            <Sun size={20} />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            Racines &amp; Mémoire
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-gold-400)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/arbre"
          className="hidden rounded-full bg-[var(--color-gold-500)] px-4 py-2 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)] lg:inline-flex"
        >
          Commencer
        </Link>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-[var(--color-muted)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
