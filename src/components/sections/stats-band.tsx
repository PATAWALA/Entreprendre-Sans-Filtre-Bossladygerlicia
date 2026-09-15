// src/components/sections/stats-band.tsx
"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, DollarSign } from "lucide-react";

const STATS = [
  { icon: Briefcase, value: "37", label: "Employés sous management" },
  { icon: GraduationCap, value: "500+", label: "Élèves formés" },
  { icon: Users, value: "23K+", label: "Communauté TikTok" },
  { icon: DollarSign, value: "CA$2M+", label: "Générés par mes élèves" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-linear-to-r from-[#0b0f17] via-[#0d1220] to-[#0b0f17] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-3"
            >
              <div className="mb-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/10 sm:mb-0">
                <s.icon className="h-5 w-5 text-amber-400" />
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
    </section>
  );
}