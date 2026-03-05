"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Icons (Same professional ones you provided) ---
const StrategyIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1 1.5m0 0l.5 1.5m.5-1.5l.5 1.5m0 0l1.5-2.25m1.5 2.25l1.5-2.25m0 0l1.5 2.25m-16.5 5.25h16.5" /></svg>
);
const DevelopmentIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
);
const MarketingIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
);
const ScalingIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 12l3-3 3 3 5-5" /></svg>
);

const stepsData = [
  {
    number: "01",
    stage: "Discovery",
    title: "Strategy Call & Marketplace Fit",
    description: "We start with a senior-consultant call to understand your goals, budget, and risk tolerance—then pick the right marketplace path (Amazon, Shopify, TikTok Shop, Walmart).",
    icon: <StrategyIcon />,
  },
  {
    number: "02",
    stage: "Build",
    title: "Store Setup, Branding & Operations",
    description: "We build the foundation: store/account setup, product strategy, listings/creative, SOPs, and the operational stack required to run smoothly.",
    icon: <DevelopmentIcon />,
  },
  {
    number: "03",
    stage: "Launch",
    title: "Traffic, Ads & Conversion Optimization",
    description: "We launch with performance marketing, testing and optimizing to improve conversion, profitability, and consistency—without guessing.",
    icon: <MarketingIcon />,
  },
  {
    number: "04",
    stage: "Scale",
    title: "Systems, Fulfillment & Growth Loops",
    description: "Once the unit economics are proven, we scale with repeatable systems: inventory/fulfillment, customer support, reporting, and continuous optimization.",
    icon: <ScalingIcon />,
  },
];

// --- Magnetic Spotlight Card Component ---
const SpotlightCard = ({ step, index }: { step: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Mouse Spotlight Effect Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set CSS variables for the spotlight pseudo-element
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className={`step-card w-full lg:w-[45%] flex ${isEven ? 'lg:justify-end lg:pr-12' : 'lg:justify-start lg:ml-auto lg:pl-12'} opacity-0 translate-y-16`}
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative w-full rounded-[24px] bg-[#0a0a0c] border border-white/5 p-8 overflow-hidden group hover:border-teal-500/30 transition-colors duration-500"
      >
        {/* CSS Spotlight Hover Effect (Premium Glassmorphism) */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(20, 184, 166, 0.15), transparent 40%)',
            zIndex: 1
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                {step.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">
                {step.stage}
              </span>
            </div>
            <span className="text-5xl font-black text-white/5 tracking-tighter select-none">
              {step.number}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
          <p className="text-slate-400 text-base leading-relaxed font-light">{step.description}</p>
        </div>
      </div>

      {/* Connection Node (Dot connecting card to center line) */}
      <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-[-20px]' : 'left-[-20px]'} w-10 h-10 items-center justify-center`}>
        <div className="node-dot w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-slate-700 transition-all duration-500 z-20" />
      </div>
    </div>
  );
};

// --- Main Component ---
export default function InvestmentLifecycle() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.step-card');
    const nodes = gsap.utils.toArray<HTMLElement>('.node-dot');

    // 1. Center Line Fill Animation on Scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        // Grow the teal line
        gsap.to(lineRef.current, { height: `${self.progress * 100}%`, duration: 0.1, ease: "none" });
      }
    });

    // 2. Reveal Cards & Light up Nodes as they enter viewport
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%", // Trigger when card is 70% down the screen
        onEnter: () => {
          // Card slides up and fades in
          gsap.to(card, { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out" 
          });
          // Corresponding node lights up with neon teal
          if (nodes[i]) {
            gsap.to(nodes[i], {
              backgroundColor: "#14b8a6",
              borderColor: "#2dd4bf",
              boxShadow: "0 0 20px rgba(45,212,191,0.6)",
              scale: 1.2,
              duration: 0.5
            });
          }
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#020205] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans gpu-smooth">
      
      {/* Background Ambient Orbs (Classical Elite Vibe) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-50">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[150px]" />
        {/* Subtle noise texture overlay for premium matte finish */}
        <div className="absolute inset-0 opacity-20 brightness-100 contrast-150 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Elite Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-teal-300 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_teal]" />
            How We Work
          </div>
          <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">Launch</span><br/> Roadmap
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            A simple 4-step process that takes you from consultation to a live store—and then to scalable, system-driven growth.
          </p>
        </div>

        {/* The Vertical Winding Timeline */}
        <div className="relative w-full pb-20">
          
          {/* Central Track Line (Background) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          
          {/* Central Energy Fill Line (Animated by GSAP) */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-teal-300 via-cyan-400 to-teal-500 -translate-x-1/2 shadow-[0_0_15px_rgba(45,212,191,0.5)] z-10 rounded-full"
            style={{ height: '0%' }}
          />

          {/* Cards Container */}
          <div className="flex flex-col gap-12 lg:gap-24 relative z-20">
            {stepsData.map((step, index) => (
              <SpotlightCard key={index} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}