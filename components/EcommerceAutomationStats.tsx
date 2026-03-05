"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const EcommerceAutomationStats: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/sharksretailofficial/30min'
      });
    } else {
      window.open('https://calendly.com/sharksretailofficial/30min', '_blank');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards([]);
            for (let i = 0; i < 3; i++) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, i]);
              }, i * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Stats Data
  const statsData = [
    {
      value: "$4,000",
      label: "Total Profit (Last 30 Days)"
    },
    {
      value: "4x",
      label: "Return on Investment"
    },
    {
      value: "89%",
      label: "Success Rate"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-white text-gray-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
      
      {/* Light accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 via-transparent to-teal-50/20 z-0"></div>
      
      {/* Light glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What you'll get in the{' '}
            <span className="relative inline-block text-teal-600">
              free strategy call?
              {/* Teal Underline */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full translate-y-2"></span>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            In this call, our senior business consultant will guide you step-by-step on how this automation system works and the actionable steps through which we can help accomplish at least $4,000 in sales for you in just 60 days.
          </p>
        </div>

        {/* Secondary Heading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Guaranteed High Profits Within the First Month
          </h3>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`
                relative overflow-hidden
                bg-gradient-to-br from-teal-500 to-teal-700
                rounded-3xl p-10 
                flex flex-col items-center justify-center text-center shadow-xl shadow-teal-900/30
                transform transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-teal-400/40
                ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {/* Decorative background texture */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
              
              <h4 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 drop-shadow-md tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.value}
              </h4>
              <p className="text-teal-50 font-medium text-lg tracking-wide opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="flex justify-center">
          <button 
            onClick={openCalendly}
            className="group relative flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/40 hover:scale-105 font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="font-bold text-lg uppercase tracking-wider">Book Now</span>
            <div className="bg-white/20 rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationStats;

