"use client";

import React, { useRef, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useInView, useAnimation } from 'framer-motion';

// --- Company Data ---
const companies = [
  { name: 'Microsoft', logo: '/images/companies/Microsoft.png' },
  { name: 'Amazon', logo: '/images/companies/amazon.png' },
  { name: 'Google', logo: '/images/companies/google.png' },
  { name: 'Meta', logo: '/images/companies/meta.png' },
  { name: 'Tesla', logo: '/images/companies/tesla.png' },
  { name: 'Netflix', logo: '/images/companies/netflix.png' },
  { name: 'Uber', logo: '/images/companies/uber.png' },
  { name: 'Airbnb', logo: '/images/companies/airbnb.png' },
  { name: 'Spotify', logo: '/images/companies/spotify.png' },
  { name: 'Adobe', logo: '/images/companies/adobe.png' }
];

// --- High-End Company Logo Card ---
const CompanyLogo: React.FC<{ name: string; logo: string }> = ({ name, logo }) => {
  return (
    <div className="mx-2 sm:mx-4 py-6 sm:py-8">
      <div className="group relative flex items-center justify-center w-36 h-24 sm:w-48 sm:h-32 bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)] hover:-translate-y-2 hover:bg-white/80 cursor-pointer">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-teal-400/0 group-hover:from-teal-400/10 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
        
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <img
            src={logo}
            alt={name}
            className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

// --- Premium Animated Stat Card ---
const AnimatedNumber: React.FC<{ 
  value: string; 
  label: string; 
  delay?: number;
}> = ({ value, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Logic to handle suffixes like +, %, /7 smoothly
      const suffix = value.replace(/[\d.]/g, '');
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth slowdown at the end (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = easeProgress * numericValue;

        // Check if value has decimals
        const formattedCurrent = value.includes('.') 
          ? current.toFixed(1) 
          : Math.floor(current).toString();

        setDisplayValue(formattedCurrent + suffix);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value); // Force exact final value
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
      className="relative p-4 sm:p-6 md:p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden group hover:bg-white transition-colors duration-500"
    >
      {/* Decorative gradient blur inside card */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl group-hover:bg-teal-400/30 transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-teal-600 to-teal-400 mb-3 tracking-tight">
          {displayValue}
        </h3>
        <p className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-widest text-center">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

// --- Main High-Class Section ---
const CompaniesTrustUs: React.FC = () => {
  return (
    <section id="light-section" data-light-section className="relative bg-[#f8fafc] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden gpu-smooth">
      
      {/* --- High-End Background Effects --- */}
      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-teal-200/40 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-[-10%] w-[35rem] h-[35rem] bg-teal-300/30 rounded-full blur-[120px] pointer-events-none" 
      />
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="container mx-auto relative z-10">
        
        {/* --- Premium Header Section --- */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-100 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-wider">Trusted by Industry Leaders</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-6 leading-tight"
          >
            Built for <br className="hidden sm:block" />
            <span className="text-teal-600">E-commerce Owners</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium"
          >
            Today’s marketplaces move fast. We help you handle setup, optimization, ads, and operations—so you can scale without getting buried in day-to-day complexity.
          </motion.p>
        </div>

        {/* --- Marquee Section with Gradient Masks --- */}
        {/* CSS Mask for smooth fade at screen edges */}
        <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          
          {/* First Marquee Line */}
          <div className="mb-6">
            <Marquee speed={40} gradient={false} pauseOnHover={true}>
              {companies.map((company, index) => (
                <CompanyLogo key={`first-${index}`} {...company} />
              ))}
            </Marquee>
          </div>

          {/* Second Marquee Line - Opposite Direction */}
          <div>
            <Marquee speed={35} gradient={false} direction="right" pauseOnHover={true}>
              {companies.map((company, index) => (
                <CompanyLogo key={`second-${index}`} {...company} />
              ))}
            </Marquee>
          </div>
          
        </div>

        {/* --- High-End Trust Indicators (Stats) --- */}
        <div className="mt-20 sm:mt-24 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
            <AnimatedNumber 
              value="500+" 
              label="Stores & Brands Supported" 
              delay={0.1}
            />
            <AnimatedNumber 
              value="99.9%" 
              label="Process Reliability Focus" 
              delay={0.3}
            />
            <AnimatedNumber 
              value="24/7" 
              label="Support Coverage" 
              delay={0.5}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompaniesTrustUs;