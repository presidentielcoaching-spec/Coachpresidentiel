import Link from "next/link";
import { Crown, Sparkles, ArrowRight } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

type SearchParams = Promise<{ session_id?: string }>;

export default async function PremiumSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const user = (await getCurrentUser())!;
  const { session_id } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      <div className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-gold-500/20 ring-4 ring-gold-500/40">
        <Crown size={44} className="text-gold-400" />
      </div>
      <h1 className="mt-6 text-4xl font-extrabold">
        Bienvenue dans le club Premium,{" "}
        <span className="text-gradient-gold">
          {user.name.split(" ")[0]}
        </span>{" "}
        !
      </h1>
      <p className="mt-3 text-foreground/80">
        Ton abonnement est activé. Toutes les langues, l&apos;IA illimitée et
        les certificats officiels sont à toi.
      </p>
      <p className="mt-2 text-xs text-muted">
        {session_id ? `Référence : ${session_id}` : null}
      </p>

      <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left text-sm">
        {[
          "Accède à toutes les 21+ langues africaines",
          "Discute sans limite avec ton coach IA",
          "Télécharge tes leçons en mode hors ligne",
          "Décroche tes certificats officiels",
        ].map((it) => (
          <li key={it} className="flex items-start gap-2 rounded-xl bg-surface-elevated p-3">
            <Sparkles size={16} className="mt-0.5 text-gold-400" />
            {it}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-[#1a0f00]"
        >
          Retour au tableau de bord <ArrowRight size={14} />
        </Link>
        <Link
          href="/lecons"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold"
        >
          Commencer une leçon
        </Link>
      </div>
    </div>
  );
}
