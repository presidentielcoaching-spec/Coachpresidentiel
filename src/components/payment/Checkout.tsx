"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Download,
  Lock,
  Tag,
} from "lucide-react";
import { Container } from "@/components/Section";
import { formations, formatFcfa, formationIcons } from "@/lib/formations";

const methods = [
  { id: "orange", name: "Orange Money", color: "bg-orange-500" },
  { id: "wave", name: "Wave", color: "bg-sky-500" },
  { id: "visa", name: "Visa", color: "bg-blue-800" },
  { id: "mastercard", name: "Mastercard", color: "bg-neutral-800" },
];

export function Checkout() {
  const params = useSearchParams();
  const slug = params.get("formation") ?? formations[0].slug;
  const formation =
    formations.find((f) => f.slug === slug) ?? formations[0];
  const FIcon = formationIcons[formation.icon];

  const [tranches, setTranches] = useState(formation.installments);
  const [method, setMethod] = useState("orange");
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<number>(0);
  const [paid, setPaid] = useState(false);

  const discount = Math.round(formation.price * applied);
  const total = formation.price - discount;
  const perTranche = Math.ceil(total / tranches / 1000) * 1000;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "LEADER10") setApplied(0.1);
    else if (coupon.trim().toUpperCase() === "ELITE20") setApplied(0.2);
    else setApplied(0);
  };

  if (paid) {
    return (
      <section className="bg-cloud py-20">
        <Container className="max-w-xl">
          <div className="rounded-3xl border border-border bg-white p-9 text-center shadow-premium">
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" />
            <h2 className="mt-5 text-2xl font-bold">Paiement confirmé 🎉</h2>
            <p className="mt-2 text-muted">
              Votre première tranche pour la formation{" "}
              <strong className="text-navy">{formation.title}</strong> a bien été
              enregistrée.
            </p>
            <div className="mt-6 space-y-2 rounded-2xl bg-cloud p-5 text-left text-sm">
              <Row label="Formation" value={formation.title} />
              <Row label="Tranche réglée" value={formatFcfa(perTranche)} />
              <Row
                label="Reste à payer"
                value={formatFcfa(total - perTranche)}
              />
              <Row
                label="Référence"
                value={`CP-${Date.now().toString().slice(-8)}`}
              />
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white">
              <Download className="h-4 w-4" /> Télécharger le reçu PDF
            </button>
            <Link
              href="/espace-apprenant"
              className="mt-3 block text-sm font-semibold text-gold-600"
            >
              Accéder à mon espace apprenant →
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-cloud py-20">
      <Container className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        {/* Left: form */}
        <div className="space-y-8">
          {/* Methods */}
          <div className="rounded-3xl border border-border bg-white p-7">
            <h2 className="text-lg font-bold">1. Moyen de paiement</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {methods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all ${
                    method === m.id
                      ? "border-gold-400 bg-gold-50 ring-2 ring-gold-300/40"
                      : "border-border hover:border-gold-300"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${m.color} text-sm font-extrabold text-white`}
                  >
                    {m.name[0]}
                  </span>
                  <span className="text-xs font-semibold text-navy">
                    {m.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              {method === "orange" || method === "wave" ? (
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-navy">
                    Numéro {method === "orange" ? "Orange Money" : "Wave"}
                  </span>
                  <input
                    className="pay-input"
                    placeholder="+225 07 00 00 00 00"
                  />
                </label>
              ) : (
                <>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-navy">
                      Numéro de carte
                    </span>
                    <input
                      className="pay-input"
                      placeholder="0000 0000 0000 0000"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-navy">
                        Expiration
                      </span>
                      <input className="pay-input" placeholder="MM/AA" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-navy">
                        CVC
                      </span>
                      <input className="pay-input" placeholder="123" />
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tranches */}
          <div className="rounded-3xl border border-border bg-white p-7">
            <h2 className="text-lg font-bold">2. Échéancier</h2>
            <p className="mt-1 text-sm text-muted">
              {formation.installmentLabel} pour cette formation.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {Array.from({ length: formation.installments }, (_, i) => i + 1).map(
                (o) => (
                  <button
                    key={o}
                    onClick={() => setTranches(o)}
                    className={`rounded-xl border px-5 py-2.5 text-sm font-bold transition-all ${
                      tranches === o
                        ? "border-gold-400 bg-gold-50 text-gold-600 ring-2 ring-gold-300/40"
                        : "border-border text-navy/70 hover:border-gold-300"
                    }`}
                  >
                    {o} {o === 1 ? "fois" : "tranches"}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Coupon */}
          <div className="rounded-3xl border border-border bg-white p-7">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <Tag className="h-5 w-5 text-gold-500" /> Code promo
            </h2>
            <div className="mt-4 flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="pay-input flex-1"
                placeholder="Ex: LEADER10"
              />
              <button
                onClick={applyCoupon}
                className="rounded-xl bg-navy px-5 text-sm font-bold text-white"
              >
                Appliquer
              </button>
            </div>
            {applied > 0 && (
              <p className="mt-2 text-sm font-medium text-emerald-600">
                Code appliqué : -{applied * 100}% 🎉
              </p>
            )}
            {coupon && applied === 0 && (
              <p className="mt-2 text-sm text-muted">
                Essayez « LEADER10 » ou « ELITE20 ».
              </p>
            )}
          </div>
        </div>

        {/* Right: summary */}
        <div className="lg:sticky lg:top-28">
          <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold">Récapitulatif</h2>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-cloud p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold-300">
                <FIcon className="h-6 w-6" />
              </span>
              <div>
                <div className="font-bold text-navy">{formation.title}</div>
                <div className="text-xs text-muted">{formation.duration}</div>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 text-sm">
              <Row label="Prix de la formation" value={formatFcfa(formation.price)} />
              {discount > 0 && (
                <Row
                  label="Réduction"
                  value={`- ${formatFcfa(discount)}`}
                  green
                />
              )}
              <Row label="Total" value={formatFcfa(total)} bold />
              <div className="border-t border-border pt-3">
                <Row
                  label={`Aujourd'hui (1/${tranches})`}
                  value={formatFcfa(perTranche)}
                  bold
                />
              </div>
            </div>

            <button
              onClick={() => setPaid(true)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 font-bold text-navy shadow-gold transition-transform hover:scale-[1.01]"
            >
              <Lock className="h-4 w-4" /> Payer {formatFcfa(perTranche)}
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
              <ShieldCheck className="h-4 w-4 text-emerald-500" /> Paiement
              chiffré & sécurisé
            </p>
          </div>
        </div>
      </Container>

      <style>{`
        .pay-input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid var(--color-border);
          background: var(--color-cloud);
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          color: var(--color-navy);
        }
        .pay-input:focus {
          outline: none;
          border-color: var(--color-gold);
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function Row({
  label,
  value,
  bold,
  green,
}: {
  label: string;
  value: string;
  bold?: boolean;
  green?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span
        className={`${bold ? "text-base font-extrabold text-navy" : "font-semibold text-navy"} ${
          green ? "!text-emerald-600" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
