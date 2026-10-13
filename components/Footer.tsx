import Link from "next/link";
import { person } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__name" aria-hidden>
        <Logo />
      </div>
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
