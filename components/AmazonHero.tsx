"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const AmazonHero: React.FC = () => {
  return (
    <section className="relative bg-[#030303] min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-teal-100">
      {/* Tech grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 75%)',
        }}
      />
      {/* Aurora glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-15%] left-[-10%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.12, 0.05], x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-15%] right-[-5%] w-[35rem] h-[35rem] bg-teal-300/15 rounded-full blur-[100px] pointer-events-none z-0"
      />
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl"
        >
          <motion.div variants={fadeUpVariant} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-[0.2em]">Amazon FBA</span>
            </div>
          </motion.div>
          <motion.h1
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
          >
            End-to-End{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-200 drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">
              Amazon FBA
            </span>{' '}
            Operations Built to Compound
          </motion.h1>
          <motion.p
            variants={fadeUpVariant}
            className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-medium mb-10"
          >
            Boost your digital presence on Amazon with Retail Automation. Our seasoned FBA team optimizes your store, streamlines operations, and drives substantial revenue growth with premium automation.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/contact"
              className="relative group overflow-hidden rounded-full shadow-[0_0_40px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 opacity-100 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite] skew-x-12" />
              <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                <span className="font-extrabold text-black uppercase tracking-wider text-sm md:text-base">Get Started</span>
                <div className="bg-black/10 rounded-full p-1 group-hover:bg-black group-hover:text-teal-400 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-black group-hover:text-teal-400 transition-colors" />
                </div>
              </div>
            </a>
            <a
              href="tel:+17133377701"
              className="relative group w-full sm:w-auto p-px rounded-full overflow-hidden bg-gradient-to-b from-teal-500/50 to-white/10"
            >
              <div className="relative bg-[#0a0a0c] hover:bg-white/5 transition-colors duration-300 rounded-full px-8 py-4 flex items-center justify-center gap-3 border border-white/10">
                <span className="font-bold text-white uppercase tracking-wider text-sm md:text-base">(713) 337-7701</span>
              </div>
            </a>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="mt-14 w-full flex justify-center lg:justify-start relative">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <motion.div
              animate={{ left: ['0%', '50%', '100%', '50%', '0%'], opacity: [0, 1, 0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 w-24 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] -translate-y-px"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl scale-110" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/companies/processed/amazon.png"
                alt="Amazon"
                width={384}
                height={384}
                className="w-full h-full object-contain opacity-95"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%) skewX(12deg); } }` }} />
    </section>
  );
};

export default AmazonHero;
