import Link from "next/link";
import Logo from "./Logo";
import { person } from "@/lib/content";

const links = [
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo" aria-label="Zoe Genevieve, Startseite">
        <Logo />
      </Link>
      <nav className="header__nav" aria-label="Hauptnavigation">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href={person.buchungsLink} className="pill" target="_blank" rel="noopener">
        Termin buchen
      </a>
    </header>
  );
}
