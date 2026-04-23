"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring' as const, stiffness: 80, damping: 20 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const servicesData = [
  { number: '01', stage: 'Inventory', title: 'Expertise in Inventory Management', description: 'Our inventory management services ensure your products are always in stock and ready to meet customer demand.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
  { number: '02', stage: 'Automation', title: 'Order Processing Automation', description: 'Improve efficiency and attain massive profitability by automating order fulfillment processes and make leaps in the competitive world.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

const TikTokServices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative bg-[#020202] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-teal-900/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-20">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">What We Deliver</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
            We Provide the Best Services for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">Your Product</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            At Retail Automation we offer top-tier solutions designed to streamline your TikTok business. Our expert team ensures every aspect operates flawlessly and seamlessly.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {servicesData.map((service) => (
            <motion.div key={service.number} variants={fadeUp} className="relative group h-full">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal-500/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl shadow-black/40 group-hover:border-teal-500/20 group-hover:shadow-[0_0_60px_rgba(20,184,166,0.1)] transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/20 group-hover:bg-teal-500/25 transition-colors">{service.icon}</div>
                  <span className="text-xs font-bold text-teal-400/90 uppercase tracking-widest">{service.stage}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8">{service.description}</p>
                <a href="/contact" className="inline-flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wider hover:text-teal-300 transition-colors group/link">
                  Get A Quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="text-center mt-16">
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]">
            Connect Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TikTokServices;
