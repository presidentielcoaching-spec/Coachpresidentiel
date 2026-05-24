"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction, type AuthState } from "../actions";

const initial: AuthState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initial);

  return (
    <div>
      <h2 className="text-3xl font-bold">Bon retour parmi nous</h2>
      <p className="mt-2 text-sm text-muted">
        Connecte-toi pour continuer ton apprentissage.
      </p>

      <form action={formAction} className="mt-8 space-y-4">
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label="Mot de passe"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />

        {state.error && (
          <p className="rounded-lg border border-african-red/40 bg-african-red/10 px-3 py-2 text-sm text-african-red">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-[#1a0f00] shadow-lg shadow-gold-500/25 transition hover:bg-gold-400 disabled:opacity-60"
        >
          {pending ? "Connexion…" : "Se connecter"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Pas encore de compte ?{" "}
        <Link href="/signup" className="font-semibold text-gold-400 hover:underline">
          Inscris-toi gratuitement
        </Link>
      </p>

      <div className="mt-8 rounded-xl border border-border bg-surface-elevated/60 px-4 py-3 text-xs text-muted">
        <p className="font-semibold text-foreground/80">Compte de démo</p>
        <p className="mt-1">
          <code className="text-gold-400">koffi@afrilingua.ai</code> ·{" "}
          <code className="text-gold-400">koffi1234</code>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
      />
    </label>
  );
}
