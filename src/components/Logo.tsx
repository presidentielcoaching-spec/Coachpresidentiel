import Link from "next/link";

export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const titleColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/60" : "text-muted";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Coaching Présidentiel — Accueil"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 shadow-gold transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-xl font-extrabold text-navy">CP</span>
        <span className="absolute -inset-px rounded-xl ring-1 ring-inset ring-white/30" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-extrabold tracking-tight ${titleColor}`}
        >
          Coaching <span className="text-gradient-gold">Présidentiel</span>
        </span>
        <span
          className={`mt-1 text-[10px] font-medium uppercase tracking-[0.25em] ${subColor}`}
        >
          Académie d'élite
        </span>
      </span>
    </Link>
  );
}
