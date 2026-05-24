import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  BookOpenCheck,
  Sparkles,
  Flame,
  Mic,
  Plus,
  PlayCircle,
  Star,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function DashboardPage() {
  const user = (await getCurrentUser())!;
  const myLanguageIds = user.languages.map((l) => l.languageId);

  const [allLanguages, recommendedLessons, leaderboard, totalLessons] =
    await Promise.all([
      prisma.language.findMany({ orderBy: { name: "asc" } }),
      prisma.lesson.findMany({
        where: { languageId: { in: myLanguageIds } },
        take: 4,
        orderBy: { orderIndex: "asc" },
        include: { language: true },
      }),
      prisma.user.findMany({
        orderBy: { xp: "desc" },
        take: 5,
        select: { id: true, name: true, xp: true },
      }),
      prisma.lesson.count(),
    ]);

  const currentLang = user.languages[0];
  const currentLangName = currentLang?.language.name ?? "Ewondo";
  const currentLessonProgress = currentLang?.progress ?? 0;
  const lessonsCompleted = user.languages.reduce(
    (sum, l) => sum + Math.round((l.progress / 100) * 8),
    0,
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Bonjour {user.name.split(" ")[0]} ! <span aria-hidden>👋</span>
          </h1>
          <p className="mt-1 text-foreground/75">
            Prêt à apprendre et à faire vivre nos langues ?
          </p>
        </div>

        <ContinueLearning
          language={currentLangName}
          progress={currentLessonProgress}
        />

        <ParcoursStats
          languages={user.languages.length}
          lessons={lessonsCompleted}
          xp={user.xp}
          streak={user.streakDays}
        />

        <MyLanguages
          languages={user.languages.map((ul) => ({
            name: ul.language.name,
            level: ul.level,
            progress: ul.progress,
            emoji: ul.language.emoji,
            hue: ul.language.hue,
          }))}
          totalAvailable={allLanguages.length}
        />

        <RecommendedSection lessons={recommendedLessons} />
      </div>

      <aside className="space-y-6">
        <AICoachCard userName={user.name.split(" ")[0]} />
        <LeaderboardCard
          entries={leaderboard.map((u) => ({
            name: u.name,
            xp: u.xp,
            self: u.id === user.id,
          }))}
        />
        <DailyChallengeCard />
      </aside>
    </div>
  );
}

function ContinueLearning({ language, progress }: { language: string; progress: number }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-700 via-primary-800 to-background p-6 sm:p-8">
      <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="absolute inset-0 pattern-kente opacity-25" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
            Continue ton apprentissage
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            {language} pour débutants
          </h2>
          <div className="mt-4 max-w-md">
            <div className="h-2 overflow-hidden rounded-full bg-background/40">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-foreground/75">{progress}% complété</p>
          </div>
          <Link
            href="/lecons"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-[#1a0f00] shadow-lg shadow-gold-500/25 transition hover:bg-gold-400"
          >
            <PlayCircle size={16} /> Continuer la leçon
          </Link>
        </div>

        <div className="relative hidden h-44 w-44 shrink-0 overflow-hidden rounded-2xl border border-gold-500/40 bg-background/40 sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-african-orange/40 to-primary-900" />
          <div className="absolute inset-0 grid place-items-center text-6xl">
            👩🏿
          </div>
        </div>
      </div>
    </div>
  );
}

