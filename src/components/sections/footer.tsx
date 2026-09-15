// src/components/sections/footer.tsx
"use client";

import Image from "next/image";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
const NAVIGATION = [
  { label: "À propos", href: "#about" },
  { label: "Recommandateur", href: "#recommender" },
  { label: "Accompagnement 45J", href: "#featured" },
  { label: "Catalogue", href: "#catalog" },
  { label: "FAQ", href: "#faq" },
];

const RESOURCES = [
  {
    label: "Chaîne YouTube",
    href: "https://www.youtube.com/@entreprendresansfiltre0",
    external: true,
  },
  {
    label: "Boss Lady Secrets",
    href: "https://bossladysecrets.com",
    external: true,
  },
  { label: "Le Livre Business Cleaning", href: "#", external: false },
  { label: "Pack 50+ Documents", href: "#", external: false },
];

const SOCIALS = [
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@entreprendresansfiltre0",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://tiktok.com/@entreprendresansfiltre0",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/entreprendresansfiltre",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://web.facebook.com/Entreprendresansfiltre/",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/16132867071?text=Bonjour%20Gerlicia%20%F0%9F%91%8B",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* ═══════════════════════════════════════════
            HAUT DU FOOTER — Logo + Navigation
            ═══════════════════════════════════════════ */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr] lg:gap-16">
          {/* ─── Colonne 1 : Logo + description ─── */}
          <div>
            {/* Logo */}
            <a href="#" className="inline-block">
              <Image
                src="/logo.jpeg"
                alt="Entreprendre Sans Filtre"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
                priority={false}
              />
            </a>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-500">
              L'écosystème business de Gerlicia — 37 employés à Ottawa,
              Toronto et Edmonton. Je t'aide à bâtir ton entreprise cleaning.
            </p>

            {/* Status live discret */}
            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Réponse sous 24-48h</span>
            </div>
          </div>

          {/* ─── Colonne 2 : Navigation ─── */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {NAVIGATION.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Colonne 3 : Ressources ─── */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Ressources
            </h4>
            <ul className="space-y-3 text-sm">
              {RESOURCES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Colonne 4 : Contact + Réseaux ─── */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Restons connectés
            </h4>

            {/* Réseaux sociaux — icônes nues */}
            <div className="flex flex-wrap gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors duration-200 hover:text-amber-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Contact direct */}
            <div className="mt-8 space-y-2 text-sm">
              <a
                href="https://wa.me/16132867071"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                +1 (613) 286-7071
              </a>
              <a
                href="mailto:info@entreprendresansfiltre.com"
                className="block text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                info@entreprendresansfiltre.com
              </a>
              <p className="text-zinc-500">
                Ottawa · Toronto · Edmonton
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BAS DU FOOTER — Copyright + Mentions
            ═══════════════════════════════════════════ */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Entreprendre Sans Filtre — Tous droits
            réservés.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600">
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Confidentialité
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}