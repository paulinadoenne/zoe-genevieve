import Link from "next/link";
import { person } from "@/lib/content";
import Logo from "./Logo";
import InfoLine from "./InfoLine";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__name" aria-hidden>
        <Logo />
      </div>
      <nav className="container footer__links" aria-label="Footer">
        <a href="/#kontakt">Kontakt</a>
        <a href="/#galerie">Arbeiten</a>
        <a href={person.buchungsLink || "/#termin"} target="_blank" rel="noopener">
          Termin buchen
        </a>
      </nav>
      <InfoLine className="container footer__info" />
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {person.name} · {person.beruf} in {person.stadt}
        </span>
        <nav aria-label="Rechtliches">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
