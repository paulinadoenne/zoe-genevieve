import Link from "next/link";
import Logo from "./Logo";
import { person } from "@/lib/content";

const links = [
  { href: "/#galerie", label: "Arbeiten" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

// Am Handy übernimmt die Linkzeile unter dem Startbild die Navigation.
export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="wordmark">
          <Logo className="logo--inline" />
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={person.buchungsLink || "/#termin"} className="nav__cta" target="_blank" rel="noopener">
            Termin buchen
          </a>
        </nav>
      </div>
    </header>
  );
}
