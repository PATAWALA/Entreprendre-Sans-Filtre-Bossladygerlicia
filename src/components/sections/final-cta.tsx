// src/components/sections/final-cta.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f17] py-20 sm:py-28">
      {/* Halo doré */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-linear-to-br from-amber-400/[0.08] via-white/[0.02] to-transparent p-8 backdrop-blur-xl sm:p-14"
        >
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              Dernière étape avant de te lancer
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-balance text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ton empire cleaning
            <br />
            <span className="text-gradient-gold">
              commence aujourd'hui.
            </span>
          </h2>

          {/* Sous-titre */}
          <p className="mx-auto mt-5 max-w-xl text-center text-base text-slate-300 sm:text-lg">
            Ne laisse pas passer une autre année à regarder les autres réussir.
            3 questions suffisent pour savoir par où commencer.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#recommender"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-amber-500 px-8 py-4 text-base font-semibold text-[#0b0f17] shadow-lg shadow-amber-400/30 transition-all hover:scale-[1.03] hover:shadow-amber-400/50 sm:w-auto"
            >
              Trouver MON offre
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#featured"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur transition-all hover:border-amber-400/40 hover:bg-white/10 sm:w-auto"
            >
              Voir l'accompagnement 45J
            </a>
          </div>

          {/* Urgence */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5 text-red-400" />
            <span>
              Places limitées à{" "}
              <strong className="text-red-300">10 par cycle</strong> ·
              Prochaine session ouvre dans 7 jours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}