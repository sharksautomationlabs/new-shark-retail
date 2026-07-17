"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  company: string;
  date: string;
  content: string;
  metrics: { label: string; value: string }[];
  delay?: number;
  isActive?: boolean;
}> = ({ name, role, company, date, content, metrics, delay = 0, isActive = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={`group relative transition-all duration-500 ${
      isActive ? "opacity-100 blur-0 scale-100" : "opacity-60 blur-sm scale-95"
    }`}
  >
    <div
      className={`rounded-2xl border backdrop-blur-md p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl relative overflow-hidden ${
        isActive
          ? "bg-[#0a0a0c]/90 border-teal-500/30 shadow-lg shadow-teal-400/10"
          : "bg-white/5 border-white/10"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-6 right-6 opacity-10">
        <svg className="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>
      {isActive && (
        <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 animate-pulse" />
      )}
      <div className="relative z-10 space-y-6">
        <p className="text-gray-300 leading-relaxed text-lg italic">&quot;{content}&quot;</p>
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-teal-400">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              {name.split(" ").map((n) => n[0]).join("")}
            </span>
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

const AmazonPPCTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "David Martinez",
      role: "Digital Marketing Director",
      company: "Capital Partners LLC",
      date: "Jan 12, 2025",
      content:
        "Retail Automation's Amazon PPC management delivered exceptional results. Within 90 days, our Sponsored Products and Sponsored Brands campaigns cut ACOS by 35% and increased ROAS by 250%. Their data-driven bid optimization transformed our advertising into a profit center.",
      metrics: [
        { label: "ACOS Reduction", value: "35%" },
        { label: "Time to Profit", value: "90 Days" },
      ],
    },
    {
      name: "Jennifer Walsh",
      role: "Marketing Portfolio Manager",
      company: "Strategic Ventures",
      date: "Dec 8, 2024",
      content:
        "The Amazon PPC frameworks deployed by Retail Automation exceeded all expectations. Our advertising portfolio achieved 400% ROAS growth through systematic campaign optimization and strategic budget allocation. Their search term mining and negative keyword strategy cut wasteful spend dramatically.",
      metrics: [
        { label: "ROAS Growth", value: "400%" },
        { label: "Budget Efficiency", value: "+250%" },
      ],
    },
    {
      name: "Robert Kim",
      role: "Advertising Allocation Director",
      company: "Global Investment Group",
      date: "Nov 20, 2024",
      content:
        "Working with Retail Automation transformed our Amazon advertising into a systematic wealth-building platform. Their Sponsored Display retargeting and Sponsored Brands optimization delivered 100% ROI growth within six months. The reporting and strategic insights are unmatched.",
      metrics: [
        { label: "ROI Growth", value: "100%" },
        { label: "Timeframe", value: "6 Months" },
      ],
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(id);
    }
  }, [isHovered, testimonials.length]);

  return (
    <section className="relative bg-[#020205] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Success Stories from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
              Amazon Sellers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            Our partners have achieved extraordinary returns through our Amazon
            PPC management. Data-driven results, lower ACOS, higher ROAS.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          </div>
        </motion.div>

        <div
          className="max-w-7xl mx-auto mb-20 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden py-6 md:py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out md:hidden"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...t} isActive />
                </div>
              ))}
            </div>
            <div
              className="hidden md:flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 33.333}% + 50% - 16.666%))`,
              }}
            >
              {testimonials.map((t, i) => (
                <div key={t.name} className="w-1/3 flex-shrink-0 px-4">
                  <TestimonialCard {...t} isActive={i === currentIndex} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-teal-400 scale-125 shadow-lg shadow-teal-400/50"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-2">
          <a href="/reviews" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-4 decoration-teal-500/50 hover:decoration-teal-300 transition-colors">
            Read all our reviews &amp; verify us independently →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmazonPPCTestimonials;
