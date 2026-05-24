"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { clearSession, createSession } from "@/lib/auth";

export type AuthState = { error?: string };

export async function loginAction(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email et mot de passe requis." };
  }
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "Identifiants incorrects." };
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return { error: "Identifiants incorrects." };

  await createSession({ sub: user.id, email: user.email, name: user.name });
  redirect("/dashboard");
}

export async function signupAction(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!name || !email || !password) {
    return { error: "Tous les champs sont requis." };
  }
  if (password.length < 8) {
    return { error: "Le mot de passe doit faire au moins 8 caractères." };
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { error: "Un compte existe déjà avec cet email." };

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, name, passwordHash },
  });
  await createSession({ sub: user.id, email: user.email, name: user.name });
  redirect("/dashboard");
}

export async function logoutAction() {
  await clearSession();
  redirect("/");
}
