import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz · Zoe Genevieve",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="container legal">
        <p className="eyebrow">Rechtliches</p>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>Datenschutz</h1>

        <h2>Verantwortliche</h2>
        <p>
          {person.name}, {person.strasse}, {person.plz} {person.stadt}
          <br />
          E-Mail: {person.email}
        </p>

        <h2>Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, USA gehostet. Beim Aufruf der Seite verarbeitet Vercel
          technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit sowie
          den verwendeten Browser in Server-Logfiles. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
          stabilen Betrieb). Die Datenübermittlung in die USA stützt sich auf
          das EU-US Data Privacy Framework.
        </p>

        <h2>Schriften</h2>
        <p>
          Die verwendeten Schriften sind lokal eingebunden. Beim Aufruf der
          Seite wird keine Verbindung zu Servern von Google hergestellt.
        </p>

        <h2>Keine Cookies, kein Tracking</h2>
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse- oder
          Trackingdienste.
        </p>

        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn du mich per Telefon, E-Mail, WhatsApp oder Instagram
          kontaktierst, verarbeite ich deine Angaben zur Bearbeitung deiner
          Anfrage und zur Terminvereinbarung (Art. 6 Abs. 1 lit. b DSGVO). Bei
          WhatsApp und Instagram gelten zusätzlich die Datenschutzbestimmungen
          der Meta Platforms Ireland Ltd.
        </p>

        <h2>Externe Links</h2>
        <p>
          Die Seite enthält Links zu Google Maps, Instagram und WhatsApp. Daten
          werden erst übertragen, wenn du einen dieser Links anklickst.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem
          kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum
          Beispiel bei der Landesbeauftragten für Datenschutz und
          Informationsfreiheit Nordrhein-Westfalen.
        </p>
      </main>
      <Footer />
    </>
  );
}
