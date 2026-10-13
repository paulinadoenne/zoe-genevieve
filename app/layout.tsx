import type { Metadata } from "next";
import { Instrument_Serif, Oswald, Inter } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const condensed = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-condensed",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zoe Genevieve · Master Hairstylist in Köln",
  description:
    "Zoe Genevieve, Master Hairstylist und Blonde Specialist in Köln: Schnitt, Farbe, Balayage und Styling. 1:1 Termine in der Sankt-Apern-Straße. Termin direkt online, per Telefon oder WhatsApp buchen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${condensed.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
