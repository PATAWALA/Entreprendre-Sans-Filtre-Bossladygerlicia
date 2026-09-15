// src/components/sections/hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08090d] pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ═══════════════════════════════════
            VIDÉO XXL — CENTRÉE
            ═══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/gePoxig7rPs?rel=0&modestbranding=1&playsinline=1&color=white"
                title="Gerlicia — Entreprendre Sans Filtre"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════
            TEXTE — EMPILÉ SOUS LA VIDÉO
            ═══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-3xl text-center sm:mt-20"
        >
          {/* Titre */}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Bâtis ton empire
            <br />
            <span className="text-accent">de nettoyage.</span>
          </h1>

          {/* Sous-titre court et impactant */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Je suis Gerlicia. J'ai bâti une entreprise de nettoyage de 37
            employés à Ottawa, Toronto et Edmonton. Je t'apprends à faire
            pareil.
          </p>

          {/* UN SEUL CTA */}
          <div className="mt-10 flex justify-center">
            <a href="#recommender" className="btn-primary group">
              Trouver mon offre
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Preuve sociale discrète */}
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600">
            10 ans d'expertise · +500 élèves formés
          </p>
        </motion.div>
      </div>
    </section>
  );
}