// src/components/sections/featured-offer.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { offers } from "@/data/offers";

export default function FeaturedOffer() {
  const offer = offers.find((o) => o.featured)!;

  return (
    <section id="featured" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="eyebrow">Mon programme signature</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            L'accompagnement qui
            <br className="hidden sm:block" />
            <span className="text-accent"> change tout.</span>
          </h2>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CONTENU — 2 colonnes desktop, empilé mobile
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-20"
        >
          {/* ══════════════════════════════════
              COLONNE GAUCHE — PITCH
              ══════════════════════════════════ */}
          <div>
            {/* Titre complet */}
            <h3 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              {offer.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:mt-5 sm:text-base lg:text-lg">
              Que tu partes de zéro ou que tu aies déjà tes premiers clients —
              cet accompagnement de 45 jours est conçu pour te faire passer à
              l'action avec un plan clair, un suivi personnalisé et les
              stratégies qui ont réellement fait leurs preuves.
            </p>

            {/* Encart "C'est pour toi si" */}
            <div className="mt-7 border-l-2 border-amber-400/40 pl-4 sm:mt-8 sm:pl-5">
              <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400 sm:text-xs">
                C'est pour toi si
              </p>
              <ul className="mt-3 space-y-2 text-xs text-zinc-400 sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>Tu veux démarrer ton business cleaning sans tourner en rond</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>Tu as déjà des clients et tu veux structurer pour scaler</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>Tu veux un plan personnalisé et un vrai suivi</span>
                </li>
              </ul>
            </div>

            {/* Prix */}
            <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:mt-10 sm:gap-x-4">
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {offer.priceLabel}
              </div>
              {offer.compareAtPrice && (
                <div className="text-base text-zinc-600 line-through sm:text-lg">
                  CA${offer.compareAtPrice.toLocaleString("fr-CA")}
                </div>
              )}
            </div>

            {/* Sous-texte paiement */}
            <p className="mt-2 text-xs text-zinc-500 sm:mt-3 sm:text-sm">
              Paiement en 3x sans frais disponible
            </p>

            {/* Urgence */}
            <div className="mt-6 flex items-center gap-2.5 sm:mt-8 sm:gap-3">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
              <span className="text-xs text-zinc-400 sm:text-sm">
                Plus que{" "}
                <span className="font-medium text-white">10 places</span> sur
                ce cycle
              </span>
            </div>

            {/* CTA — Compact sur mobile */}
            <div className="mt-7 sm:mt-10">
              <a
                href={offer.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full justify-center px-6 py-4 text-sm sm:w-auto sm:px-9 sm:py-5 sm:text-base"
              >
                {offer.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ══════════════════════════════════
              COLONNE DROITE — BÉNÉFICES
              ══════════════════════════════════ */}
          <div className="lg:pt-2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.15em] text-zinc-600 sm:mb-6 sm:text-xs">
              Ce que tu obtiens
            </p>

            <ul className="space-y-4 sm:space-y-5">
              {offer.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                    <Check className="h-3 w-3 text-amber-400" />
                  </div>
                  <span className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Garantie */}
            <div className="mt-8 border-t border-white/5 pt-5 sm:mt-10 sm:pt-6">
              <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 sm:text-xs">
                Garantie
              </p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:mt-3 sm:text-sm">
                Si après la 1ère session tu n'es pas convaincue, je te
                rembourse intégralement. Sans question.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}