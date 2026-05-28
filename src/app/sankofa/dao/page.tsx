import { Vote, Coins, Users, ShieldCheck, ArrowUpRight } from "lucide-react";
import { DAO_PROPOSALS, formatCompact } from "@/lib/sankofa/data";

export default function DaoPage() {
  return (
    <div className="relative">
      <div className="border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="sankofa-chip">
            <Vote size={11} /> DAO Sankofa · $SANKO
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-sankofa-gold">La gouvernance</span>{" "}
            <span className="text-[var(--color-sankofa-ivory)]">
              appartient à la communauté.
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-muted)] md:text-base">
            Trésor on-chain, votes pondérés, comité de curation tournant.
            La plateforme avance au rythme des détenteurs $SANKO.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Treasury & token strip */}
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { label: "Trésor DAO", value: "$12.4M", sub: "Diversifié 8 actifs" },
            { label: "Détenteurs $SANKO", value: formatCompact(48210), sub: "↑ +12% / 30j" },
            { label: "Propositions actives", value: "12", sub: "8 en cours de vote" },
            { label: "Taux de participation", value: "72%", sub: "Médiane 14 jours" },
          ].map((s) => (
            <div
              key={s.label}
              className="sankofa-glass rounded-3xl px-5 py-5"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-semibold text-sankofa-gold">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] text-[var(--color-sankofa-ivory-soft)]">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Proposals */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
            Propositions en cours
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {DAO_PROPOSALS.map((p) => {
              const total = p.votesFor + p.votesAgainst;
              const pct = total ? Math.round((p.votesFor / total) * 100) : 0;
              return (
                <div
                  key={p.id}
                  className="sankofa-glass sankofa-glass-hover rounded-3xl p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="sankofa-chip">{p.category}</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          p.status === "Active"
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"
                            : p.status === "Passed"
                              ? "bg-[var(--color-sankofa-gold-500)]/15 text-[var(--color-sankofa-gold-200)] border border-[var(--color-sankofa-gold-500)]/40"
                              : "bg-red-500/15 text-red-300 border border-red-400/40"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                      {p.id}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-[var(--color-sankofa-ivory)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-sankofa-muted)]">
                    {p.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex justify-between text-[11px] text-[var(--color-sankofa-ivory-soft)]">
                      <span>Pour {formatCompact(p.votesFor)}</span>
                      <span>Contre {formatCompact(p.votesAgainst)}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--color-sankofa-border)]">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--color-sankofa-gold-400)] to-[var(--color-sankofa-bronze)]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.status === "Active" ? (
                      <>
                        <button className="sankofa-btn-gold inline-flex items-center gap-2 px-4 py-2 text-xs">
                          Voter Pour
                        </button>
                        <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs">
                          Voter Contre
                        </button>
                      </>
                    ) : (
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-sankofa-muted)]">
                        Clôturée
                      </span>
                    )}
                    <a
                      href="#"
                      className="ml-auto inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-sankofa-gold-300)] hover:text-[var(--color-sankofa-gold-200)]"
                    >
                      Discussion <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tokenomics */}
        <div className="mt-16 sankofa-glass rounded-[36px] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] items-start">
            <div>
              <span className="sankofa-chip">
                <Coins size={11} /> Tokenomics $SANKO
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
                Distribution équitable, vesting transparent.
              </h3>
              <p className="mt-3 text-sm text-[var(--color-sankofa-muted)]">
                Supply fixe de 1 milliard de tokens. 60% pour la communauté
                (drops, staking, royalties), 18% pour le trésor DAO, 12% pour
                l'équipe (vesting 4 ans, cliff 12 mois), 10% pour les premiers
                investisseurs (vesting 3 ans).
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                    Token utility
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-sankofa-ivory)]">
                    Gouvernance · staking · réduction de frais · accès premium
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                    Émission annuelle
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-sankofa-ivory)]">
                    Aucune (supply fixe) · burn déflationniste sur frais
                  </div>
                </div>
              </div>
            </div>

            <div>
              {[
                { label: "Communauté", pct: 60, color: "var(--color-sankofa-gold-400)" },
                { label: "Trésor DAO", pct: 18, color: "var(--color-sankofa-cosmos-bright)" },
                { label: "Équipe (vesting 4 ans)", pct: 12, color: "var(--color-sankofa-bronze)" },
                { label: "Investisseurs", pct: 10, color: "var(--color-sankofa-magenta)" },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-xs text-[var(--color-sankofa-ivory-soft)]">
                    <span>{row.label}</span>
                    <span className="font-semibold">{row.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[var(--color-sankofa-border)]">
                    <div
                      className="h-full"
                      style={{
                        width: `${row.pct}%`,
                        background: row.color,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="sankofa-btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-xs">
                  <Coins size={12} /> Acheter $SANKO
                </button>
                <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-xs">
                  <ShieldCheck size={12} /> Audit smart contract
                </button>
                <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-xs">
                  <Users size={12} /> Forum Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
