// Alle Inhalte der Seite an einer Stelle.
// Werte in eckigen Klammern sind Platzhalter und müssen noch ersetzt werden.

export const person = {
  name: "Zoe Genevieve",
  beruf: "Friseurin",
  stadt: "Köln",
  salon: "[Salonname]",
  strasse: "[Straße Hausnummer]",
  plz: "[PLZ]",
  telefon: "[0221 000000]",
  telefonLink: "tel:+49221000000",
  whatsappLink: "https://wa.me/49000000000",
  instagram: "@zoegenevieve.hair",
  instagramLink: "https://instagram.com/zoegenevieve.hair",
  email: "[hallo@zoegenevieve.de]",
  // Link zum Buchungstool (z. B. Treatwell, Planity, Shore). Leer lassen,
  // dann zeigt die Seite nur Telefon und WhatsApp.
  buchungsLink: "",
};

export const oeffnungszeiten = [
  { tage: "Dienstag bis Freitag", zeit: "10 bis 19 Uhr" },
  { tage: "Samstag", zeit: "9 bis 15 Uhr" },
  { tage: "Sonntag und Montag", zeit: "geschlossen" },
];

export type Leistung = { name: string; info?: string; preis: string };
export type Kategorie = { titel: string; leistungen: Leistung[] };

// Beispielpreise, bitte durch die echten ersetzen.
export const leistungen: Kategorie[] = [
  {
    titel: "Schnitt",
    leistungen: [
      { name: "Waschen, Schneiden, Föhnen", info: "kurzes Haar", preis: "ab 55 €" },
      { name: "Waschen, Schneiden, Föhnen", info: "langes Haar", preis: "ab 70 €" },
      { name: "Pony nachschneiden", preis: "15 €" },
      { name: "Herrenschnitt", preis: "ab 38 €" },
      { name: "Kinder bis 12 Jahre", preis: "ab 25 €" },
    ],
  },
  {
    titel: "Farbe",
    leistungen: [
      { name: "Ansatzfarbe", preis: "ab 60 €" },
      { name: "Komplettfarbe", preis: "ab 80 €" },
      { name: "Strähnen oder Foliensträhnen", preis: "ab 95 €" },
      { name: "Balayage", info: "inkl. Glossing", preis: "ab 160 €" },
      { name: "Glossing", preis: "ab 35 €" },
    ],
  },
  {
    titel: "Styling und Pflege",
    leistungen: [
      { name: "Waschen und Föhnen", preis: "ab 35 €" },
      { name: "Hochsteckfrisur", preis: "ab 65 €" },
      { name: "Brautstyling", info: "inkl. Probetermin", preis: "auf Anfrage" },
      { name: "Pflegebehandlung", preis: "ab 20 €" },
    ],
  },
];

export const galerie = [
  { src: "", alt: "Balayage in warmen Blondtönen" },
  { src: "", alt: "Kurzer Bob mit weichen Konturen" },
  { src: "", alt: "Natürliche Locken nach dem Schnitt" },
  { src: "", alt: "Glossing für mehr Glanz" },
  { src: "", alt: "Brautfrisur mit lockerem Knoten" },
  { src: "", alt: "Arbeitsplatz im Salon" },
];

export const ueberMich = [
  "Hi, ich bin Zoe. Ich bin Friseurin in Köln und arbeite selbstständig auf Stuhlmiete im [Salonname].",
  "Für dich heißt das: Du buchst direkt bei mir und hast vom Beratungsgespräch bis zum Föhnen immer dieselbe Ansprechpartnerin. Ich nehme mir Zeit, höre zu und schneide so, dass die Frisur auch zu Hause funktioniert.",
  "[Hier ein paar Sätze zu Ausbildung, Erfahrung und Schwerpunkten, z. B. Balayage, Locken oder Brautstyling.]",
];
