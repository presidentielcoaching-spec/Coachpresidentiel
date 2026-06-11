"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";

export function LoginForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/espace-apprenant"), 900);
  };

  return (
    <AuthShell
      title="Bon retour 👋"
      subtitle="Connectez-vous pour accéder à vos cours et votre progression."
    >
      <form onSubmit={submit} className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </span>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              required
              type="email"
              defaultValue="apprenant@email.com"
              className="auth-input pl-11"
              placeholder="vous@email.com"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Mot de passe
          </span>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              required
              type={show ? "text" : "password"}
              defaultValue="password"
              className="auth-input px-11"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-navy"
            >
              {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </label>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted">
            <input type="checkbox" className="accent-gold-500" /> Se souvenir de
            moi
          </label>
          <Link href="#" className="font-semibold text-gold-600">
            Mot de passe oublié ?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 font-bold text-navy shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {loading ? "Connexion…" : "Se connecter"}
          {!loading && <ArrowRight className="h-4 w-4" />}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-muted">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="font-semibold text-navy">
          Créer un compte
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
