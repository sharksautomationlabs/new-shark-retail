"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Clock, TrendingUp, Globe2, Mail } from 'lucide-react';

// --- Elite Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const AboutCTA: React.FC = () => {
  return (
    <section className="relative bg-[#020202] py-24 sm:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      
      {/* --- Deep Cinematic Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-teal-500/10 rounded-full blur-[120px]"></div>
        
        {/* Animated Radar/Ripple Rings */}
        <motion.div 
          animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-teal-500/20"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-teal-500/20"
        ></motion.div>

        {/* Noise Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          {/* --- The Master Headline --- */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-teal-500/30 bg-teal-500/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.3em]">System Ready</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Ready to Write Your Own <br className="hidden sm:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300 drop-shadow-lg mt-2">
                Success Story?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Your journey to absolute financial freedom and a life beyond the 9-to-5 grind starts with a single, decisive conversation.
            </p>
          </motion.div>

          {/* --- Magnetic Dual Action Buttons --- */}
          <motion.div 
            variants={fadeUp} 
            className="w-full max-w-2xl flex flex-col sm:flex-row gap-5 justify-center items-center mt-6 mb-16"
          >
            {/* Primary Action Button */}
            <a
              href="/contact"
              className="relative group w-full sm:w-auto overflow-hidden rounded-full shadow-[0_0_40px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 opacity-100 group-hover:scale-110 transition-transform duration-500"></div>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite] skew-x-12"></div>
              
              <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                <span className="font-extrabold text-black uppercase tracking-wider text-sm md:text-base">
                  Initiate Consultation
                </span>
                <div className="bg-black/10 rounded-full p-1 group-hover:bg-black group-hover:text-teal-400 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-black group-hover:text-teal-400 transition-colors" />
                </div>
              </div>
            </a>

            {/* Secondary Action Button (Holographic Border) */}
            <a
              href="tel:+14692949964"
              className="relative group w-full sm:w-auto p-px rounded-full overflow-hidden bg-gradient-to-b from-teal-500/50 to-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] transition-opacity duration-500"></div>
              
              <div className="relative bg-[#050505] hover:bg-white/5 transition-colors duration-300 rounded-full px-8 py-4 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 group-hover:animate-pulse" />
                <span className="font-bold text-white uppercase tracking-wider text-sm md:text-base">
                  (469) 294-9964
                </span>
              </div>
            </a>
          </motion.div>

          {/* --- Floating Glass Trust Indicators --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
            {[
              { icon: Clock, title: "Zero Obligation", desc: "Expert architectural advice tailored to your specific scaling goals." },
              { icon: TrendingUp, title: "Proven Matrix", desc: "$1M+ ROI generated successfully for Fortune 500 clients." },
              { icon: Globe2, title: "Global Nodes", desc: "100+ elite system architects across 4 international countries." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="relative group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center mb-5 group-hover:border-teal-400/50 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-500">
                    <item.icon className="w-6 h-6 text-gray-500 group-hover:text-teal-400 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Holographic Contact Terminal --- */}
          <motion.div variants={fadeUp} className="w-full max-w-lg mx-auto">
            <div className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/30 to-teal-400/0 -translate-x-full group-hover:animate-[shimmer_2.5s_infinite] skew-x-12"></div>
              
              <div className="relative bg-[#0a0a0c] p-6 rounded-2xl flex items-center justify-between border border-transparent group-hover:border-teal-500/20 transition-colors duration-500">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-teal-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Encrypted Mail</p>
                    <a href="mailto:info@theretailautomation.com" className="text-white font-medium hover:text-teal-300 transition-colors">
                      info@theretailautomation.com
                    </a>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-400 -rotate-45" />
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%) skewX(12deg); }
        }
      `}} />
    </section>
  );
};

export default AboutCTA;