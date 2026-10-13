import Link from "next/link";
import { person } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name" aria-hidden>
        Zoe Genevieve
      </p>
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
