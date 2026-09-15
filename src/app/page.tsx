// src/app/page.tsx
import Hero from "@/components/sections/hero";
import Recommender from "@/components/interactive/recommender";
import FeaturedOffer from "@/components/sections/featured-offer";
import Catalog from "@/components/sections/catalog";
import SecondaryStore from "@/components/sections/secondary-store";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f17] antialiased">
      {/* 1. Capte l'attention immédiatement */}
      <Hero />

      {/* 2. Oriente le prospect en 30 secondes */}
      <Recommender />

      {/* 3. Focus sur l'offre signature high-ticket */}
      <FeaturedOffer />

      {/* 4. Restructure le catalogue en grille claire */}
      <Catalog />

      {/* 5. Redirige vers la boutique secondaire */}
      <SecondaryStore />

      {/* 6. Liens sociaux & contact */}
      <Footer />
    </main>
  );
}

