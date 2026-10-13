import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zoe Genevieve · Friseurin in Köln",
  description:
    "Zoe Genevieve, selbstständige Friseurin in Köln: Schnitt, Farbe, Balayage und Styling. Termin direkt online, per Telefon oder WhatsApp buchen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
