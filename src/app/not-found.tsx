import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="bg-navy-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pattern-grid absolute inset-0 opacity-40" />
      <div className="relative">
        <Logo />
        <div className="mt-10 font-display text-8xl font-extrabold text-gradient-gold sm:text-9xl">
          404
        </div>
        <h1 className="mt-4 text-2xl font-bold !text-white sm:text-3xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-bold text-navy shadow-gold"
          >
            <Home className="h-4 w-4" /> Accueil
          </Link>
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:border-gold-300"
          >
            <ArrowLeft className="h-4 w-4" /> Nos formations
          </Link>
        </div>
      </div>
    </div>
  );
}
