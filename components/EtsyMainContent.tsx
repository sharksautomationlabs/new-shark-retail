"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EtsyMainContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const firstCardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const secondCardY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const thirdCardY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fourthCardY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/15 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[140px] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <a
        href="/contact"
        className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors"
      >
        Let&apos;s Talk Business
      </a>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-[2.15rem] md:text-[2.6rem] font-bold text-white leading-tight max-w-3xl tracking-tight">
                  Sky-Rocket Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
                    Etsy Venture
                  </span>{" "}
                  with Our Premium Etsy Automation Services
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  Etsy grows on real consumer demand for unique, handmade, and
                  vintage products. We build on that foundation by handling your
                  shop setup, branding, and listing optimization so your
                  products stay visible, trusted, and ready to convert.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  From inventory management and pricing strategy to order
                  processing and customer experience, our team manages the full
                  Etsy lifecycle. You get a systematically run, cash-flow
                  generative Etsy business—without the daily operational grind.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href="/contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-white rounded-full cursor-pointer"
                  >
                    Explore Our Solutions
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-6">
                  <motion.div
                    style={{ y: firstCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent" />
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl" />
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Shop Optimization
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Advanced listing optimization and SEO for maximum Etsy
                        visibility.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    style={{ y: secondCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent" />
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl" />
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Product Intelligence
                      </h3>
                      <p className="text-gray-300 text-sm">
                        AI-powered demand forecasting and inventory management.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6 mt-8 sm:mt-12">
                  <motion.div
                    style={{ y: thirdCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent" />
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl" />
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Fulfillment Excellence
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Automated systems that scale with your Etsy order
                        volume.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    style={{ y: fourthCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent" />
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl" />
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Global Reach
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Access Etsy&apos;s worldwide marketplace network with a
                        managed operation.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtsyMainContent;

