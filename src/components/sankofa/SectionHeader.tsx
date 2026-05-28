import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <span className="sankofa-chip">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-sankofa-ivory)] md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-sankofa-muted)] md:text-base">
            {description}
          </p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="sankofa-btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em]"
        >
          {ctaLabel} <ArrowUpRight size={13} />
        </Link>
      )}
    </div>
  );
}
