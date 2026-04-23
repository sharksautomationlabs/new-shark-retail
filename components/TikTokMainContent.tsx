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
  { label: 'TTK—01', title: 'Account Setup & Management', desc: 'From account setup to ongoing management—we ensure your TikTok presence runs flawlessly.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg> },
  { label: 'TTK—02', title: 'Content Creation & Targeting', desc: 'Content creation and audience targeting tailored to meet your specific business goals.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
  { label: 'TTK—03', title: 'TikTok Trends & Algorithms', desc: 'Well-versed with the latest TikTok trends and algorithms—your brand stays relevant and visible.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  { label: 'TTK—04', title: 'Launch & Drive Sales', desc: 'Launch new products, increase brand awareness, and drive sales—we help you achieve your goals.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

const TikTokMainContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.9', 'end 0.1'] });
  const card0Y = useTransform(scrollYProgress, [0, 0.5], [0, 24]);
  const card1Y = useTransform(scrollYProgress, [0, 0.5], [0, 16]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.8], [-16, 0]);
  const card3Y = useTransform(scrollYProgress, [0.3, 0.8], [-24, 0]);

  return (
    <section ref={sectionRef} className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="lg:col-span-5 space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-teal-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_teal]" />
              TikTok Automation
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Commerce-first programming for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
                TikTok Shop growth
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              Our TikTok Automation Services are designed to elevate your brand&apos;s presence and drive engagement on this rapidly growing platform. We offer a range of services—from account setup and management to content creation and audience targeting—all tailored to meet your specific business goals.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              Our team of experts is well-versed with the latest TikTok trends and algorithms, ensuring your brand stays relevant and visible to your target audience. Whether you&apos;re looking to launch a new product, increase brand awareness, or drive sales—we can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]">
                Connect Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {[cards[0], cards[1]].map((card, i) => (
              <motion.div key={card.label} style={{ y: i === 0 ? card0Y : card1Y }} className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 hover:border-teal-500/20 hover:shadow-[0_0_60px_rgba(20,184,166,0.08)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/20">{card.icon}</div>
                  <span className="text-xs font-bold text-teal-400/90 uppercase tracking-widest">{card.label}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
            {[cards[2], cards[3]].map((card, i) => (
              <motion.div key={card.label} style={{ y: i === 0 ? card2Y : card3Y }} className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 hover:border-teal-500/20 hover:shadow-[0_0_60px_rgba(20,184,166,0.08)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/20">{card.icon}</div>
                  <span className="text-xs font-bold text-teal-400/90 uppercase tracking-widest">{card.label}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TikTokMainContent;
