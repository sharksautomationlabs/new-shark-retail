"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Users, Globe, Database, Network } from 'lucide-react';

// --- High-Tech Animated Counter Card ---
const AnimatedStatCard: React.FC<{ 
  value: string; 
  label: string; 
  subLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  duration?: number;
}> = ({ value, label, subLabel, icon: Icon, delay = 0, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const suffix = value.replace(/[\d.]/g, '');
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutExpo for that smooth slow-down at the end
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = easeProgress * numericValue;

        setDisplayValue(Math.floor(current).toString() + suffix);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.3 }}
      className="relative group h-full"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Main Glass Card */}
      <div className="relative h-full bg-[#050505]/80 backdrop-blur-xl border border-white/10 group-hover:border-teal-500/50 rounded-3xl p-8 overflow-hidden transition-all duration-500 flex flex-col justify-between">
        
        {/* Animated Scanner Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_15px_#2dd4bf]"></div>

        {/* Decorative Background Sparkline (SVG Wave) */}
        <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10 group-hover:opacity-30 transition-opacity duration-500 text-teal-500" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,100 C20,80 40,100 60,60 C80,20 100,60 100,60 L100,100 Z" fill="currentColor" />
        </svg>

        {/* Top Header Section */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all duration-500">
            <Icon className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors duration-500" />
          </div>
          <div className="text-[10px] font-mono text-teal-500/70 border border-teal-500/30 px-2 py-1 rounded bg-teal-500/5">
            {subLabel}
          </div>
        </div>

        {/* Value & Label */}
        <div className="relative z-10">
          <motion.div 
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter mb-2"
          >
            {displayValue}
          </motion.div>
          <div className="text-sm sm:text-base font-medium text-gray-400 leading-snug group-hover:text-gray-300 transition-colors">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- High-Tech Ecosystem Node ---
const EcosystemNode: React.FC<{ name: string; delay: number }> = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, type: "spring" }}
    viewport={{ once: true }}
    className="relative group cursor-default"
  >
    <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative flex items-center gap-3 px-6 py-3 bg-black border border-white/10 rounded-full group-hover:border-teal-400 transition-all duration-300">
      <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-teal-400 group-hover:shadow-[0_0_10px_#2dd4bf] transition-colors"></div>
      <span className="text-sm font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  </motion.div>
);

// --- Main High-Tech Section ---
const PerformanceStats: React.FC = () => {
  return (
    <section className="relative bg-[#020202] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-teal-100">
      
      {/* --- Deep Cinematic Video Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-[0.15] mix-blend-screen filter grayscale">
          <source src="/videos/bg-pattern.mp4" type="video/mp4" />
        </video>
        {/* Deep Matrix Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-[#020202]"></div>
        
        {/* Moving Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-teal-900/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-teal-600/10 rounded-full blur-[100px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- High-Tech Header --- */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-teal-500/30 bg-teal-500/10 mb-6 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></div>
            <span className="text-[10px] font-mono text-teal-400 uppercase tracking-[0.2em]">SYS.METRICS.LOG</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            The Proof is in the <br className="hidden sm:block"/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              Performance Matrix
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl font-medium"
          >
            We don't just engineer promises; we deploy measurable algorithmic success. Our decade-long dominion in e-commerce is built on raw, tangible data.
          </motion.p>
        </div>

        {/* --- Telemetry Dashboard (Stats Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
          <AnimatedStatCard 
            value="10+" 
            label="Years of Deep E-Commerce Expertise" 
            subLabel="TIME.EXP"
            icon={Activity}
            delay={0.1}
          />
          <AnimatedStatCard 
            value="400+" 
            label="Clients Generating Six-Figure Incomes" 
            subLabel="USR.WLT"
            icon={Users}
            delay={0.2}
          />
          <AnimatedStatCard 
            value="400+" 
            label="Stores Actively Managed & Scaled" 
            subLabel="SYS.OPS"
            icon={Database}
            delay={0.3}
          />
          <AnimatedStatCard 
            value="100+" 
            label="Global Experts Across 4 Countries" 
            subLabel="NET.GLB"
            icon={Globe}
            delay={0.4}
          />
        </div>

        {/* --- Ecosystem Integrations (Platforms) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-10 sm:p-16 text-center"
        >
          {/* Subtle Grid inside the box */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <Network className="w-10 h-10 text-teal-400 mb-4 opacity-80" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ecosystem <span className="text-teal-400">Integrations</span>
            </h3>
            <p className="text-gray-400 mb-10 text-sm uppercase tracking-widest font-semibold">
              Platforms We Architect & Dominate
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <EcosystemNode name="Amazon" delay={0.1} />
              <EcosystemNode name="Walmart" delay={0.2} />
              <EcosystemNode name="Etsy" delay={0.3} />
              <EcosystemNode name="Shopify" delay={0.4} />
              <EcosystemNode name="TikTok Shop" delay={0.5} />
            </div>
          </div>
        </motion.div>

      </div>

      {/* --- Custom Keyframes for Sci-Fi Animations --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default PerformanceStats;