"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const InventoryIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const FulfillmentIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const servicesData = [
  {
    number: '01',
    stage: 'Inventory',
    title: 'Expertise in Inventory Management',
    description:
      'Our inventory management services ensure your products are always in stock and ready to meet customer demand. We protect you from costly stockouts while keeping your Amazon FBA operation lean and efficient.',
    icon: <InventoryIcon />,
  },
  {
    number: '02',
    stage: 'Fulfillment',
    title: 'Superior Order Fulfillment Solutions',
    description:
      'We guarantee fast, reliable delivery so your customers receive their orders promptly and in perfect condition. Our optimized fulfillment workflows keep your Amazon metrics healthy and your buyers coming back.',
    icon: <FulfillmentIcon />,
  },
];

const AmazonServices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020202] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-teal-900/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">What We Deliver</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
            Proprietary Systems for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">
              Amazon FBA Domination
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            From automation to excellence—inventory and fulfillment, done right.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {servicesData.map((service, index) => (
            <motion.div key={service.number} variants={fadeUp} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/0 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              <div className="relative h-full bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/5 group-hover:border-teal-500/30 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 z-10 overflow-hidden flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-400/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500/10 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] group-hover:text-teal-500/60">MOD—0{index + 1}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">{service.stage}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium flex-grow group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wider hover:text-teal-300 transition-colors group/link"
                >
                  Get a quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmazonServices;
