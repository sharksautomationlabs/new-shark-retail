"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const advantages = [
  { title: "Lower ACOS", description: "Data-driven bid optimization to cut Advertising Cost of Sale while maintaining or growing sales." },
  { title: "Higher ROAS", description: "Strategic budget allocation across Sponsored Products, Brands, and Display for maximum Return on Ad Spend." },
  { title: "Scalable Growth", description: "PPC strategies that scale with your catalog—from launch to category dominance." },
  { title: "Transparent Reporting", description: "Clear dashboards and performance reports so you always know where your ad spend goes." },
];

const challenges = [
  { title: "DIY Complexity", description: "Amazon's advertising console is complex—inexperience leads to wasted spend and missed opportunities." },
  { title: "Competitive Bidding", description: "High CPCs and aggressive competition make it hard to achieve profitable ACOS without expertise." },
  { title: "Keyword Chaos", description: "Poor keyword strategy and negative keyword management drain budgets and dilute results." },
  { title: "Scaling Blind", description: "Scaling without data-driven optimization often increases spend without proportionally increasing profit." },
];

const AmazonPPCEdge: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-teal-500/8 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
              The Edge
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            The Edge That Makes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
              Our Amazon PPC Better
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg max-w-3xl mx-auto font-medium"
          >
            Growth with Retail Automation—systematic PPC management built for
            long-term success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-teal-400 mb-2">
                With Retail Automation
              </h3>
              <div className="w-16 h-1 bg-teal-400 mx-auto rounded-full" />
            </div>
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 shadow-2xl shadow-black/40 hover:border-teal-500/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-red-400/90 mb-2">
                DIY (Going Solo)
              </h3>
              <div className="w-16 h-1 bg-red-500/60 mx-auto rounded-full" />
            </div>
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.04] bg-[#0a0a0c]/60 backdrop-blur-xl p-6 border-red-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white/80 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-[2rem] border border-teal-500/20 bg-gradient-to-b from-teal-500/10 to-transparent backdrop-blur-xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              Ready to Choose the Right Path?
            </h3>
            <p className="text-slate-400 font-medium mb-6 max-w-2xl mx-auto">
              Don&apos;t let wasted ad spend hold you back. Partner with Retail Automation
              for Amazon PPC management built for long-term success.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmazonPPCEdge;
