import { PageHeader } from "@/components/PageHeader";
import { getCurrentUser } from "@/lib/auth";
import { Mic, Volume2 } from "lucide-react";

const SCENARIOS = [
  { icon: "👋", label: "Se présenter", desc: "Donne ton nom et raconte d'où tu viens." },
  { icon: "🛒", label: "Au marché", desc: "Marchande, demande des prix." },
  { icon: "👨‍👩‍👧", label: "En famille", desc: "Parle de tes proches." },
  { icon: "🏫", label: "À l'école", desc: "Discute des cours et des amis." },
  { icon: "🚕", label: "En taxi", desc: "Indique ton chemin, négocie." },
  { icon: "🍲", label: "Au restaurant", desc: "Commande un plat local." },
];

export default async function IAPage() {
  const user = (await getCurrentUser())!;
  const firstLang = user.languages[0]?.language;

  return (
    <>
      <PageHeader
        title="IA Conversationnelle"
        subtitle={`Pratique ${firstLang?.name ?? "ta langue"} à l'oral avec ton coach IA.`}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="relative overflow-hidden rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-700 via-primary-900 to-background p-8">
          <div className="absolute inset-0 pattern-kente opacity-20" />
          <div className="relative flex flex-col items-center text-center">
            <div className="grid h-44 w-44 place-items-center rounded-full border-4 border-gold-500/40 bg-gradient-to-br from-primary-600 to-primary-900 shadow-2xl shadow-primary-900/50">
              <button
                type="button"
                aria-label="Appuie pour parler"
                className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-[#1a0f00] shadow-xl shadow-gold-500/40 transition hover:scale-105"
              >
                <Mic size={48} strokeWidth={2.5} />
              </button>
            </div>
            <p className="mt-6 text-sm font-medium text-foreground/80">
              Appuie pour parler
            </p>
            <p className="mt-1 text-xs text-muted">
              L&apos;IA t&apos;écoute, te corrige et te répond en{" "}
              {firstLang?.name ?? "ta langue"}.
            </p>

            <div className="mt-8 w-full max-w-md rounded-2xl bg-background/50 p-4 text-left">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-600/30 text-primary-200">
                  🤖
                </span>
                <div className="flex-1">
                  <p className="text-sm text-foreground/90">
                    {firstLang
                      ? `${firstLang.greeting} ${user.name.split(" ")[0]} ! Comment puis-je t'aider aujourd'hui ?`
                      : `Mbote ${user.name.split(" ")[0]} ! Choisis une langue pour commencer.`}
                  </p>
                  <button className="mt-2 inline-flex items-center gap-1 text-xs text-gold-400 hover:underline">
                    <Volume2 size={12} /> Écouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Scénarios
            </h3>
            <ul className="mt-3 space-y-2">
              {SCENARIOS.map((s) => (
                <li key={s.label}>
                  <button className="flex w-full items-center gap-3 rounded-xl border border-border bg-background/50 px-3 py-2 text-left transition hover:border-gold-500/60">
                    <span className="text-xl">{s.icon}</span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{s.label}</span>
                      <span className="block text-[11px] text-muted">{s.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
