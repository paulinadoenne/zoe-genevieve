// Alle Inhalte der Seite an einer Stelle.
// Werte in eckigen Klammern sind Platzhalter und müssen noch ersetzt werden.

export const person = {
  name: "Zoe Genevieve",
  beruf: "Master Hairstylist",
  stadt: "Köln",
  // Salonname, in dem Zoe ihren Stuhl mietet. Leer lassen, dann wird er nicht angezeigt.
  salon: "",
  strasse: "Sankt-Apern-Straße 56-62",
  plz: "50667",
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

export const galerie = [
  { src: "", alt: "Balayage in warmen Blondtönen" },
  { src: "", alt: "Kurzer Bob mit weichen Konturen" },
  { src: "", alt: "Natürliche Locken nach dem Schnitt" },
  { src: "", alt: "Glossing für mehr Glanz" },
  { src: "", alt: "Brautfrisur mit lockerem Knoten" },
  { src: "", alt: "Arbeitsplatz im Salon" },
];

export const ueberMich = [
  "Hi, ich bin Zoe, Master Hairstylist und Blonde Specialist in Köln. Ich arbeite selbstständig auf Stuhlmiete in der Sankt-Apern-Straße.",
  "Bei mir gibt es 1:1 Dienstleistung, du stehst im Mittelpunkt. Du buchst direkt bei mir und hast vom Beratungsgespräch bis zum Föhnen immer dieselbe Ansprechpartnerin. Ich nehme mir Zeit, höre zu und schneide so, dass die Frisur auch zu Hause funktioniert.",
  "[Hier ein paar Sätze zu Ausbildung, Erfahrung und Schwerpunkten, z. B. Balayage, Locken oder Brautstyling.]",
];

// Platzhalter, bitte durch eine echte Kundenstimme ersetzen.
export const kundenstimme = {
  zitat: "[Hier kommt eine echte Kundenstimme hin, zum Beispiel aus einer Google Bewertung oder einer Nachricht auf Instagram.]",
  name: "[Vorname]",
};

// Kleiner Steckbrief aus Zoes Instagram.
export const steckbrief = [
  { label: "Spezialgebiet", wert: "Blonde Specialist" },
  { label: "Sternzeichen", wert: "Skorpion" },
  { label: "Lieblingsdrink", wert: "Haselnuss Latte" },
];
