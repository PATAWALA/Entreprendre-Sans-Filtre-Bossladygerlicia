// src/data/offers.ts
export type OfferCategory =
  | "Formations"
  | "Accompagnement"
  | "Consultations"
  | "Documents & Livres";

export type OfferTag = "Débutant" | "Formation" | "High-Ticket" | "Ressource";

export interface Offer {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  priceLabel: string;
  category: OfferCategory;
  tags: OfferTag[];
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  mode?: "En ligne" | "Présentiel Ottawa" | "Mixte";
}

export const offers: Offer[] = [
  // ───────── FORMATIONS ─────────
  {
    id: "formation-cleaning-a-z",
    title: "Formation Cleaning de A à Z",
    subtitle: "En ligne — accès 45 jours",
    description:
      "Formation complète + 50+ documents professionnels + vidéo accessible pendant 45 jours.",
    price: 697,
    priceLabel: "CA$697",
    category: "Formations",
    tags: ["Formation"],
    highlights: [
      "50+ documents professionnels inclus",
      "Accès vidéo 45 jours",
      "Techniques cleaning résidentiel & commercial",
    ],
    ctaLabel: "Accéder à la formation",
    ctaHref: "#",
    mode: "En ligne",
    badge: "Best-seller",
  },
  {
    id: "formation-45j-accompagnement",
    title: "Formation + 45 Jours d'Accompagnement",
    subtitle: "Formation + Coaching hybride",
    description:
      "Apprends à lancer, structurer et développer ton entreprise de nettoyage, puis passe à l'action avec un suivi personnalisé.",
    price: 2000,
    priceLabel: "CA$2,000",
    category: "Formations",
    tags: ["Formation", "High-Ticket"],
    highlights: [
      "Formation complète incluse",
      "45 jours d'accompagnement personnalisé",
      "Documents & templates pros",
    ],
    ctaLabel: "Je m'inscris",
    ctaHref: "#",
    mode: "Mixte",
  },
  {
    id: "formation-intensive-3j",
    title: "Formation Intensive Business du Nettoyage",
    subtitle: "3 jours — Ottawa & International",
    description:
      "Théorie • Pratique • Accompagnement — immersion totale pour transformer ton business.",
    price: 3500,
    priceLabel: "CA$3,500",
    category: "Formations",
    tags: ["High-Ticket"],
    highlights: [
      "3 jours intensifs en présentiel",
      "Théorie + pratique + coaching",
      "Réseau d'entrepreneurs cleaning",
    ],
    ctaLabel: "Réserver ma place",
    ctaHref: "#",
    mode: "Présentiel Ottawa",
    badge: "Immersion",
  },

  // ───────── ACCOMPAGNEMENT ─────────
  {
    id: "accompagnement-45j",
    title: "Accompagnement Stratégique — 45 Jours",
    description:
      "Vous avez suivi une formation. Maintenant, il est temps de passer à l'action.",
    price: 1297,
    compareAtPrice: 1597,
    priceLabel: "CA$1,297",
    category: "Accompagnement",
    tags: ["High-Ticket"],
    highlights: [
      "6 sessions privées avec Gerlicia",
      "Plan d'action sur-mesure",
      "Audit complet positionnement & offres",
      "Groupe privé + accès WhatsApp direct",
      "Accès à vie à la Business Academy",
    ],
    ctaLabel: "Réserver mon accompagnement",
    ctaHref: "#",
    featured: true,
    badge: "Programme Signature",
    mode: "En ligne",
  },

  // ───────── CONSULTATIONS ─────────
  {
    id: "consultation-croissance",
    title: "Consultation Stratégique Entreprise",
    subtitle: "Pour entreprises de nettoyage déjà lancées",
    description:
      "Ton entreprise est lancée, mais tu te sens bloquée dans ta croissance ? Débloquons ensemble.",
    price: 397,
    compareAtPrice: 497,
    priceLabel: "CA$397",
    category: "Consultations",
    tags: ["Formation", "High-Ticket"],
    highlights: [
      "Audit de ton business actuel",
      "Stratégie de croissance sur 90 jours",
      "Plan d'action écrit livré",
    ],
    ctaLabel: "Réserver ma consultation",
    ctaHref: "#",
    mode: "En ligne",
  },
  {
    id: "appel-coaching-60",
    title: "Appel coaching privé — 60 minutes",
    subtitle: "Séance personnalisée",
    description:
      "Une heure en visio pour débloquer un point précis de ton business.",
    price: 127,
    compareAtPrice: 149.99,
    priceLabel: "CA$127",
    category: "Consultations",
    tags: ["Formation"],
    highlights: [
      "60 minutes en visio privée",
      "Plan d'action écrit après l'appel",
      "Enregistrement fourni",
    ],
    ctaLabel: "Réserver mon appel",
    ctaHref: "#",
    mode: "En ligne",
  },
  {
    id: "appel-decouverte-10",
    title: "Parlez avec moi — 10 minutes",
    subtitle: "Appel découverte gratuit",
    description:
      "Tu ne sais pas quelle offre choisir ? Parlons-en rapidement.",
    price: 9.99,
    priceLabel: "CA$9.99",
    category: "Consultations",
    tags: ["Débutant"],
    highlights: [
      "10 minutes pour clarifier ton besoin",
      "Orientation vers la bonne offre",
      "Sans engagement",
    ],
    ctaLabel: "Réserver",
    ctaHref: "#",
    mode: "En ligne",
  },

  // ───────── DOCUMENTS & LIVRES ─────────
  {
    id: "pack-documents",
    title: "Pack 50+ Documents & Livre PDF — Cleaning",
    description:
      "Les outils professionnels uniquement, sans la vidéo de formation.",
    price: 137,
    compareAtPrice: 197,
    priceLabel: "CA$137",
    category: "Documents & Livres",
    tags: ["Ressource", "Débutant"],
    highlights: [
      "50+ documents pros prêts à l'emploi",
      "Livre PDF complet inclus",
      "Contrats, devis, factures, scripts",
    ],
    ctaLabel: "Obtenir mes documents",
    ctaHref: "#",
    mode: "En ligne",
    badge: "Économise CA$60",
  },
  {
    id: "livre-business-cleaning",
    title: "Le Livre Complet du Business de Nettoyage",
    description:
      "Comment lancer, structurer et faire grandir ton entreprise de nettoyage.",
    price: 67,
    compareAtPrice: 97,
    priceLabel: "CA$67",
    category: "Documents & Livres",
    tags: ["Ressource", "Débutant"],
    highlights: [
      "Guide complet pas à pas",
      "Stratégies testées terrain",
      "Lecture immédiate (PDF)",
    ],
    ctaLabel: "Obtenir le livre",
    ctaHref: "#",
    mode: "En ligne",
  },
  {
    id: "video-personnalisee",
    title: "Pose-moi 1 à 3 questions — Réponse vidéo personnalisée",
    description:
      "Pose tes 3 questions & reçois une vidéo personnalisée réalisée par Gerlicia.",
    price: 27,
    priceLabel: "CA$27",
    category: "Consultations",
    tags: ["Débutant"],
    highlights: [
      "Jusqu'à 3 questions",
      "Vidéo personnalisée (5-10 min)",
      "Réponse sous 72h",
    ],
    ctaLabel: "Recevoir ma vidéo",
    ctaHref: "#",
    mode: "En ligne",
  },
];