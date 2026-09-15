// src/components/sections/final-cta.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      {/* ═══════════════════════════════════════════
          HALOS DÉGRADÉS DANS LES ANGLES
          ═══════════════════════════════════════════ */}

      {/* Halo ORANGE — Coin haut gauche */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />

      {/* Halo OR — Coin bas droit */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-400/15 blur-[120px]" />

      {/* Halo AMBRE — Coin haut droit (discret) */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[100px]" />

      {/* Grille subtile */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* ═══════════════════════════════════════════
            TITRE MASSIF
            ═══════════════════════════════════════════ */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Ton empire cleaning
          <br />
          <span className="text-accent">commence aujourd'hui.</span>
        </motion.h2>

        {/* ═══════════════════════════════════════════
            SOUS-TITRE
            ═══════════════════════════════════════════ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Ne laisse pas passer une autre année à regarder les autres réussir.
          3 questions suffisent pour savoir par où commencer.
        </motion.p>

        {/* ═══════════════════════════════════════════
            CTA UNIQUE
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 flex justify-center"
        >
          <a href="#recommender" className="btn-primary group">
            Trouver mon offre
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* ═══════════════════════════════════════════
            NOTE DISCRÈTE
            ═══════════════════════════════════════════ */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600"
        >
          Places limitées à 10 par cycle
        </motion.p>
      </div>
    </section>
  );
}