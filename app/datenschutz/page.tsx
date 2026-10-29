import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/SiteFooter";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz · Zoe Genevieve",
  robots: { index: false },
};

// Aufbau wie das Impressum: großer Titel, ruhige Textblöcke, Button zur Startseite.
export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="imp">
        <h1 className="imp__title">Datenschutz</h1>

        <div className="imp__block">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können.
          </p>
        </div>

        <h2 className="imp__h2">Datenschutz auf einen Blick</h2>

        <div className="imp__block">
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch die Websitebetreiberin.
            Ihre Kontaktdaten finden Sie unten unter „Hinweis zur verantwortlichen Stelle“
            und im <Link href="/impressum">Impressum</Link>.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie sie uns mitteilen, zum
            Beispiel wenn Sie per E-Mail, Telefon oder WhatsApp Kontakt aufnehmen. Andere
            Daten werden beim Besuch der Website automatisch durch die IT-Systeme des
            Hosters erfasst. Das sind vor allem technische Daten wie Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs.
          </p>
          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
            <br />
            Die technischen Daten werden erhoben, um eine fehlerfreie Bereitstellung der
            Website zu gewährleisten. Ihre Angaben bei einer Kontaktaufnahme nutzen wir
            ausschließlich zur Bearbeitung Ihrer Anfrage und zur Terminvereinbarung. Eine
            Analyse Ihres Nutzerverhaltens findet nicht statt.
          </p>
          <p>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            <br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            außerdem das Recht, die Berichtigung, Einschränkung oder Löschung dieser Daten zu
            verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu.
          </p>
        </div>

        <h2 className="imp__h2">Allgemeine Hinweise und Pflichtinformationen</h2>

        <div className="imp__block">
          <p>
            <strong>Datenschutz</strong>
            <br />
            Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst und behandle Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Ich weise darauf hin,
            dass die Datenübertragung im Internet (zum Beispiel bei der Kommunikation per
            E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
            dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <p>
            <strong>Hinweis zur verantwortlichen Stelle</strong>
            <br />
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            <br />
            Zoe Genevieve Pusch
            <br />
            {person.strasse}
            <br />
            {person.plz} {person.stadt}
            <br />
            Telefon: <a href={person.telefonLink}>{person.telefon}</a>
            <br />
            E-Mail: <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
          <p>
            <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong>
            <br />
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
            möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
            reicht eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
          <p>
            <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde</strong>
            <br />
            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Zuständig ist die Landesbeauftragte für
            Datenschutz und Informationsfreiheit Nordrhein-Westfalen. Eine Liste aller
            Datenschutzbeauftragten finden Sie unter{" "}
            <a
              href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
              target="_blank"
              rel="noopener"
            >
              bfdi.bund.de
            </a>
            .
          </p>
          <p>
            <strong>Recht auf Datenübertragbarkeit</strong>
            <br />
            Sie haben das Recht, Daten, die ich auf Grundlage Ihrer Einwilligung oder in
            Erfüllung eines Vertrags automatisiert verarbeite, an sich oder an einen Dritten
            in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
            direkte Übertragung an einen anderen Verantwortlichen verlangen, erfolgt dies
            nur, soweit es technisch machbar ist.
          </p>
          <p>
            <strong>Auskunft, Berichtigung, Löschung</strong>
            <br />
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
            auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
            deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
            gegebenenfalls ein Recht auf Berichtigung, Einschränkung oder Löschung dieser
            Daten. Hierzu können Sie sich jederzeit an die oben genannte Adresse wenden.
          </p>
          <p>
            <strong>Widerspruch gegen Werbe-Mails</strong>
            <br />
            Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
            Übersendung von nicht ausdrücklich angeforderter Werbung und
            Informationsmaterialien wird hiermit widersprochen. Ich behalte mir ausdrücklich
            rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
            etwa durch Spam-E-Mails, vor.
          </p>
        </div>

        <h2 className="imp__h2">Datenerfassung auf dieser Website</h2>

        <div className="imp__block">
          <p>
            <strong>Hosting</strong>
            <br />
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            USA gehostet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an einem sicheren und stabilen Betrieb). Die Datenübermittlung in die
            USA stützt sich auf das EU-US Data Privacy Framework.
          </p>
          <p>
            <strong>Server-Log-Dateien</strong>
            <br />
            Der Hoster erhebt und speichert automatisch Informationen in sogenannten
            Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind
            Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
            des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            Grundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            <strong>Keine Cookies, kein Tracking</strong>
            <br />
            Diese Website setzt keine Cookies und verwendet keine Analyse-, Werbe- oder
            Trackingdienste.
          </p>
          <p>
            <strong>Schriften</strong>
            <br />
            Die verwendeten Schriften sind lokal eingebunden. Beim Aufruf der Seite wird
            keine Verbindung zu Servern von Google hergestellt.
          </p>
          <p>
            <strong>Anfrage per E-Mail, Telefon oder WhatsApp</strong>
            <br />
            Wenn Sie mich per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage
            inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der
            Bearbeitung Ihres Anliegens und der Terminvereinbarung bei mir gespeichert und
            verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten gebe ich nicht ohne Ihre
            Einwilligung weiter. Bei WhatsApp gelten zusätzlich die Datenschutzbestimmungen
            der WhatsApp Ireland Limited.
          </p>
          <p>
            <strong>Online-Terminbuchung über Planity</strong>
            <br />
            Für die Terminbuchung verlinkt diese Website auf Planity. Wenn Sie dort einen
            Termin buchen, werden Ihre Angaben von Planity verarbeitet. Es gelten die
            Datenschutzhinweise von Planity.
          </p>
          <p>
            <strong>Externe Links</strong>
            <br />
            Die Seite enthält Links zu Planity, Google Maps, Instagram und WhatsApp. Daten
            werden erst übertragen, wenn Sie einen dieser Links anklicken.
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
