"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Loader2,
  Printer,
  Smartphone,
  Wallet,
} from "lucide-react";

type Provider = "stripe" | "orange_money" | "wave";

type WaveIntent = {
  pendingId: string;
  paymentUrl: string;
  amountXof: number;
};

type Step = "idle" | "wave_modal" | "orange_modal";

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
  const [step, setStep] = useState<Step>("idle");
  const [waveIntent, setWaveIntent] = useState<WaveIntent | null>(null);
  const [orangePhone, setOrangePhone] = useState("");
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

  async function openWave() {
    setLoading("wave");
    setFeedback(null);
    try {
      const res = await fetch("/api/checkout/mobile-money", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: "wave", action: "intent" }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        id?: string;
        paymentUrl?: string;
        amountXof?: number;
        error?: string;
      };
      if (!res.ok || !data.id || !data.paymentUrl) {
        setFeedback({
          kind: "error",
          text: data.error ?? "Impossible d'initier le paiement Wave.",
        });
        return;
      }
      setWaveIntent({
        pendingId: data.id,
        paymentUrl: data.paymentUrl,
        amountXof: data.amountXof ?? 3250,
      });
      setStep("wave_modal");
    } catch (err) {
      setFeedback({
        kind: "error",
        text: err instanceof Error ? err.message : "Erreur réseau",
      });
    } finally {
      setLoading(null);
    }
  }

  async function submitOrange() {
    setLoading("orange_money");
    setFeedback(null);
    try {
      const res = await fetch("/api/checkout/mobile-money", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: "orange_money",
          action: "intent",
          phone: orangePhone,
        }),
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
      setStep("idle");
      setOrangePhone("");
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

  async function claimWavePaid() {
    if (!waveIntent) return;
    setLoading("wave");
    setFeedback(null);
    try {
      const res = await fetch("/api/checkout/mobile-money", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: "wave",
          action: "claim_paid",
          pendingId: waveIntent.pendingId,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        whatsappUrl?: string | null;
        message?: string;
        error?: string;
      };
      if (!res.ok) {
        setFeedback({
          kind: "error",
          text: data.error ?? "Impossible d'enregistrer la confirmation.",
        });
        return;
      }
      setStep("idle");
      setWaveIntent(null);
      setFeedback({
        kind: "success",
        text:
          data.message ??
          "Paiement déclaré ! On t'active le Premium dans quelques minutes.",
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
          onClick={() => setStep("orange_modal")}
          disabled={loading !== null}
          className="flex items-center justify-center gap-2 rounded-full border border-african-orange/60 bg-african-orange/10 px-4 py-3 text-sm font-semibold text-african-orange transition hover:bg-african-orange/20 disabled:opacity-60"
        >
          <Smartphone size={16} /> Orange Money
        </button>
        <button
          type="button"
          onClick={openWave}
          disabled={loading !== null}
          className="flex items-center justify-center gap-2 rounded-full border border-[#1cb4ff]/60 bg-[#1cb4ff]/10 px-4 py-3 text-sm font-semibold text-[#1cb4ff] transition hover:bg-[#1cb4ff]/20 disabled:opacity-60"
        >
          {loading === "wave" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Wallet size={16} />
          )}
          Payer avec Wave · 3 250 XOF
        </button>
      </div>

      <p className="text-center text-[11px] text-muted">
        Annulable à tout moment · Paiement sécurisé Stripe & Wave · Une question ?{" "}
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
                Envoyer ma preuve sur WhatsApp →
              </a>
            </div>
          )}
        </div>
      )}

      {step === "wave_modal" && waveIntent && (
        <WaveModal
          intent={waveIntent}
          onClose={() => {
            setStep("idle");
            setWaveIntent(null);
          }}
          onClaim={claimWavePaid}
          loading={loading === "wave"}
        />
      )}

      {step === "orange_modal" && (
        <OrangeModal
          phone={orangePhone}
          onPhone={setOrangePhone}
          onClose={() => {
            setStep("idle");
            setOrangePhone("");
          }}
          onSubmit={submitOrange}
          loading={loading === "orange_money"}
        />
      )}
    </div>
  );
}

