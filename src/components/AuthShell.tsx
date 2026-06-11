import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ShieldCheck, Star } from "lucide-react";

export function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand side */}
      <div className="bg-navy-gradient relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="pattern-grid absolute inset-0 opacity-50" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="relative">
          <Logo />
        </div>
        <div className="relative max-w-md">
          <div className="flex text-gold-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-2xl font-bold leading-snug !text-white">
            « Coaching Présidentiel a transformé ma carrière. Un niveau
            d'accompagnement rare et exigeant. »
          </p>
          <p className="mt-4 text-white/60">Awa Bamba — Promotion 2025</p>
        </div>
        <div className="relative flex items-center gap-2 text-sm text-white/60">
          <ShieldCheck className="h-4 w-4 text-gold-300" />
          Espace apprenant 100% sécurisé
        </div>
      </div>

      {/* Form side */}
      <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-12">
        <div className="mx-auto w-full max-w-md">
          <div className="lg:hidden">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-extrabold text-navy">
                Coaching <span className="text-gradient-gold">Présidentiel</span>
              </span>
            </Link>
          </div>
          <h1 className="mt-8 text-3xl font-extrabold lg:mt-0">{title}</h1>
          <p className="mt-2 text-muted">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
