// src/components/interactive/recommender.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";
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
    title: "Quel budget peux-tu investir aujourd'hui ?",
    options: [
      { value: "petit", label: "Moins de 150 $" },
      { value: "moyen", label: "Entre 150 $ et 500 $" },
      { value: "eleve", label: "Plus de 500 $" },
    ],
  },
  {
    id: "level" as const,
    label: "Niveau",
    title: "Où en es-tu actuellement ?",
    options: [
      { value: "debutant", label: "Je débute totalement" },
      { value: "intermediaire", label: "J'ai déjà des clients" },
      { value: "avance", label: "J'ai déjà une équipe" },
    ],
  },
];

/* ═══════════════════════════════════════════════
   LOGIQUE DE RECOMMANDATION
   ═══════════════════════════════════════════════ */
function getBudgetLevels(budget: Budget): number[] {
  switch (budget) {
    case "petit":
      return [1, 2];
    case "moyen":
      return [2, 3, 4];
    case "eleve":
      return [3, 4, 5];
  }
}

function getGoalPreference(goal: Goal): string[] {
  switch (goal) {
    case "demarrer":
      return ["ebook-demarrer", "kit-templates", "livre-business-cleaning", "formation-cleaning-a-z"];
    case "structurer":
      return ["formation-cleaning-a-z", "consultation-croissance", "accompagnement-45j"];
    case "scaler":
      return ["accompagnement-45j", "accompagnement-vip", "formation-intensive-3j"];
  }
}

function getRecommendations(answers: Answers): {
  primary: Offer;
  next: Offer | null;
} {
  const { goal = "demarrer", budget = "petit" } = answers;

  const allowedLevels = getBudgetLevels(budget);
  const preferredIds = getGoalPreference(goal);

  // Filtrer les offres compatibles avec le budget
  const compatible = offers.filter((o) => allowedLevels.includes(o.level));

  // Priorité aux offres qui matchent l'objectif
  const sorted = compatible.sort((a, b) => {
    const aMatch = preferredIds.indexOf(a.id);
    const bMatch = preferredIds.indexOf(b.id);
    if (aMatch !== -1 && bMatch !== -1) return aMatch - bMatch;
    if (aMatch !== -1) return -1;
    if (bMatch !== -1) return 1;
    return a.price - b.price;
  });

  const primary = sorted[0] || offers[0];

  // Offre suivante = la moins chère au-dessus du niveau du primary
  const nextLevelOffers = offers
    .filter((o) => o.level > primary.level)
    .sort((a, b) => a.price - b.price);
  const next = nextLevelOffers[0] || null;

  return { primary, next };
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

  const result = done ? getRecommendations(answers) : null;

  return (
    <section id="recommender" className="relative py-24 sm:py-32">
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
            3 questions. 30 secondes. Un plan clair pour toi.
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
                {/* Progression */}
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

                <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {current.label} — {step + 1}/{QUESTIONS.length}
                </p>

                <h3 className="mb-10 text-center text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                  {current.title}
                </h3>

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
              >
                {/* ═══════════════════════════════════
                    RÉSULTAT — OFFRE PRINCIPALE
                    ═══════════════════════════════════ */}
                <div className="text-center">
                  <span className="eyebrow">Ton point de départ</span>

                  <h3 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    {result?.primary.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
                    {result?.primary.description}
                  </p>

                  <div className="mt-8">
                    <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {result?.primary.priceLabel}
                    </div>
                    {result?.primary.compareAtPrice && (
                      <div className="mt-1 text-sm text-zinc-600 line-through">
                        CA$
                        {result.primary.compareAtPrice.toLocaleString("fr-CA")}
                      </div>
                    )}
                  </div>

                  <div className="mt-10 flex justify-center">
                    <a
                      href={result?.primary.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group"
                    >
                      {result?.primary.ctaLabel}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* ═══════════════════════════════════
                    SÉPARATEUR
                    ═══════════════════════════════════ */}
                {result?.next && (
                  <div className="my-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/8" />
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Et ensuite
                    </span>
                    <div className="h-px flex-1 bg-white/8" />
                  </div>
                )}

                {/* ═══════════════════════════════════
                    OFFRE SUIVANTE
                    ═══════════════════════════════════ */}
                {result?.next && (
                  <motion.a
                    href={result.next.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group block text-center"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Quand tu seras prête
                    </p>
                    <h4 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {result.next.title}
                    </h4>
                    <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-500">
                      {result.next.description}
                    </p>
                    <div className="mt-5 text-2xl font-bold text-amber-400">
                      {result.next.priceLabel}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 transition-colors group-hover:text-amber-300">
                      Découvrir cette offre
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </motion.a>
                )}

                {/* ═══════════════════════════════════
                    BOUTON REFAIRE
                    ═══════════════════════════════════ */}
                <div className="mt-16 text-center">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-zinc-600 transition-colors hover:text-white"
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