function WaveModal({
  intent,
  onClose,
  onClaim,
  loading,
}: {
  intent: WaveIntent;
  onClose: () => void;
  onClaim: () => void;
  loading: boolean;
}) {
  const formattedXof = new Intl.NumberFormat("fr-FR").format(intent.amountXof);

  function printQR() {
    if (typeof window === "undefined") return;
    const win = window.open("", "_blank", "width=420,height=620");
    if (!win) return;
    const svg = document.getElementById("wave-qr")?.outerHTML ?? "";
    win.document.write(`
      <html><head><title>QR Wave — Kemetlingua</title>
      <style>
        body{font-family:system-ui;text-align:center;padding:24px;background:#1cb4ff;color:white}
        h1{margin:0 0 12px;font-size:28px}
        h2{margin:0 0 24px;font-weight:400;opacity:.9}
        .wrap{background:white;padding:18px;border-radius:18px;display:inline-block;margin:8px}
        .ref{margin-top:24px;font-size:13px;opacity:.9}
        code{background:rgba(0,0,0,.2);padding:2px 6px;border-radius:4px}
      </style>
      </head><body>
        <h1>Payez avec Wave</h1>
        <h2>Kemetlingua AI · ${formattedXof} XOF</h2>
        <div class="wrap">${svg}</div>
        <p class="ref">Référence : <code>${intent.pendingId}</code></p>
        <p style="font-size:12px;opacity:.85">Scanne ce QR avec l'app Wave puis valide le paiement.</p>
      </body></html>
    `);
    win.document.close();
    win.print();
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-[#1cb4ff]/40 bg-surface-elevated p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#1cb4ff]">Payer avec Wave</h3>
          <span className="text-xs text-muted">
            Réf : <code className="text-gold-400">{intent.pendingId.slice(-8)}</code>
          </span>
        </div>

        <div className="mt-4 grid place-items-center rounded-2xl bg-[#1cb4ff] p-5">
          <div className="rounded-2xl bg-white p-4 shadow-inner">
            <QRCodeSVG
              id="wave-qr"
              value={intent.paymentUrl}
              size={200}
              level="M"
              marginSize={1}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>
          <p className="mt-3 text-center text-sm font-bold text-white">
            {formattedXof} XOF · Pass Premium 1 mois
          </p>
        </div>

        <div className="mt-4 space-y-2">
          <a
            href={intent.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1cb4ff] px-4 py-3 text-sm font-bold text-white hover:bg-[#0f9fe6]"
          >
            <ExternalLink size={14} /> Ouvrir Wave et payer
          </a>
          <button
            type="button"
            onClick={printQR}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-semibold text-foreground/80 hover:border-gold-500/60"
          >
            <Printer size={12} /> Imprimer / partager le QR
          </button>
        </div>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-wider text-muted">
            après paiement
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-xs text-muted">
          Quand tu as terminé le paiement Wave, déclare-le ici. Notre équipe
          rapproche ta transaction et active ton Premium en quelques minutes.
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold"
          >
            Plus tard
          </button>
          <button
            type="button"
            onClick={onClaim}
            disabled={loading}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-bold text-[#1a0f00] disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <CheckCircle2 size={14} />
            )}
            J&apos;ai payé
          </button>
        </div>
      </div>
    </div>
  );
}

function OrangeModal({
  phone,
  onPhone,
  onClose,
  onSubmit,
  loading,
}: {
  phone: string;
  onPhone: (v: string) => void;
  onClose: () => void;
  onSubmit: () => void;
  loading: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-surface-elevated p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold">Payer avec Orange Money</h3>
        <p className="mt-1 text-sm text-muted">
          Entre ton numéro de téléphone Orange Money. Notre équipe te confirme
          l&apos;activation Premium en moins d&apos;une heure ouvrée (paiement
          5€ ≈ 3 250 XOF).
        </p>
        <label className="mt-4 block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted">
            Téléphone Orange Money
          </span>
          <input
            type="tel"
            inputMode="tel"
            placeholder="+221 77 123 45 67"
            value={phone}
            onChange={(e) => onPhone(e.target.value)}
            className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
          />
        </label>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={loading || phone.length < 8}
            className="flex-1 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-bold text-[#1a0f00] disabled:opacity-60"
          >
            {loading ? "Envoi…" : "Confirmer la demande"}
          </button>
        </div>
      </div>
    </div>
  );
}
