import Link from "next/link";

import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { navigation } from "@/data/navigation";
import { routes } from "@/data/routes";
import { navbar } from "@/data/navbar";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href={routes.home}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
              {navbar.logo}
            </div>

            <div className="hidden sm:block">
              <p className="font-semibold">
                {navbar.heading}
              </p>

              <p className="text-xs tracking-wide text-zinc-500">
                {navbar.sub_heading}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="group relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-indigo-400 transition-transform duration-300 ease-out group-hover:scale-x-100"/>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}