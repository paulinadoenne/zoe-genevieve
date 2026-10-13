import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/SiteFooter";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum · Zoe Genevieve",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="container legal">
        <p className="eyebrow">Rechtliches</p>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {person.name}
          <br />
          {person.beruf}
          <br />
          {person.strasse}
          <br />
          {person.plz} {person.stadt}
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {person.telefon}
          <br />
          E-Mail: {person.email}
        </p>

        <h2>Umsatzsteuer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr.]
          <br />
          [Alternativ, falls Kleinunternehmerin: Gemäß § 19 UStG wird keine
          Umsatzsteuer berechnet.]
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Friseurin (verliehen in Deutschland)
          <br />
          Zuständige Kammer: Handwerkskammer zu Köln, Heumarkt 12, 50667 Köln
          <br />
          Eintragung in der Handwerksrolle: [Nummer]
          <br />
          Berufsrechtliche Regelungen: Handwerksordnung (HwO), einsehbar unter
          gesetze-im-internet.de
        </p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </main>
      <Footer />
    </>
  );
}
