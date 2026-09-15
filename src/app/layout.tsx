// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ═══════════════════════════════════════════════
   SEO — Optimisé pour la marque + mots-clés
   ═══════════════════════════════════════════════ */
export const metadata: Metadata = {
  metadataBase: new URL("https://entreprendresansfiltre.com"),
  title: {
    default:
      "Entreprendre Sans Filtre — Gerlicia | Experte Cleaning & Business",
    template: "%s | Entreprendre Sans Filtre",
  },
  description:
    "Bâtis ton entreprise de nettoyage rentable avec Gerlicia — 37 employés à Ottawa, Toronto et Edmonton. Formations, accompagnement 45 jours et outils pros pour entrepreneurs cleaning.",
  keywords: [
    "entreprendre sans filtre",
    "business nettoyage",
    "formation cleaning",
    "accompagnement business cleaning",
    "entrepreneure cleaning",
    "Ottawa cleaning business",
    "Toronto cleaning business",
    "Edmonton cleaning business",
    "bossladygerlicia",
    "gerlicia",
    "start cleaning business",
    "formation nettoyage Canada",
  ],
  authors: [{ name: "Gerlicia", url: "https://entreprendresansfiltre.com" }],
  creator: "Gerlicia",
  publisher: "Entreprendre Sans Filtre",

  /* ——— OpenGraph (Facebook, LinkedIn…) ——— */
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://entreprendresansfiltre.com",
    siteName: "Entreprendre Sans Filtre",
    title: "Entreprendre Sans Filtre — Bâtis ton empire Cleaning",
    description:
      "37 employés, +500 élèves formés. Rejoins l'écosystème business de Gerlicia pour lancer ou scaler ton entreprise de nettoyage.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gerlicia — Entrepreneure Cleaning",
      },
    ],
  },

  /* ——— Twitter / X ——— */
  twitter: {
    card: "summary_large_image",
    title: "Entreprendre Sans Filtre — Gerlicia",
    description:
      "Bâtis ton empire Cleaning. Formations, accompagnement 45J et outils pros.",
    images: ["/og-image.jpg"],
  },

  /* ——— Robots ——— */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ——— Icons ——— */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  /* ——— Vérification Google (à remplir plus tard) ——— */
  // verification: {
  //   google: "ton-code-google-search-console",
  // },
};

/* ═══════════════════════════════════════════════
   VIEWPORT — Thème mobile-first pour TikTok
   ═══════════════════════════════════════════════ */
export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/* ═══════════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════════ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CA"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0a0e1a] font-sans text-slate-300 antialiased">
        {children}
      </body>
    </html>
  );
}