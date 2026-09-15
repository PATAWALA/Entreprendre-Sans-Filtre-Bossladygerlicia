// src/components/sections/hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Users, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f17] pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Halo doré en arrière-plan */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge preuve sociale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-2 text-xs font-medium text-amber-300 sm:text-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>37 employés sous management · +500 élèves formés</span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Arrête de scroller.
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Construis ton empire Cleaning.
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Je t'accompagne à transformer ton savoir-faire en business rentable —
          que tu démarres de zéro ou que tu veuilles scaler à 6 chiffres.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#recommender"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-base font-semibold text-[#0b0f17] shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.03] hover:shadow-amber-400/40"
          >
            Trouver MON offre en 30 sec
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur transition-all hover:border-amber-400/40 hover:bg-white/10"
          >
            Voir l'accompagnement signature
          </a>
        </motion.div>

        {/* Preuves chiffrées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            { icon: Users, label: "Élèves formés", value: "500+" },
            { icon: Briefcase, label: "Employés gérés", value: "37" },
            { icon: Star, label: "Abonnés TikTok", value: "23K+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur"
            >
              <stat.icon className="mb-2 h-5 w-5 text-amber-400" />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-wider text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}