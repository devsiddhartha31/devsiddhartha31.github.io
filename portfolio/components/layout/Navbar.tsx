import Container from "@/components/ui/Container";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="text-lg font-bold tracking-tight hover:text-indigo-400 transition-colors"
          >
            Siddhartha Kumar
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}