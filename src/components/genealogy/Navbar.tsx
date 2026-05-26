"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TreePine } from "lucide-react";

const NAV_LINKS = [
  { href: "/arbre", label: "Arbre généalogique" },
  { href: "/descendance", label: "Descendance" },
  { href: "/archives", label: "Archives" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-700)] text-[var(--color-gold-400)]">
            <TreePine size={20} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Racines &amp; Mémoire
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/arbre"
            className="rounded-full bg-[var(--color-gold-500)] px-4 py-2 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
          >
            Commencer
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] md:hidden">
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
