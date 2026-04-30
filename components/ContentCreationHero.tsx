"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as const } },
};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };

const ContentCreationHero: React.FC = () => {
  return (
    <section className="relative bg-[#030303] min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-teal-100">
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)", backgroundSize: "4rem 4rem", maskImage: "radial-gradient(circle at 50% 50%, black 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 0%, transparent 75%)" }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[-15%] left-[-10%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.12, 0.05], x: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-15%] right-[-5%] w-[35rem] h-[35rem] bg-teal-300/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center max-w-3xl">
          <motion.div variants={fadeUpVariant} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" /></span>
              <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-[0.2em]">Content Creation</span>
            </div>
          </motion.div>
          <motion.h1 variants={fadeUpVariant} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Conversion-First <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-200 drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">Content</span> That Matches the Funnel
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-medium mb-10">
            Unlock brand growth with Retail Automation. Our data-driven content creation delivers creative strategy, visual content, copywriting, and production automation—so you can scale smarter and sell faster.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="/contact" className="relative group overflow-hidden rounded-full shadow-[0_0_40px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 opacity-100 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                <span className="font-extrabold text-black uppercase tracking-wider text-sm md:text-base">Connect Now</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
            </a>
            <a href="tel:+14692949964" className="relative group w-full sm:w-auto p-px rounded-full overflow-hidden bg-gradient-to-b from-teal-500/50 to-white/10">
              <div className="relative bg-[#0a0a0c] hover:bg-white/5 transition-colors duration-300 rounded-full px-8 py-4 flex items-center justify-center gap-3 border border-white/10">
                <span className="font-bold text-white uppercase tracking-wider text-sm md:text-base">(469) 294-9964</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCreationHero;