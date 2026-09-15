// src/components/sections/secondary-store.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";

export default function SecondaryStore() {
  return (
    <section className="bg-[#0b0f17] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative block overflow-hidden rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/[0.08] via-purple-500/[0.05] to-transparent p-8 backdrop-blur-xl transition-all hover:border-pink-400/40 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/10 blur-[80px]" />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-pink-500/15">
                <Heart className="h-6 w-6 text-pink-300" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-300">
                  Boutique secondaire
                </span>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Soins & Post-Partum
                </h3>
                <p className="mt-2 max-w-lg text-sm text-slate-300">
                  Découvre ma gamme de soins naturels pensés pour les mamans et
                  la récupération post-partum.
                </p>
              </div>
            </div>

            <div className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-5 py-3 text-sm font-semibold text-pink-200 transition-all group-hover:bg-pink-400 group-hover:text-[#0b0f17]">
              Visiter la boutique
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}