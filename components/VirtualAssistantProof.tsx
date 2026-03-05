"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

const targetCounts = { clients: 450, tasks: 20000, efficiency: 75, satisfaction: 96 };
const statLabels: Record<string, string> = { clients: "Active Clients", tasks: "Tasks Completed", efficiency: "Efficiency Gain", satisfaction: "Client Satisfaction" };
const statSuffixes: Record<string, string> = { clients: "+", tasks: "+", efficiency: "%", satisfaction: "%" };

const VirtualAssistantProof: React.FC = () => {
  const [counts, setCounts] = useState({ clients: 0, tasks: 0, efficiency: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    (Object.keys(targetCounts) as Array<keyof typeof targetCounts>).forEach((key) => {
      const target = targetCounts[key];
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { clearInterval(timer); current = target; }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-teal-500/8 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Results</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Building The Operations of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">Tomorrow, Today</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            We help businesses optimize their operations with measurable results.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {(Object.keys(targetCounts) as Array<keyof typeof targetCounts>).map((key) => (
            <motion.div key={key} variants={fadeUp} className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 hover:border-teal-500/20 hover:shadow-[0_0_60px_rgba(20,184,166,0.08)] transition-all duration-500 text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-400 mb-2">
                {counts[key].toLocaleString()}{statSuffixes[key]}
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-300 uppercase tracking-wider">{statLabels[key]}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-teal-500/20 bg-gradient-to-b from-teal-500/10 to-transparent backdrop-blur-xl p-8 sm:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
            Ready to See These Results for Your Operations?
          </h3>
          <p className="text-slate-400 font-medium mb-6 max-w-2xl mx-auto">
            Join our systematic approach to virtual assistance and start generating consistent, measurable returns from your operational capital.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]">
            Schedule Your Intro Call <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualAssistantProof;