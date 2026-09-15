// src/components/sections/hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, MapPin, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ═══ HALOS DÉCORATIFS ═══ */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-[140px]" />

      {/* ═══ GRILLE SUBTILE EN FOND ═══ */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr,1fr] lg:gap-16">
          {/* ═══════════════════════════════════════
              COLONNE GAUCHE — PITCH
              ═══════════════════════════════════════ */}
          <div className="text-center lg:text-left">
            {/* Badge preuve sociale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-xs font-medium text-orange-300 sm:text-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>
                37 employés · Ottawa · Toronto · Edmonton
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
            >
              Bâtis ton
              <br />
              <span className="text-ember">empire Cleaning.</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0"
            >
              Je suis <strong className="text-white">Gerlicia</strong> —
              entrepreneure à la tête d'une entreprise de nettoyage de{" "}
              <strong className="text-orange-300">37 employés</strong>. Je
              t'accompagne à lancer, structurer et scaler ton business cleaning
              de zéro à 6 chiffres.
            </motion.p>

            {/* CTA principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a href="#recommender" className="btn-ember group w-full sm:w-auto">
                Trouver MON offre en 30 sec
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#featured" className="btn-ghost w-full sm:w-auto">
                Voir l'accompagnement signature
              </a>
            </motion.div>

            {/* Mini-stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-5 border-t border-white/5 pt-8"
            >
              {[
                { icon: Users, value: "500+", label: "Élèves" },
                { icon: MapPin, value: "3", label: "Villes" },
                { icon: TrendingUp, value: "6 ans", label: "D'expertise" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center lg:items-start"
                >
                  <s.icon className="mb-2 h-4 w-4 text-orange-400" />
                  <span className="text-xl font-bold text-white sm:text-2xl">
                    {s.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ═══════════════════════════════════════
              COLONNE DROITE — VIDÉO INLINE
              ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            {/* Carte vidéo premium */}
            <div className="ember-card group relative overflow-hidden p-2 sm:p-3">
              {/* Iframe YouTube — lecture directe sans quitter le site */}
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/gePoxig7rPs?rel=0&modestbranding=1&playsinline=1&color=white"
                  title="Gerlicia — Entreprendre Sans Filtre"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Légende sous la vidéo */}
              <div className="mt-3 flex items-center justify-between gap-3 px-3 pb-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-orange-600 text-xs font-bold text-white">
                    G
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Gerlicia
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Fondatrice · 37 employés
                    </div>
                  </div>
                </div>
                <div className="hidden items-center gap-1.5 text-[11px] font-medium text-orange-300 sm:flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
                  Regarde maintenant
                </div>
              </div>
            </div>

            {/* Badge flottant : preuve sociale */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-orange-500/30 bg-[#0d1524] px-4 py-3 shadow-2xl shadow-black/50 sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15">
                <Play className="h-4 w-4 fill-orange-400 text-orange-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  +500 élèves formés
                </div>
                <div className="text-[10px] text-slate-400">
                  Note 5.0 ⭐ · +200 avis
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

