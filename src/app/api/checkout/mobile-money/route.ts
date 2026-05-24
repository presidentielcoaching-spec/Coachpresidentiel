import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

const ALLOWED = new Set(["orange_money", "wave"]);

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Non connecté" }, { status: 401 });
  }
  if (user.isPremium) {
    return NextResponse.json({ error: "Déjà Premium" }, { status: 400 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    provider?: string;
    phone?: string;
  };
  const provider = (body.provider ?? "").trim();
  const phone = (body.phone ?? "").trim();

  if (!ALLOWED.has(provider)) {
    return NextResponse.json({ error: "Fournisseur invalide" }, { status: 400 });
  }
  if (!/^\+?\d{8,16}$/.test(phone)) {
    return NextResponse.json(
      { error: "Numéro de téléphone invalide" },
      { status: 400 },
    );
  }

  const pending = await prisma.pendingPayment.create({
    data: {
      userId: user.id,
      provider,
      phone,
      email: user.email,
      amountCents: 500,
      currency: "EUR",
      status: "pending",
    },
  });

  const supportWhatsapp = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "";
  const message = encodeURIComponent(
    `Bonjour, je suis ${user.name} (${user.email}). Je veux activer mon Pass Premium Kemetlingua AI via ${provider === "wave" ? "Wave" : "Orange Money"} depuis le numéro ${phone}. Ma référence : ${pending.id}`,
  );
  const whatsappUrl = supportWhatsapp
    ? `https://wa.me/${supportWhatsapp}?text=${message}`
    : null;

  return NextResponse.json({
    id: pending.id,
    provider,
    whatsappUrl,
    message:
      "Votre demande est enregistrée. Notre équipe valide votre paiement sous 1 h ouvrée.",
  });
}