function ParcoursStats({
  languages,
  lessons,
  xp,
  streak,
}: {
  languages: number;
  lessons: number;
  xp: number;
  streak: number;
}) {
  const items = [
    { icon: Globe2, value: languages, label: "Langues apprises", color: "text-african-green" },
    { icon: BookOpenCheck, value: lessons, label: "Leçons complétées", color: "text-primary-300" },
    { icon: Sparkles, value: xp.toLocaleString("fr-FR"), label: "Points XP", color: "text-gold-400" },
    { icon: Flame, value: `${streak} 🔥`, label: "Série de jours", color: "text-african-orange" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Ton parcours</h3>
        <Link
          href="/parametres"
          className="inline-flex items-center gap-1 text-xs font-medium text-gold-400 hover:underline"
        >
          Voir mon profil <ArrowRight size={12} />
        </Link>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl bg-background/60 ${color}`}>
              <Icon size={18} />
            </span>
            <div>
              <dt className="text-lg font-bold leading-tight">{value}</dt>
              <dd className="text-[11px] text-muted">{label}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

function MyLanguages({
  languages,
  totalAvailable,
}: {
  languages: { name: string; level: number; progress: number; emoji: string; hue: string }[];
  totalAvailable: number;
}) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Mes langues</h3>
        <Link
          href="/langues"
          className="inline-flex items-center gap-1 text-xs font-medium text-gold-400 hover:underline"
        >
          Toutes les langues ({totalAvailable}) <ArrowRight size={12} />
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((l) => (
          <article
            key={l.name}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-4`}
          >
            <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${l.hue} opacity-60`} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-background/40 text-2xl ring-1 ring-border">
                  {l.emoji}
                </span>
                <ProgressRing value={l.progress} />
              </div>
              <h4 className="mt-3 text-lg font-bold">{l.name}</h4>
              <p className="text-xs text-foreground/70">Niveau {l.level}</p>
            </div>
          </article>
        ))}
        <Link
          href="/langues"
          className="grid place-items-center rounded-2xl border-2 border-dashed border-border bg-surface-elevated/40 p-6 text-center text-sm text-muted transition hover:border-gold-500/60 hover:text-gold-400"
        >
          <span className="flex flex-col items-center gap-2">
            <Plus size={28} />
            Ajouter une langue
          </span>
        </Link>
      </div>
    </section>
  );
}

function ProgressRing({ value }: { value: number }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-12 w-12">
      <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
        <circle cx="24" cy="24" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="4" fill="none" />
        <circle
          cx="24"
          cy="24"
          r={r}
          stroke="#f5b942"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (value / 100) * c}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[10px] font-bold text-gold-400">
        {value}%
      </span>
    </div>
  );
}

function RecommendedSection({
  lessons,
}: {
  lessons: Array<{
    id: string;
    title: string;
    durationMin: number;
    category: string;
    language: { name: string; emoji: string };
  }>;
}) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recommandé pour toi</h3>
        <Link
          href="/lecons"
          className="inline-flex items-center gap-1 text-xs font-medium text-gold-400 hover:underline"
        >
          Voir tout <ArrowRight size={12} />
        </Link>
      </div>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lessons.map((l) => (
          <li key={l.id}>
            <Link
              href="/lecons"
              className="group block overflow-hidden rounded-2xl border border-border bg-surface-elevated transition hover:-translate-y-0.5 hover:border-primary-400/60"
            >
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-african-orange/40 via-primary-800/80 to-primary-900">
                <div className="absolute inset-0 pattern-kente opacity-40" />
                <span className="absolute right-3 top-3 rounded-full bg-background/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur">
                  {l.category}
                </span>
                <span className="absolute bottom-3 left-3 text-4xl">{l.language.emoji}</span>
              </div>
              <div className="p-3">
                <p className="line-clamp-1 text-sm font-semibold">{l.title}</p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-muted">
                  <span>{l.language.name}</span>
                  <span>{l.durationMin} min</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AICoachCard({ userName }: { userName: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <h3 className="text-lg font-semibold">IA Conversationnelle</h3>
      <p className="mt-1 text-xs text-muted">
        Ton coach IA est prêt à discuter avec toi !
      </p>

      <div className="mt-4 flex items-start gap-3 rounded-2xl bg-background/60 p-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-600/30 text-primary-200">
          <Bot />
        </span>
        <p className="rounded-2xl rounded-tl-sm bg-surface px-3 py-2 text-sm text-foreground/90">
          Mbote {userName} ! Comment puis-je t&apos;aider aujourd&apos;hui ?
        </p>
      </div>

      <Link
        href="/ia"
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-primary-500"
      >
        <Mic size={14} /> Commencer à parler
      </Link>

      <p className="mt-4 mb-2 text-[11px] font-medium uppercase tracking-wider text-muted">
        Choisis un scénario
      </p>
      <div className="grid grid-cols-2 gap-2">
        {["Se présenter", "Au marché", "En famille", "À l'école"].map((s) => (
          <Link
            key={s}
            href="/ia"
            className="rounded-xl border border-border bg-background/50 px-3 py-2 text-center text-xs font-medium hover:border-gold-500/60"
          >
            {s}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Bot() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="14" rx="3" />
      <circle cx="9" cy="14" r="1.5" />
      <circle cx="15" cy="14" r="1.5" />
      <path d="M12 7V3" />
      <circle cx="12" cy="2" r="1" />
    </svg>
  );
}

function LeaderboardCard({
  entries,
}: {
  entries: { name: string; xp: number; self: boolean }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <h3 className="text-lg font-semibold">Classement</h3>
      <div className="mt-3 flex gap-2 text-xs">
        <button className="rounded-full bg-primary-600/30 px-3 py-1 font-semibold text-primary-200">
          Global
        </button>
        <button className="rounded-full px-3 py-1 text-muted hover:text-foreground">
          Amis
        </button>
      </div>
      <ol className="mt-3 space-y-1">
        {entries.map((e, i) => (
          <li
            key={e.name + i}
            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
              e.self ? "bg-gold-500/15 ring-1 ring-gold-500/40" : ""
            }`}
          >
            <span className="w-4 text-center text-xs font-bold text-muted">
              {i + 1}
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-[11px] font-bold text-[#1a0f00]">
              {e.name.charAt(0)}
            </span>
            <span className={`flex-1 truncate ${e.self ? "font-bold" : ""}`}>
              {e.name}
            </span>
            <span className="text-xs font-semibold text-gold-400">
              {e.xp.toLocaleString("fr-FR")} XP
            </span>
          </li>
        ))}
      </ol>
      <Link
        href="/classement"
        className="mt-4 block text-center text-xs font-medium text-gold-400 hover:underline"
      >
        Voir le classement complet →
      </Link>
    </div>
  );
}

function DailyChallengeCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Défi du jour</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary-600/30 px-2.5 py-1 text-[11px] font-bold text-primary-100">
          <Star size={12} className="text-gold-400" /> +50 XP
        </span>
      </div>
      <p className="mt-2 text-sm text-foreground/80">Apprends 5 nouveaux mots</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-background/40">
        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-gold-400 to-african-orange" />
      </div>
      <p className="mt-1 text-xs text-muted">3 / 5</p>
    </div>
  );
}
