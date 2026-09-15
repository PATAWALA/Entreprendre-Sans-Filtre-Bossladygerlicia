// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entreprendre Sans Filtre — Bossladygerlicia",
  description:
    "L'écosystème business de Bossladygerlicia, experte Cleaning & Stratégie. Formations, accompagnement high-ticket et outils pour construire ton empire cleaning.",
  keywords: [
    "cleaning business",
    "entrepreneuriat",
    "formation cleaning",
    "accompagnement business",
    "Bossladygerlicia",
    "Entreprendre Sans Filtre",
  ],
  authors: [{ name: "Bossladygerlicia" }],
  openGraph: {
    title: "Entreprendre Sans Filtre — Bossladygerlicia",
    description:
      "Construis ton empire Cleaning. Formations, accompagnement 45 jours et outils pros.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprendre Sans Filtre — Bossladygerlicia",
    description:
      "Construis ton empire Cleaning. Formations, accompagnement 45 jours et outils pros.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0f17] font-sans text-slate-200 antialiased selection:bg-amber-400/30 selection:text-amber-100">
        {children}
      </body>
    </html>
  );
}