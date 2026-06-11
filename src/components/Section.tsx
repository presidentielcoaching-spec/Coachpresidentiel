import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  variant = "dark",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {kicker && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] ${
              isLight ? "text-gold-300" : "text-gold-500"
            }`}
          >
            <span className="h-px w-6 bg-current opacity-60" />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`mt-4 text-3xl font-bold sm:text-4xl md:text-[2.6rem] ${
            isLight ? "!text-white" : ""
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isLight ? "text-white/70" : "text-muted"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={200}>
        <div
          className={`gold-divider mt-6 ${align === "center" ? "mx-auto" : ""}`}
        />
      </Reveal>
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
