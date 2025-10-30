import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const headings = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Velvet Strand Salon",
  description:
    "Velvet Strand Salon offers bespoke hair services, color artistry, and curated treatments designed to celebrate your signature style."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headings.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
