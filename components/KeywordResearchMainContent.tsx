"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, BarChart3, FileText, TrendingUp } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 80, damping: 20 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

const cards = [
  { label: "KR—01", title: "Keyword Discovery", desc: "Advanced research and analysis for maximum search visibility. We identify high-value, long-tail keywords that drive organic growth.", icon: Search },
  { label: "KR—02", title: "Competitor Analysis", desc: "Comprehensive competitive intelligence that drives strategic advantage. Uncover gaps in competitor strategies and capitalize on untapped opportunities.", icon: BarChart3 },
  { label: "KR—03", title: "Content Strategy", desc: "Strategic content mapping that maximizes organic reach. Create content that ranks and converts with precision-targeted keyword research.", icon: FileText },
  { label: "KR—04", title: "Organic Growth", desc: "Accelerating growth through systematic keyword optimization. Build sustainable organic traffic and track measurable results.", icon: TrendingUp },
];

const KeywordResearchMainContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.9", "end 0.1"] });
  const card0Y = useTransform(scrollYProgress, [0, 0.5], [0, 24]);
  const card1Y = useTransform(scrollYProgress, [0, 0.5], [0, 16]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.8], [-16, 0]);
  const card3Y = useTransform(scrollYProgress, [0.3, 0.8], [-24, 0]);

  return (
    <section ref={sectionRef} className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="lg:col-span-5 space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-teal-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_teal]" /> Keyword Research
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-[2.15rem] md:text-[2.6rem] lg:text-[3rem] font-bold text-white tracking-tight leading-[1.15]">
              Funnel research that feeds <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">PPC, SEO, and content</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              Retail Automation delivers keyword discovery, competitor analysis, content strategy, and organic growth optimization. We help e-commerce brands scale smarter and sell faster.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              From high-value keyword identification to strategic content mapping—we tailor research for your goals. Built for scale, designed for results.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]">
                Connect Now <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {[cards[0], cards[1]].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.label} style={{ y: i === 0 ? card0Y : card1Y }} className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 hover:border-teal-500/20 hover:shadow-[0_0_60px_rgba(20,184,166,0.08)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/20">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-teal-400/90 uppercase tracking-widest">{card.label}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
            {[cards[2], cards[3]].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.label} style={{ y: i === 0 ? card2Y : card3Y }} className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 hover:border-teal-500/20 hover:shadow-[0_0_60px_rgba(20,184,166,0.08)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/20">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-teal-400/90 uppercase tracking-widest">{card.label}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchMainContent;
