// src/components/sections/faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Je débute totalement, est-ce que c'est pour moi ?",
    a: "Absolument. J'ai créé des offres spécialement pour les débutantes — que tu partes de zéro ou que tu aies déjà un petit business. Le livre et l'ebook sont les points de départ idéaux.",
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Ça dépend de ton point de départ. Mes élèves en accompagnement 45 jours voient généralement leurs premiers clients qualifiés en 3-4 semaines. Ceux qui suivent juste la formation prennent un peu plus de temps.",
  },
  {
    q: "L'accompagnement, c'est vraiment avec toi ?",
    a: "Oui, à 100%. Je ne délègue pas mes accompagnements. Chaque session est menée personnellement par moi — c'est pour ça que je limite les places à 10 par cycle.",
  },
  {
    q: "Y a-t-il un paiement en plusieurs fois ?",
    a: "Oui, pour tous les programmes à partir de CA$397. Tu peux régler en 2, 3 ou 4 versements sans frais. Les détails sont envoyés après ta candidature.",
  },
  {
    q: "Est-ce que ça marche au Canada comme en Europe ?",
    a: "Totalement. Les stratégies fonctionnent partout où le cleaning est un service recherché. J'ai des élèves au Canada, en France, en Belgique et en Afrique francophone.",
  },
  {
    q: "Comment je choisis la bonne offre ?",
    a: "Utilise le recommandateur stratégique juste au-dessus — 3 questions, 30 secondes, et je te dis exactement par où commencer selon ton budget et ton objectif.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0b0f17] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Tout ce que tu veux
            <br className="hidden sm:block" />
            <span className="text-gradient-gold"> savoir avant de te lancer.</span>
          </h2>
        </div>

        {/* Liste */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? "border-amber-400/30 bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-amber-400 text-[#0b0f17]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-300">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}