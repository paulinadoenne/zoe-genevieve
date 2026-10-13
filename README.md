# Zoe Genevieve · Friseurin in Köln

Website für Zoe Genevieve, selbstständige Friseurin auf Stuhlmiete in Köln.
Next.js 16 (App Router), React 19, vanilla CSS. Alle Seiten sind statisch und
laufen ohne weitere Konfiguration auf Vercel.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Inhalte pflegen

Alle Texte, Preise, Öffnungszeiten und Kontaktdaten stehen in `lib/content.ts`.
Werte in eckigen Klammern sind Platzhalter.

- Salonname, Adresse, Telefon, WhatsApp, E-Mail
- Buchungslink (`buchungsLink`), dann erscheint ein Button „Online buchen“
- Preise (aktuell Beispielwerte)
- Text „Über mich“
- Impressum: USt-IdNr. oder Kleinunternehmerhinweis, Handwerksrollen-Nummer

## Fotos

Fotos in `public/galerie/` ablegen und in `lib/content.ts` bei `galerie`
den Pfad eintragen, z. B. `src: "/galerie/balayage.jpg"`. Solange kein Bild
hinterlegt ist, zeigt die Seite eine ruhige Fläche mit Bildbeschreibung.
Portrait und Arbeitsfoto werden in `app/page.tsx` über `<Photo src="…" />`
gesetzt.
