// src/components/sections/testimonials.tsx
"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════
   TÉMOIGNAGES
   ═══════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Fondatrice — CleanPro Ottawa",
    content:
      "En 6 mois avec Gerlicia, je suis passée de 0 à 4 employés et CA$8K par mois. Sa méthode est brutalement efficace.",
    result: "0 → 4 employés",
  },
  {
    name: "Aïcha D.",
    role: "Entrepreneure cleaning — Montréal",
    content:
      "L'accompagnement 45 jours a complètement transformé mon business. Je facture enfin ce que je vaux.",
    result: "CA$2K → CA$9K/mois",
  },
  {
    name: "Linda K.",
    role: "Élève Business Academy",
    content:
      "Ce que j'ai appris en 3 mois avec elle, je ne l'aurais jamais appris en 3 ans seule. Merci Boss Lady.",
    result: "1ère cliente en 3 sem.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <span className="eyebrow">Témoignages</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Elles ont osé.
            <br className="hidden sm:block" />
            <span className="text-accent"> Regarde où elles en sont.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-zinc-500">
            Des femmes comme toi, qui ont arrêté d'attendre.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            GRILLE — 3 colonnes éditoriales
            ═══════════════════════════════════════════ */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col"
            >
              {/* Résultat en haut — typo forte */}
              <figcaption className="mb-6">
                <div className="text-2xl font-bold tracking-tight text-amber-400 sm:text-3xl">
                  {t.result}
                </div>
              </figcaption>

              {/* Citation — grand, éditorial */}
              <blockquote className="flex-1">
                <p className="text-lg leading-relaxed tracking-tight text-white sm:text-xl">
                  "{t.content}"
                </p>
              </blockquote>

              {/* Auteur — discret en bas */}
              <footer className="mt-8 border-t border-white/8 pt-6">
                <div className="text-sm font-medium text-white">
                  {t.name}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-[0.15em] text-zinc-600">
                  {t.role}
                </div>
              </footer>
            </motion.figure>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            BANDEAU CONFIANCE — Ligne simple
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {[
            { value: "5.0", label: "Note moyenne" },
            { value: "200+", label: "Avis clients" },
            { value: "500+", label: "Élèves formés" },
            { value: "10 ans", label: "D'expertise" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}