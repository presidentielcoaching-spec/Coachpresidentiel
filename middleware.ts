import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED = [
  "/dashboard",
  "/lecons",
  "/ia",
  "/communaute",
  "/classement",
  "/certificats",
  "/parametres",
];

const AUTH_PAGES = ["/login", "/signup"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED.some((p) => pathname.startsWith(p));
  const isAuthPage = AUTH_PAGES.some((p) => pathname.startsWith(p));
  if (!isProtected && !isAuthPage) return NextResponse.next();

  const token = req.cookies.get("afrilingua_session")?.value;
  let valid = false;
  if (token && process.env.AUTH_SECRET) {
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.AUTH_SECRET));
      valid = true;
    } catch {
      valid = false;
    }
  }

  if (isProtected && !valid) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }
  if (isAuthPage && valid) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lecons/:path*",
    "/ia/:path*",
    "/communaute/:path*",
    "/classement/:path*",
    "/certificats/:path*",
    "/parametres/:path*",
    "/boutique/:path*",
    "/login",
    "/signup",
  ],
};
