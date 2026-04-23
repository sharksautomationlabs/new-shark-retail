"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  date: string;
  content: string;
  metrics: { label: string; value: string }[];
  isActive?: boolean;
}> = ({ name, role, date, content, metrics, isActive = true }) => (
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={`group relative transition-all duration-500 ${isActive ? 'opacity-100 blur-0 scale-100' : 'opacity-60 blur-sm scale-95'}`}>
    <div className={`bg-[#0a0a0c]/90 backdrop-blur-xl border rounded-[2rem] p-8 hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-400/20 relative overflow-hidden ${isActive ? 'border-teal-500/30 shadow-lg shadow-teal-400/10' : 'border-white/5'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-6 right-6 opacity-10">
        <svg className="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
      </div>
      {isActive && <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 animate-pulse" />}
      <div className="relative z-10 space-y-6">
        <p className="text-gray-300 leading-relaxed text-lg italic">&ldquo;{content}&rdquo;</p>
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
            <span className="text-white font-bold text-lg">{name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-lg">{name}</h4>
            <p className="text-teal-400 font-semibold">{role}</p>
            <p className="text-gray-500 text-xs mt-1">{date}</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const TikTokTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { name: 'Alex Chen', role: 'TikTok Content Creator', date: 'Jan 10, 2025', content: 'Retail Automation TikTok automation services are game-changing! They helped us grow from 1K to 500K followers in just 6 months. Their content strategy and posting automation increased our engagement by 300%. Our brand visibility skyrocketed!', metrics: [{ label: 'Followers', value: '500K' }, { label: 'Engagement', value: '+300%' }] },
    { name: 'Sophie Anderson', role: 'Social Media Manager', date: 'Dec 22, 2024', content: 'The TikTok automation from Retail Automation transformed our social media presence. They automated our content creation, posting schedule, and audience engagement. Our reach increased by 400% and we\'re now generating consistent leads for our business!', metrics: [{ label: 'Reach Lift', value: '+400%' }, { label: 'Leads', value: 'Consistent' }] },
    { name: 'Ryan Patel', role: 'Digital Marketing Specialist', date: 'Nov 15, 2024', content: 'Working with Retail Automation for TikTok automation has been incredible. They set up advanced targeting, automated our ad campaigns, and optimized our content for maximum viral potential. Our conversion rate improved by 250% and we\'re dominating our niche!', metrics: [{ label: 'Conversion', value: '+250%' }, { label: 'Niche', value: 'Dominating' }] },
  ];

  useEffect(() => {
    if (!isHovered) {
      const i = setInterval(() => setCurrentIndex((p) => (p + 1) % testimonials.length), 4000);
      return () => clearInterval(i);
    }
  }, [isHovered, testimonials.length]);

  return (
    <section className="relative bg-[#020202] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-[#020202] to-teal-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Success Stories from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">TikTok Creators</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From engagement lifts to viral growth—see how our TikTok automation helps creators and brands win.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          </div>
        </motion.div>

        <div className="relative overflow-hidden max-w-7xl mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="relative overflow-hidden py-6 md:hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...t} isActive />
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden py-8 hidden md:block">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${currentIndex * 33.333}% + 50% - 16.666%))` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-1/3 flex-shrink-0 px-4">
                  <TestimonialCard {...t} isActive={i === currentIndex} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 mb-8 gap-3">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`relative w-4 h-4 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gradient-to-br from-teal-400 to-teal-600 scale-130 border-2 border-teal-400/80 shadow-lg shadow-teal-400/60' : 'bg-transparent border-2 border-white/20 hover:border-white/40 hover:scale-110'}`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white/90' : 'bg-white/60'}`} />
              </button>
            ))}
          </div>

          <button onClick={() => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center hover:bg-white/20 transition-all duration-300 group">
            <svg className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => setCurrentIndex((p) => (p + 1) % testimonials.length)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center hover:bg-white/20 transition-all duration-300 group">
            <svg className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TikTokTestimonials;
