// src/components/sections/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
const LINKS = [
  { label: "À propos", href: "/#about" },
  { label: "Formations", href: "/#catalog" },
  { label: "Accompagnement", href: "/#featured" },
  { label: "Boutique", href: "/boutique" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Détection scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Ferme le menu au changement de page */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Bloque le scroll quand menu ouvert */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/boutique") return pathname === "/boutique";
    return false;
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[60] transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/8 bg-[#08090d]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Entreprendre Sans Filtre"
              width={180}
              height={48}
              className="h-10 w-auto object-contain sm:h-11 lg:h-12"
              priority
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(l.href)
                    ? "text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + BURGER */}
          <div className="flex items-center gap-3">
            <Link
              href="/#recommender"
              className="hidden items-center rounded-full bg-linear-to-br from-amber-300 to-amber-600 px-6 py-3 text-sm font-semibold text-[#08090d] transition-all duration-200 hover:from-amber-200 hover:to-amber-500 sm:inline-flex"
            >
              Trouver mon offre
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="relative z-[70] rounded-lg p-2.5 text-white transition-colors duration-200 hover:bg-white/5 lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          MENU MOBILE — Overlay opaque, plein écran
          ═══════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-50 bg-[#08090d] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col px-6 pb-8 pt-24">
          {/* Liens principaux */}
          <div className="flex flex-col gap-2">
            {LINKS.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-5 text-xl font-medium transition-colors duration-200 ${
                  isActive(l.href)
                    ? "bg-white/[0.05] text-white"
                    : "text-zinc-200 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{l.label}</span>
                <ArrowRight className="h-5 w-5 text-zinc-600" />
              </Link>
            ))}
          </div>

          {/* CTA en bas */}
          <div className="mt-auto pt-8">
            <Link
              href="/#recommender"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-linear-to-br from-amber-300 to-amber-600 px-6 py-5 text-base font-semibold text-[#08090d] transition-all duration-200"
            >
              Trouver mon offre
            </Link>
            <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-zinc-600">
              Entreprendre Sans Filtre
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}