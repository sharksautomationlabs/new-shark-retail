"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Target, Award, Users, Lightbulb } from 'lucide-react';

// --- Elite Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
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

const VisionMission: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative bg-[#020202] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      
      {/* --- Deep Space Cinematic Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Massive Ambient Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-teal-900/10 rounded-full blur-[150px]"></div>
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>

        {/* Floating Particles/Stars */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20 flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] animate-pulse"></span>
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Our Manifesto</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Success in E-Commerce Is Not Just <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
              About Selling—It&apos;s About Value & Impact
            </span>
          </motion.h2>
        </motion.div>

        {/* --- Bento Grid Layout for Vision & Mission --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-6"
        >
          {/* Vision Card (Spans 7 Cols) */}
          <motion.div variants={fadeUp} className="lg:col-span-7 relative group h-full">
            {/* Hover Outline */}
            <div className="absolute -inset-px bg-gradient-to-br from-teal-500/50 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="relative h-full bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 sm:p-12 overflow-hidden flex flex-col justify-between">
              {/* Inner Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-400/20 transition-all duration-700"></div>
              
              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(20,184,166,0)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                  <Eye className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] rotate-90 origin-top-right translate-y-8">
                  VSN—01
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">The Vision</h3>
                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light">
                  To be the trusted engine for online sales across <span className="text-white font-medium">Amazon, Shopify, TikTok & Walmart</span>, 
                  making <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-white font-bold drop-shadow-md">sustained growth</span> and lasting impact 
                  an achievable reality for every entrepreneur we partner with.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card (Spans 5 Cols) */}
          <motion.div variants={fadeUp} className="lg:col-span-5 relative group h-full">
            <div className="absolute -inset-px bg-gradient-to-bl from-emerald-500/50 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="relative h-full bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 sm:p-12 overflow-hidden flex flex-col justify-between">
              {/* Inner Ambient Glow */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-400/20 transition-all duration-700"></div>
              
              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  <Target className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] rotate-90 origin-top-right translate-y-8">
                  MSN—02
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">The Mission</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  With the right strategy and unwavering dedication, we empower entrepreneurs to take their business to the next level through <span className="text-white font-medium">tailored solutions for Amazon, Walmart, Shopify & TikTok</span>. Our expert team ensures your products stand out with comprehensive support and innovative strategies for sustained growth and unmatched success.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Interactive Core Values Grid --- */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto relative group mt-6"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-[#050505]/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 sm:p-16 overflow-hidden">
            
            <div className="text-center mb-14">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500">
                Our Core Pillars
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              {[
                { icon: Award, title: "Excellence", desc: "We deliver exceptional results through meticulous attention to detail and continuous improvement." },
                { icon: Users, title: "Partnership", desc: "We build lasting relationships based on absolute trust, transparency, and mutual success." },
                { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the curve with cutting-edge strategies and algorithmic technology solutions." }
              ].map((val, i) => (
                <div key={i} className="relative group/card p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                  
                  {/* Hover Sweep Gradient inside Value Card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  {/* Top Glowing Edge */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-teal-400 group-hover/card:w-full transition-all duration-700 ease-out"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover/card:border-teal-400/50 group-hover/card:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-500">
                      <val.icon className="w-6 h-6 text-gray-400 group-hover/card:text-teal-400 transition-colors duration-500" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{val.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light group-hover/card:text-gray-300 transition-colors">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMission;