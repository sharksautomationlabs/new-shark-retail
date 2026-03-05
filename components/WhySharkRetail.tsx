"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Custom Minimalist SVGs ---
const TrackRecordIcon = () => <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
const SolutionsIcon = () => <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;
const CommunicationIcon = () => <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>;
const ScalableIcon = () => <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1 1.5m0 0l.5 1.5m.5-1.5l.5 1.5m0 0l1.5-2.25m1.5 2.25l1.5-2.25m0 0l1.5 2.25m-16.5 5.25h16.5" /></svg>;

const pointsData = [
  { num: "01", title: "More Than Management", desc: "We don’t just “manage” accounts—we build the strategy, execute daily ops, and optimize for real outcomes: revenue, margins, and stability.", icon: <TrackRecordIcon /> },
  { num: "02", title: "One-Stop Marketplace Team", desc: "Amazon, Shopify, TikTok Shop, or Walmart—our specialists cover setup, listing, creatives, ads, operations, and growth under one roof.", icon: <SolutionsIcon /> },
  { num: "03", title: "Clear Communication & Support", desc: "Fast updates, clear next steps, and performance visibility—so you always know what’s happening and why it’s happening.", icon: <CommunicationIcon /> },
  { num: "04", title: "Built To Scale", desc: "Repeatable systems, SOPs, and optimization loops designed to scale your store without chaos—so growth stays sustainable.", icon: <ScalableIcon /> },
];

export default function WhySharkRetail() {
  const containerRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animation for the left sticky text
    if (leftContentRef.current) {
      gsap.fromTo(leftContentRef.current.children, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", 
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" } 
        }
      );
    }

    // GSAP logic to scale down the cards that are "behind"
    const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
    
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Skip the last card
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 100px", // When the card hits the sticky top position
        endTrigger: cards[index + 1], // Until the next card arrives
        end: "top 120px", 
        scrub: true,
        animation: gsap.to(card, {
          scale: 0.92 - (0.02 * (cards.length - index)), // Scale down slightly
          opacity: 0.4, // Darken slightly
          filter: "blur(2px)", // Slight blur for depth perception
          ease: "none"
        })
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#020205] text-white py-24 px-4 sm:px-6 lg:px-12 font-sans selection:bg-teal-500/30">
      
      {/* Subtle Premium Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* LEFT SIDE: Sticky Header Section */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32" ref={leftContentRef}>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_teal]" />
            Why Us
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tighter leading-[1.1] mb-6">
            Results-First <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-white">
              E-commerce Ops.
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
            If you want a team that executes end-to-end—strategy, build, launch, and scale—this is where it starts.
          </p>

          {/* Premium "Scroll to Explore" indicator */}
          <div className="mt-16 hidden lg:flex items-center gap-4 text-slate-500 text-sm font-mono uppercase tracking-widest">
            <div className="w-8 h-[1px] bg-slate-700" />
            Scroll to explore
          </div>
        </div>

        {/* RIGHT SIDE: Stacking Cards Container */}
        <div className="w-full lg:w-7/12 relative pb-32">
          {pointsData.map((point, index) => {
            
            // Calculate dynamic sticky top position. 
            // Gives the stacked effect (e.g. 100px, 120px, 140px)
            const stickyTop = 100 + (index * 20); 

            return (
              <div 
                key={index}
                className="stack-card w-full mb-8 lg:mb-40 sticky"
                style={{ top: `${stickyTop}px`, zIndex: index }} // Critical for stacking
              >
                {/* The Premium Card Design */}
                <div className="relative w-full rounded-[32px] overflow-hidden transform-gpu transition-all duration-300">
                  
                  {/* Background Glass - Absolute perfection */}
                  <div className="absolute inset-0 bg-[#0a0a0e]/90 backdrop-blur-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                  <div className="absolute inset-0 border border-white/[0.05] rounded-[32px]" />
                  {/* Elite Top Bevel Highlight */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />

                  <div className="relative p-8 md:p-12 lg:p-14 z-10 flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Left: Icon & Number */}
                    <div className="flex-shrink-0 flex flex-col gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-teal-500/[0.05] border border-teal-500/10 flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(20,184,166,0.2)]">
                        {point.icon}
                      </div>
                      <div className="text-4xl font-light text-slate-700 font-mono tracking-tighter">
                        {point.num}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 mt-2">
                      <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                        {point.title}
                      </h3>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                        {point.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}