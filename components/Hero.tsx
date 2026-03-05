"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

// SSR error se bachne ke liye 3D component ko dynamically load kar rahe hain
const PuppetCanvas = dynamic(() => import('./Hero3D/Puppet'), { ssr: false });

const BANNERS = [
  {
    subtitle: "One-stop.ecom.solutions",
    lines: [
      "One team to build &",
      "run your e-commerce",
      "operations across",
      "Amazon • Shopify •",
      "TikTok Shop • Walmart."
    ]
  },
  {
    subtitle: "Walmart.launch.offer",
    lines: [
      "Launch your Walmart",
      "store with our",
      "proven playbook—",
      "target your first $4k",
      "fast with expert support."
    ]
  },
  {
    subtitle: "Consultation.ready",
    lines: [
      "Book a call with a",
      "senior consultant to",
      "get a roadmap, costs,",
      "and timelines—then we",
      "execute end-to-end."
    ]
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // EXACT TEXT REVEAL ANIMATION (Line by Line)
  useEffect(() => {
    const lines = document.querySelectorAll('.animate-line');
    const subtitle = document.querySelector('.animate-subtitle');

    // Naya Text aane ki animation
    gsap.fromTo(subtitle, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(lines, 
      { y: '100%', rotate: 2 }, 
      { y: '0%', rotate: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" }
    );

    // 6 second baad Text change hone ki animation
    const interval = setInterval(() => {
      gsap.to(lines, {
        y: '-100%', 
        duration: 0.6, 
        stagger: 0.05, 
        ease: "power3.in",
        onComplete: () => {
          setActiveSlide((prev) => (prev + 1) % BANNERS.length);
        }
      });
      gsap.to(subtitle, { opacity: 0, duration: 0.5 });
    }, 6000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="w-screen h-dvh relative overflow-hidden bg-[#020205] gpu-smooth">
      {/* 1. Background now handled purely by 3D particle shark/puppet */}

      {/* 2. THREE.JS CANVAS (Massive Swinging Image) */}
      {/* Absolute center, overflowing, exact structure as Loris site */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full h-full z-2 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <PuppetCanvas />
          </Suspense>
        </Canvas>
      </div>

      {/* 3. BOTTOM GRADIENT (To make text readable) */}
      <div className="absolute w-full h-[50vh] bottom-0 left-0 bg-linear-to-b from-transparent to-[#020205] z-3" />

      {/* 4. EXACT UI TEXT OVERLAY (Bottom Left) */}
      <div className="z-5! absolute bottom-6 md:bottom-12 lg:bottom-20 left-[20px] md:left-[50px] flex flex-col gap-[16px] w-[calc(100%-40px)] lg:w-[520px] pointer-events-none">
        
        <p className="animate-subtitle text-xs sm:text-sm text-teal-400 font-mono uppercase tracking-[0.3em] font-semibold opacity-0">
          {BANNERS[activeSlide].subtitle}
        </p>

        <div
          className="text-[20px] md:text-[32px] lg:text-[40px] text-gray-100 font-bold leading-[1.1] tracking-tight uppercase"
          style={{ fontFamily: "'Trebuchet MS','Arial Black',system-ui,sans-serif" }}
        >
          {BANNERS[activeSlide].lines.map((line, index) => (
            <div key={index} className="overflow-hidden" style={{ paddingBottom: '4px' }}>
              <div 
                className="animate-line origin-left block text-left" 
                style={{ transform: 'translateY(100%)' }} // Hidden initially for GSAP
              >
                {line}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}