"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  PlayCircle,
  FileText,
  ListChecks,
  Award,
  MessageSquare,
  CalendarDays,
  LogOut,
  Menu,
  X,
  Bell,
  Flame,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { OverviewTab } from "./tabs/OverviewTab";
import { CoursesTab } from "./tabs/CoursesTab";
import { ResourcesTab } from "./tabs/ResourcesTab";
import { QuizTab } from "./tabs/QuizTab";
import { CertificatesTab } from "./tabs/CertificatesTab";
import { MessagesTab } from "./tabs/MessagesTab";
import { CalendarTab } from "./tabs/CalendarTab";

const nav = [
  { id: "overview", label: "Tableau de bord", icon: LayoutDashboard },
  { id: "courses", label: "Mes cours", icon: PlayCircle },
  { id: "resources", label: "Supports PDF", icon: FileText },
  { id: "quiz", label: "Quiz & évaluations", icon: ListChecks },
  { id: "certificates", label: "Certificats", icon: Award },
  { id: "messages", label: "Messagerie", icon: MessageSquare },
  { id: "calendar", label: "Sessions live", icon: CalendarDays },
] as const;

type TabId = (typeof nav)[number]["id"];

export function Dashboard() {
  const [tab, setTab] = useState<TabId>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const current = nav.find((n) => n.id === tab)!;

  return (
    <div className="min-h-screen bg-cloud">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-navy-dark transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-18 items-center justify-between px-6">
          <Logo />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white/70 lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-4">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                setTab(n.id);
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                tab === n.id
                  ? "bg-gradient-to-r from-gold-300 to-gold-500 text-navy shadow-gold"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <n.icon className="h-5 w-5" />
              {n.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <span className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-gold-300 to-gold-500" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">
                Awa Bamba
              </div>
              <div className="truncate text-xs text-white/50">
                Apprenante Premium
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
          >
            <LogOut className="h-5 w-5" /> Déconnexion
          </Link>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-dark/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="lg:pl-72">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-18 items-center justify-between border-b border-border bg-white/90 px-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-navy lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-navy sm:text-xl">
                {current.label}
              </h1>
              <p className="hidden text-xs text-muted sm:block">
                Ravi de vous revoir, Awa 👋
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-sm font-bold text-orange-600 sm:flex">
              <Flame className="h-4 w-4" /> 12 jours
            </span>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cloud text-navy">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-gold-500" />
            </button>
          </div>
        </header>

        <div className="p-5 sm:p-8">
          {tab === "overview" && <OverviewTab onNavigate={setTab} />}
          {tab === "courses" && <CoursesTab />}
          {tab === "resources" && <ResourcesTab />}
          {tab === "quiz" && <QuizTab />}
          {tab === "certificates" && <CertificatesTab />}
          {tab === "messages" && <MessagesTab />}
          {tab === "calendar" && <CalendarTab />}
        </div>
      </div>
    </div>
  );
}
