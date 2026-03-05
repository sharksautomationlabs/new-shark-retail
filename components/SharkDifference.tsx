"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// --- High-Tech Module Component (For Features) ---
const SystemModule: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative group h-full"
    >
      {/* Dynamic Hover Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/0 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0"></div>
      
      {/* Card Body */}
      <div className="relative h-full bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/5 group-hover:border-teal-500/30 rounded-[2rem] p-8 transition-all duration-500 z-10 overflow-hidden flex flex-col">
        
        {/* Subtle Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex items-start justify-between mb-6">
          {/* Glowing Icon Socket */}
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/10 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-500 text-teal-400">
              {icon}
            </div>
          </div>
          {/* Module Label */}
          <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] group-hover:text-teal-500/60 transition-colors">
            MOD—0{index + 1}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-teal-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Elite Difference Section ---
const SharkDifference: React.FC = () => {
  const serviceFeatures = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Store Setup & Config",
      description: "Complete e-commerce store setup across all major platforms with optimized configurations for maximum performance."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Product Sourcing",
      description: "Strategic product sourcing, inventory management, and optimization to ensure highly profitable product selection."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Marketing & Advertising",
      description: "Comprehensive marketing strategies including precision PPC campaigns, SEO optimization, and social media scaling."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
        </svg>
      ),
      title: "Customer Excellence",
      description: "24/7 dedicated customer support, seamless order management, and CRM to ensure absolute buyer satisfaction."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Scaling",
      description: "Advanced data analytics, real-time performance tracking, and continuous algorithmic optimization to maximize your ROI."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Monitoring",
      description: "Round-the-clock automated monitoring and system maintenance to ensure your business runs flawlessly without interruption."
    }
  ];

  return (
    <section className="relative bg-[#020202] pt-14 pb-28 px-4 sm:px-8 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      
      {/* --- Deep Cinematic Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-teal-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-emerald-900/10 rounded-full blur-[120px]"></div>
        {/* Tech Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- Header Section (always visible so title never hidden) --- */}
        <motion.div 
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Operational Excellence</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
            The Shark Automation <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">
              Difference.
            </span>
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-400 tracking-wide">
              Your <span className="text-white font-bold">Freedom</span>, Our <span className="text-teal-400 font-bold">Mission</span>.
            </h3>
          </motion.div>
        </motion.div>

        {/* --- Split-Pane Mission Console (The Intro) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl p-1 overflow-hidden shadow-2xl">
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] skew-x-12 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-[2.3rem] overflow-hidden">
              <div className="bg-[#0a0a0c] p-8 sm:p-12 h-full">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                  We provide a <span className="text-white font-bold">tailor-made, done-for-you service</span> that automates 
                  every aspect of your e-commerce business. From setup to sourcing, marketing, and support—we engineer the entire operation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-950/40 to-[#0a0a0c] p-8 sm:p-12 h-full border-l border-white/5 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <h4 className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-4">The Ultimate Outcome</h4>
                  <p className="text-xl sm:text-2xl font-light text-white leading-snug">
                    This secures your most precious commodities: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-white drop-shadow-md">Time and Freedom.</span>
                  </p>
                  <p className="text-gray-400 mt-4 text-sm font-medium">
                    Relax, pursue your passions, and watch your investment compound—even while you sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- System Modules Grid (The 6 Features) --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-28"
        >
          {serviceFeatures.map((feature, index) => (
            <SystemModule
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* --- The Interconnected Impact Nodes (Benefits) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" as const, bounce: 0.3 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto rounded-[3rem] bg-[#050505] border border-white/10 p-10 sm:p-16 overflow-hidden"
        >
          {/* Ambient Inner Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-teal-900/20 to-transparent opacity-50 pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What This Means For <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">You</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>

            {[
              {
                title: "Time Freedom",
                desc: "Reclaim your time to focus on what matters most, while we handle the day-to-day operations.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Passive Income",
                desc: "Build a sustainable income stream that works for you 24/7, even while you're sleeping.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              },
              {
                title: "Expert Management",
                desc: "Leverage our decade of experience and proven strategies without learning the complexities.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            ].map((benefit, i) => (
              <div key={i} className="relative group text-center">
                {/* Glowing Node Icon */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl group-hover:bg-teal-400/40 transition-colors duration-500"></div>
                  <div className="relative w-full h-full bg-black border border-teal-500/30 rounded-full flex items-center justify-center group-hover:border-teal-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                    <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                    </svg>
                  </div>
                </div>
                {/* Text Content */}
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-teal-300 transition-colors">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-medium px-4">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}} />
    </section>
  );
};

export default SharkDifference;