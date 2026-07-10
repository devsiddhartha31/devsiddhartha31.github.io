import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { navigation } from "@/data/navigation";
import { routes } from "@/data/routes";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href={routes.home}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
              SK
            </div>

            <div className="hidden sm:block">
              <p className="font-semibold">
                Siddhartha
              </p>

              <p className="text-xs tracking-wide text-zinc-500">
                Software Engineer
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative text-sm font-medium text-zinc-400 transition hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}