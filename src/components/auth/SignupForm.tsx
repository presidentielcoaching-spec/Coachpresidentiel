"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { User, Mail, Lock, Phone, ArrowRight, Check } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";
import { formations } from "@/lib/formations";

export function SignupForm() {
  const router = useRouter();
  const params = useSearchParams();
  const preselected = params.get("formation") ?? "";
  const [formation, setFormation] = useState(preselected);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const target = formation
      ? `/paiement?formation=${formation}`
      : "/espace-apprenant";
    setTimeout(() => router.push(target), 900);
  };

  return (
    <AuthShell
      title="Rejoignez l'élite"
      subtitle="Créez votre compte et démarrez votre transformation dès aujourd'hui."
    >
      <form onSubmit={submit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input icon={User} label="Prénom" placeholder="Votre prénom" />
          <Input icon={User} label="Nom" placeholder="Votre nom" />
        </div>
        <Input icon={Mail} label="Email" type="email" placeholder="vous@email.com" />
        <Input icon={Phone} label="Téléphone" type="tel" placeholder="+225 ..." />
        <Input
          icon={Lock}
          label="Mot de passe"
          type="password"
          placeholder="Min. 8 caractères"
        />

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Formation souhaitée
          </span>
          <select
            value={formation}
            onChange={(e) => setFormation(e.target.value)}
            className="auth-input"
          >
            <option value="">Je choisirai plus tard</option>
            {formations.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.title} — {f.priceLabel}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-start gap-2.5 text-sm text-muted">
          <input required type="checkbox" className="mt-0.5 accent-gold-500" />
          <span>
            J'accepte les{" "}
            <Link href="/legal/conditions" className="font-semibold text-navy">
              conditions générales
            </Link>{" "}
            et la{" "}
            <Link
              href="/legal/confidentialite"
              className="font-semibold text-navy"
            >
              politique de confidentialité
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 font-bold text-navy shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {loading ? "Création du compte…" : "Créer mon compte"}
          {!loading && <ArrowRight className="h-4 w-4" />}
        </button>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
        {["Certificat inclus", "Suivi personnalisé", "Paiement en tranches"].map(
          (b) => (
            <span key={b} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> {b}
            </span>
          )
        )}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Déjà inscrit ?{" "}
        <Link href="/connexion" className="font-semibold text-navy">
          Se connecter
        </Link>
      </p>

      <style>{`
        .auth-input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid var(--color-border);
          background: var(--color-cloud);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--color-navy);
          transition: border-color 0.2s, background 0.2s;
        }
        .auth-input:focus {
          outline: none;
          border-color: var(--color-gold);
          background: #fff;
        }
      `}</style>
    </AuthShell>
  );
}

function Input({
  icon: Icon,
  label,
  type = "text",
  placeholder,
}: {
  icon: typeof User;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">{label}</span>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
        <input
          required
          type={type}
          placeholder={placeholder}
          className="auth-input pl-11"
        />
      </div>
    </label>
  );
}
