import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";
import StickyCta from "@/components/StickyCta";
import InfoLine from "@/components/InfoLine";
import { person, oeffnungszeiten, galerie, ueberMich, steckbrief } from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [person.salon, adresse].filter(Boolean).join(" ")
)}`;
// Hauptbutton: Online-Buchung, solange kein Link hinterlegt ist WhatsApp
const terminLink = person.buchungsLink || person.whatsappLink;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero: Farbfläche links, Foto rechts, Logo läuft über die Kante */}
        <section className="hero">
          <p className="hero__m-intro">
            Master Hairstylist und Blonde Specialist in Köln. 1:1 Termine in der
            Sankt-Apern-Straße, du stehst im Mittelpunkt.
          </p>
          <div className="hero__panel">
            <p className="hero__label">(01) Hair · Köln</p>
            <div className="hero__bottom">
              <p className="hero__lead">
                Master Hairstylist und <em>Blonde Specialist.</em> 1:1 Termine,
                du stehst im Mittelpunkt.
              </p>
              <a href={terminLink} className="btn btn--light hero__cta" target="_blank" rel="noopener">
                Termin buchen <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__img">
              <Photo src="/zoe.jpg" alt="Zoe Genevieve sitzt vor einer roten Holztür" className="hero__photo" />
            </div>
            <h1 className="hero__title">
              <Logo />
            </h1>
          </div>
          <nav className="hero__m-links" aria-label="Menü">
            <a href="#galerie">Arbeiten</a>
            <a href="#ueber-mich">Über mich</a>
            <a href="#kontakt">Kontakt</a>
            <a href={terminLink} target="_blank" rel="noopener">
              Termin buchen
            </a>
          </nav>
          <InfoLine className="hero__m-info" />
        </section>
        <div className="ticker container">
          <span>{person.beruf}</span>
          <span>Sankt-Apern-Straße, {person.stadt}</span>
          <span>{person.instagram}</span>
        </div>

        {/* Termin: Band in Bitter Cocoa */}
        <section id="termin" className="booking">
          <div className="container">
            <p className="label">(02) Termin</p>
            <div className="booking__row">
              <h2 className="display">
                Termin <em>buchen</em>
              </h2>
              <div className="booking__side">
                <a href={terminLink} className="btn btn--accent btn--big" target="_blank" rel="noopener">
                  {person.buchungsLink ? "Online buchen bei Planity" : "Per WhatsApp anfragen"}{" "}
                  <span aria-hidden>↗</span>
                </a>
                {person.buchungsLink && (
                  <a href={person.whatsappLink} className="text-link" target="_blank" rel="noopener">
                    Fragen? Schreib mir per WhatsApp
                  </a>
                )}
              </div>
            </div>
            <ol className="steps">
              <li>
                <span>01</span>Freien Termin online wählen
              </li>
              <li>
                <span>02</span>Kurz beschreiben, was du dir wünschst
              </li>
              <li>
                <span>03</span>Zurücklehnen, der Rest ist meine Sache
              </li>
            </ol>
          </div>
        </section>

        {/* Arbeiten */}
        <section id="galerie" className="section">
          <div className="container works__head">
            <h2 className="works__title">Arbeiten</h2>
            <div className="works__meta">
              <div className="works__col">
                <span className="works__key">Leistungen</span>
                <ul>
                  <li>Blond</li>
                  <li>Balayage</li>
                  <li>Schnitt</li>
                  <li>Styling</li>
                  <li>Pflege</li>
                </ul>
              </div>
              <div className="works__col">
                <span className="works__key">Mehr</span>
                <ul>
                  <li>
                    <a href={person.instagramLink} target="_blank" rel="noopener">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href={terminLink} target="_blank" rel="noopener">
                      Termin buchen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Gallery bilder={galerie} />
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="section container about">
          <p className="label">(04) Über mich</p>
          <div className="about__grid">
            <div className="about__media">
              <Photo alt="Zoe im Salon" className="about__photo" />
              <Photo alt="Karl, der Salon Dog" className="about__small" />
            </div>
            <div className="about__text">
              <p className="about__lead">
                Hi, ich bin <em>Zoe.</em>
              </p>
              {ueberMich.map((p, i) => (
                <p key={i} className="small-text">
                  {p}
                </p>
              ))}
              <dl className="facts card">
                {steckbrief.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.wert}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="section container">
          <p className="label">(05) Kontakt</p>
          <div className="contact">
            <div>
              <h3>Adresse</h3>
              <p>
                {person.salon && (
                  <>
                    {person.salon}
                    <br />
                  </>
                )}
                {person.strasse}
                <br />
                {person.plz} {person.stadt}
              </p>
              <a href={kartenLink} target="_blank" rel="noopener" className="text-link">
                Route planen
              </a>
            </div>
            <div>
              <h3>Öffnungszeiten</h3>
              <dl className="hours">
                {oeffnungszeiten.map((o) => (
                  <div key={o.tage}>
                    <dt>{o.tage}</dt>
                    <dd>{o.zeit}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3>Kontakt</h3>
              <p>
                <a href={person.whatsappLink} target="_blank" rel="noopener">WhatsApp</a>
                <br />
                <a href={`mailto:${person.email.replace(/[[\]]/g, "")}`}>{person.email}</a>
                <br />
                <a href={person.instagramLink} target="_blank" rel="noopener">
                  {person.instagram}
                </a>
              </p>
            </div>
            <div>
              <h3>Termin</h3>
              <a href={terminLink} className="text-link" target="_blank" rel="noopener">
                Online buchen ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyCta href={terminLink} />
      <Footer />
    </>
  );
}
