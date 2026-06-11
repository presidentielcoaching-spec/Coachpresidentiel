"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";

const links = [
  { key: "nav.formations", href: "/formations" },
  { key: "nav.why", href: "/#pourquoi" },
  { key: "nav.dashboard", href: "/espace-apprenant" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.faq", href: "/faq" },
  { key: "nav.contact", href: "/contact" },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/85 backdrop-blur-xl shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 transition-colors hover:border-gold-300 hover:text-gold-300"
            aria-label="Changer de langue"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang.toUpperCase()}
          </button>

          <Link
            href="/connexion"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-gold-300 sm:block"
          >
            {t("nav.login")}
          </Link>

          <Link
            href="/inscription"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-bold text-navy shadow-gold transition-transform hover:scale-[1.03] sm:flex"
          >
            {t("nav.enroll")}
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-[72px] bg-navy/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-8">
            {links.map((l, i) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-semibold text-white"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/connexion"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/30 py-3 text-center font-semibold text-white"
              >
                {t("nav.login")}
              </Link>
              <Link
                href="/inscription"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-gold-300 to-gold-500 py-3 text-center font-bold text-navy"
              >
                {t("nav.enroll")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
