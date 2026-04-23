"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pains = [
  {
    icon: "😴",
    who: "For Everyone",
    title: "I Want Real Passive Income",
    desc: "You want money flowing in every month without punching a clock, learning tech, or managing operations.",
    solution: "We run 100% of your store operations. You receive monthly income reports and payouts.",
  },
  {
    icon: "🤷",
    who: "For Busy People",
    title: "I Don’t Have Time to Learn This",
    desc: "No time to learn Amazon, Shopify, or TikTok Shop? No desire to manage inventory, ads or customer service?",
    solution: "Zero hours of your time required after onboarding. Completely hands-free model.",
  },
  {
    icon: "🤖",
    who: "For Tech-Averse",
    title: "I Need a Fully Handled Stack",
    desc: "You've heard of e-commerce but the technology, platforms, and tools feel overwhelming and complicated.",
    solution: "Our systems run 24/7 automation — inventory, ads, fulfillment, pricing. All handled.",
  },
  {
    icon: "🎓",
    who: "For Beginners",
    title: "I Want Senior Operators, Not Tutorials",
    desc: "You don't want to make mistakes that cost you money. You want seasoned professionals who've done this thousands of times.",
    solution: "Your dedicated manager has 5+ years of marketplace experience. One call away, always.",
  },
  {
    icon: "🛡️",
    who: "For Risk-Averse Investors",
    title: "I Can’t Afford a Guess",
    desc: "You've worked hard for your savings. The last thing you want is to put it somewhere and watch it disappear.",
    solution: "Capital-first strategy with risk controls, diversified platforms, and monthly transparency reports.",
  },
  {
    icon: "👨‍👩‍👧",
    who: "For Retirees & Homemakers",
    title: "I Need a Calm, Home-Based Income",
    desc: "Retired or managing a household? You need a legitimate income source that doesn't require showing up anywhere.",
    solution: "Hundreds of retirees and homemakers earn steady monthly income through Retail Automation — from home.",
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineLeftRef = useRef<HTMLSpanElement>(null);
  const lineRightRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleHighlightRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Header: lines scale from 0, label fade + y, title fade + y, highlight scale
      if (lineLeftRef.current && lineRightRef.current) {
        gsap.set([lineLeftRef.current, lineRightRef.current], { scaleX: 0, transformOrigin: "center" });
        gsap.to([lineLeftRef.current, lineRightRef.current], {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        });
      }
      if (labelRef.current) {
        gsap.fromTo(
          labelRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );
      }
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );
      }
      if (titleHighlightRef.current) {
        gsap.fromTo(
          titleHighlightRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, delay: 0.25, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );
      }

      // Cards: stagger with 3D-style reveal (opacity, y, rotationX subtle)
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, { opacity: 0, y: 48, rotationX: 8, transformPerspective: 1200 });
        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current!, start: "top 88%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#020205] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Ambient glow + noise */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-teal-900/10 rounded-full blur-[140px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-800/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header – elite: animated lines + gradient highlight */}
        <div className="text-center mb-10 sm:mb-16">
          <div
            ref={labelRef}
            className="inline-flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-teal-400 uppercase mb-6"
          >
            <span ref={lineLeftRef} className="inline-block w-10 h-px bg-teal-400/70 origin-center" />
            The Concerns We Hear Most
            <span ref={lineRightRef} className="inline-block w-10 h-px bg-teal-400/70 origin-center" />
          </div>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.05] text-white"
          >
            Every Objection.{" "}
            <span
              ref={titleHighlightRef}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300"
            >
              A Clear Plan.
            </span>
          </h2>
        </div>

        {/* Cards grid – numbered, glass, hover shine */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {pains.map((p, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="pain-point-card group relative rounded-[20px] overflow-hidden bg-zinc-900/70 border border-white/[0.06] backdrop-blur-xl p-4 sm:p-6 lg:p-8"
            >
              {/* Top bevel */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />

              {/* Number badge */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 font-mono text-[11px] font-medium tracking-wider text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="text-3xl sm:text-4xl mb-4" aria-hidden>
                {p.icon}
              </div>
              <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-teal-400 uppercase mb-4 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-400/15">
                <span className="w-1 h-1 rounded-full bg-teal-400 animate-pulse" />
                {p.who}
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-3 pr-6 sm:pr-8">
                {p.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-zinc-400 leading-relaxed mb-6">
                {p.desc}
              </p>
              <div className="pt-5 border-t border-white/[0.06]">
                <p className="text-[12px] sm:text-[13px] text-zinc-300 leading-relaxed">
                  <span className="text-teal-400 font-semibold">Our answer: </span>
                  {p.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
