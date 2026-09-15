// src/components/sections/about.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08090d] py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* ═══════════════════════════════════════════
            GRID 2 COLONNES — CÔTE À CÔTE FORCÉ
            ═══════════════════════════════════════════ */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1fr)",
            gap: "clamp(1rem, 3vw, 5rem)",
          }}
        >
          {/* ══════════════════════════════════
              COLONNE GAUCHE — PHOTO
              ══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111218] sm:rounded-2xl">
              <Image
                src="/gerlicia.jpg"
                alt="Gerlicia — Fondatrice d'Entreprendre Sans Filtre"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 480px"
                priority
              />

              {/* Overlay subtil bas */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#08090d]/70 to-transparent" />
            </div>
          </motion.div>

          {/* ══════════════════════════════════
              COLONNE DROITE — TEXTE
              ══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Eyebrow */}
            <span className="eyebrow text-[10px] sm:text-xs">À propos</span>

            {/* Titre */}
            <h2 className="mt-3 text-2xl font-bold leading-[1.1] tracking-tight text-white sm:mt-4 sm:text-3xl lg:text-5xl">
              De zéro à{" "}
              <span className="text-accent">37 employés</span>.
            </h2>

            {/* Paragraphes */}
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-400 sm:mt-8 sm:space-y-5 sm:text-base lg:text-lg">
              <p>
                Je m'appelle{" "}
                <span className="font-medium text-white">Gerlicia</span>. En
                2016, j'ai lancé mon entreprise de nettoyage avec une voiture,
                un aspirateur, et beaucoup de détermination.
              </p>

              <p className="hidden sm:block">
                Aujourd'hui, je dirige{" "}
                <span className="font-medium text-white">
                  37 employés répartis entre Ottawa, Toronto et Edmonton
                </span>
                . J'ai fait toutes les erreurs possibles — et j'en ai tiré une
                méthode que je transmets aujourd'hui à plus de 500 élèves.
              </p>

              <p className="hidden md:block">
                Ma mission avec Entreprendre Sans Filtre est simple : t'éviter
                de perdre 3 ans à apprendre ce que tu peux maîtriser en 45
                jours.
              </p>

              {/* Version mobile condensée */}
              <p className="sm:hidden">
                Aujourd'hui, je dirige{" "}
                <span className="font-medium text-white">
                  37 employés à Ottawa, Toronto et Edmonton
                </span>
                .
              </p>
            </div>

            {/* Signature */}
            <div className="mt-6 flex items-center gap-3 sm:mt-10 sm:gap-4">
              <div className="h-px w-8 bg-linear-to-r from-amber-400/60 to-transparent sm:w-12" />
              <span className="text-xs italic text-zinc-500 sm:text-sm">
                Gerlicia — Fondatrice
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-10">
              <a
                href="#recommender"
                className="btn-primary group text-sm sm:text-base"
              >
                Trouver mon offre
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}