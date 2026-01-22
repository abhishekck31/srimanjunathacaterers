import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google"; // Using Outfit as modern sans-serif
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sri Manjunatha Caterers - PKS Group | Premium Pure Veg Catering",
  description: "Traditional South Indian & Karnataka-style vegetarian catering for weddings, engagements, and auspicious occasions. Experience taste, tradition, and trust.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body
        className="antialiased bg-brand-cream text-gray-900"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
