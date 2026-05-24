"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signupAction, type AuthState } from "../actions";

const initial: AuthState = {};

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signupAction, initial);

  return (
    <div>
      <h2 className="text-3xl font-bold">Rejoins l&apos;aventure</h2>
      <p className="mt-2 text-sm text-muted">
        Crée ton compte gratuit et commence à apprendre dès maintenant.
      </p>

      <form action={formAction} className="mt-8 space-y-4">
        <Field label="Prénom & nom" name="name" autoComplete="name" required />
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
          autoComplete="new-password"
          required
          hint="8 caractères minimum"
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
          {pending ? "Création…" : "Créer mon compte"}
        </button>

        <p className="text-center text-[11px] text-muted">
          En t&apos;inscrivant, tu acceptes nos conditions et notre politique de
          confidentialité.
        </p>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Déjà inscrit ?{" "}
        <Link href="/login" className="font-semibold text-gold-400 hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted">
        {label}
        {hint && <span className="text-[10px] normal-case text-muted/70">{hint}</span>}
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
