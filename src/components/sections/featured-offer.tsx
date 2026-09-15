// src/components/sections/featured-offer.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { offers } from "@/data/offers";

export default function FeaturedOffer() {
  const offer = offers.find((o) => o.featured)!;

  return (
    <section
      id="featured"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="eyebrow">{offer.badge}</span>
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
          className="grid items-start gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-20"
        >
          {/* ══════════════════════════════════
              COLONNE GAUCHE — PITCH
              ══════════════════════════════════ */}
          <div>
            {/* Titre complet */}
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              {offer.title}
            </h3>

            {/* Description */}
            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {offer.description}
            </p>

            {/* Prix */}
            <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {offer.priceLabel}
              </div>
              {offer.compareAtPrice && (
                <div className="text-lg text-zinc-600 line-through">
                  CA${offer.compareAtPrice.toLocaleString("fr-CA")}
                </div>
              )}
            </div>

            {/* Sous-texte paiement */}
            <p className="mt-3 text-sm text-zinc-500">
              Paiement en 3x sans frais disponible
            </p>

            {/* Encart urgence très discret */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-sm text-zinc-400">
                Plus que{" "}
                <span className="font-medium text-white">10 places</span> sur
                ce cycle
              </span>
            </div>

            {/* CTA principal — WhatsApp */}
            <div className="mt-10">
              <a
                href={offer.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
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
            <p className="mb-6 text-xs uppercase tracking-[0.15em] text-zinc-600">
              Ce que tu obtiens
            </p>

            <ul className="space-y-5">
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
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                    <Check className="h-3 w-3 text-amber-400" />
                  </div>
                  <span className="text-base leading-relaxed text-zinc-300">
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Note garantie discrète */}
            <div className="mt-10 border-t border-white/5 pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                Garantie
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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