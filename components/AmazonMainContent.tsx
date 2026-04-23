"use client";

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cards = [
  {
    label: 'MOD—01',
    title: 'Marketplace Domination',
    desc: 'Advanced listing optimization and SEO for maximum visibility on Amazon.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    label: 'MOD—02',
    title: 'Inventory Intelligence',
    desc: 'AI-powered demand forecasting and stock management so you never stock out.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'MOD—03',
    title: 'Fulfillment Excellence',
    desc: 'Automated systems that scale with your growth and keep metrics healthy.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: 'MOD—04',
    title: 'Global Reach',
    desc: 'Access to Amazon\'s worldwide marketplace network and cross-border selling.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AmazonMainContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.9', 'end 0.1'] });
  const card0Y = useTransform(scrollYProgress, [0, 0.5], [0, 24]);
  const card1Y = useTransform(scrollYProgress, [0, 0.5], [0, 16]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.8], [-16, 0]);
  const card3Y = useTransform(scrollYProgress, [0.3, 0.8], [-24, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-teal-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_teal]" />
              Premium FBA
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              A single operating system for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
                full-scale Amazon FBA
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              Our team of seasoned professionals is dedicated to optimizing your Amazon store, streamlining operations, and driving substantial revenue growth. We combine advanced automation so your business scales effortlessly while we handle the complexities.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              Seamless integration end-to-end—from inventory management to order fulfillment—for a hassle-free experience. With our commitment to excellence and tailored solutions, we set your Amazon FBA brand on a trajectory for sustained success.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]"
              >
                Get Your Amazon FBA Plan
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {cards.slice(0, 2).map((card, i) => (
                <motion.div
                  key={card.label}
                  style={{ y: i === 0 ? card0Y : card1Y }}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/0 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  <div className="relative h-full bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/5 group-hover:border-teal-500/30 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500/10 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-500">
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] group-hover:text-teal-500/60">{card.label}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
              {cards.slice(2, 4).map((card, i) => (
                <motion.div
                  key={card.label}
                  style={{ y: i === 0 ? card2Y : card3Y }}
                  className="relative group h-full mt-6 sm:mt-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/0 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  <div className="relative h-full bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/5 group-hover:border-teal-500/30 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500/10 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-500">
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] group-hover:text-teal-500/60">{card.label}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmazonMainContent;
