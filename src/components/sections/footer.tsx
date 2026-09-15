// src/components/sections/footer.tsx
"use client";

import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail } from "lucide-react";

const SOCIALS = [
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://tiktok.com/@bossladygerlicia",
    color: "hover:text-white hover:border-white/40 hover:bg-white/10",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/bossladygerlicia",
    color:
      "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com/@bossladygerlicia",
    color: "hover:text-red-500 hover:border-red-500/40 hover:bg-red-500/10",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com/bossladygerlicia",
    color:
      "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/16135550000",
    color:
      "hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/10",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b12] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ─── Marque ─── */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-amber-600 text-sm font-bold text-[#0b0f17]">
                BL
              </div>
              <span className="text-sm font-bold text-white">
                Bossladygerlicia
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              L'écosystème business de Gerlicia — experte Cleaning & Stratégie.
              37 employés sous management, +500 élèves formés.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Réponse sous 24-48h
            </div>
          </div>

          {/* ─── Navigation ─── */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Recommandateur", href: "#recommender" },
                { label: "Accompagnement 45J", href: "#featured" },
                { label: "Catalogue complet", href: "#catalog" },
                { label: "Témoignages", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Ressources ─── */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Ressources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Chaîne YouTube", href: "#youtube" },
                { label: "Boutique soins", href: "#boutique" },
                { label: "Le Livre Business Cleaning", href: "#" },
                { label: "Pack 50+ Documents", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact ─── */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Restons connectés
            </h4>

            {/* Icônes sociales */}
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all ${s.color}`}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Email direct */}
            <a
              href="mailto:info@bossladygerlicia.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-amber-400"
            >
              <Mail className="h-4 w-4" />
              info@bossladygerlicia.com
            </a>

            {/* Téléphone */}
            <a
              href="tel:+16135550000"
              className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-amber-400"
            >
              <span className="text-amber-400">☎</span>
              +1 (613) 555-0000
            </a>
          </div>
        </div>

        {/* ─── Séparateur + bas de page ─── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Entreprendre Sans Filtre — Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-amber-400">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-amber-400">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}