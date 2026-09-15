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
      <Hero />
      <Recommender />
      <FeaturedOffer />
      <Catalog />
      <SecondaryStore />
      <Footer />
    </main>
  );
}