"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpenCheck,
  Bot,
  Globe,
  Users,
  Sparkles,
  Trophy,
  Award,
  ShoppingBag,
  Settings,
  Crown,
} from "lucide-react";
import { Logo } from "./Logo";
import { logoutAction } from "@/app/(auth)/actions";

const NAV = [
  { href: "/dashboard", label: "Accueil", icon: Home },
  { href: "/lecons", label: "Mes leçons", icon: BookOpenCheck },
  { href: "/ia", label: "IA Conversation", icon: Bot },
  { href: "/langues", label: "Langues", icon: Globe },
  { href: "/communaute", label: "Communauté", icon: Users },
  { href: "/culture", label: "Culture", icon: Sparkles },
  { href: "/classement", label: "Classements", icon: Trophy },
  { href: "/certificats", label: "Certificats", icon: Award },
  { href: "/boutique", label: "Boutique", icon: ShoppingBag },
  { href: "/parametres", label: "Paramètres", icon: Settings },
];

type Props = {
  userName: string;
  userLevel: number;
  userXp: number;
};

export function AppSidebar({ userName, userLevel, userXp }: Props) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-background/80 backdrop-blur lg:flex">
      <div className="px-5 pt-5">
        <Link href="/dashboard">
          <Logo size={36} />
        </Link>
      </div>

      <nav className="mt-6 flex-1 overflow-y-auto px-3">
        <ul className="space-y-0.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-primary-600/25 text-foreground ring-1 ring-primary-500/40"
                      : "text-foreground/70 hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.75} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-3 border-t border-border/60 p-4">
        <div className="overflow-hidden rounded-2xl border border-gold-500/40 bg-gradient-to-br from-primary-700 via-primary-800 to-background p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gold-400">
            <Crown size={14} /> Pass Premium
          </div>
          <p className="mt-1 text-[11px] leading-snug text-foreground/75">
            Toutes les langues, IA illimitée et contenus exclusifs.
          </p>
          <Link
            href="/boutique"
            className="mt-3 block rounded-full bg-gold-500 px-3 py-1.5 text-center text-xs font-bold text-[#1a0f00]"
          >
            Passer Premium · 5€/mois
          </Link>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-sm font-bold text-[#1a0f00]">
            {userName.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{userName}</p>
            <p className="text-[11px] text-muted">
              Niveau {userLevel} · {userXp.toLocaleString("fr-FR")} XP
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              title="Déconnexion"
              className="rounded-md p-1 text-muted hover:text-african-red"
            >
              <LogoutIcon />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}

function LogoutIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
