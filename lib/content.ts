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
  { src: "/arbeiten/beigeblond-wellen.jpg", alt: "Beigeblond mit weichen Wellen", titel: "Beigeblond", info: "Kühles Beige mit weichen Übergängen und Wellen." },
  { src: "/arbeiten/kupferbraun-volumen.jpg", alt: "Kupferbraun mit Volumen und Stufen", titel: "Kupferbraun", info: "Leuchtendes Kupfer, lange Stufen, viel Bewegung." },
  { src: "/arbeiten/schoko-kupfer-stufen.jpg", alt: "Schokobraun mit Kupferreflexen und Stufen", titel: "Schoko Kupfer", info: "Warmes Braun mit Kupferreflexen, Stufenschnitt mit Volumen." },
  { src: "/arbeiten/goldblond-face-framing.jpg", alt: "Goldblond mit Face Framing", titel: "Goldblond", info: "Sonniges Blond mit Face Framing und weichem Pony." },
  { src: "/arbeiten/schokobraun-long-bob.jpg", alt: "Schokobrauner Long Bob", titel: "Long Bob", info: "Glänzendes Schokobraun als lässiger Long Bob." },
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
  ueberMich: { src: "/zoe-karl.jpg", pos: "45% 15%" },
  kontakt: { src: "/zoe-portrait.jpg", pos: "50% 25%" },
};

export const fotos = {
  ueberMich: "/zoe-portrait.jpg",
  karl: "/zoe-karl.jpg",
};

// Über mich Text von Zoe.
export const ueberMichNeu = {
  intro: [
    "Hi, ich bin Zoe, deine Expertin für langes, gesundes Haar und individuelle Looks. Mein Ziel ist es, dass sich deine Haare genauso gut anfühlen, wie sie aussehen.",
    "Ich arbeite mit viel Gefühl für Ästhetik, Natürlichkeit und vor allem für dich. Denn am Ende geht es nicht nur um schöne Haare, sondern darum, dass du dich wirklich wiedererkennst und wohlfühlst.",
  ],
  schwerpunkte: [
    "Moderne Schnitte für langes Haar (Bewegung & Leichtigkeit)",
    "Balayage & natürliche Farbverläufe",
    "Feine Strähnen & Airtouch-Techniken",
    "Typgerechte Stylings & Blowouts",
    "Extensions (Wefts) für mehr Länge & Fülle",
  ],
  outro: [
    "Mir ist wichtig, dass dein Look nicht nur im Salon perfekt aussieht, sondern auch im Alltag funktioniert: unkompliziert, hochwertig und genau auf dich abgestimmt.",
    "Genauso wichtig ist mir, wie du dich bei mir fühlst: entspannt, verstanden und gut aufgehoben. Bei mir gibt es nur 1:1 Dienstleistungen, meine Aufmerksamkeit gehört ganz dir! Dein Termin soll sich anfühlen wie eine kleine Auszeit, fast wie Zeit mit einer guten Freundin. Ob wir zusammen lachen, quatschen oder du einfach mal abschalten möchtest, ich stelle mich ganz auf dich ein.",
    "Ich freue mich darauf, dich kennenzulernen und gemeinsam deinen perfekten Look zu kreieren ✨",
  ],
};
