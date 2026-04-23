"use client";

import React, { useRef, useEffect } from 'react';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Data Structure (Cleaned for Matrix Layout) ---
const footerLinks = {
  solutions: [
    { name: 'Amazon Automation', href: '/automation/amazon' },
    { name: 'Shopify Automation', href: '/automation/shopify' },
    { name: 'TikTok Shop Automation', href: '/automation/tiktok' },
    { name: 'Walmart Automation', href: '/automation/walmart' },
    { name: 'Etsy Automation', href: '/automation/etsy' },
  ],
  services: [
    { name: 'Amazon PPC Management', href: '/services/amazon-ppc-management' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Virtual Assistant', href: '/services/virtual-assistant' },
    { name: 'Account Reinstatement', href: '/services/account-reinstatement' },
    { name: 'Content Creation', href: '/services/content-creation' },
    { name: 'Deep Keyword Research', href: '/services/keyword-research' },
    { name: 'Product Hunting', href: '/services/product-hunting' },
  ],
  company: [
    { name: 'Home Page', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact Information', href: '/contact' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!footerRef.current) return;

    // 1. Parallax Unveil Effect
    gsap.fromTo(footerRef.current, 
      { yPercent: 20, opacity: 0 }, 
      { yPercent: 0, opacity: 1, duration: 1.2, ease: "power3.out", 
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        }
      }
    );

    // 2. Staggered Column Reveal
    gsap.fromTo(columnsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      }
    );

    // 3. Massive Watermark Subtle Parallax
    if (watermarkRef.current) {
      gsap.fromTo(watermarkRef.current,
        { y: -50, scale: 0.95 },
        { y: 0, scale: 1, ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
          }
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Elite Hover Link Component
  const PremiumLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="group relative inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 py-1">
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-teal-400 transition-all duration-300 ease-out" />
      {/* Subtle underline grow */}
      <span className="absolute left-0 bottom-0.5 w-0 h-[1px] bg-teal-400/50 group-hover:w-full transition-all duration-500 ease-out" />
    </a>
  );

  return (
    <footer ref={footerRef} className="relative bg-[#020205] border-t border-white/[0.05] pt-24 pb-8 overflow-hidden font-sans selection:bg-teal-500/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen" />
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- TOP PRE-FOOTER CTA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/[0.05] pb-16 mb-16 gap-8">
          <div>
            <div className="text-teal-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Next move
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-tight">
              Time to put the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">revenue system on rails?</span>
            </h2>
          </div>
          <a 
            href="/contact" 
            className="group relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/[0.03] border border-white/10 hover:border-teal-400/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-teal-500/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out origin-center" />
            <span className="relative z-10 text-white text-sm font-bold tracking-widest uppercase flex flex-col items-center gap-1 group-hover:text-teal-300 transition-colors duration-300">
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* --- MAIN SITEMAP MATRIX --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 mb-16 sm:mb-24">
          
          {/* Col 1: Brand & Contact */}
          <div ref={el => { columnsRef.current[0] = el; }} className="flex flex-col">
            <div className="flex items-center mb-8">
              <img src="/images/retail-automation-logo.png" alt="Retail Automation" className="h-16 w-auto sm:h-20 max-w-[min(100%,16rem)] object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[250px]">
              Quantitative e-commerce portfolio management and strategic capital deployment.
            </p>
            <div className="space-y-2 mt-auto">
              <a href="mailto:info@thesharkretail.com" className="block text-lg font-medium text-white hover:text-teal-400 transition-colors">info@thesharkretail.com</a>
              <a href="tel:+14694807938" className="block text-slate-400 hover:text-white transition-colors">(469) 480-7938</a>
            </div>
          </div>

          {/* Col 2: Automation */}
          <div ref={el => { columnsRef.current[1] = el; }} className="flex flex-col">
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Automation</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.solutions.map(link => (
                <PremiumLink key={link.name} href={link.href}>{link.name}</PremiumLink>
              ))}
            </div>
          </div>

          {/* Col 3: Services & Company */}
          <div ref={el => { columnsRef.current[2] = el; }} className="flex flex-col gap-12">
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Services</h4>
              <div className="flex flex-col gap-3">
                {footerLinks.services.slice(0, 3).map(link => ( // Showing only top 3 for clean layout
                  <PremiumLink key={link.name} href={link.href}>{link.name}</PremiumLink>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Company</h4>
              <div className="flex flex-col gap-3">
                {footerLinks.company.slice(0, 3).map(link => (
                  <PremiumLink key={link.name} href={link.href}>{link.name}</PremiumLink>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION: Legal & Socials --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] gap-6">
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>© {new Date().getFullYear()} Retail Automation. All rights reserved.</span>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Magnetic Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61582189354952" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/sharks_retail" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* --- MASSIVE BACKGROUND WATERMARK --- */}
      <div 
        ref={watermarkRef}
        className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden z-0"
      >
        <h1 
          className="text-[14vw] font-black tracking-[0.12em] text-white/[0.14] leading-none whitespace-nowrap"
          style={{ fontFamily: "Impact, system-ui, sans-serif" }}
        >
          {"RETAIL AUTOMATION".split("").map((ch, i) => {
            if (ch === " ") return <span key={`space-${i}`} className="inline-block">{"\u00A0"}</span>;
            const variants = ["footer-bounce-1", "footer-bounce-2", "footer-bounce-3", "footer-bounce-4", "footer-bounce-5"];
            return (
              <span
                key={`${ch}-${i}`}
                className={`inline-block ${variants[i % variants.length]}`}
                style={{ animationDelay: `${(i * 0.12) % 2}s` }}
              >
                {ch}
              </span>
            );
          })}
        </h1>
      </div>

    </footer>
  );
}