"use client";

import { useState } from "react";
import { CreditCard, Loader2, Smartphone, Wallet } from "lucide-react";

type Provider = "stripe" | "orange_money" | "wave";

export function CheckoutButtons({
  isPremium,
  hasStripe,
  supportEmail,
}: {
  isPremium: boolean;
  hasStripe: boolean;
  supportEmail: string;
}) {
  const [loading, setLoading] = useState<Provider | null>(null);
  const [modal, setModal] = useState<null | "orange_money" | "wave">(null);
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    text: string;
    whatsappUrl?: string;
  } | null>(null);

  if (isPremium) {
    return (
      <div className="rounded-2xl border border-gold-500/50 bg-gradient-to-br from-primary-800 to-primary-900 p-5 text-center">
        <p className="text-lg font-bold text-gold-400">Tu es déjà Premium ✨</p>
        <p className="mt-1 text-sm text-foreground/75">
          Profite de toutes les fonctionnalités sans limite. Merci !
        </p>
      </div>
    );
  }

  async function startStripe() {
    setLoading("stripe");
    setFeedback(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (!res.ok || !data.url) {
        setFeedback({
          kind: "error",
          text: data.error ?? "Impossible de créer la session.",
        });
        return;
      }
      window.location.href = data.url;
    } catch (err) {
      setFeedback({
        kind: "error",
        text: err instanceof Error ? err.message : "Erreur réseau",
      });
    } finally {
      setLoading(null);
    }
  }

  async function submitMobileMoney() {
    if (!modal) return;
    setLoading(modal);
    setFeedback(null);
    try {
      const res = await fetch("/api/checkout/mobile-money", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: modal, phone }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        whatsappUrl?: string | null;
        message?: string;
        error?: string;
      };
      if (!res.ok) {
        setFeedback({
          kind: "error",
          text: data.error ?? "Échec de l'enregistrement.",
        });
        return;
      }
      setModal(null);
      setPhone("");
      setFeedback({
        kind: "success",
        text:
          data.message ??
          "Demande enregistrée. Notre équipe te contacte rapidement.",
        whatsappUrl: data.whatsappUrl ?? undefined,
      });
    } catch (err) {
      setFeedback({
        kind: "error",
        text: err instanceof Error ? err.message : "Erreur réseau",
      });
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={startStripe}
        disabled={loading !== null || !hasStripe}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-gold-500 px-5 py-4 text-base font-bold text-[#1a0f00] shadow-xl shadow-gold-500/30 transition hover:bg-gold-400 disabled:opacity-60"
      >
        {loading === "stripe" ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <CreditCard size={18} />
        )}
        {hasStripe
          ? "Passer Premium par carte · 5€/mois"
          : "Paiement carte indisponible (config Stripe)"}
      </button>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setModal("orange_money")}
          disabled={loading !== null}
          className="flex items-center justify-center gap-2 rounded-full border border-african-orange/60 bg-african-orange/10 px-4 py-3 text-sm font-semibold text-african-orange transition hover:bg-african-orange/20 disabled:opacity-60"
        >
          <Smartphone size={16} /> Orange Money
        </button>
        <button
          type="button"
          onClick={() => setModal("wave")}
          disabled={loading !== null}
          className="flex items-center justify-center gap-2 rounded-full border border-primary-400/60 bg-primary-500/10 px-4 py-3 text-sm font-semibold text-primary-200 transition hover:bg-primary-500/20 disabled:opacity-60"
        >
          <Wallet size={16} /> Wave
        </button>
      </div>

      <p className="text-center text-[11px] text-muted">
        Annulable à tout moment · Paiement sécurisé Stripe · Une question ?{" "}
        <a className="underline" href={`mailto:${supportEmail}`}>
          {supportEmail}
        </a>
      </p>

      {feedback && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            feedback.kind === "success"
              ? "border-african-green/50 bg-african-green/10 text-african-green"
              : "border-african-red/50 bg-african-red/10 text-african-red"
          }`}
        >
          {feedback.text}
          {feedback.whatsappUrl && (
            <div className="mt-2">
              <a
                href={feedback.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-african-green px-4 py-2 text-xs font-bold text-white"
              >
                Continuer sur WhatsApp →
              </a>
            </div>
          )}
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-border bg-surface-elevated p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold">
              Payer avec{" "}
              {modal === "wave" ? "Wave" : "Orange Money"}
            </h3>
            <p className="mt-1 text-sm text-muted">
              Entre ton numéro de téléphone. Notre équipe te confirme
              l&apos;activation Premium en moins d&apos;une heure ouvrée
              (paiement de 5€ équivalent en XOF).
            </p>
            <label className="mt-4 block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted">
                Téléphone
              </span>
              <input
                type="tel"
                inputMode="tel"
                placeholder="+221 77 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
              />
            </label>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={submitMobileMoney}
                disabled={loading !== null || phone.length < 8}
                className="flex-1 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-bold text-[#1a0f00] disabled:opacity-60"
              >
                {loading === modal ? "Envoi…" : "Confirmer la demande"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
