// src/components/sections/shop-product-card.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import type { ShopProduct } from "@/data/shop-products";

interface Props {
  product: ShopProduct;
  index: number;
}

export default function ShopProductCard({ product, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col"
    >
      {/* ═══════════════════════════════════════════
          IMAGE PRODUIT
          ═══════════════════════════════════════════ */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#111218]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
        />

        {/* Badge discret en haut à gauche */}
        {product.badge && (
          <div className="absolute left-4 top-4 rounded-full bg-[#08090d]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400 backdrop-blur">
            {product.badge}
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════
          INFOS PRODUIT
          ═══════════════════════════════════════════ */}
      <div className="mt-6 flex flex-1 flex-col">
        {/* Catégorie */}
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-600">
          {product.category}
        </span>

        {/* Nom */}
        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-white">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-sm text-amber-400">{product.tagline}</p>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {product.description}
        </p>

        {/* Highlights */}
        <ul className="mt-5 space-y-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-xs text-zinc-500">
              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Prix + CTA */}
        <div className="mt-6 flex items-baseline justify-between border-t border-white/8 pt-5">
          <div>
            <div className="text-xl font-bold tracking-tight text-white">
              {product.priceLabel}
            </div>
            {product.compareAtPrice && (
              <div className="mt-0.5 text-xs text-zinc-600 line-through">
                CA${product.compareAtPrice.toLocaleString("fr-CA")}
              </div>
            )}
          </div>

          <a
            href={product.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            Commander
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}