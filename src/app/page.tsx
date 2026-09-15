// src/app/page.tsx
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import StatsBand from "@/components/sections/stats-band";
import YouTubeSection from "@/components/sections/youtube-section";
import Recommender from "@/components/interactive/recommender";
import FeaturedOffer from "@/components/sections/featured-offer";
import Catalog from "@/components/sections/catalog";
import Testimonials from "@/components/sections/testimonials";
import SecondaryStore from "@/components/sections/secondary-store";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0b0f17] antialiased">
        <Hero />
        <StatsBand />
        <YouTubeSection />
        <Recommender />
        <FeaturedOffer />
        <Catalog />
        <Testimonials />
        <SecondaryStore />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}