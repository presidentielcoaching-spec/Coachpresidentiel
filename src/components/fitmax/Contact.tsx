import { Clock, Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/fitmax/site";

export function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="relative bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            Localisation &amp; Contact
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Venez nous rencontrer à Koumassi
          </h2>
          <p className="mt-4 text-lg text-muted">
            FIT-MAX se situe en plein cœur de Koumassi, sur le Boulevard
            Antananarivo. Un emplacement accessible pour vous entraîner près de
            chez vous.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <InfoCard
              icon={MapPin}
              title="Adresse"
              lines={[site.address.street, site.address.city]}
              action={{
                label: "Itinéraire",
                href: `https://maps.google.com/maps?q=${encodeURIComponent(
                  site.address.mapsQuery
                )}`,
              }}
            />
            <InfoCard
              icon={Phone}
              title="Téléphone"
              lines={[site.phone.display]}
              action={{ label: "Appeler", href: site.phone.href }}
            />
            <InfoCard
              icon={Clock}
              title="Horaires"
              lines={[
                "Lun – Ven : 07h00 – 22h00",
                "Samedi : 07h00 – 21h00",
                "Dimanche : 07h00 – 18h00",
              ]}
            />

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-lime-400"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary-500/50 hover:bg-surface-elevated"
              >
                <Facebook className="h-4 w-4 text-primary-400" />
                Page Facebook
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <iframe
              title="Localisation de FIT-MAX à Koumassi"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold">{title}</h3>
        <div className="mt-1 space-y-0.5">
          {lines.map((line) => (
            <p key={line} className="text-muted">
              {line}
            </p>
          ))}
        </div>
      </div>
      {action && (
        <a
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="shrink-0 self-center rounded-full border border-primary-500/40 px-4 py-1.5 text-sm font-semibold text-primary-300 transition-colors hover:bg-primary-500 hover:text-background"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
