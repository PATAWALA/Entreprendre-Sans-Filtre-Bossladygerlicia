// src/components/sections/social-links.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

/* ═══════════════════════════════════════════════
   RÉSEAUX — Ordre : YouTube · TikTok · Instagram · Facebook
   ═══════════════════════════════════════════════ */
const SOCIALS = [
  {
    icon: FaYoutube,
    name: "YouTube",
    handle: "@entreprendresansfiltre0",
    description:
      "Stratégies long format, coulisses et vérités sur l'entrepreneuriat cleaning.",
    href: "https://www.youtube.com/@entreprendresansfiltre0",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    handle: "@entreprendresansfiltre0",
    description:
      "23K+ abonnés. Conseils rapides et contenu sans filtre au quotidien.",
    href: "https://tiktok.com/@entreprendresansfiltre0",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    handle: "@entreprendresansfiltre",
    description:
      "Reels, stories et coulisses de mon quotidien d'entrepreneure.",
    href: "https://www.instagram.com/entreprendresansfiltre",
  },
  {
    icon: FaFacebookF,
    name: "Facebook",
    handle: "Entreprendre Sans Filtre",
    description:
      "La communauté pour échanger avec d'autres entrepreneures cleaning.",
    href: "https://web.facebook.com/Entreprendresansfiltre/",
  },
];

/* ═══════════════════════════════════════════════
   COMPOSANT
   ═══════════════════════════════════════════════ */
export default function SocialLinks() {
  return (
    <section id="socials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="eyebrow">Rejoins la communauté</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Suis-moi
            <span className="text-accent"> partout.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-zinc-500">
            Chaque plateforme a sa vibe. Choisis la tienne.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            LISTE RÉSEAUX — Style éditorial
            ═══════════════════════════════════════════ */}
        <div className="divide-y divide-white/8">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center gap-5 py-7 sm:gap-6"
            >
              {/* Icône */}
              <s.icon className="h-5 w-5 flex-shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-amber-400" />

              {/* Bloc texte */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                    {s.name}
                  </h3>
                  <span className="truncate text-sm text-zinc-500">
                    {s.handle}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {s.description}
                </p>
              </div>

              {/* Flèche */}
              <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
            </motion.a>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            CONTACT DIRECT — WhatsApp + Boutique
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid gap-10 sm:grid-cols-2 sm:gap-6"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/16132867071?text=Bonjour%20Gerlicia%20%F0%9F%91%8B%20J'ai%20une%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4"
          >
            <FaWhatsapp className="mt-1 h-5 w-5 flex-shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-amber-400" />
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                Contact direct
              </p>
              <h4 className="mt-2 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-amber-50">
                WhatsApp
              </h4>
              <p className="mt-1 text-sm text-zinc-500">
                +1 (613) 286-7071
              </p>
            </div>
          </a>

          {/* Boutique secondaire */}
          <a
            href="https://bossladysecrets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4"
          >
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center text-zinc-500 transition-colors duration-300 group-hover:text-amber-400">
              ✿
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                Ma boutique sœur
              </p>
              <h4 className="mt-2 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-amber-50">
                Boss Lady Secrets
              </h4>
              <p className="mt-1 text-sm text-zinc-500">
                Soins intimes & post-partum
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}