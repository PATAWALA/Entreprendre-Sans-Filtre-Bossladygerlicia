// src/components/sections/catalog.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { offers, type OfferTag } from "@/data/offers";

/* ═══════════════════════════════════════════════
   ONGLETS DE FILTRE
   ═══════════════════════════════════════════════ */
const TABS: { id: "all" | OfferTag; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "Débutant", label: "Débutant" },
  { id: "Formation", label: "Formations" },
  { id: "High-Ticket", label: "Accompagnement" },
  { id: "Ressource", label: "Ressources" },
];

export default function Catalog() {
  const [active, setActive] = useState<"all" | OfferTag>("all");

  const filtered =
    active === "all" ? offers : offers.filter((o) => o.tags.includes(active));

  return (
    <section id="catalog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <span className="eyebrow">Catalogue</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Choisis ton{" "}
            <span className="text-accent">point de départ.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-zinc-500">
            Du premier ebook à l'accompagnement VIP — chaque offre répond à un
            besoin précis.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            FILTRES — Pilules sobres
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-wrap items-center justify-center gap-2"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === tab.id
                  ? "bg-white text-[#08090d]"
                  : "border border-white/8 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ═══════════════════════════════════════════
            GRILLE — Sans cartes, avec séparateurs subtils
            ═══════════════════════════════════════════ */}
        <motion.div
          layout
          className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((offer, i) => (
              <motion.a
                key={offer.id}
                href={offer.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(i * 0.04, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col border-t border-white/8 py-8 transition-colors duration-300 hover:border-white/20"
              >
                {/* Ligne supérieure : catégorie + badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-600">
                    {offer.category}
                  </span>
                  {offer.badge && (
                    <span className="text-[11px] font-medium text-amber-400">
                      {offer.badge}
                    </span>
                  )}
                </div>

                {/* Titre + flèche (apparaît au hover) */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-amber-50">
                    {offer.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-400" />
                </div>

                {/* Subtitle */}
                {offer.subtitle && (
                  <p className="mt-1 text-xs text-zinc-500">
                    {offer.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {offer.description}
                </p>

                {/* Prix */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-lg font-bold tracking-tight text-white">
                    {offer.priceLabel}
                  </span>
                  {offer.compareAtPrice && (
                    <span className="text-xs text-zinc-600 line-through">
                      CA${offer.compareAtPrice.toLocaleString("fr-CA")}
                    </span>
                  )}
                </div>

                {/* Mode (En ligne, Présentiel…) */}
                {offer.mode && (
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-zinc-600">
                    {offer.mode}
                  </p>
                )}
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ═══════════════════════════════════════════
            NOTE BAS DE CATALOGUE
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-500">
            Tu hésites encore ?{" "}
            <a
              href="#recommender"
              className="inline-flex items-center gap-1 font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              Fais le test en 30 sec
              <ArrowRight className="h-3 w-3" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}