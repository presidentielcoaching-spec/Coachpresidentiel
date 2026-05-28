import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-radial-purple pattern-kente lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/40 via-transparent to-african-orange/20" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Link href="/">
            <Logo size={48} />
          </Link>
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              Reconnecte-toi à
              <br />
              <span className="text-gradient-gold">tes racines.</span>
            </h1>
            <p className="mt-4 max-w-md text-foreground/75">
              Apprends, parle et vis les langues africaines avec l&apos;IA.
              Plus de 21 langues, une communauté du continent et de la
              diaspora.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>✦ +21 langues disponibles</li>
              <li>✦ IA conversationnelle native</li>
              <li>✦ Contenus culturels authentiques</li>
              <li>✦ Premium 5€/mois — annulable à tout moment</li>
            </ul>
          </div>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Kemetlingua AI · Nos langues. Notre
            héritage. Notre futur.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex items-center justify-between border-b border-border/60 px-6 py-4 lg:hidden">
          <Link href="/">
            <Logo size={36} showTagline={false} />
          </Link>
        </header>
        <main className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-md">{children}</div>
        </main>
      </div>
    </div>
  );
}
