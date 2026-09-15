// src/app/boutique/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import ShopProductCard from "@/components/sections/shop-product-card";
import { shopProducts } from "@/data/shop-products";

export const metadata: Metadata = {
  title: "Boutique — Soins & Rituels Féminins",
  description:
    "Découvre la boutique de soins intimes, post-partum et rituels bien-être de Gerlicia. Produits naturels pour les femmes qui se reconnectent à elles-mêmes.",
};

export default function BoutiquePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 sm:pt-40">
        {/* ═══════════════════════════════════════════
            HERO BOUTIQUE
            ═══════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-6 pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">La boutique</span>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des soins pensés pour
              <br className="hidden sm:block" />
              <span className="text-accent"> les femmes qui se révèlent.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Une sélection de produits naturels pour t'accompagner à chaque
              étape — post-partum, rituels de bien-être, soins intimes.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            GRILLE PRODUITS
            ═══════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {shopProducts.map((product, i) => (
              <ShopProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            NOTE BAS DE PAGE
            ═══════════════════════════════════════════ */}
        <section className="mx-auto max-w-4xl px-6 pb-24 sm:pb-32">
          <div className="border-t border-white/8 pt-12 text-center">
            <p className="text-sm text-zinc-500">
              Une question sur un produit ?{" "}
              <a
                href="https://wa.me/16132867071?text=Bonjour%20Gerlicia%20%F0%9F%91%8B%20J'ai%20une%20question%20sur%20la%20boutique."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amber-400 transition-colors duration-200 hover:text-amber-300"
              >
                Écris-moi sur WhatsApp
              </a>
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-zinc-600">
              Livraison Canada · USA · Europe
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}