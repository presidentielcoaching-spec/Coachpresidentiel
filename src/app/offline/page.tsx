"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function OfflinePage() {
  return (
    <div className="grid min-h-screen place-items-center bg-radial-purple pattern-kente p-6 text-center">
      <div className="max-w-md">
        <div className="mx-auto mb-6 flex justify-center">
          <Logo size={56} />
        </div>
        <h1 className="text-3xl font-extrabold">
          Tu es <span className="text-gradient-gold">hors ligne</span>
        </h1>
        <p className="mt-3 text-sm text-foreground/80">
          Pas de souci — réessaie quand la connexion revient. En mode Premium,
          tes leçons sont disponibles hors ligne.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button
            onClick={() => location.reload()}
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-[#1a0f00]"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-semibold"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
