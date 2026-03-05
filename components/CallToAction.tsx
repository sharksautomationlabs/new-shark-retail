"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !marqueeRef.current) return;

    // 1. Extreme Parallax for the Background Grid
    gsap.to(gridRef.current, {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // 2. Content Float in from Bottom with Skew
    gsap.fromTo(contentRef.current.children,
      { y: 100, opacity: 0, skewY: 5 },
      {
        y: 0, opacity: 1, skewY: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );

    // 3. Background Marquee Scroll (Fills empty space)
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#030712] py-20 lg:py-32 overflow-hidden font-sans border-y border-teal-500/20 shadow-[0_0_100px_rgba(20,184,166,0.1)] gpu-smooth"
    >
      {/* =======================================================
          BACKGROUND: 3D MOVING CYBER GRID (NO EMPTY BLACK SPACE)
      ======================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none perspective-[1000px]">
        {/* The Animated Grid */}
        <div 
          ref={gridRef}
          className="absolute w-[200vw] h-[200vh] bg-transparent origin-bottom"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(20,184,166,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(20,184,166,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotateX(60deg) translateY(-20%) translateZ(-300px)',
            animation: 'gridMove 10s linear infinite'
          }}
        />
        {/* Glows to give depth to the grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-teal-500/20 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 60px; }
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
      `}</style>

      {/* =======================================================
          BACKGROUND MARQUEE (FILLS NEGATIVE SPACE)
      ======================================================= */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200vw] pointer-events-none z-0 opacity-40 select-none">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <h1 className="text-[12vw] font-black uppercase tracking-tighter text-stroke leading-none">
            GET STARTED • BOOK A CALL • GET STARTED • BOOK A CALL • GET STARTED •
          </h1>
        </div>
      </div>

      {/* =======================================================
          FOREGROUND: HIGH-TECH HUD CONTENT
      ======================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        <div ref={contentRef} className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8">
          
          {/* LEFT SIDE: Typography & Tech Badges */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Blinking Tech Badge */}
            <div className="inline-flex items-center gap-3 rounded-none border border-teal-500/40 bg-[#030712]/80 backdrop-blur-md px-4 py-2 text-xs font-mono uppercase tracking-[0.3em] text-teal-400 mb-8 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System Protocol: Active
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wide leading-tight text-white mb-6" style={{ fontFamily: "Impact, sans-serif" }}>
              Ready to Launch a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-white">
                Profitable E-commerce Store?
              </span>
            </h2>

            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 border-l-2 border-teal-500/50 pl-6 bg-gradient-to-r from-teal-500/10 to-transparent py-2">
              Book a free strategy call with a senior consultant. We’ll map the right marketplace (Amazon, Shopify, TikTok Shop, Walmart), outline a launch plan, and show you how we execute end-to-end.
            </p>

            {/* High-Tech Data Points (Fills space nicely) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 font-mono text-xs tracking-widest text-teal-400/80 uppercase">
              <span className="flex items-center gap-2"><Activity size={16} /> Data Driven</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} /> Risk Mitigated</span>
              <span className="flex items-center gap-2"><Zap size={16} /> Automated</span>
            </div>
          </div>

          {/* RIGHT SIDE: Cyberpunk Control Panel CTA */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            
            <div className="relative p-[2px] rounded-none group w-full max-w-md">
              {/* Animated Glowing Border using conic-gradient */}
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#030712_0%,#14b8a6_50%,#030712_100%)] animate-[spin_3s_linear_infinite]" />
              
              <div className="relative bg-[#050b14] h-full w-full p-8 md:p-10 flex flex-col items-center text-center shadow-[inset_0_0_40px_rgba(20,184,166,0.1)]">
                
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-teal-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-6 border border-teal-500/30">
                  <div className="w-8 h-8 bg-teal-400 rounded-full animate-pulse shadow-[0_0_20px_teal]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Initiate Call</h3>
                <p className="text-slate-400 text-sm mb-8 font-light">Speak with a senior consultant today.</p>

                {/* The Ultimate Cyber Button */}
                <a 
                  href="/contact"
                  className="relative w-full inline-flex items-center justify-between bg-teal-500 hover:bg-white text-black px-6 py-4 transition-all duration-500 group/btn overflow-hidden"
                >
                  {/* Glitch/Sweep Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                  
                  <span className="relative z-10 font-bold uppercase tracking-widest text-sm md:text-base">
                    Claim Your Free Consultation
                  </span>
                  
                  <div className="relative z-10 w-8 h-8 bg-black/20 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-colors duration-500">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-500" />
                  </div>
                </a>

                <div className="mt-6 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  End-to-end encryption active.
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}