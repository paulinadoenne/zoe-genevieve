import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";
import StickyCta from "@/components/StickyCta";
import Sticker from "@/components/Sticker";
import Karl from "@/components/Karl";
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
        <section className="hero">
          <div className="hero__stage container">
            <div className="hero__frame">
              <Photo src="/zoe.jpg" alt="Zoe Genevieve sitzt vor einer roten Holztür" className="hero__photo" />
              <h1 className="hero__title">
                <Logo />
              </h1>
              <Sticker form="circle" farbe="cream" drehung={8} className="sticker--hero">
                <small>Hair is my</small>
                <em>love language</em>
              </Sticker>
            </div>
          </div>
          <div className="hero__cta container">
            <a href={terminLink} className="btn btn--big" target="_blank" rel="noopener">
              Termin buchen
            </a>
          </div>
          <div className="hero__meta container">
            <span>{person.beruf}</span>
            <span className="hero__rule" aria-hidden />
            <span>{person.stadt} · Sankt-Apern-Straße</span>
          </div>
        </section>

        {/* Termin */}
        <section id="termin" className="section light">
          <div className="container booking">
            <div>
              <p className="eyebrow">Termin</p>
              <h2 className="title">Buch dir deinen Termin</h2>
              <p className="text">
                1:1 Termine, du stehst im Mittelpunkt. Such dir online einen
                freien Termin aus. Bei Fragen schreib mir einfach per WhatsApp.
              </p>
            </div>
            <div className="booking__actions">
              <Sticker form="arch" farbe="cocoa" drehung={-6} className="sticker--booking">
                <span>Hot girls</span>
                <em>book</em>
                <span>ahead</span>
              </Sticker>
              <a href={terminLink} className="btn btn--big btn--accent" target="_blank" rel="noopener">
                {person.buchungsLink ? "Online Termin buchen" : "Termin per WhatsApp anfragen"}
              </a>
              {person.buchungsLink && (
                <a href={person.whatsappLink} className="btn btn--big btn--ghost" target="_blank" rel="noopener">
                  Fragen per WhatsApp
                </a>
              )}
              <p className="booking__hint">
                {person.strasse}, {person.plz} {person.stadt}
              </p>
            </div>
          </div>
        </section>

        {/* Arbeiten */}
        <section id="galerie" className="section">
          <div className="container">
            <p className="eyebrow">Arbeiten</p>
            <h2 className="title">Meine Arbeiten</h2>
            <Sticker form="card" farbe="cream" drehung={-4} className="sticker--works">
              <span>Good hair.</span>
              <em>No notes.</em>
            </Sticker>
          </div>
          <Gallery bilder={galerie} />
          <div className="container">
            <a href={person.instagramLink} target="_blank" rel="noopener" className="link">
              Mehr auf Instagram {person.instagram}
            </a>
          </div>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="section glass">
          <div className="container about">
            <div className="about__media">
              <Photo alt="Zoe im Salon" className="about__photo" />
              <Sticker form="arch" farbe="cream" drehung={5} className="sticker--karl">
                <small>Official</small>
                <em>Salon Dog</em>
                <Karl className="sticker__dog" />
              </Sticker>
            </div>
            <div>
              <p className="eyebrow">Über mich</p>
              <h2 className="title">Hi, ich bin Zoe</h2>
              {ueberMich.map((p, i) => (
                <p key={i} className="text">
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
              <a href={terminLink} className="btn" target="_blank" rel="noopener">
                Termin buchen
              </a>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="section light">
          <div className="container">
            <p className="eyebrow">Kontakt</p>
            <h2 className="title">So findest du mich</h2>
            <Sticker form="ticket" farbe="cream" drehung={-5} className="sticker--contact">
              <small>Ehrlich gesagt</small>
              <span>Ich komm eigentlich</span>
              <em>nur wegen Karl.</em>
              <Karl className="sticker__dog" />
            </Sticker>
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
                <a href={kartenLink} target="_blank" rel="noopener" className="link">
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
            </div>
          </div>
        </section>
      </main>

      {/* Mobil immer sichtbar */}
      <StickyCta href={terminLink} />
      <Footer />
    </>
  );
}
