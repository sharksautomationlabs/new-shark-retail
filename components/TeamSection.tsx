"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// --- Data for the Executive Team ---
const teamData = [
  {
    name: "Aain Ali",
    company: "Shark Retail",
    companyColor: "text-teal-400",
    titles: ["Senior Director"],
    imageUrl: "/images/team/3.png", 
    logoUrl: "/images/sharks-retail-logo.png",
    linkedinUrl: "https://www.linkedin.com/in/aainali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Zayn",
    company: "Shark Retail",
    companyColor: "text-teal-400",
    titles: ["Chief Executive Officer"],
    imageUrl: "/images/team/4.png", 
    logoUrl: "/images/sharks-retail-logo.png",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-zayaan-b7b220259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  }
];

// --- High-End LinkedIn Icon ---
const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// --- Elite Executive Card Component ---
const ExecutiveCard: React.FC<{ member: typeof teamData[0]; index: number }> = ({ member, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group w-full h-[500px] sm:h-[600px] rounded-[2.5rem] overflow-hidden"
    >
      {/* Dynamic Border Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/30 rounded-[2.5rem] transition-colors duration-700 z-30 pointer-events-none"></div>
      
      {/* Background Image with Cinematic Hover Zoom */}
      <div className="absolute inset-0 bg-zinc-900 overflow-hidden rounded-[2.5rem]">
        <Image
          src={member.imageUrl}
          alt={`Portrait of ${member.name}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
        />
      </div>

      {/* Deep Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700 z-10"></div>
      
      {/* Top Left: Company Logo (Frosted Glass) */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <Image
            src={member.logoUrl}
            alt={`${member.company} logo`}
            width={100}
            height={24}
            className="h-5 w-auto object-contain filter brightness-0 invert"
          />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 z-20 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        
        {/* Name and Titles */}
        <div>
          {/* Animated Titles */}
          <div className="flex flex-col gap-2 mb-3">
            {member.titles.map((title, i) => (
              <span key={i} className="inline-block w-fit px-3 py-1 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest rounded-md backdrop-blur-sm">
                {title}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg mb-1">
            {member.name}
          </h3>
          <p className={`text-sm sm:text-base font-medium ${member.companyColor} tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200`}>
            {member.company}
          </p>
        </div>

        {/* LinkedIn FAB (Floating Action Button) */}
        {member.linkedinUrl && (
          <a 
            href={member.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200 hover:bg-white shadow-[0_0_20px_rgba(45,212,191,0.5)]"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Elite Team Section ---
const TeamSection: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative bg-[#030303] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden selection:bg-teal-500/30 selection:text-white">
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-teal-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-600/5 rounded-full blur-[120px]"></div>
        {/* Deep Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- Section Header --- */}
        <motion.div 
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">The Experts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Meet the Experts Behind <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              Shark Retail Success
            </span>
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl font-medium">
            Our dedicated team stands at the forefront of Amazon&apos;s fulfillment programs and beyond. We don&apos;t just help businesses grow—we empower them to scale and thrive. With deep e-commerce expertise, we position your brand in the consumer spotlight for lasting success.
          </p>
        </motion.div>
        
        {/* --- 2-Column Executive Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center justify-center max-w-5xl mx-auto">
          {teamData.map((member, index) => (
            <ExecutiveCard key={member.name} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;