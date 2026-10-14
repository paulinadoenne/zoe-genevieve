import Link from "next/link";
import { person, oeffnungszeiten } from "@/lib/content";

// Abschluss wie im Template: groß Instagram und Adresse, darunter Kleingedrucktes.
export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot__big">
        <a href={person.instagramLink} target="_blank" rel="noopener">
          {person.instagram}
        </a>
        <span>{person.strasse}</span>
      </div>
      <div className="foot__small">
        <p>
          {person.plz} {person.stadt}
          <br />
          {new Date().getFullYear()}
        </p>
        <p>
          Öffnungszeiten
          <br />
          {oeffnungszeiten[0].tage} {oeffnungszeiten[0].zeit}
        </p>
      </div>
      <div className="foot__legal">
        <span>© {new Date().getFullYear()} {person.name} · {person.beruf} in {person.stadt}</span>
        <nav aria-label="Rechtliches">
          <a href={person.instagramLink} target="_blank" rel="noopener">
            Instagram
          </a>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
