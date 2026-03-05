"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, LayoutGroup } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const proofData = [
  {
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Amazon PPC Dashboard 1",
  },
  {
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Amazon PPC Analytics 2",
  },
  {
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Amazon Campaign Performance 3",
  },
];

const AmazonPPCProof: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [counts, setCounts] = useState({ acos: 0, roas: 0, campaigns: 0, clients: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const targets = { acos: 35, roas: 400, campaigns: 850, clients: 1100 };

  useEffect(() => {
    if (!statsInView) return;
    const duration = 2000;
    const steps = 60;
    const stepMs = duration / steps;
    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      let current = 0;
      const inc = target / steps;
      const id = setInterval(() => {
        current += inc;
        if (current >= target) {
          current = target;
          clearInterval(id);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepMs);
    });
  }, [statsInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-teal-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[36rem] h-[36rem] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div
          className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[140%] h-[80%] opacity-60"
          style={{
            backgroundImage: "linear-gradient(#14b8a610 1px, transparent 1px), linear-gradient(90deg,#14b8a610 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "perspective(900px) rotateX(70deg)",
            transformOrigin: "top center",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Proof</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Amazon PPC <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">Results & Performance</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
              Data-driven results showing how our Amazon PPC management drives lower ACOS, higher ROAS, and profitable growth.
            </motion.p>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {[
              { val: counts.acos, suffix: "%", label: "Avg ACOS Reduction" },
              { val: counts.roas, suffix: "%", label: "Avg ROAS Improvement" },
              { val: counts.campaigns, suffix: "+", label: "Campaigns Managed" },
              { val: counts.clients, suffix: "+", label: "Active Clients" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-teal-400">
                  {stat.val.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <LayoutGroup>
            {/* VR console - same as Amazon page panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -16, rotateX: 8 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <motion.div
                className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-teal-500/30 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-3xl shadow-[0_40px_120px_rgba(15,23,42,0.9)] overflow-hidden"
                style={{
                  transform: "perspective(1200px) rotateX(16deg)",
                  transformOrigin: "top center",
                }}
                layout
              >
                {/* top glow bar */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70" />
                {/* holo corners */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-teal-400/60 rounded-tl-3xl" />
                  <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-teal-400/60 rounded-tr-3xl" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-teal-400/40 rounded-bl-3xl" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-teal-400/40 rounded-br-3xl" />
                </div>
                <div className="relative px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8">
                  <div className="mb-6 flex items-center justify-between text-xs font-mono text-teal-200/80 uppercase tracking-[0.25em]">
                    <span>Amazon PPC • Live Console</span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#22c55e]" />
                      Realtime
                    </span>
                  </div>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
                    <motion.img
                      key={proofData[activeIndex].image}
                      src={proofData[activeIndex].image}
                      alt={proofData[activeIndex].alt}
                      layoutId={`amazon-ppc-proof-${activeIndex}`}
                      className="w-full h-full object-cover md:object-contain opacity-95"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-cyan-500/10 mix-blend-screen" />
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs sm:text-sm font-medium text-teal-100/90">
                    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-400 mb-1">ACOS</div>
                      <div className="text-xl font-bold text-teal-300">-35%</div>
                      <div className="text-[0.75rem] text-slate-400">Reduced</div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-400 mb-1">ROAS</div>
                      <div className="text-xl font-bold text-teal-300">+400%</div>
                      <div className="text-[0.75rem] text-slate-400">Improved</div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-400 mb-1">Profit</div>
                      <div className="text-xl font-bold text-teal-300">+250%</div>
                      <div className="text-[0.75rem] text-slate-400">Growth</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* thumbnail rail - same as Amazon page */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-3 mb-6 scrollbar-thin scrollbar-thumb-slate-700/70 scrollbar-track-transparent"
            >
              {proofData.map((proof, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={proof.alt}
                    variants={fadeUp}
                    onClick={() => {
                      if (index === activeIndex) return;
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`min-w-[180px] sm:min-w-[220px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-[#050609]/95 border border-teal-400/70 shadow-[0_22px_70px_rgba(20,184,166,0.55)] scale-[1.03]"
                        : "bg-[#050609]/90 border border-white/10 shadow-[0_18px_50px_rgba(15,23,42,0.7)] hover:border-teal-400/60 hover:shadow-[0_20px_60px_rgba(20,184,166,0.4)]"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {!isActive && (
                        <motion.img
                          src={proof.image}
                          alt={proof.alt}
                          layoutId={`amazon-ppc-proof-${index}`}
                          className="w-full h-full object-cover opacity-90"
                        />
                      )}
                      {isActive && (
                        <img src={proof.image} alt={proof.alt} className="w-full h-full object-cover opacity-90" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="px-4 py-3 text-xs text-slate-300 truncate">{proof.alt}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </LayoutGroup>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl p-[1px] overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] skew-x-12 pointer-events-none" />
            <div className="relative bg-[#0a0a0c] rounded-[2.4rem] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  Ready to See These Results for Your Amazon Advertising?
                </h3>
                <p className="text-gray-400 font-medium">
                  Join our systematic approach to Amazon PPC management and start generating consistent, measurable returns.
                </p>
              </div>
              <a
                href="/contact"
                className="relative group flex-shrink-0 overflow-hidden rounded-full shadow-[0_0_40px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] transition-shadow duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 opacity-100 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                  <span className="font-extrabold text-black uppercase tracking-wider text-sm">Get Started</span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: "@keyframes shimmer { 100% { transform: translateX(200%) skewX(12deg); } }" }} />
    </section>
  );
};

export default AmazonPPCProof;
