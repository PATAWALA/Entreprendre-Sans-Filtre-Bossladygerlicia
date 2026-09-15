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
            GRID — Empilé mobile, côte à côte desktop
            ═══════════════════════════════════════════ */}
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.85fr,1fr] lg:gap-20">
          {/* ══════════════════════════════════
              COLONNE GAUCHE — PHOTO
              ══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111218] sm:rounded-2xl">
              <Image
                src="/gerlicia1.jpg"
                alt="Gerlicia — Fondatrice d'Entreprendre Sans Filtre"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 480px"
                priority
              />

              {/* Overlay subtil bas */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#08090d]/70 to-transparent" />
            </div>
          </motion.div>

          {/* ══════════════════════════════════
              COLONNE DROITE — TEXTE (aligné à gauche partout)
              ══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-left"
          >
            {/* Eyebrow */}
            <span className="eyebrow">À propos</span>

            {/* Titre */}
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              De zéro à{" "}
              <span className="text-accent">37 employés</span>.
            </h2>

            {/* Paragraphes */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400 sm:mt-8 sm:space-y-5 sm:text-lg">
              <p>
                Je m'appelle{" "}
                <span className="font-medium text-white">Gerlicia</span>. En
                2016, j'ai lancé mon entreprise de nettoyage avec une voiture,
                un aspirateur, et beaucoup de détermination.
              </p>

              <p>
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
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              <div className="h-px w-12 bg-linear-to-r from-amber-400/60 to-transparent" />
              <span className="text-sm italic text-zinc-500">
                Gerlicia — Fondatrice
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <a href="#recommender" className="btn-primary group">
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