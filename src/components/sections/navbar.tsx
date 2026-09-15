// src/components/sections/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const LINKS = [
  { label: "Accueil", href: "#" },
  { label: "Formations", href: "#catalog" },
  { label: "Accompagnement", href: "#featured" },
  { label: "YouTube", href: "#youtube" },
  { label: "Boutique", href: "#boutique" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#0b0f17]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-amber-600 text-sm font-bold text-[#0b0f17]">
            BL
          </div>
          <span className="hidden text-sm font-bold text-white sm:block">
            Bossladygerlicia
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://youtube.com/@bossladygerlicia"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-300 transition-all hover:bg-red-500 hover:text-white sm:inline-flex"
          >
            <FaYoutube className="h-3.5 w-3.5" />
            YouTube
          </a>
          <a
            href="#recommender"
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-xs font-semibold text-[#0b0f17] shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.03] sm:inline-flex"
          >
            Trouver mon offre
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#0b0f17]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-amber-400"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}