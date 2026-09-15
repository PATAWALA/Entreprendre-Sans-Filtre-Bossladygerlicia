// src/components/interactive/recommender.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { offers, type Offer } from "@/data/offers";

/* ═══════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════ */
type Goal = "demarrer" | "structurer" | "scaler";
type Budget = "petit" | "moyen" | "eleve";
type Level = "debutant" | "intermediaire" | "avance";

interface Answers {
  goal?: Goal;
  budget?: Budget;
  level?: Level;
}

/* ═══════════════════════════════════════════════
   QUESTIONS
   ═══════════════════════════════════════════════ */
const QUESTIONS = [
  {
    id: "goal" as const,
    label: "Objectif",
    title: "Quel est ton objectif principal ?",
    options: [
      { value: "demarrer", label: "Démarrer mon business cleaning" },
      { value: "structurer", label: "Structurer & professionnaliser" },
      { value: "scaler", label: "Scaler à 6 chiffres" },
    ],
  },
  {
    id: "budget" as const,
    label: "Budget",
    title: "Quel budget peux-tu investir ?",
    options: [
      { value: "petit", label: "Moins de 50 $" },
      { value: "moyen", label: "Entre 100 $ et 400 $" },
      { value: "eleve", label: "Plus de 1 000 $" },
    ],
  },
  {
    id: "level" as const,
    label: "Niveau",
    title: "Ton niveau actuel ?",
    options: [
      { value: "debutant", label: "Débutant total" },
      { value: "intermediaire", label: "J'ai déjà des clients" },
      { value: "avance", label: "J'ai une équipe" },
    ],
  },
];

/* ═══════════════════════════════════════════════
   LOGIQUE DE RECOMMANDATION
   ═══════════════════════════════════════════════ */
function getRecommendation(a: Answers): Offer {
  if (a.budget === "eleve" && a.goal === "scaler") {
    return offers.find((o) => o.id === "accompagnement-vip")!;
  }
  if (a.budget === "eleve") {
    return offers.find((o) => o.id === "accompagnement-45j")!;
  }
  if (a.budget === "moyen" && a.goal === "structurer") {
    return offers.find((o) => o.id === "formation-business-cleaning")!;
  }
  if (a.budget === "moyen" && a.goal === "scaler") {
    return offers.find((o) => o.id === "consultation-60")!;
  }
  if (a.budget === "moyen") {
    return offers.find((o) => o.id === "formation-cleaning-pro")!;
  }
  if (a.goal === "demarrer") {
    return offers.find((o) => o.id === "ebook-demarrer")!;
  }
  return offers.find((o) => o.id === "kit-templates")!;
}

/* ═══════════════════════════════════════════════
   COMPOSANT
   ═══════════════════════════════════════════════ */
export default function Recommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const current = QUESTIONS[step];

  const handleSelect = (value: string) => {
    const next = { ...answers, [current.id]: value } as Answers;
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 180);
    } else {
      setTimeout(() => setDone(true), 180);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const recommendation = done ? getRecommendation(answers) : null;

  return (
    <section
      id="recommender"
      className="relative overflow-hidden py-24 sm:py-32"
    >
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
          <span className="eyebrow">Recommandateur</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quelle offre est faite
            <br className="hidden sm:block" />
            <span className="text-accent"> pour toi ?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-zinc-500">
            3 questions. 30 secondes. Une réponse précise.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            ZONE INTERACTIVE
            ═══════════════════════════════════════════ */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Progression minimaliste */}
                <div className="mb-12 flex items-center justify-center gap-2">
                  {QUESTIONS.map((q, i) => (
                    <div
                      key={q.id}
                      className={`h-px transition-all duration-500 ${
                        i <= step
                          ? "w-16 bg-linear-to-r from-amber-400/80 to-amber-500/40"
                          : "w-8 bg-white/8"
                      }`}
                    />
                  ))}
                </div>

                {/* Label de l'étape */}
                <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {current.label} — {step + 1}/{QUESTIONS.length}
                </p>

                {/* Question */}
                <h3 className="mb-10 text-center text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                  {current.title}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {current.options.map((opt, i) => (
                    <motion.button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group flex w-full items-center justify-between rounded-full border border-white/8 bg-white/[0.015] px-6 py-5 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <span className="text-base font-medium text-white sm:text-lg">
                        {opt.label}
                      </span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-amber-400" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Eyebrow */}
                <span className="eyebrow">Ton offre recommandée</span>

                {/* Titre offre */}
                <h3 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  {recommendation?.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
                  {recommendation?.description}
                </p>

                {/* Prix */}
                <div className="mt-8">
                  <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {recommendation?.priceLabel}
                  </div>
                  {recommendation?.compareAtPrice && (
                    <div className="mt-1 text-sm text-zinc-600 line-through">
                      CA$
                      {recommendation.compareAtPrice.toLocaleString("fr-CA")}
                    </div>
                  )}
                </div>

                {/* CTA principal */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={recommendation?.ctaHref}
                    className="btn-primary group"
                  >
                    {recommendation?.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Refaire le test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}