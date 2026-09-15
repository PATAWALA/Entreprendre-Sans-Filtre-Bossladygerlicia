// src/components/sections/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
const LINKS = [
  { label: "À propos", href: "#about" },
  { label: "Formations", href: "#catalog" },
  { label: "Accompagnement", href: "#featured" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Détection du scroll pour afficher le fond flouté */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Bloque le scroll quand le menu mobile est ouvert */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#08090d]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ═══════════════════════════════════════════
            LOGO
            ═══════════════════════════════════════════ */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Entreprendre Sans Filtre"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* ═══════════════════════════════════════════
            NAV DESKTOP
            ═══════════════════════════════════════════ */}
        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ═══════════════════════════════════════════
            CTA DESKTOP + BURGER MOBILE
            ═══════════════════════════════════════════ */}
        <div className="flex items-center gap-3">
          <a
            href="#recommender"
            className="hidden items-center rounded-full bg-linear-to-br from-amber-300 to-amber-600 px-5 py-2.5 text-xs font-semibold text-[#08090d] transition-all duration-200 hover:from-amber-200 hover:to-amber-500 sm:inline-flex"
          >
            Trouver mon offre
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-white transition-colors duration-200 hover:bg-white/5 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          MENU MOBILE
          ═══════════════════════════════════════════ */}
      {open && (
        <div className="border-t border-white/8 bg-[#08090d]/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/[0.03] hover:text-white"
              >
                {l.label}
              </a>
            ))}

            {/* CTA dans le menu mobile */}
            <a
              href="#recommender"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-linear-to-br from-amber-300 to-amber-600 px-5 py-3.5 text-sm font-semibold text-[#08090d] transition-all duration-200 hover:from-amber-200 hover:to-amber-500"
            >
              Trouver mon offre
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}