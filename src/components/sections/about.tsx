// src/components/sections/about.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Award, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";

/* ═══════════════════════════════════════════════
   CRÉDIBILITÉ — Points clés du parcours
   ═══════════════════════════════════════════════ */
const CREDENTIALS = [
  {
    icon: MapPin,
    title: "3 villes, 1 empire",
    description: "Ottawa · Toronto · Edmonton — une entreprise qui tourne, même quand je ne suis pas là.",
  },
  {
    icon: Users,
    title: "37 employés sous management",
    description: "J'ai recruté, formé et fidélisé une équipe complète. Je t'apprends à faire pareil.",
  },
  {
    icon: Award,
    title: "6 ans d'expertise terrain",
    description: "Pas de théorie. Juste ce qui marche — testé sur mes propres contrats.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0e1a] py-20 sm:py-28"
    >
      {/* Halo orange subtil */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            À propos
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Qui est{" "}
            <span className="text-ember">Gerlicia</span> ?
          </h2>
        </motion.div>

        {/* ═══ CONTENU PRINCIPAL ═══ */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr,1.15fr] lg:gap-16">
          {/* ─── Colonne gauche : PHOTO ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            {/* Carte photo avec bordure orange dégradée */}
            <div className="ember-card relative overflow-hidden p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#131c30]">
                {/* Photo de Gerlicia */}
                <Image
                  src="/gerlicia.jpg"
                  alt="Gerlicia — Fondatrice d'Entreprendre Sans Filtre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />

                {/* Overlay dégradé bas (pour lisibilité) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                {/* Nom + titre sur la photo */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-lg font-bold text-white">Gerlicia</div>
                  <div className="text-xs text-orange-300">
                    Fondatrice · Entrepreneure Cleaning
                  </div>
                </div>
              </div>
            </div>

            {/* Badge flottant : rôle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-3 top-8 hidden rounded-2xl border border-orange-500/30 bg-[#0d1524] px-4 py-3 shadow-2xl shadow-black/50 sm:block"
            >
              <div className="text-[10px] uppercase tracking-wider text-slate-400">
                Basée à
              </div>
              <div className="text-sm font-bold text-white">Ottawa 🇨🇦</div>
            </motion.div>
          </motion.div>

          {/* ─── Colonne droite : HISTOIRE + CREDENTIALS ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Citation signature */}
            <div className="mb-8 border-l-2 border-orange-500 pl-5">
              <Quote className="mb-3 h-6 w-6 text-orange-400" />
              <p className="text-lg font-medium italic leading-relaxed text-slate-200 sm:text-xl">
                "Je ne vends pas du rêve. Je partage ce que j'ai réellement
                construit — avec les vraies erreurs, les vrais chiffres, et les
                vraies solutions."
              </p>
            </div>

            {/* Texte histoire */}
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                Il y a 6 ans, j'ai lancé mon entreprise de nettoyage avec une
                voiture, un aspirateur, et beaucoup de détermination. Aujourd'hui,{" "}
                <strong className="text-white">
                  je dirige 37 employés répartis entre Ottawa, Toronto et
                  Edmonton
                </strong>
                .
              </p>
              <p>
                J'ai fait toutes les erreurs possibles : mal fixer mes prix,
                perdre des contrats, embaucher les mauvaises personnes,
                m'épuiser à tout faire moi-même. Chacune de ces erreurs m'a
                appris quelque chose que je transmets aujourd'hui à mes élèves.
              </p>
              <p>
                Ma mission avec{" "}
                <strong className="text-orange-300">
                  Entreprendre Sans Filtre
                </strong>{" "}
                est simple : t'éviter de perdre 3 ans à apprendre ce que tu peux
                maîtriser en 45 jours.
              </p>
            </div>

            {/* Grid des credentials */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {CREDENTIALS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                    <c.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="text-sm font-bold text-white">
                    {c.title}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {c.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA final de la section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#recommender" className="btn-ember group">
                Trouver MON offre
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#featured" className="btn-ghost">
                Accompagnement 45 jours
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


