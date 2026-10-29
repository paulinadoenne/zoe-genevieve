import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/SiteFooter";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum · Zoe Genevieve",
  robots: { index: false },
};

// Aufbau angelehnt an ein schlichtes Impressum: großer Titel, ruhige Textblöcke,
// am Ende ein Button zurück zur Startseite.
export default function Impressum() {
  return (
    <>
      <Header />
      <main className="imp">
        <h1 className="imp__title">Impressum</h1>

        <div className="imp__block">
          <p>Zoe Genevieve Pusch</p>
          <p>{person.beruf}</p>
          <p>
            {person.strasse}
            <br />
            {person.plz} {person.stadt}
          </p>
        </div>

        <div className="imp__block">
          <p>
            <strong>Kontakt</strong>
            <br />
            Telefon: <a href={person.telefonLink}>{person.telefon}</a>
            <br />
            E-Mail: <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
        </div>

        <div className="imp__block">
          <p>
            <strong>Umsatzsteuer-ID</strong>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE462854273
          </p>
        </div>

        <div className="imp__block">
          <p>
            <strong>Berufsbezeichnung und Kammer</strong>
            <br />
            Berufsbezeichnung: Friseurin (verliehen in Deutschland)
            <br />
            Zuständige Kammer: Handwerkskammer zu Köln, Heumarkt 12, 50667 Köln
            <br />
            Berufsrechtliche Regelungen: Handwerksordnung (HwO), einsehbar unter{" "}
            <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener">
              gesetze-im-internet.de
            </a>
          </p>
        </div>

        <div className="imp__block">
          <p>
            <strong>Verbraucherstreitbeilegung/<wbr />Universalschlichtungsstelle</strong>
            <br />
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <Link href="/" className="imp__back">
          Zur Startseite
        </Link>
      </main>
      <Footer />
    </>
  );
}
