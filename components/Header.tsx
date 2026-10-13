import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#termin", label: "Termin" },
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
    </header>
  );
}
