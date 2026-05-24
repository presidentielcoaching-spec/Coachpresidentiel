import { PageHeader } from "@/components/PageHeader";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Crown, Flame } from "lucide-react";

export default async function ClassementPage() {
  const me = (await getCurrentUser())!;
  const top = await prisma.user.findMany({
    orderBy: { xp: "desc" },
    take: 50,
    select: { id: true, name: true, xp: true, level: true, streakDays: true },
  });

  return (
    <>
      <PageHeader
        title="Classements"
        subtitle="Mesure tes progrès face à la communauté Afrilingua."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {top.slice(0, 3).map((u, i) => (
          <PodiumCard
            key={u.id}
            position={i + 1}
            name={u.name}
            xp={u.xp}
            level={u.level}
            streak={u.streakDays}
            self={u.id === me.id}
          />
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface-elevated">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-background/40 text-left text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-5 py-3">#</th>
              <th className="px-5 py-3">Apprenant</th>
              <th className="px-5 py-3">Niveau</th>
              <th className="px-5 py-3">Série</th>
              <th className="px-5 py-3 text-right">XP</th>
            </tr>
          </thead>
          <tbody>
            {top.map((u, i) => (
              <tr
                key={u.id}
                className={`border-b border-border/40 last:border-0 ${
                  u.id === me.id ? "bg-gold-500/10" : ""
                }`}
              >
                <td className="px-5 py-3 font-bold text-muted">{i + 1}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-xs font-bold text-[#1a0f00]">
                      {u.name.charAt(0)}
                    </span>
                    <span className={u.id === me.id ? "font-bold" : ""}>
                      {u.name}
                      {u.id === me.id && (
                        <span className="ml-2 rounded-full bg-gold-500 px-2 py-0.5 text-[10px] text-[#1a0f00]">
                          Toi
                        </span>
                      )}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-foreground/80">N{u.level}</td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center gap-1 text-african-orange">
                    <Flame size={12} /> {u.streakDays}j
                  </span>
                </td>
                <td className="px-5 py-3 text-right font-bold text-gold-400">
                  {u.xp.toLocaleString("fr-FR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function PodiumCard({
  position,
  name,
  xp,
  level,
  streak,
  self,
}: {
  position: number;
  name: string;
  xp: number;
  level: number;
  streak: number;
  self: boolean;
}) {
  const styles = [
    "from-gold-500 to-african-orange border-gold-500/60",
    "from-primary-400 to-primary-700 border-primary-400/60",
    "from-african-red to-african-orange border-african-red/60",
  ];
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border-2 bg-surface-elevated p-6 ${
        self ? "ring-2 ring-gold-400" : ""
      } ${styles[position - 1]?.split(" ").pop() ?? ""}`}
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl ${styles[position - 1]}`} />
      <div className="relative flex flex-col items-center text-center">
        {position === 1 && <Crown size={28} className="mb-2 text-gold-400" />}
        <span className="text-5xl font-extrabold text-foreground/30">
          #{position}
        </span>
        <span className="mt-3 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-xl font-bold text-[#1a0f00]">
          {name.charAt(0)}
        </span>
        <h3 className="mt-3 text-lg font-bold">{name}</h3>
        <p className="text-xs text-muted">Niveau {level} · {streak}j 🔥</p>
        <p className="mt-3 text-2xl font-extrabold text-gold-400">
          {xp.toLocaleString("fr-FR")} XP
        </p>
      </div>
    </article>
  );
}
