"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  company: string;
  date: string;
  content: string;
  metrics: { label: string; value: string }[];
  isActive?: boolean;
}> = ({ name, role, company, date, content, metrics, isActive = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`group relative transition-all duration-500 ${isActive ? "opacity-100 blur-0 scale-100" : "opacity-60 blur-sm scale-95"}`}
  >
    <div className={`rounded-2xl border backdrop-blur-md p-8 transition-all duration-500 ${isActive ? "bg-[#0a0a0c]/90 border-teal-500/30 shadow-lg shadow-teal-400/10" : "bg-white/5 border-white/10"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 space-y-6">
        <p className="text-gray-300 leading-relaxed text-lg italic">&quot;{content}&quot;</p>
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-teal-400">{m.value}</div>
              <div className="text-gray-400 text-sm">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">{name.split(" ").map((n) => n[0]).join("")}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-lg">{name}</h4>
            <p className="text-teal-400 font-semibold">{role}</p>
            <p className="text-gray-400 text-sm">{company}</p>
            <p className="text-gray-500 text-xs mt-1">{date}</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContentCreationTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { name: "Sarah Chen", role: "Creative Director", company: "Digital Ventures Capital", date: "Jan 15, 2025", content: "Retail Automation's content creation services revolutionized our brand presence. Within 30 days, we achieved 400% engagement increase while reducing content production costs by 70%. Their systematic approach to creative strategy and visual content transformed our brand into a market-leading presence.", metrics: [{ label: "Engagement Growth", value: "400%" }, { label: "Cost Reduction", value: "70%" }] },
    { name: "Marcus Rodriguez", role: "Marketing Director", company: "Retail Innovation Fund", date: "Dec 12, 2024", content: "The institutional-grade content creation frameworks deployed by Retail Automation exceeded all expectations. Our brand consistency improved by 95% while content production speed increased by 300%. Their proprietary creative systems consistently deliver superior brand messaging across all platforms.", metrics: [{ label: "Brand Consistency", value: "95%" }, { label: "Production Speed", value: "300%" }] },
    { name: "Jennifer Walsh", role: "Brand Manager", company: "E-Commerce Growth Partners", date: "Nov 25, 2024", content: "Working with Retail Automation's content creation team transformed our brand presence into a systematic, scalable platform. Their visual content mastery and copywriting systems delivered 250% brand recognition growth within three months. The institutional-grade creative insights and production automation are unmatched.", metrics: [{ label: "Brand Recognition", value: "250%" }, { label: "Timeframe", value: "3 Months" }] },
  ];

  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), 4000);
      return () => clearInterval(id);
    }
  }, [isHovered, testimonials.length]);

  return (
    <section className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Success Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">Our partners have achieved extraordinary brand growth through systematic content creation automation. Scale smarter, sell faster.</p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="relative overflow-hidden py-6 md:py-8">
            <div className="flex transition-transform duration-500 ease-in-out md:hidden" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...t} isActive />
                </div>
              ))}
            </div>
            <div className="hidden md:flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${currentIndex * 33.333}% + 50% - 16.666%))` }}>
              {testimonials.map((t, i) => (
                <div key={t.name} className="w-1/3 flex-shrink-0 px-4">
                  <TestimonialCard {...t} isActive={i === currentIndex} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-4 h-4 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-teal-400 scale-125 shadow-lg shadow-teal-400/50" : "bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreationTestimonials;
