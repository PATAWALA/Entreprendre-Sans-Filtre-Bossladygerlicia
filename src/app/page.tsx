// src/app/page.tsx
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Recommender from "@/components/interactive/recommender";
import FeaturedOffer from "@/components/sections/featured-offer";
import Catalog from "@/components/sections/catalog";
import Testimonials from "@/components/sections/testimonials";
import SocialLinks from "@/components/sections/social-links";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#08090d] antialiased">
        <Hero />
        <About />
        <Recommender />
        <FeaturedOffer />
        <Catalog />
        <Testimonials />
        <SocialLinks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}