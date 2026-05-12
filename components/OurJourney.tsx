"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Sparkles, Play, ShieldCheck, ChevronRight } from 'lucide-react';
import InvestmentReportPopup from './InvestmentReportPopup';

interface OurJourneyProps {
  showVideo?: boolean;
  hideRoiText?: boolean;
  hideBadge?: boolean; 
  customTitle?: string;
}

// --- Elite Smooth Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 80, damping: 20, duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const OurJourney: React.FC<OurJourneyProps> = ({ 
  showVideo = false, 
  hideRoiText = false,
  hideBadge = false,
  customTitle = ""
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [reportOpen, setReportOpen] = useState(false);

  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  type CalendlyWindow = Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } };
  const openCalendly = () => {
    if ((window as CalendlyWindow).Calendly) {
      (window as CalendlyWindow).Calendly!.initPopupWidget({
        url: 'https://calendly.com/sharksretailofficial/30min'
      });
    } else {
      window.open('https://calendly.com/sharksretailofficial/30min', '_blank');
    }
  };

  return (
    <section ref={containerRef} className="relative bg-[#09090b] text-zinc-100 py-24 md:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* --- Premium Subtle Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Radial Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Animated Accent Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[120px]"
        />

        {/* High-End Micro Grid */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT CONTENT: The Narrative --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-6 space-y-8"
          >
            {/* Elegant Pill Badge */}
            {!hideBadge && (
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md shadow-lg">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-widest">
                  Our Journey
                </span>
              </motion.div>
            )}

            {/* Apple-Style Bold Heading */}
            <motion.div variants={fadeUp}>
              {customTitle ? (
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                   {customTitle}
                 </h2>
              ) : (
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  From Institutional Edge to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
                    Amazon, Shopify, TikTok &amp; Walmart
                  </span>
                </h2>
              )}
            </motion.div>

            {/* Premium Typography Body */}
            <div className="space-y-6 text-base md:text-lg text-zinc-400 leading-relaxed font-medium">
              <motion.p variants={fadeUp}>
                We started with a <span className="text-zinc-100 font-semibold">proof of concept</span> at scale—guiding enterprise clients into the e-commerce ecosystem across Amazon, Shopify, TikTok Shop, and Walmart. That experience became the foundation of Retail Automation.
              </motion.p>
              
              {/* Glassmorphic Glowing ROI Card */}
              {!hideRoiText && (
                <motion.div 
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden group cursor-default"
                >
                  {/* Hover Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                  
                  <div className="relative z-10 flex gap-5 items-start">
                    <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-zinc-300 font-medium">
                        The result? They spearheaded investments that generated a staggering
                      </p>
                      <div className="mt-2 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 drop-shadow-lg">
                        $1 Million in ROI.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <motion.p variants={fadeUp}>
                That was the birth of <span className="text-zinc-100 font-semibold">Retail Automation</span>. We harness that expertise to deliver tailored solutions—setup, operations, and growth—so entrepreneurs can scale on Amazon, Walmart, Shopify, and TikTok without the guesswork.
              </motion.p>
            </div>

            {/* Sleek Minimalist Button */}
            <motion.div variants={fadeUp} className="pt-4">
              <button
                onClick={openCalendly}
                className="group relative flex items-center gap-4 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="relative z-10 bg-zinc-950/10 rounded-full p-1 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT: Masterpiece UI Panel --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
            className={`lg:col-span-6 relative ${showVideo ? 'h-full flex items-center' : ''}`}
          >
            {showVideo ? (
              
              /* Ultra-Premium Glass Video Player */
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] p-3 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl group">
                {/* Floating ambient shadow */}
                <div className="absolute -inset-10 bg-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative w-full h-full bg-zinc-950 rounded-[2rem] overflow-hidden">
                  <video
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  >
                    <source src="/videos/hero-vid-2.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Play Center Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-500">
                      <Play className="w-8 h-8 text-white ml-2" />
                    </div>
                  </div>
                </div>
              </div>

            ) : (
              
              /* Vercel/Stripe Style Animated SVG Dashboard */
              <div className="relative w-full rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl p-8 sm:p-10 shadow-2xl overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
                
                {/* Dashboard Header – engaging detail */}
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-5 h-5 text-teal-400" />
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Verified Trajectory</span>
                      <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-[10px] font-semibold text-teal-300 uppercase tracking-wider border border-teal-400/30">Live</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Investment Growth</h3>
                    <p className="text-xs text-zinc-500 mt-1 max-w-[220px]">Real portfolio performance across Amazon, Shopify & Walmart.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Total ROI</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">$1,000,000+</div>
                    <div className="text-[10px] text-zinc-500 mt-1 font-medium">Cumulative · YTD</div>
                  </div>
                </div>

                {/* --- The SVG Animated Growth Chart --- */}
                <div className="relative w-full h-[250px] sm:h-[300px] mt-8">
                  
                  {/* Grid Lines in Background */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                  </div>

                  {/* Animated SVG Curve */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Gradient Fill under the line */}
                    <motion.path 
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1 }}
                      d="M 0 200 C 100 200, 150 120, 200 100 C 250 80, 300 40, 400 20 L 400 200 Z"
                      fill="url(#fillGrad)"
                    />

                    {/* The Main Glowing Line */}
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                      d="M 0 200 C 100 200, 150 120, 200 100 C 250 80, 300 40, 400 20"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                    />
                  </svg>

                  {/* Data Point Nodes (Positioned absolutely over the SVG) */}
                  {[
                    { bottom: '50%', left: '50%', val: '$500K', label: 'Phase 2', delay: 1.5 },
                    { bottom: '88%', left: '98%', val: '$1M+', label: 'Current', delay: 2 },
                  ].map((node, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: node.delay, type: "spring" }}
                      className="absolute flex flex-col items-center -translate-x-1/2 translate-y-1/2"
                      style={{ bottom: node.bottom, left: node.left }}
                    >
                      <div className="mb-2 px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-bold text-white shadow-xl whitespace-nowrap">
                        {node.val}
                      </div>
                      {/* The Glowing Dot */}
                      <div className="relative w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#2dd4bf]">
                        <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-50"></div>
                        <div className="absolute inset-1 rounded-full bg-teal-500"></div>
                      </div>
                      <div className="mt-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">{node.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Footer inside Dashboard */}
                <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center">
                  <div className="flex -space-x-3">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-zinc-500" />
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setReportOpen(true)}
                    className="report-cta-blink text-sm font-medium text-teal-400 hover:text-teal-300 cursor-pointer transition-colors"
                  >
                    View full report &rarr;
                  </button>
                </div>

              </div>
            )}
          </motion.div>

          <InvestmentReportPopup open={reportOpen} onClose={() => setReportOpen(false)} />

        </div>
      </div>
      
      {/* Glare Animation for Hover Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}} />
    </section>
  );
};

export default OurJourney;