"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("./Hero3D/HeroParticles"), { ssr: false });
const HeroPortfolioCard = dynamic(() => import("./HeroPortfolioCard"), { ssr: false });
// Alias so cached builds don’t break if they still reference HeroRoiCard
const HeroRoiCard = HeroPortfolioCard;

const HERO_DESCRIPTION =
  "If your Amazon, Shopify, TikTok Shop, or Walmart store isn't generating consistent sales, you're leaving serious revenue on the table. Our ecommerce growth specialists manage everything from store optimization and product scaling to performance tracking and revenue strategy, building a reliable system designed to help you reach $4,000+ in revenue within the first 30 days or our team continues working with you until you get there.";

export default function Hero() {
  return (
    <div className="hero-root relative w-full max-w-full overflow-hidden bg-[#020205] gpu-smooth">
      {/* DESKTOP / TABLET HERO (with 3D + GIF) */}
      <div className="hidden md:block w-full max-w-full h-dvh relative overflow-hidden">
        {/* 1. Background particles – desktop only for performance */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.75]}>
            <Suspense fallback={null}>
              <HeroParticles />
            </Suspense>
          </Canvas>
        </div>

        {/* 2. Shark GIF */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full h-full z-2 flex items-center justify-center pointer-events-none"
          style={{ contain: "layout paint", isolation: "isolate" }}
        >
          <img
            src="/gif/sharks.gif"
            alt=""
            role="presentation"
            fetchPriority="high"
            className="max-h-[110vh] w-auto max-w-full object-contain object-center select-none"
            style={{ transform: "translateZ(0)" }}
          />
        </div>

        {/* 3. Bottom gradient for text readability */}
        <div className="absolute w-full h-[50vh] bottom-0 left-0 bg-linear-to-b from-transparent to-[#020205] z-3" />

        {/* 4. Banner overlay – no blur so GIF below can animate smooth */}
        <div
          className="absolute inset-0 z-5 pointer-events-none bg-black/30"
          aria-hidden="true"
        />

        {/* 5. HERO TITLE + SEO DESCRIPTION + CTAs + CARD */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div
            className="absolute left-[32px] md:left-[48px] lg:left-[64px] xl:left-[80px]
                       bottom-[10%] lg:bottom-[12%]
                       max-w-[85vw] md:max-w-[520px] lg:max-w-[580px]"
            style={{
              fontFamily:
                "'Itcavantgardestd Bk','Playfair Display','Times New Roman','Georgia',serif",
            }}
          >
            <div className="relative hero-fade-continuous">
              <h1 className="text-left text-white/95 leading-[1.05] tracking-tight drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
                <span className="block text-[26px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-extrabold tracking-[0.01em]">
                  From Zero to{" "}
                  <span className="text-emerald-200">$4,000+</span> in 30 days
                </span>
                <span className="mt-2 block text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-semibold tracking-[0.12em] text-emerald-200">
                  Assured Ecommerce Growth
                </span>
              </h1>

              <div className="relative mt-6 md:mt-7 max-w-[520px]">
                <div className="hero-desc-portal" aria-hidden="true" />
                <p className="relative text-[14px] md:text-[15px] text-white/85 leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
                  {HERO_DESCRIPTION}
                </p>
              </div>

              <div className="mt-7 md:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link href="/contact" className="btn-hero-contact">
                  Contact Us
                </Link>
                <Link href="/about" className="btn-hero-readmore">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <HeroRoiCard />
        </div>
      </div>

      {/* MOBILE HERO – lightweight, fully responsive, no 3D Canvas */}
      <div className="hero-mobile-wrapper block md:hidden relative w-full max-w-full overflow-hidden pt-20 pb-12 px-4 sm:px-5">
        {/* Simple dark gradient background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#020205] via-[#020617] to-[#020205] pointer-events-none" />

        {/* Shark GIF – centered, smaller for mobile */}
        <div className="relative z-0 flex items-center justify-center w-full mb-6 mt-2">
          <img
            src="/gif/sharks.gif"
            alt=""
            role="presentation"
            fetchPriority="high"
            className="max-h-[260px] sm:max-h-[340px] w-full object-contain object-center select-none"
            style={{ transform: "translateZ(0)" }}
          />
        </div>

        {/* Text + CTAs */}
        <div
          className="relative z-10 max-w-full"
          style={{
            fontFamily:
              "'Itcavantgardestd Bk','Playfair Display','Times New Roman','Georgia',serif",
          }}
        >
          <div className="relative hero-fade-continuous">
            <h1 className="text-left text-white/95 leading-tight tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              <span className="block text-[20px] sm:text-[24px] font-extrabold tracking-[0.01em]">
                From Zero to{" "}
                <span className="text-emerald-200">$4,000+</span> in 30 days
              </span>
              <span className="mt-1.5 block text-[11px] sm:text-[14px] font-semibold tracking-[0.16em] text-emerald-200 uppercase">
                Assured Ecommerce Growth
              </span>
            </h1>

            <div className="relative mt-3 sm:mt-4 max-w-full">
              <div className="hero-desc-portal" aria-hidden="true" />
              <p className="relative text-[11px] sm:text-[13px] text-white/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                {HERO_DESCRIPTION}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:gap-3">
              <Link href="/contact" className="btn-hero-contact w-full justify-center text-[13px] sm:text-[15px]">
                Contact Us
              </Link>
              <Link
                href="/about"
                className="btn-hero-readmore w-full justify-center text-[13px] sm:text-[15px]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Portfolio card stacked below text for mobile */}
        <div className="relative z-10 mt-6">
          <HeroRoiCard />
        </div>
      </div>
    </div>
  );
}