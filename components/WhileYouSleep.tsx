"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    time: "7:00 AM",
    you: "Wake up, check your phone ☕",
    desc: "Overnight sales summary is already in your inbox.",
    shark: "Fulfilled orders on Amazon & Walmart, updated Shopify inventory, ran TikTok Shop promos. Your cut is on the way.",
    active: false,
  },
  {
    time: "12:00 PM",
    you: "Lunch, no e‑commerce work 🍽️",
    desc: "We run the stores. You just live your day.",
    shark: "PPC bids adjusted across marketplaces, new listings went live, customer tickets handled. Zero input needed from you.",
    active: true,
  },
  {
    time: "6:00 PM",
    you: "Dinner, relax, TV 📺",
    desc: "No listing edits, no ad checks—we do that.",
    shark: "Amazon & Walmart campaigns optimized, monthly performance report drafted. First 30 days? We're gunning for that $4K+ with you.",
    active: false,
  },
  {
    time: "11:59 PM",
    you: "Asleep 💤",
    desc: "Stores stay open. We keep working.",
    shark: "Revenue earned while you slept. Amazon, Shopify, TikTok Shop, Walmart—all running. Your dedicated consultant has the numbers ready for you tomorrow.",
    active: true,
  },
];

const autoStats = [
  {
    icon: "📦",
    num: "24/7",
    label: "Your stores run on Amazon, Shopify, TikTok Shop & Walmart—every hour, done-for-you.",
  },
  {
    icon: "🤖",
    num: "100%",
    label: "Setup, operations, PPC, listings, fulfillment. Zero daily tasks for you.",
  },
  {
    icon: "📊",
    num: "Monthly",
    label: "Clear income reports + payouts. First 30 days we focus on real movement.",
  },
  {
    icon: "📱",
    num: "1 Call",
    label: "Dedicated consultant per account. Book a strategy call when you're ready.",
  },
];

export default function WhileYouSleep() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleHighlightRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const trigger = sectionRef.current;

      if (labelRef.current) {
        gsap.fromTo(labelRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger, start: "top 78%" } });
      }
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.85, delay: 0.08, ease: "power3.out", scrollTrigger: { trigger, start: "top 78%" } });
      }
      if (titleHighlightRef.current) {
        gsap.fromTo(titleHighlightRef.current, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger, start: "top 78%" } });
      }
      if (subRef.current) {
        gsap.fromTo(subRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.25, ease: "power3.out", scrollTrigger: { trigger, start: "top 78%" } });
      }

      // Left timeline: upar se neeche float (advanced)
      timelineItemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: -80, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            delay: 0.25 + i * 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: timelineRef.current!, start: "top 88%" },
          }
        );
      });

      statRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.75, delay: 0.2 + i * 0.1, ease: "power3.out", scrollTrigger: { trigger: rightRef.current!, start: "top 82%" } });
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] bg-teal-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start">
        {/* Left — timeline */}
        <div ref={leftRef}>
          <div
            ref={labelRef}
            className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-teal-400 uppercase mb-5"
          >
            <span className="w-6 h-px bg-teal-400/70" /> 24 hours, zero logins
          </div>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.05] text-white mb-6"
          >
            You Live the Day.{" "}
            <span ref={titleHighlightRef} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
              We Run the Work.
            </span>
          </h2>
          <p
            ref={subRef}
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-amber-400/90 uppercase mb-10 flex items-center gap-2"
          >
            <span className="w-5 h-px bg-amber-400/60" />
            You do nothing. We do everything.
          </p>

          <div ref={timelineRef} className="flex flex-col">
            {timeline.map((item, i) => (
              <div
                key={i}
                ref={(el) => { timelineItemRefs.current[i] = el; }}
                className="flex gap-3 sm:gap-5 pb-6 sm:pb-8 last:pb-0 ml-2 pl-4 sm:pl-6 relative"
                style={{
                  borderLeft: `2px solid ${item.active ? "rgba(20, 184, 166, 0.6)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                <span
                  className="absolute left-0 top-7 -translate-x-[5px] w-3 h-3 rounded-full border-2 flex-shrink-0 z-10"
                  style={{
                    background: item.active ? "#14b8a6" : "rgba(24,24,27,0.9)",
                    borderColor: item.active ? "#14b8a6" : "rgba(255,255,255,0.12)",
                    boxShadow: item.active ? "0 0 12px rgba(20,184,166,0.5)" : "none",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[11px] text-zinc-500 block mb-1">{item.time}</span>
                  <strong className="text-[14px] sm:text-[15px] text-white block mb-1">You — {item.you}</strong>
                  <span className="text-[13px] text-zinc-400 block mb-3">{item.desc}</span>
                  <div className="rounded-xl px-4 py-3 text-[12px] sm:text-[13px] text-teal-300/95 bg-teal-500/10 border border-teal-400/20">
                    🦈 Retail Automation: {item.shark}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — auto stats */}
        <div ref={rightRef} className="flex flex-col gap-3 sm:gap-4">
          {autoStats.map((s, i) => (
            <div
              key={i}
              ref={(el) => { statRefs.current[i] = el; }}
              className="while-sleep-stat group flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-[0_0_40px_-8px_rgba(20,184,166,0.15)]"
            >
              <span className="text-3xl sm:text-4xl flex-shrink-0" aria-hidden>{s.icon}</span>
              <div className="min-w-0">
                <div className="font-mono text-2xl sm:text-3xl lg:text-[34px] font-bold text-teal-400 leading-none tracking-tight">
                  {s.num}
                </div>
                <div className="text-[13px] sm:text-[14px] text-zinc-400 font-light mt-1.5 leading-relaxed">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
