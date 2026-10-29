// Alle Inhalte der Seite an einer Stelle.
// Werte in eckigen Klammern sind Platzhalter und müssen noch ersetzt werden.

export const person = {
  name: "Zoe Genevieve",
  beruf: "Master Hairstylist",
  stadt: "Köln",
  // Salonname, in dem Zoe ihren Stuhl mietet. Leer lassen, dann wird er nicht angezeigt.
  salon: "",
  strasse: "Venloer Straße 25",
  plz: "50672",
  telefon: "0178 5499792",
  telefonLink: "tel:+491785499792",
  whatsappLink: "https://wa.me/491785499792",
  instagram: "@zoegenevieve.hair",
  instagramLink: "https://instagram.com/zoegenevieve.hair",
  email: "hallo@zoegenevieve.de",
  // Link zum Buchungstool (z. B. Treatwell, Planity, Shore). Leer lassen,
  // dann zeigt die Seite nur Telefon und WhatsApp.
  buchungsLink: "https://www.planity.com/de-DE/zoe-genevieve-hair-50667-koln",
};

export const oeffnungszeiten = [
  { tage: "Dienstag bis Freitag", zeit: "9 bis 18 Uhr" },
  { tage: "Samstag bis Montag", zeit: "geschlossen" },
];

export const galerie = [
  { src: "/arbeiten/beigeblond-wellen.jpg", alt: "Beigeblond mit weichen Wellen", titel: "Beigeblond", info: "Kühles Beige mit weichen Übergängen und Wellen." },
  { src: "/arbeiten/kupferbraun-volumen.jpg", alt: "Kupferbraun mit Volumen und Stufen", titel: "Butterfly Cut", info: "Leuchtendes Kupfer, lange Stufen, viel Bewegung." },
  { src: "/arbeiten/schoko-kupfer-stufen.jpg", alt: "Schokobraun mit Kupferreflexen und Stufen", titel: "Schoko Kupfer", info: "Warmes Braun mit Kupferreflexen, Stufenschnitt mit Volumen." },
  { src: "/arbeiten/goldblond-face-framing.jpg", alt: "Goldblond mit Face Framing", titel: "Goldblond", info: "Sonniges Blond mit Face Framing und weichem Pony." },
  { src: "/arbeiten/schokobraun-long-bob.jpg", alt: "Schokobrauner Long Bob", titel: "Long Bob", info: "Glänzendes Schokobraun als lässiger Long Bob." },
];

export const ueberMich = [
  "Ich bin Master Hairstylist und Blonde Specialist in Köln und arbeite selbstständig auf Stuhlmiete in der Venloer Straße.",
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
    "Hi, ich bin Zoe, deine Expertin für langes, gesundes Haar. Mein Anspruch ist, dass sich deine Haare so gut anfühlen, wie sie aussehen.",
  ],
  schwerpunkte: [
    "Moderne Schnitte für langes Haar mit Bewegung und Leichtigkeit",
    "Balayage und natürliche Farbverläufe",
    "Feine Strähnen und Airtouch",
    "Typgerechte Stylings und Blowouts",
    "Extensions in Weft-Technik für mehr Länge und Volumen",
  ],
  outro: [
    "Jeder Look entsteht bei mir mit Blick auf deinen Haartyp, deine Gesichtsform und deinen Alltag. Das Ergebnis soll nicht nur im Salon überzeugen, sondern auch zu Hause leicht zu stylen sein. Dafür nehme ich mir Zeit für eine ehrliche Beratung und verwende hochwertige Produkte von Milbon.",
    "Ich arbeite ausschließlich 1:1. So bekommst du meine volle Aufmerksamkeit von der Beratung bis zum Finish. Du kannst dich entspannt zurücklehnen und den Termin als kleine Auszeit genießen. Ob wir dabei ins Gespräch kommen oder du lieber abschaltest, entscheidest ganz du.",
    "Ich freue mich darauf, dich kennenzulernen und deinen Look gemeinsam mit dir zu entwickeln ✨",
  ],
};

// Häufige Fragen (Q&A).
export const fragen = [
  {
    frage: "Wie buche ich einen Termin?",
    antwort: "Ganz einfach online über Planity. Dort siehst du alle freien Termine und kannst direkt die passende Leistung auswählen.",
  },
  {
    frage: "Ist eine Beratung im Termin enthalten?",
    antwort: "Ja. Wir sprechen zu Beginn in Ruhe über deine Wünsche, deine Haarstruktur und deinen Alltag und entscheiden gemeinsam, was wirklich zu dir passt.",
  },
  {
    frage: "Was kann ich zur Vorbereitung mitbringen?",
    antwort: "Inspirationsbilder helfen sehr, gern auch Fotos von Looks, die dir nicht gefallen. Erzähl mir außerdem, was in den letzten Monaten mit deinen Haaren passiert ist, zum Beispiel Farbe oder Glätten.",
  },
  {
    frage: "Machst du auch Extensions?",
    antwort: "Ja, ich arbeite mit Wefts für mehr Länge und Fülle. Am besten buchst du vorher eine Beratung, damit wir Farbe, Länge und Menge genau planen können.",
  },
  {
    frage: "Ist Karl immer dabei?",
    antwort: "Meistens ja, Karl ist mein Dackel und offizieller Salon Dog. Wenn du eine Allergie oder Angst vor Hunden hast, sag mir einfach vorher Bescheid.",
  },
  {
    frage: "Wie komme ich zu dir?",
    antwort: "Du findest mich in der Venloer Straße 25 in 50672 Köln. Der Eingang liegt auf der Bismarckstraße. Mit der Bahn steigst du am Friesenplatz aus, von dort sind es nur wenige Gehminuten. Mit dem Auto parkst du am besten in einem der Parkhäuser rund um die Ringe. Über die Adresse im Kontakt kommst du direkt zu Google Maps.",
  },
  {
    frage: "Wo finde ich dich?",
    antwort: "In der Venloer Straße 25 in 50672 Köln, ganz nah am Friesenplatz.",
  },
];
