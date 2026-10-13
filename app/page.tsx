import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";
import StickyCta from "@/components/StickyCta";
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
        {/* Hero */}
        <section className="hero container">
          <div className="hero__intro">
            <p className="label">(01) Hair · Köln</p>
            <p className="hero__lead">
              Master Hairstylist und <em>Blonde Specialist</em> in Köln. 1:1
              Termine, du stehst im Mittelpunkt.
            </p>
            <a href={terminLink} className="btn btn--accent" target="_blank" rel="noopener">
              Termin buchen <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="hero__frame">
            <Photo src="/zoe.jpg" alt="Zoe Genevieve sitzt vor einer roten Holztür" className="hero__photo" />
            <h1 className="hero__title">
              <Logo />
            </h1>
          </div>
          <div className="hero__meta">
            <span>{person.beruf}</span>
            <span>Sankt-Apern-Straße, {person.stadt}</span>
            <span>{person.instagram}</span>
          </div>
        </section>

        {/* Termin */}
        <section id="termin" className="section container booking">
          <p className="label">(02) Termin</p>
          <div className="booking__row">
            <h2 className="display">
              Termin <em>buchen</em>
            </h2>
            <div className="booking__side">
              <p className="small-text">
                Freie Termine siehst du direkt online. Fragen beantworte ich dir
                gern per WhatsApp.
              </p>
              <a href={terminLink} className="btn btn--accent" target="_blank" rel="noopener">
                {person.buchungsLink ? "Online buchen bei Planity" : "Per WhatsApp anfragen"}{" "}
                <span aria-hidden>↗</span>
              </a>
              {person.buchungsLink && (
                <a href={person.whatsappLink} className="text-link" target="_blank" rel="noopener">
                  Fragen per WhatsApp
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Arbeiten */}
        <section id="galerie" className="section">
          <div className="container works__head">
            <p className="label">(03) Arbeiten</p>
            <h2 className="display">Arbeiten</h2>
            <dl className="works__meta">
              <div>
                <dt>Fokus</dt>
                <dd>Blond · Balayage · Schnitt · Styling</dd>
              </div>
              <div>
                <dt>Mehr</dt>
                <dd>
                  <a href={person.instagramLink} target="_blank" rel="noopener">
                    {person.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <Gallery bilder={galerie} />
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="section container about">
          <p className="label">(04) Über mich</p>
          <div className="about__grid">
            <Photo alt="Zoe im Salon" className="about__photo" />
            <div className="about__text">
              <p className="about__lead">
                Hi, ich bin <em>Zoe.</em>
              </p>
              {ueberMich.map((p, i) => (
                <p key={i} className="small-text">
                  {p}
                </p>
              ))}
              <dl className="facts">
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
