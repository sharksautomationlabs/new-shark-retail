"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { src: '/logos/amazon-logo.png', alt: 'Amazon' },
  { src: '/logos/shopify-logo.png', alt: 'Shopify' },
  { src: '/logos/tik tok-logo.png', alt: 'TikTok Shop' },
  { src: '/logos/Walmart-logo.png', alt: 'Walmart' },
  { src: '/logos/facebook-logo.svg', alt: 'Facebook' },
  { src: '/logos/instagram-logo.png', alt: 'Instagram' },
];

// Double the array to make the infinite loop seamless
const extendedLogos = [...logos, ...logos, ...logos];

// --- Magnetic 3D Glass Card Component ---
const MagneticLogo = ({ src, alt }: { src: string; alt: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // High-End Physics UI: 3D Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: "elastic.out(1, 0.3)", // Bouncy snap back
      duration: 1
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 w-[200px] sm:w-[250px] h-[100px] sm:h-[120px] mx-4 rounded-2xl flex items-center justify-center cursor-pointer group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Premium Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md transition-colors duration-500 group-hover:bg-teal-500/[0.05] group-hover:border-teal-500/30" />
      
      {/* 3D Floating Glow behind the logo on hover */}
      <div 
        className={`absolute inset-0 bg-teal-400/20 blur-[30px] rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translateZ(-20px)' }} // Push glow backwards
      />

      {/* The Logo */}
      <div 
        className="relative w-3/4 h-1/2"
        style={{ transform: 'translateZ(30px)' }} // Pull logo forwards for 3D depth
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-contain transition-all duration-500 ${
            isHovered
              ? 'invert opacity-100 scale-110 drop-shadow-[0_0_15px_rgba(45,212,191,0.7)]'
              : 'invert opacity-50'
          }`}
        />
      </div>
    </div>
  );
};


// --- Main Section ---
export default function FeaturedIn() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll Reveal Animation
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return;

    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 sm:py-32 bg-[#020205] overflow-hidden border-y border-white/5 gpu-smooth"
    >
      {/* Background Tech Aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Subtle grid pattern for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 mb-16 text-center">
        <div ref={headerRef} className="flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_teal]" />
            Platforms We Run On
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Amazon • Shopify • <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">TikTok Shop • Walmart & More</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-sm md:text-base tracking-wide">
            We build, launch, and scale stores on the world’s biggest marketplaces—so you get one team across every platform that matters.
          </p>
        </div>
      </div>

      {/* 
        INFINITE MARQUEE SCROLLERS 
        We use two rows going in opposite directions for that premium dynamic feel.
      */}
      <div className="relative z-10 flex flex-col gap-6 transform -rotate-2"> {/* Slight diagonal tilt for edgy look */}
        
        {/* ROW 1: Moves Left */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
            {extendedLogos.map((logo, index) => (
              <MagneticLogo key={`row1-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
            {extendedLogos.map((logo, index) => (
              <MagneticLogo key={`row2-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}