import { PageHeader } from "@/components/PageHeader";
import { MessageCircle, Users, Calendar } from "lucide-react";

const GROUPS = [
  { name: "Apprenons l'Ewondo", members: "1.2k membres", emoji: "🏡" },
  { name: "Wolof entre amis", members: "3.4k membres", emoji: "⛵" },
  { name: "Yoruba diaspora", members: "2.8k membres", emoji: "👑" },
  { name: "Swahili du soir", members: "5.1k membres", emoji: "🏔️" },
];

const DISCUSSIONS = [
  { title: "Proverbe du jour : « Aslì o lè » (Ewondo)", replies: 24 },
  { title: "Expressions utiles au marché en Wolof", replies: 15 },
  { title: "Culture & traditions du Mali", replies: 30 },
  { title: "Comment dire « Je t'aime » dans 21 langues ?", replies: 47 },
];

export default function CommunautePage() {
  return (
    <>
      <PageHeader
        title="Communauté"
        subtitle="Échange avec les apprenants du continent et de la diaspora."
      >
        <button className="rounded-full bg-gold-500 px-4 py-2 text-sm font-bold text-[#1a0f00]">
          + Créer un groupe
        </button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-surface-elevated p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Users size={18} className="text-gold-400" /> Groupes populaires
          </h3>
          <ul className="mt-4 space-y-3">
            {GROUPS.map((g) => (
              <li
                key={g.name}
                className="flex items-center gap-3 rounded-xl bg-background/60 p-3"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary-700 to-african-orange text-2xl">
                  {g.emoji}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{g.name}</p>
                  <p className="text-xs text-muted">{g.members}</p>
                </div>
                <button className="rounded-full border border-gold-500/40 px-3 py-1 text-xs font-semibold text-gold-400">
                  Rejoindre
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-surface-elevated p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <MessageCircle size={18} className="text-gold-400" /> Discussions
          </h3>
          <ul className="mt-4 space-y-3">
            {DISCUSSIONS.map((d) => (
              <li
                key={d.title}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 p-3"
              >
                <p className="line-clamp-1 text-sm font-medium">{d.title}</p>
                <span className="shrink-0 text-xs text-muted">
                  {d.replies} réponses
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-surface-elevated p-6 lg:col-span-2">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Calendar size={18} className="text-gold-400" /> Événements à venir
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <EventCard date="12 Juin" title="Live Wolof — Marché de Dakar" />
            <EventCard date="20 Juin" title="Atelier proverbes Yoruba" />
            <EventCard date="30 Juin" title="Cercle de conversation Ewondo" />
          </div>
        </section>
      </div>
    </>
  );
}

function EventCard({ date, title }: { date: string; title: string }) {
  return (
    <article className="rounded-xl border border-border bg-background/40 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
        {date}
      </p>
      <p className="mt-2 text-sm font-semibold">{title}</p>
    </article>
  );
}
