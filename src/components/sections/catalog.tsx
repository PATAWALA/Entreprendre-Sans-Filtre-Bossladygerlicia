// src/components/sections/catalog.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { offers, type OfferTag } from "@/data/offers";

const TABS: { id: "all" | OfferTag; label: string }[] = [
  { id: "all", label: "Tout voir" },
  { id: "Débutant", label: "Débutant" },
  { id: "Formation", label: "Formation" },
  { id: "High-Ticket", label: "High-Ticket" },
];

export default function Catalog() {
  const [active, setActive] = useState<"all" | OfferTag>("all");

  const filtered =
    active === "all"
      ? offers
      : offers.filter((o) => o.tags.includes(active));

  return (
    <section id="catalog" className="bg-[#0b0f17] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Catalogue
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Choisis ton point de départ
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Du premier ebook à l'accompagnement VIP — chaque offre est pensée
            pour une étape précise.
          </p>
        </div>

        {/* Onglets */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === tab.id
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-[#0b0f17] shadow-lg shadow-amber-400/20"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-amber-400/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((offer) => (
              <motion.article
                key={offer.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-amber-400/40 hover:bg-white/[0.05]"
              >
                {/* Badge */}
                {offer.badge && (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                    <Sparkles className="h-3 w-3" />
                    {offer.badge}
                  </div>
                )}

                <span className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  {offer.category}
                </span>

                <h3 className="text-lg font-semibold leading-snug text-white">
                  {offer.title}
                </h3>

                <p className="mt-2 flex-1 text-sm text-slate-400">
                  {offer.description}
                </p>

                <div className="mt-6 flex items-end justify-between border-t border-white/5 pt-5">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {offer.priceLabel}
                    </div>
                  </div>
                  <a
                    href={offer.ctaHref}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-amber-400 hover:text-[#0b0f17]"
                  >
                    Choisir
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}