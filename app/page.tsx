import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";
import {
  person,
  oeffnungszeiten,
  leistungen,
  galerie,
  ueberMich,
  steckbrief,
} from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [person.salon, adresse].filter(Boolean).join(" ")
)}`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero__stage container">
            <h1 className="hero__title">
              <Logo />
            </h1>
            <Photo src="/zoe.jpg" alt="Zoe Genevieve sitzt vor einer roten Holztür" className="hero__photo" />
          </div>
          <div className="hero__meta container">
            <span>{person.beruf}</span>
            <span className="hero__rule" aria-hidden />
            <span>{person.stadt} · Sankt-Apern-Straße</span>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="section light">
          <div className="container">
            <p className="eyebrow">Leistungen und Preise</p>
            <h2 className="title">1:1 Termine, du stehst im Mittelpunkt</h2>
            <div className="prices">
              {leistungen.map((k) => (
                <div key={k.titel}>
                  <h3>{k.titel}</h3>
                  <ul>
                    {k.leistungen.map((l, j) => (
                      <li key={j}>
                        <span>
                          {l.name}
                          {l.info && <small>{l.info}</small>}
                        </span>
                        <span className="prices__value">{l.preis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="note">
              Alle Preise inklusive Beratung. Der genaue Preis richtet sich nach
              Haarlänge und Aufwand.
            </p>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="section">
          <div className="container">
            <p className="eyebrow">Galerie</p>
            <h2 className="title">Meine Arbeiten</h2>
          </div>
          <Gallery bilder={galerie} />
          <div className="container">
            <a href={person.instagramLink} target="_blank" rel="noopener" className="link">
              Mehr auf Instagram {person.instagram}
            </a>
          </div>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="section light">
          <div className="container about">
            <Photo alt="Zoe im Salon" className="about__photo" />
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
            </div>
          </div>
        </section>

        {/* Termin und Kontakt */}
        <section id="termin" className="section">
          <div className="container">
            <p className="eyebrow">Termin und Kontakt</p>
            <h2 className="title">Buch dir deinen Termin</h2>
            <div className="actions">
              {person.buchungsLink && (
                <a href={person.buchungsLink} className="btn" target="_blank" rel="noopener">
                  Online buchen
                </a>
              )}
              <a href={person.whatsappLink} className="btn" target="_blank" rel="noopener">
                Per WhatsApp anfragen
              </a>
            </div>
            <div className="contact" id="kontakt">
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
                  <a href={person.telefonLink}>{person.telefon}</a>
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
      <Footer />
    </>
  );
}
