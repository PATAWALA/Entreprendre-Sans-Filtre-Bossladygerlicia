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
  level: 1 | 2 | 3 | 4 | 5;
}

/* ═══════════════════════════════════════════════
   HELPER — Lien WhatsApp pré-rempli
   ═══════════════════════════════════════════════ */
const WHATSAPP_NUMBER = "16132867071";

function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ═══════════════════════════════════════════════
   OFFRES — 13 offres complètes
   ═══════════════════════════════════════════════ */
export const offers: Offer[] = [
  /* ═══════════════════════════════════════════
     LEVEL 1 — ENTRÉE (moins de 50$)
     ═══════════════════════════════════════════ */
  {
    id: "ebook-demarrer",
    title: "Ebook — Démarrer son business cleaning",
    description:
      "Le guide essentiel pour lancer ton entreprise de cleaning en 30 jours, sans diplôme et sans gros budget.",
    price: 9.99,
    priceLabel: "CA$9.99",
    category: "Documents & Livres",
    tags: ["Débutant", "Ressource"],
    highlights: [
      "Plan d'action 30 jours",
      "Templates de devis & factures",
      "Checklist matériel de départ",
    ],
    ctaLabel: "Obtenir l'ebook",
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite obtenir l'Ebook Démarrer son business cleaning (CA$9.99)."
    ),
    mode: "En ligne",
    level: 1,
  },
  {
    id: "appel-decouverte-10",
    title: "Parlez avec moi — 10 minutes",
    subtitle: "Appel découverte",
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite réserver un appel découverte de 10 minutes (CA$9.99)."
    ),
    mode: "En ligne",
    level: 1,
  },
  {
    id: "kit-templates",
    title: "Kit Templates Pro Cleaning",
    description:
      "Pack complet de documents professionnels prêts à l'emploi pour structurer ton activité.",
    price: 29,
    priceLabel: "CA$29",
    category: "Documents & Livres",
    tags: ["Débutant", "Ressource"],
    highlights: [
      "Contrats clients & employés",
      "Grilles tarifaires modulables",
      "Scripts de prospection",
    ],
    ctaLabel: "Télécharger le kit",
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite obtenir le Kit Templates Pro Cleaning (CA$29)."
    ),
    mode: "En ligne",
    level: 1,
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite recevoir une réponse vidéo personnalisée (CA$27). Voici mes questions :"
    ),
    mode: "En ligne",
    level: 1,
  },

  /* ═══════════════════════════════════════════
     LEVEL 2 — STRUCTURATION (50$ à 200$)
     ═══════════════════════════════════════════ */
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite obtenir Le Livre Complet du Business de Nettoyage (CA$67)."
    ),
    mode: "En ligne",
    level: 2,
    badge: "Best-seller",
  },
  {
    id: "consultation-60",
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite réserver un Appel coaching privé de 60 minutes (CA$127)."
    ),
    mode: "En ligne",
    level: 2,
  },
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite obtenir le Pack 50+ Documents & Livre PDF Cleaning (CA$137)."
    ),
    mode: "En ligne",
    level: 2,
    badge: "Économise CA$60",
  },

  /* ═══════════════════════════════════════════
     LEVEL 3 — FORMATIONS (200$ à 900$)
     ═══════════════════════════════════════════ */
  {
    id: "consultation-croissance",
    title: "Consultation Stratégique Entreprise",
    subtitle: "Pour entreprises déjà lancées",
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite réserver une Consultation Stratégique Entreprise (CA$397)."
    ),
    mode: "En ligne",
    level: 3,
  },
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je suis intéressé(e) par la Formation Cleaning de A à Z (CA$697)."
    ),
    mode: "En ligne",
    level: 3,
    badge: "Best-seller",
  },

  /* ═══════════════════════════════════════════
     LEVEL 4 — ACCOMPAGNEMENT (1000$ à 2500$)
     ═══════════════════════════════════════════ */
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite réserver l'Accompagnement Stratégique 45 Jours (CA$1,297). Peux-tu m'envoyer les prochaines étapes ?"
    ),
    featured: true,
    badge: "Programme Signature",
    mode: "En ligne",
    level: 4,
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je suis intéressé(e) par la Formation + 45 Jours d'Accompagnement (CA$2,000)."
    ),
    mode: "Mixte",
    level: 4,
  },

  /* ═══════════════════════════════════════════
     LEVEL 5 — VIP / IMMERSION (3000$+)
     ═══════════════════════════════════════════ */
  {
    id: "accompagnement-vip",
    title: "Accompagnement VIP 6 Mois",
    description:
      "Immersion totale : je deviens ta directrice stratégique pendant 6 mois pour faire décoller ton entreprise.",
    price: 3500,
    priceLabel: "CA$3,500",
    category: "Accompagnement",
    tags: ["High-Ticket"],
    highlights: [
      "12 sessions privées + accès illimité",
      "Construction de ton équipe (jusqu'à 10 personnes)",
      "Dashboard KPI personnalisé",
      "Ligne directe 6j/7",
    ],
    ctaLabel: "Candidater au VIP",
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je souhaite candidater à l'Accompagnement VIP 6 Mois (CA$3,500). Peux-tu m'expliquer la procédure ?"
    ),
    mode: "En ligne",
    level: 5,
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
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je suis intéressé(e) par la Formation Intensive Business du Nettoyage (CA$3,500)."
    ),
    mode: "Présentiel Ottawa",
    badge: "Immersion",
    level: 5,
  },
];