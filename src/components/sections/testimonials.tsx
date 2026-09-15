// src/components/sections/testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Fondatrice — CleanPro Ottawa",
    content:
      "En 6 mois avec Gerlicia, je suis passée de 0 à 4 employés et CA$8K/mois. Sa méthode est brutalement efficace.",
    rating: 5,
  },
  {
    name: "Aïcha D.",
    role: "Entrepreneure cleaning — Montréal",
    content:
      "L'accompagnement 45 jours a complètement transformé mon business. Je facture enfin ce que je vaux.",
    rating: 5,
  },
  {
    name: "Linda K.",
    role: "Élève Business Academy",
    content:
      "Ce que j'ai appris en 3 mois avec elle, je ne l'aurais jamais appris en 3 ans seule. Merci Boss Lady !",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-linear-to-b from-[#0b0f17] via-[#0d1220] to-[#0b0f17] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Témoignages
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Elles ont osé.
            <br className="hidden sm:block" />
            <span className="text-gradient-gold"> Regarde où elles en sont.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Des femmes comme toi, qui ont décidé d'arrêter d'attendre.
          </p>
        </div>

        {/* Grille */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all hover:border-amber-400/40 hover:bg-white/[0.05]"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-amber-400/20" />

              {/* Étoiles */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Contenu */}
              <p className="relative text-sm leading-relaxed text-slate-200">
                "{t.content}"
              </p>

              {/* Auteur */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-sm font-bold text-[#0b0f17]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}