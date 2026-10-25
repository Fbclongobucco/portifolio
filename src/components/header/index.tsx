import { profile } from "@/src/data/profile";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#inicio" className="min-w-0 truncate font-mono text-sm font-bold text-white sm:text-base">
          fabriciolongobuccodev<span className="text-emerald-500">.com.br</span>
        </a>
        <ul className="hidden gap-8 text-sm text-gray-300 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all hover:text-emerald-400 hover:after:w-full">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-emerald-500/50 px-3 py-1.5 text-sm text-emerald-400 transition-colors hover:bg-emerald-500/10"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
