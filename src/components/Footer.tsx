"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";
import { formations } from "@/lib/formations";

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://wa.me/2250700000000", label: "WhatsApp" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative overflow-hidden bg-navy-dark text-white">
      <div className="pattern-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Newsletter strip */}
        <div className="grid gap-6 border-b border-white/10 py-12 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-bold !text-white">
              Restez à la pointe de l'excellence
            </h3>
            <p className="mt-2 text-white/60">
              Recevez nos meilleurs conseils en Trading, IA et Leadership.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2 md:ml-auto"
          >
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-300 focus:outline-none"
            />
            <button className="shrink-0 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-bold text-navy transition-transform hover:scale-105">
              S'abonner
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <a
                href="tel:+2250700000000"
                className="flex items-center gap-3 hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-300" /> +225 07 00 00 00 00
              </a>
              <a
                href="mailto:contact@coachingpresidentiel.com"
                className="flex items-center gap-3 hover:text-gold-300"
              >
                <Mail className="h-4 w-4 text-gold-300" />{" "}
                contact@coachingpresidentiel.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold-300" /> Abidjan, Côte
                d'Ivoire
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider !text-gold-300">
              {t("footer.programs")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {formations.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/formations/${f.slug}`}
                    className="transition-colors hover:text-gold-300"
                  >
                    {f.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider !text-gold-300">
              {t("footer.company")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/#pourquoi" className="hover:text-gold-300">
                  {t("nav.why")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-300">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-300">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/affiliation" className="hover:text-gold-300">
                  Programme d'affiliation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider !text-gold-300">
              {t("footer.legal")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/legal/mentions-legales" className="hover:text-gold-300">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/confidentialite"
                  className="hover:text-gold-300"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal/conditions" className="hover:text-gold-300">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Coaching Présidentiel. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold-300 hover:bg-gold-400 hover:text-navy"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
