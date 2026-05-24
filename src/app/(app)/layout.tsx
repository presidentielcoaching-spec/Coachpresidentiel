import { redirect } from "next/navigation";
import { Bell, Search, Flame } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { AppSidebar } from "@/components/AppSidebar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar
        userName={user.name}
        userLevel={user.level}
        userXp={user.xp}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="relative hidden flex-1 max-w-xl md:block">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="search"
                placeholder="Rechercher une langue, une leçon…"
                className="w-full rounded-full border border-border bg-surface-elevated py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
              />
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-gold-400">
                <Flame size={14} className="text-african-orange" />
                {user.streakDays} jours
              </div>
              <button
                aria-label="Notifications"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-elevated text-foreground/80 hover:text-gold-400"
              >
                <Bell size={16} />
              </button>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-sm font-bold text-[#1a0f00]">
                {user.name.charAt(0)}
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
