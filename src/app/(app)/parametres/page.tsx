import { PageHeader } from "@/components/PageHeader";
import { getCurrentUser } from "@/lib/auth";
import { logoutAction } from "@/app/(auth)/actions";

export default async function ParametresPage() {
  const user = (await getCurrentUser())!;

  return (
    <>
      <PageHeader
        title="Paramètres"
        subtitle="Gère ton compte, ton profil et tes préférences."
      />

      <div className="mx-auto max-w-3xl space-y-6">
        <section className="rounded-2xl border border-border bg-surface-elevated p-6">
          <h3 className="text-lg font-semibold">Profil</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Nom" value={user.name} />
            <Field label="Email" value={user.email} />
            <Field label="Niveau" value={`Niveau ${user.level}`} />
            <Field label="XP totaux" value={user.xp.toLocaleString("fr-FR")} />
            <Field label="Série de jours" value={`${user.streakDays} jours`} />
            <Field
              label="Plan"
              value={user.isPremium ? "Premium ✨" : "Gratuit"}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface-elevated p-6">
          <h3 className="text-lg font-semibold">Préférences</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <Toggle label="Notifications quotidiennes" defaultOn />
            <Toggle label="Sons d'apprentissage" defaultOn />
            <Toggle label="Mode hors ligne (Premium)" defaultOn={false} />
            <Toggle label="Newsletter culturelle" defaultOn />
          </ul>
        </section>

        <section className="rounded-2xl border border-african-red/40 bg-surface-elevated p-6">
          <h3 className="text-lg font-semibold text-african-red">
            Zone sensible
          </h3>
          <p className="mt-1 text-sm text-muted">
            Déconnexion de tous tes appareils ou suppression définitive du compte.
          </p>
          <div className="mt-4 flex gap-3">
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold hover:border-gold-500"
              >
                Se déconnecter
              </button>
            </form>
            <button
              disabled
              className="rounded-full border border-african-red/40 px-5 py-2 text-sm font-semibold text-african-red opacity-60"
            >
              Supprimer le compte
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm">
        {value}
      </p>
    </div>
  );
}

function Toggle({ label, defaultOn }: { label: string; defaultOn: boolean }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl bg-background/40 px-4 py-3">
      <span>{label}</span>
      <span
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          defaultOn ? "bg-gold-500" : "bg-border"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-background transition ${
            defaultOn ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </span>
    </li>
  );
}
