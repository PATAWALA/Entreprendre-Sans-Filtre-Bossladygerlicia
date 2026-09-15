// src/components/interactive/recommender.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Wallet,
  GraduationCap,
  ArrowRight,
  RotateCcw,
  Check,
} from "lucide-react";
import { offers, type Offer } from "@/data/offers";

type Goal = "demarrer" | "structurer" | "scaler";
type Budget = "petit" | "moyen" | "eleve";
type Level = "debutant" | "intermediaire" | "avance";

interface Answers {
  goal?: Goal;
  budget?: Budget;
  level?: Level;
}

const QUESTIONS = [
  {
    id: "goal" as const,
    icon: Target,
    title: "Quel est ton objectif principal ?",
    options: [
      { value: "demarrer", label: "Démarrer mon business cleaning" },
      { value: "structurer", label: "Structurer & professionnaliser" },
      { value: "scaler", label: "Scaler à 6 chiffres" },
    ],
  },
  {
    id: "budget" as const,
    icon: Wallet,
    title: "Quel budget peux-tu investir ?",
    options: [
      { value: "petit", label: "Moins de 50 $" },
      { value: "moyen", label: "Entre 100 $ et 400 $" },
      { value: "eleve", label: "Plus de 1 000 $" },
    ],
  },
  {
    id: "level" as const,
    icon: GraduationCap,
    title: "Ton niveau actuel ?",
    options: [
      { value: "debutant", label: "Débutant total" },
      { value: "intermediaire", label: "J'ai déjà des clients" },
      { value: "avance", label: "J'ai une équipe" },
    ],
  },
];

function getRecommendation(a: Answers): Offer {
  // High-ticket en priorité si budget élevé + objectif scaling
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

export default function Recommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const current = QUESTIONS[step];

  const handleSelect = (value: string) => {
    const next = { ...answers, [current.id]: value } as Answers;
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setDone(true), 200);
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
      className="relative overflow-hidden bg-[#0b0f17] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Recommandateur stratégique
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Quelle offre est faite pour toi ?
          </h2>
          <p className="mt-3 text-slate-400">
            3 questions. 30 secondes. Une réponse sur-mesure.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                {/* Barre de progression */}
                <div className="mb-8 flex items-center gap-2">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all ${
                        i <= step ? "bg-amber-400" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-amber-400/10 p-2.5">
                    <current.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {current.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-left text-white transition-all hover:border-amber-400/50 hover:bg-amber-400/5"
                    >
                      <span className="font-medium">{opt.label}</span>
                      <ArrowRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-amber-400" />
                    </button>
                  ))}
                </div>

                <p className="mt-6 text-center text-xs text-slate-500">
                  Question {step + 1} sur {QUESTIONS.length}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  <Check className="h-3.5 w-3.5" />
                  Offre recommandée
                </div>

                {recommendation && (
                  <>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {recommendation.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-xl text-slate-300">
                      {recommendation.description}
                    </p>

                    <div className="mx-auto mt-6 max-w-md rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent p-6">
                      <div className="text-3xl font-bold text-amber-400">
                        {recommendation.priceLabel}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                        {recommendation.category}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <a
                        href={recommendation.ctaHref}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 text-sm font-semibold text-[#0b0f17] shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.03]"
                      >
                        {recommendation.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Refaire le test
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}