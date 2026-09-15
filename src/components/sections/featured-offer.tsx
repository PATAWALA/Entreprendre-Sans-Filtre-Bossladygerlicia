// src/components/sections/featured-offer.tsx
"use client";

import { motion } from "framer-motion";
import { Check, Crown, Clock, ArrowRight } from "lucide-react";
import { offers } from "@/data/offers";

export default function FeaturedOffer() {
  const offer = offers.find((o) => o.featured)!;

  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b0f17] via-[#0d1220] to-[#0b0f17] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.07] via-white/[0.02] to-transparent p-8 backdrop-blur-xl sm:p-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Colonne gauche : pitch */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Crown className="h-3.5 w-3.5" />
              {offer.badge}
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {offer.title}
            </h2>

            <p className="mt-5 text-base text-slate-300 sm:text-lg">
              {offer.description}
            </p>

            {/* Décompte de places */}
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-2xl border border-red-500/30 bg-red-500/5 px-4 py-2.5 text-sm text-red-300">
              <Clock className="h-4 w-4 animate-pulse" />
              <span className="font-medium">
                Plus que <strong className="text-red-400">10 places</strong> sur
                ce cycle
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={offer.ctaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-base font-semibold text-[#0b0f17] shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.03] hover:shadow-amber-400/40"
              >
                {offer.ctaLabel}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-white">
                  {offer.priceLabel}
                </div>
                <div className="text-xs text-slate-400">
                  Paiement en 3x disponible
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : bénéfices */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-400">
              Ce que tu obtiens
            </h3>
            <ul className="space-y-4">
              {offer.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/15">
                    <Check className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                  <span className="text-slate-200">{h}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}