"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Headphones, FileText, Database, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

const services = [
  { title: "Administrative Support", desc: "Calendar management, email correspondence, document preparation, data entry, meeting coordination, and travel arrangements designed for real results.", icon: FileText },
  { title: "Customer Service Excellence", desc: "Multi-channel support, live chat, phone support, inquiry management, complaint resolution, and ticket automation that builds brand loyalty.", icon: Headphones },
  { title: "Data Management Solutions", desc: "Real-time sync, automated reports, secure storage, data analysis, database optimization, and backup systems that transform raw data into actionable insights.", icon: Database },
  { title: "Operational Automation", desc: "Workflow automation, process optimization, task scheduling, system integration, and performance monitoring that eliminates manual processes.", icon: Zap },
];

const VirtualAssistantServices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[36rem] h-[36rem] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Solutions</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Virtual Assistance <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">Solutions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            Streamline your operations, enhance customer satisfaction, and drive sustainable growth with our comprehensive virtual assistance services.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 hover:border-teal-500/20 hover:shadow-[0_0_60px_rgba(20,184,166,0.08)] transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/20 group-hover:border-teal-400/40 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-teal-400 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(20,184,166,0.25)]">
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualAssistantServices;
