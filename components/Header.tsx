"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Menu, X, ChevronDown } from 'lucide-react';
import Ticker from './Ticker';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/about' },
  {
    label: 'Automation',
    href: '/automation/amazon',
    children: [
      { label: 'Amazon Automation', href: '/automation/amazon' },
      { label: 'Shopify Automation', href: '/automation/shopify' },
      { label: 'TikTok Shop Automation', href: '/automation/tiktok' },
      { label: 'Walmart Automation', href: '/automation/walmart' },
      { label: 'Etsy Automation', href: '/automation/etsy' },
    ],
  },
  {
    label: 'Services',
    href: '/services/amazon-ppc-management',
    children: [
      { label: 'Amazon PPC Management', href: '/services/amazon-ppc-management' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Virtual Assistant', href: '/services/virtual-assistant' },
      { label: 'Account Reinstatement', href: '/services/account-reinstatement' },
      { label: 'Content Creation', href: '/services/content-creation' },
      { label: 'Deep Keyword Research', href: '/services/keyword-research' },
      { label: 'Product Hunting', href: '/services/product-hunting' },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);

  // --- Scroll Logic for Glass Header ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Cinematic GSAP Menu Animation ---
  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      // Body scroll lock
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      
      // 1. Reveal Background using clipPath (Cinematic wipe down)
      tl.to(menuRef.current, { 
        clipPath: 'inset(0% 0% 0% 0%)', 
        duration: 0.8, 
        ease: 'expo.inOut' 
      })
      // 2. Stagger in the links
      .fromTo(linksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        "-=0.4" // Overlap animation
      );
    } else {
      // Body scroll unlock
      document.body.style.overflow = '';
      
      // Wipe up to hide
      gsap.to(menuRef.current, { 
        clipPath: 'inset(0% 0% 100% 0%)', 
        duration: 0.6, 
        ease: 'expo.inOut' 
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* --- DESKTOP & MOBILE HEADER BAR --- */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b pt-0 ${
          scrolled 
            ? 'bg-[#020205]/80 backdrop-blur-xl border-white/5 pb-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent pb-6'
        }`}
      >
        {/* Elite topbar ticker – stats, LIVE pill, theme teal */}
        <div className="hidden sm:block">
          <Ticker />
        </div>

        {/* Gap between topbar and main nav */}
        <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-3 sm:mt-4 py-1 sm:py-2">
          
          {/* Left: Logo — wider slot, same fixed heights */}
          <Link
            href="/"
            className="flex h-9 w-[min(320px,84vw)] sm:h-10 sm:w-[min(340px,80vw)] md:h-11 md:w-[min(360px,70vw)] shrink-0 items-center cursor-pointer z-60"
          >
            <img
              src="/images/sharks-retail-header-logo.png"
              alt="Retail Automation"
              className="h-full w-auto max-w-full object-contain object-left"
            />
          </Link>

          {/* Center: Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group py-2">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />}
                </a>

                {/* Premium Desktop Dropdown (Mega Menu Style) */}
                {item.children && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 ease-out">
                    <div className="relative w-max min-w-[280px] rounded-2xl border border-white/8 bg-[#050508]/95 backdrop-blur-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />
                      
                      <div className="px-3 pt-3 pb-2">
                        <p className="text-[9px] font-bold tracking-[0.3em] text-teal-400/80 uppercase mb-2">
                          {item.label} Division
                        </p>
                      </div>
                      
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="relative group/link flex items-center px-3 py-2.5 rounded-xl hover:bg-white/4 transition-colors duration-300"
                          >
                            <span className="text-[12px] font-medium text-slate-300 group-hover/link:text-white transition-colors z-10">
                              {child.label}
                            </span>
                            <span className="absolute left-3 w-0 h-px bg-teal-400 bottom-2 group-hover/link:w-4 transition-all duration-300 z-10 opacity-0 group-hover/link:opacity-100" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Added Contact to Nav */}
            <a href="/contact" className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Right: Desktop CTA & Mobile Hamburger */}
          <div className="flex items-center gap-5 z-60">
            
            {/* Elite Desktop Button */}
            <a 
              href="/contact" 
              className="hidden lg:flex items-center justify-center relative px-6 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white rounded-full overflow-hidden group bg-white/5 border border-white/10 hover:border-teal-400/50 transition-colors duration-500"
            >
              <span className="relative z-10 group-hover:text-teal-300 transition-colors duration-300">
                Book a Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            {/* Modern Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* --- FULL SCREEN MOBILE MENU (Cinematic) --- */}
      <div 
        ref={menuRef} 
        className="fixed inset-0 bg-[#020205]/95 backdrop-blur-3xl z-40 overflow-hidden"
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      >
        {/* Ambient background glows for mobile menu */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-teal-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Scrollable inner wrapper – data-lenis-prevent stops Lenis from hijacking scroll here */}
        <div
          data-lenis-prevent
          className={`h-full w-full overflow-x-hidden overscroll-contain ${
            isMenuOpen ? "overflow-y-auto pointer-events-auto" : "overflow-y-hidden pointer-events-none"
          }`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
        <div className="w-full max-w-md mx-auto px-5 sm:px-6 pt-24 pb-12 flex flex-col gap-6 relative z-10">
          
          {navItems.map((item, i) => (
            <div 
              key={item.label} 
              ref={(el) => { linksRef.current[i] = el; }}
              className="flex flex-col"
            >
              <a
                href={item.href}
                className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-2 hover:text-teal-400 transition-colors"
                onClick={() => !item.children && setIsMenuOpen(false)}
              >
                {item.label}
              </a>
              
              {/* Mobile Sub-links */}
              {item.children && (
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-white/10">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="text-[13px] font-medium text-slate-400 hover:text-teal-300 tracking-wide transition-colors py-0.5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Extra Links / Contact */}
          <div 
            ref={(el) => { linksRef.current[navItems.length] = el; }}
            className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-3"
          >
            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center px-5 py-2 text-[11px] font-bold tracking-[0.18em] uppercase text-white rounded-full bg-white/5 border border-white/10 hover:border-teal-400/50 hover:text-teal-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </a>
            <a
              href="/contact"
              className="text-2xl sm:text-3xl font-black text-teal-400 uppercase tracking-tighter"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
            <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
              Systematic E-Commerce Wealth.
            </p>
          </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default Header;