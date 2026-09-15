// src/components/sections/footer.tsx
"use client";

import { Music2, Mail, MessageCircle } from "lucide-react";

const SOCIALS = [
  { icon: Music2, label: "TikTok", href: "https://tiktok.com/@bossladygerlicia" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:contact@entreprendresansfiltre.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b12] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Marque */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Entreprendre{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Sans Filtre
              </span>
            </h3>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              L'écosystème business de Bossladygerlicia — experte Cleaning &
              Stratégie depuis 6 ans.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Recommandateur", href: "#recommender" },
                { label: "Accompagnement 45J", href: "#featured" },
                { label: "Catalogue complet", href: "#catalog" },
                { label: "Boutique soins", href: "#" },
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

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Restons connectés
            </h4>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Réponse en 24-48h (lun-ven)
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Entreprendre Sans Filtre — Tous droits
            réservés.
          </p>
          <p className="text-xs text-slate-500">
            Conçu avec <span className="text-amber-400">♦</span> pour les
            entrepreneures ambitieuses.
          </p>
        </div>
      </div>
    </footer>
  );
}