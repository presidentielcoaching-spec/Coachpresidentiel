"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Container } from "@/components/Section";
import { formations } from "@/lib/formations";

const channels = [
  {
    icon: Phone,
    label: "Téléphone / WhatsApp",
    value: "+225 07 00 00 00 00",
    href: "https://wa.me/2250700000000",
  },
  {
    icon: Mail,
    label: "Email professionnel",
    value: "contact@coachingpresidentiel.com",
    href: "mailto:contact@coachingpresidentiel.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Abidjan, Côte d'Ivoire",
    href: "#",
  },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-cloud py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold">Nos coordonnées</h2>
          <div className="gold-divider mt-4" />
          <div className="mt-8 space-y-5">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-white p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-300">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted">
                    {c.label}
                  </div>
                  <div className="font-semibold text-navy">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <div className="text-sm font-semibold text-navy">Suivez-nous</div>
            <div className="mt-3 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-gold-400 hover:text-navy"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-white p-7 shadow-sm sm:p-9">
          {sent ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-500" />
              <h3 className="mt-5 text-2xl font-bold">Message envoyé !</h3>
              <p className="mt-2 max-w-sm text-muted">
                Merci de nous avoir contactés. Notre équipe vous répondra dans
                les plus brefs délais.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-navy hover:border-gold-300"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet" required>
                  <input
                    required
                    type="text"
                    placeholder="Votre nom"
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    placeholder="vous@email.com"
                    className="input"
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Téléphone">
                  <input
                    type="tel"
                    placeholder="+225 ..."
                    className="input"
                  />
                </Field>
                <Field label="Formation concernée">
                  <select className="input">
                    <option value="">Sélectionner…</option>
                    {formations.map((f) => (
                      <option key={f.slug} value={f.slug}>
                        {f.title}
                      </option>
                    ))}
                    <option value="autre">Autre</option>
                  </select>
                </Field>
              </div>
              <Field label="Message" required>
                <textarea
                  required
                  rows={5}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="input resize-none"
                />
              </Field>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 font-bold text-navy shadow-gold transition-transform hover:scale-[1.01]"
              >
                Envoyer le message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </Container>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid var(--color-border);
          background: var(--color-cloud);
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          color: var(--color-navy);
          transition: border-color 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-gold);
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label} {required && <span className="text-gold-500">*</span>}
      </span>
      {children}
    </label>
  );
}
