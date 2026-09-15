// src/data/offers.ts
export type OfferCategory =
  | "Livres & Outils"
  | "Formations"
  | "Accompagnement"
  | "Consultations";

export type OfferTag = "Débutant" | "Formation" | "High-Ticket";

export interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel: string;
  category: OfferCategory;
  tags: OfferTag[];
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export const offers: Offer[] = [
  // ————— LIVRES & OUTILS —————
  {
    id: "ebook-demarrer",
    title: "Ebook — Démarrer son business cleaning",
    description:
      "Le guide essentiel pour lancer ton entreprise de cleaning en 30 jours, sans diplôme et sans gros budget.",
    price: 9.99,
    priceLabel: "9,99 $",
    category: "Livres & Outils",
    tags: ["Débutant"],
    highlights: [
      "Plan d'action 30 jours",
      "Templates de devis & factures",
      "Checklist matériel de départ",
    ],
    ctaLabel: "Obtenir l'ebook",
    ctaHref: "#",
  },
  {
    id: "kit-templates",
    title: "Kit Templates Pro Cleaning",
    description:
      "Pack complet de documents professionnels prêts à l'emploi pour structurer ton activité.",
    price: 29,
    priceLabel: "29 $",
    category: "Livres & Outils",
    tags: ["Débutant", "Formation"],
    highlights: [
      "Contrats clients & employés",
      "Grilles tarifaires modulables",
      "Scripts de prospection",
    ],
    ctaLabel: "Télécharger le kit",
    ctaHref: "#",
  },

  // ————— FORMATIONS —————
  {
    id: "formation-cleaning-pro",
    title: "Formation Cleaning Pro",
    description:
      "La méthode complète pour maîtriser les techniques pros du nettoyage résidentiel et commercial.",
    price: 197,
    priceLabel: "197 $",
    category: "Formations",
    tags: ["Formation"],
    highlights: [
      "12 modules vidéo",
      "Techniques produits & matériel",
      "Certification interne",
    ],
    ctaLabel: "Rejoindre la formation",
    ctaHref: "#",
  },
  {
    id: "formation-business-cleaning",
    title: "Business Cleaning Academy",
    description:
      "Transforme ton savoir-faire en entreprise rentable : acquisition, équipe, process et scaling.",
    price: 397,
    priceLabel: "397 $",
    category: "Formations",
    tags: ["Formation", "High-Ticket"],
    highlights: [
      "Stratégie d'acquisition TikTok",
      "Recrutement & management d'équipe",
      "Process internes clés en main",
    ],
    ctaLabel: "Découvrir la formation",
    ctaHref: "#",
    badge: "Populaire",
  },

  // ————— ACCOMPAGNEMENT HIGH-TICKET —————
  {
    id: "accompagnement-45j",
    title: "Accompagnement Stratégique 45 Jours",
    description:
      "Un accompagnement intensif et personnalisé pour structurer, lancer et scaler ton business cleaning.",
    price: 1297,
    priceLabel: "1 297 $",
    category: "Accompagnement",
    tags: ["High-Ticket"],
    highlights: [
      "6 sessions privées avec Bossladygerlicia",
      "Plan d'action business sur-mesure",
      "Accès à vie à la Business Cleaning Academy",
      "Groupe privé WhatsApp",
      "Audit de ton positionnement & offres",
    ],
    ctaLabel: "Réserver ma place (10 restantes)",
    ctaHref: "#",
    featured: true,
    badge: "Programme Signature",
  },
  {
    id: "accompagnement-vip",
    title: "Accompagnement VIP 6 Mois",
    description:
      "Immersion totale : je deviens ta directrice stratégique pendant 6 mois pour faire décoller ton entreprise.",
    price: 3500,
    priceLabel: "3 500 $",
    category: "Accompagnement",
    tags: ["High-Ticket"],
    highlights: [
      "12 sessions privées + accès illimité",
      "Construction de ton équipe (jusqu'à 10 personnes)",
      "Dashboard KPI personnalisé",
      "Ligne directe 6j/7",
    ],
    ctaLabel: "Candidater au VIP",
    ctaHref: "#",
  },

  // ————— CONSULTATIONS —————
  {
    id: "consultation-60",
    title: "Consultation Stratégique (60 min)",
    description:
      "Un appel privé d'une heure pour débloquer un point précis de ton business.",
    price: 149,
    priceLabel: "149 $",
    category: "Consultations",
    tags: ["Formation", "High-Ticket"],
    highlights: [
      "60 minutes en visio",
      "Plan d'action écrit livré après l'appel",
      "Enregistrement de la session",
    ],
    ctaLabel: "Réserver ma consultation",
    ctaHref: "#",
  },
];