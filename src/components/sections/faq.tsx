// src/components/sections/faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ═══════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════ */
const FAQS = [
  {
    q: "Je débute totalement, est-ce que c'est pour moi ?",
    a: "Absolument. J'ai créé des offres spécialement pour les débutantes — que tu partes de zéro ou que tu aies déjà un petit business. Le livre et le pack documents sont les points de départ idéaux.",
  },
  {
    q: "Combien de temps pour voir des résultats concrets ?",
    a: "Ça dépend de ton point de départ. Mes élèves en accompagnement 45 jours voient leurs premiers clients qualifiés en 3-4 semaines. Ceux qui suivent uniquement la formation prennent un peu plus de temps, mais la méthode reste la même.",
  },
  {
    q: "L'accompagnement, c'est vraiment avec toi ?",
    a: "Oui, à 100%. Je ne délègue aucun accompagnement. Chaque session est menée personnellement par moi — c'est pour ça que je limite les places à 10 par cycle.",
  },
  {
    q: "Y a-t-il un paiement en plusieurs fois ?",
    a: "Oui, pour tous les programmes à partir de CA$397. Tu peux régler en 2, 3 ou 4 versements sans frais. Les détails sont envoyés après ta commande.",
  },
  {
    q: "Est-ce que ça marche au Canada comme en Europe ?",
    a: "Totalement. Les stratégies fonctionnent partout où le nettoyage est un service recherché. J'ai des élèves au Canada, en France, en Belgique et en Afrique francophone.",
  },
  {
    q: "Comment je choisis la bonne offre pour moi ?",
    a: "Utilise le recommandateur stratégique juste en haut de la page — 3 questions, 30 secondes, et je te dis exactement par où commencer selon ton budget et ton objectif.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tout ce que tu veux
            <br className="hidden sm:block" />
            <span className="text-accent"> savoir avant de te lancer.</span>
          </h2>
        </motion.div>

        {/* ═══════════════════════════════════════════
            LISTE FAQ — Séparateurs subtils
            ═══════════════════════════════════════════ */}
        <div className="divide-y divide-white/8 border-y border-white/8">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-medium tracking-tight transition-colors duration-300 sm:text-lg ${
                      isOpen
                        ? "text-white"
                        : "text-zinc-200 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-zinc-500 transition-colors duration-300 group-hover:text-amber-400">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-base leading-relaxed text-zinc-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════
            NOTE BAS DE FAQ
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-500">
            Une autre question ?{" "}
            <a
              href="https://wa.me/16132867071?text=Bonjour%20Gerlicia%20%F0%9F%91%8B%20J'ai%20une%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              Écris-moi sur WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}