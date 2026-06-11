"use client";

import Link from "next/link";
import { ShieldCheck, FileText, History, Layers } from "lucide-react";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const methods = [
  { name: "Orange Money", className: "bg-orange-500" },
  { name: "Wave", className: "bg-sky-500" },
  { name: "Visa", className: "bg-blue-800" },
  { name: "Mastercard", className: "bg-neutral-800" },
];

const features = [
  { icon: Layers, label: "Paiement en plusieurs tranches" },
  { icon: FileText, label: "Factures & reçus PDF automatiques" },
  { icon: History, label: "Historique des paiements" },
  { icon: ShieldCheck, label: "Transactions 100% sécurisées" },
];

export function PaymentBand() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-cloud p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
                Paiement flexible & sécurisé
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Investissez en toute sérénité
              </h2>
              <p className="mt-4 text-muted">
                Réglez vos formations en plusieurs tranches via vos moyens de
                paiement préférés. Reçus et factures générés automatiquement.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-3 text-sm font-medium text-navy/80"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-gold-500 shadow-sm">
                      <f.icon className="h-5 w-5" />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
              <Link
                href="/paiement"
                className="mt-8 inline-flex rounded-full bg-navy px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-light"
              >
                Découvrir le paiement
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {methods.map((m) => (
                <div
                  key={m.name}
                  className="card-hover flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white p-4"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${m.className} text-sm font-extrabold text-white`}
                  >
                    {m.name[0]}
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    {m.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
