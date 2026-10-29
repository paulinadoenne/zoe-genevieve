import Link from "next/link";
import { person, oeffnungszeiten } from "@/lib/content";
import { IconWhatsApp, IconMail, IconInstagram } from "@/components/Icons";

// Schlanke Fußleiste für Impressum und Datenschutz: Icons, Adresse, Rechtliches.
export default function SiteFooter() {
  return (
    <footer className="foot2">
      <div className="foot2__icons">
        <a href={person.whatsappLink} target="_blank" rel="noopener" aria-label="WhatsApp">
          <IconWhatsApp />
        </a>
        <a href={`mailto:${person.email}`} aria-label="E-Mail">
          <IconMail />
        </a>
        <a href={person.instagramLink} target="_blank" rel="noopener" aria-label="Instagram">
          <IconInstagram />
        </a>
      </div>
      <p className="foot2__info">
        {person.strasse}, {person.plz} {person.stadt} · {oeffnungszeiten[0].tage}{" "}
        {oeffnungszeiten[0].zeit}
      </p>
      <nav className="foot2__legal" aria-label="Rechtliches">
        <Link href="/">Startseite</Link>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </footer>
  );
}
