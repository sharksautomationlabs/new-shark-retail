"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
// SSR'd so it lands in the initial HTML — on mobile this card is the LCP element,
// and shipping it client-only (ssr:false) pushed LCP past 7s on throttled phones.
import HeroPortfolioCard from "./HeroPortfolioCard";

// three.js + Canvas lazy-loaded in a single separate chunk (keeps main bundle ~150 KB lighter)
const Hero3DCanvas = dynamic(() => import("./Hero3D/Hero3DCanvas"), { ssr: false });
const HeroRoiCard = HeroPortfolioCard;

const HERO_DESCRIPTION =
  "Keep scrolling-your path to financial freedom is just ahead. By the time you've explored 25% of this page, you'll discover the hidden gem that could change your life.";

const HERO_SUBTEXT =
  "Curious how? Book a meeting with one of our senior consultants today.";

export default function Hero() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const startParticles = () => setShowParticles(true);

    // Defer heavy WebGL work until after initial render.
    if ("requestIdleCallback" in window) {
      const id = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback(startParticles, { timeout: 1200 });
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback: (idleId: number) => void }).cancelIdleCallback(id);
        }
      };
    }

    const timeoutId = window.setTimeout(startParticles, 900);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="hero-root relative w-full max-w-full overflow-hidden bg-[#020205]">
      {/* DESKTOP / TABLET HERO (with 3D + shark video) */}
      <div className="hidden md:block w-full max-w-full h-dvh relative overflow-hidden">
        {/* Particles + shark share one layer so mix-blend can read WebGL backdrop; transparent GL clear = same #020205 base */}
        <div className="absolute inset-0 z-0">
          {showParticles && <Hero3DCanvas />}
        </div>

        {/* 3. Bottom gradient for text readability */}
        <div className="absolute w-full h-[50vh] bottom-0 left-0 bg-linear-to-b from-transparent to-[#020205] z-3" />

        {/* 4. Banner overlay – no blur so media below can animate smooth */}
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
                  Earn <span className="text-emerald-200">$4,000</span> in{" "}
                  <span className="text-emerald-200">30 Days</span>
                </span>
                <span className="mt-2 block text-[26px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-extrabold tracking-[0.01em] text-white/95">
                  Or We&apos;ll Work for Free
                </span>
              </h1>

              <div className="relative mt-6 md:mt-7 max-w-[520px]">
                <div className="hero-desc-portal" aria-hidden="true" />
                <p className="relative text-[14px] md:text-[15px] text-white/85 leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
                  {HERO_DESCRIPTION}
                </p>
              </div>
              <p className="mt-5 text-[15px] md:text-[18px] font-semibold text-white/90 leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
                {HERO_SUBTEXT}
              </p>

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
      <div className="hero-mobile-wrapper block md:hidden relative w-full max-w-full overflow-hidden h-dvh pt-20 pb-10 px-4 sm:px-5">
        {/* Simple dark gradient background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#020205] via-[#020617] to-[#020205] pointer-events-none" />

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
                Earn <span className="text-emerald-200">$4,000</span> in{" "}
                <span className="text-emerald-200">30 Days</span>
              </span>
              <span className="mt-1.5 block text-[20px] sm:text-[24px] font-extrabold tracking-[0.01em] text-white/95">
                Or We&apos;ll Work for Free
              </span>
            </h1>

            <div className="relative mt-3 sm:mt-4 max-w-full">
              <div className="hero-desc-portal" aria-hidden="true" />
              <p className="relative text-[11px] sm:text-[13px] text-white/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                {HERO_DESCRIPTION}
              </p>
            </div>
            <p className="mt-3 text-[12px] sm:text-[14px] font-semibold text-white/90 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {HERO_SUBTEXT}
            </p>

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