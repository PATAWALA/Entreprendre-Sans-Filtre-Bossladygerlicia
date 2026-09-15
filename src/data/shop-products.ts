// src/data/shop-products.ts
export interface ShopProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  priceLabel: string;
  image: string;
  category: string;
  badge?: string;
  highlights: string[];
  ctaHref: string;
}

/* ═══════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════ */
const WHATSAPP_NUMBER = "16132867071";

function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ═══════════════════════════════════════════════
   3 PRODUITS — Images Unsplash directes
   ═══════════════════════════════════════════════ */
export const shopProducts: ShopProduct[] = [
  {
    id: "huile-post-partum",
    name: "Huile de Guérison Post-Partum",
    tagline: "Soin corps & rituel de récupération",
    description:
      "Une huile naturelle créée pour apaiser le corps après l'accouchement. Formule douce à base d'huiles essentielles et végétales, pensées pour les femmes qui se reconnectent à elles-mêmes.",
    price: 45,
    priceLabel: "CA$45",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&auto=format&fit=crop",
    category: "Post-partum",
    badge: "Best-seller",
    highlights: [
      "Formule 100% naturelle",
      "Apaisante & nourrissante",
      "Flacon 100ml",
    ],
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je suis intéressé(e) par l'Huile de Guérison Post-Partum (CA$45). Peux-tu m'en dire plus ?"
    ),
  },
  {
    id: "kit-rituel-feminin",
    name: "Kit Rituel Féminin",
    tagline: "Le coffret complet pour se reconnecter",
    description:
      "Un coffret pensé pour créer ton propre rituel de bien-être : bougie parfumée, pierre naturelle, sels de bain et carte de méditation. Le cadeau parfait pour une femme qui se réinvente.",
    price: 89,
    compareAtPrice: 120,
    priceLabel: "CA$89",
    image:
      "https://images.unsplash.com/photo-1602874801007-aa29a9e0e7c2?w=900&q=85&auto=format&fit=crop",
    category: "Rituel & Bien-être",
    badge: "Édition limitée",
    highlights: [
      "Bougie naturelle 200g",
      "Sels de bain aux huiles essentielles",
      "Carte de méditation illustrée",
    ],
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je suis intéressé(e) par le Kit Rituel Féminin (CA$89). Peux-tu m'en dire plus ?"
    ),
  },
  {
    id: "soin-intime-naturel",
    name: "Soin Intime Naturel",
    tagline: "Fraîcheur, douceur, confiance",
    description:
      "Un soin intime doux et naturel, formulé sans parabènes ni sulfates. Conçu pour respecter l'équilibre du corps féminin et apporter confort et confiance au quotidien.",
    price: 35,
    priceLabel: "CA$35",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=85&auto=format&fit=crop",
    category: "Soins intimes",
    highlights: [
      "pH équilibré",
      "Sans parabènes ni sulfates",
      "Testé dermatologiquement",
    ],
    ctaHref: whatsappLink(
      "Bonjour Gerlicia 👋 Je suis intéressé(e) par le Soin Intime Naturel (CA$35). Peux-tu m'en dire plus ?"
    ),
  },
];