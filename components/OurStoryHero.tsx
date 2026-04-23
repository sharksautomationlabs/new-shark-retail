"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants for Elite Feel ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

// --- Our Story Hero Component ---
const OurStoryHero: React.FC = () => {
  return (
    <section className="relative bg-[#030303] min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-teal-100">
      
      {/* --- High-End Background Effects --- */}
      {/* Subtle Tech Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
        }}
      ></div>

      {/* Animated Aurora Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none z-0"
      ></motion.div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-teal-300/20 rounded-full blur-[100px] pointer-events-none z-0"
      ></motion.div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Origin Badge */}
          <motion.div variants={fadeUpVariant} className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-[0.2em]">About Us</span>
            </div>
          </motion.div>

          {/* Cinematic Main Headline */}
          <motion.h1 
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Proof Over Pitch <br className="hidden sm:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-200 drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">
              Is How We Work
            </span>
          </motion.h1>

          {/* Premium Sub-headline */}
          <motion.p 
            variants={fadeUpVariant}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Discover the journey, expertise, and values that drive Retail Automation to deliver exceptional{' '}
            <span className="text-white border-b border-teal-500/30 pb-0.5 transition-colors hover:border-teal-400 hover:text-teal-300 cursor-default">
              e-commerce solutions
            </span>
            —for Amazon, Shopify, TikTok Shop, and Walmart.
          </motion.p>

          {/* High-Tech Glowing Separator */}
          <motion.div 
            variants={fadeUpVariant}
            className="mt-16 sm:mt-20 flex justify-center w-full relative"
          >
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <motion.div 
              animate={{ 
                left: ["0%", "50%", "100%", "50%", "0%"],
                opacity: [0, 1, 0, 1, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-24 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] -translate-y-[0.5px]"
            ></motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default OurStoryHero;