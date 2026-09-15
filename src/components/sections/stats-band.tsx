// src/components/sections/stats-band.tsx
"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

/* ═══════════════════════════════════════════════
   STATS — Preuve chiffrée immédiate
   ═══════════════════════════════════════════════ */
const STATS = [
  { icon: Briefcase, value: "37", label: "Employés sous management" },
  { icon: GraduationCap, value: "500+", label: "Élèves formés" },
  { icon: Users, value: "23K+", label: "Communauté TikTok" },
  { icon: TrendingUp, value: "6 ans", label: "D'expertise terrain" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-linear-to-r from-[#0a0e1a] via-[#0d1524] to-[#0a0e1a] py-12">
      {/* Ligne dégradée en haut */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left"
            >
              <div className="mb-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 transition-all group-hover:scale-110 sm:mb-0">
                <s.icon className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-white sm:text-2xl">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ligne dégradée en bas */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent" />
    </section>
  );
}