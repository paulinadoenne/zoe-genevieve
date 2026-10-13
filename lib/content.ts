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
  buchungsLink: "https://www.planity.com/de-DE/zoe-genevieve-hair-50667-koln",
};

export const oeffnungszeiten = [
  { tage: "Dienstag bis Freitag", zeit: "10 bis 19 Uhr" },
  { tage: "Samstag", zeit: "9 bis 15 Uhr" },
  { tage: "Sonntag und Montag", zeit: "geschlossen" },
];

export const galerie = [
  { src: "/galerie/balayage-wellen.jpg", alt: "Lange Wellen mit sanfter Balayage" },
  { src: "/galerie/kupfer-stufen.jpg", alt: "Kupfer mit weichem Stufenschnitt" },
  { src: "/galerie/hellblond-face-framing.jpg", alt: "Helles Blond mit Face Framing" },
  { src: "/galerie/schokobraun-bob.jpg", alt: "Schokobrauner Long Bob" },
  { src: "/galerie/honigblond-locken.jpg", alt: "Honigblond mit großen Locken" },
  { src: "/galerie/beigeblond-foehnfrisur.jpg", alt: "Beigeblond mit Föhnwelle" },
  { src: "/galerie/dunkelbraun-volumen.jpg", alt: "Dunkelbraun mit Stufen und Volumen" },
  { src: "/galerie/butterblond-stufen.jpg", alt: "Butterblond mit Stufen und Pony" },
  { src: "/galerie/karamell-wellen.jpg", alt: "Karamell mit lockeren Wellen" },
  { src: "/galerie/kuehles-blond.jpg", alt: "Kühles Blond, glatt geföhnt" },
  { src: "/galerie/blond-balayage-lang.jpg", alt: "Lange blonde Balayage" },
];

export const ueberMich = [
  "Ich bin Master Hairstylist und Blonde Specialist in Köln und arbeite selbstständig auf Stuhlmiete in der Sankt-Apern-Straße.",
  "Meistens ist auch Karl dabei, mein Dackel und offizieller Salon Dog. Er ist für die gute Laune zuständig.",
  "Bei mir gibt es 1:1 Dienstleistung, du stehst im Mittelpunkt. Du buchst direkt bei mir und hast vom Beratungsgespräch bis zum Föhnen immer dieselbe Ansprechpartnerin. Ich nehme mir Zeit, höre zu und schneide so, dass die Frisur auch zu Hause funktioniert.",
  "[Hier ein paar Sätze zu Ausbildung, Erfahrung und Schwerpunkten, z. B. Balayage, Locken oder Brautstyling.]",
];

// Kleiner Steckbrief aus Zoes Instagram.
export const steckbrief = [
  { label: "Spezialgebiet", wert: "Blonde Specialist" },
  { label: "Salon Dog", wert: "Dackel Karl" },
  { label: "Lieblingsdrink", wert: "Haselnuss Latte" },
];

// Hintergrundbilder der Screens am Handy (und beim Termin auch am Desktop).
export const hintergruende = {
  termin: { src: "/galerie/kuehles-blond.jpg", pos: "50% 30%" },
  ueberMich: { src: "/zoe-karl.jpg", pos: "45% 15%" },
  kontakt: { src: "/zoe-portrait.jpg", pos: "50% 25%" },
};

export const fotos = {
  ueberMich: "/zoe-portrait.jpg",
  karl: "/zoe-karl.jpg",
};
