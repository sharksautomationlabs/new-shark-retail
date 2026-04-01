"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: "🔒",
    title: "Capital-First Strategy",
    desc: "We never gamble your capital. Every decision across Amazon, Shopify, TikTok Shop and Walmart starts with protecting what you put in. First 30 days we focus on real movement—or we keep working until you see it.",
  },
  {
    icon: "📊",
    title: "Full Transparency Reports",
    desc: "Monthly income statements, real numbers, no hidden fees. You see exactly where every dollar went—ads, fulfillment, payouts—and what it returned.",
  },
  {
    icon: "🌐",
    title: "Multi-Platform Diversification",
    desc: "Your stores run on 4 platforms. If one dips, others carry the weight. Done-for-you ops on each—no call-center sales, operators first.",
  },
  {
    icon: "🏢",
    title: "US-Registered Company",
    desc: "The Shark Retail is a US-registered company. Fully registered and verifiable, with a real team you can work with directly.",
  },
];

const promises = [
  "Signed partnership agreement before any capital moves",
  "Dashboard access from day one — full visibility on your stores",
  "Dedicated consultant per account — real human, one call away",
  "Strategy call before you invest — we map the right marketplace for you",
  "Clear exit terms — your money isn't locked forever",
  "Registered in Texas, USA — verifiable credentials",
];

export default function Safety() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleHighlightRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const promiseRef = useRef<HTMLDivElement>(null);

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

      pillarRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.75, delay: 0.3 + i * 0.1, ease: "power3.out", scrollTrigger: { trigger: leftRef.current!, start: "top 85%" } });
      });

      if (promiseRef.current) {
        gsap.fromTo(promiseRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: rightRef.current!, start: "top 85%" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#020205] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-y border-white/[0.06]"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-teal-900/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 xl:gap-24 items-start">
        {/* Left — pillars (scrolls) */}
        <div ref={leftRef}>
          <div
            ref={labelRef}
            className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-teal-400 uppercase mb-5"
          >
            <span className="w-6 h-px bg-teal-400/70" /> Capital Protection
          </div>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.05] text-white mb-10"
          >
            Your Money{" "}
            <span ref={titleHighlightRef} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
              Is Safe Here.
            </span>
          </h2>
          <div className="flex flex-col gap-3">
            {pillars.map((p, i) => (
              <div
                key={i}
                ref={(el) => { pillarRefs.current[i] = el; }}
                className="safety-pillar flex gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:shadow-[0_0_30px_-8px_rgba(20,184,166,0.12)]"
              >
                <span className="text-2xl shrink-0 mt-0.5" aria-hidden>{p.icon}</span>
                <div className="min-w-0">
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-white mb-1.5">{p.title}</h4>
                  <p className="text-[13px] sm:text-[14px] text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — promise box: sticky in this section only, scroll pe neeche aata hai */}
        <div ref={rightRef} className="lg:sticky lg:top-24 self-start">
          <div
            ref={promiseRef}
            className="relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-8 bg-teal-500/5 border border-teal-400/20"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
            <div className="text-3xl sm:text-4xl mb-4" aria-hidden>🛡️</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-400 tracking-tight mb-3 sm:mb-4">
              Our Promise to You
            </h3>
            <p className="text-[14px] sm:text-[15px] text-zinc-400 leading-relaxed mb-6">
              We've helped 500+ investors—retirees, homemakers, busy professionals—earn consistent income. We run their Amazon, Shopify, TikTok Shop and Walmart stores so they don't have to. Capital protected, reports clear, no daily grind.
            </p>
            <div className="flex flex-col gap-3">
              {promises.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-zinc-300">
                  <span className="text-teal-400 font-bold shrink-0 mt-px">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
