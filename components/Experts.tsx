"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experts = [
  {
    avatar: "🎯",
    name: "Amazon FBA & PPC",
    role: "FBA · PPC · Listings",
    stat: "7+ years average Amazon experience per specialist",
  },
  {
    avatar: "🛍️",
    name: "Shopify Growth & Retention",
    role: "DTC · Email · Paid",
    stat: "3.2× ROAS average across managed Shopify stores",
  },
  {
    avatar: "🎵",
    name: "TikTok Shop & Content",
    role: "Shops · Live · Affiliates",
    stat: "89% growth average in first 90 days on TikTok Shop",
  },
  {
    avatar: "🏪",
    name: "Walmart Marketplace Ops",
    role: "WFS · Listings · Merch",
    stat: "Access to $500B+ in Walmart annual customer traffic",
  },
];

export default function Experts() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleHighlightRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const expertRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      if (labelRef.current) {
        gsap.fromTo(labelRef.current, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger, start: "top 78%" } });
      }
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.85, delay: 0.08, ease: "power3.out", scrollTrigger: { trigger, start: "top 78%" } });
      }
      if (titleHighlightRef.current) {
        gsap.fromTo(titleHighlightRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger, start: "top 78%" } });
      }
      if (descRef.current) {
        gsap.fromTo(descRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.25, ease: "power3.out", scrollTrigger: { trigger, start: "top 78%" } });
      }

      expertRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.75, delay: 0.3 + i * 0.1, ease: "power3.out", scrollTrigger: { trigger: rightRef.current!, start: "top 85%" } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#020205] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 xl:gap-24 items-center">
        {/* Left */}
        <div ref={leftRef}>
          <div
            ref={labelRef}
            className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-teal-400 uppercase mb-5"
          >
            <span className="w-6 h-px bg-teal-400/70" /> Specialist pods
          </div>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.05] text-white mb-5"
          >
            People Who’ve{" "}
            <span ref={titleHighlightRef} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
              Already Won These Markets.
            </span>
          </h2>
          <p
            ref={descRef}
            className="text-[15px] sm:text-[16px] text-zinc-400 leading-relaxed max-w-[440px]"
          >
            Every investor gets a dedicated account manager backed by specialists in Amazon PPC, Shopify growth, TikTok commerce, and Walmart logistics. You&apos;re not getting a junior freelancer—you&apos;re getting a proven team.
          </p>
        </div>

        {/* Right — expert cards */}
        <div ref={rightRef} className="flex flex-col gap-3">
          {experts.map((e, i) => (
            <div
              key={i}
              ref={(el) => { expertRefs.current[i] = el; }}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/40 hover:shadow-[0_0_30px_-8px_rgba(20,184,166,0.12)]"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 bg-teal-500/10 border border-teal-400/20">
                {e.avatar}
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-lg font-bold tracking-tight text-white mb-0.5">{e.name}</div>
                <div className="font-mono text-[10px] tracking-[0.15em] text-teal-400 uppercase mb-1.5">{e.role}</div>
                <div className="text-[12px] sm:text-[13px] text-zinc-400">{e.stat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
