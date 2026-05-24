import { PageHeader } from "@/components/PageHeader";
import { Award, Lock } from "lucide-react";

export default function CertificatsPage() {
  const certs = [
    { lang: "Ewondo", level: "Débutant", earned: true, date: "20 Mai 2026" },
    { lang: "Wolof", level: "Débutant", earned: false },
    { lang: "Yoruba", level: "Débutant", earned: false },
  ];

  return (
    <>
      <PageHeader
        title="Certificats"
        subtitle="Décroche tes certificats officiels Afrilingua AI."
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <li key={c.lang}>
            <article
              className={`relative overflow-hidden rounded-2xl border p-6 ${
                c.earned
                  ? "border-gold-500/60 bg-gradient-to-br from-primary-800 via-primary-900 to-background"
                  : "border-border bg-surface-elevated opacity-70"
              }`}
            >
              <div className="absolute inset-0 pattern-kente opacity-20" />
              <div className="relative text-center">
                {c.earned ? (
                  <Award size={40} className="mx-auto text-gold-400" />
                ) : (
                  <Lock size={40} className="mx-auto text-muted" />
                )}
                <h3 className="mt-3 text-lg font-bold">
                  {c.lang} — {c.level}
                </h3>
                <p className="mt-1 text-xs text-muted">
                  {c.earned ? `Délivré le ${c.date}` : "À débloquer"}
                </p>
                {c.earned && (
                  <button className="mt-4 rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-[#1a0f00]">
                    Télécharger
                  </button>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
