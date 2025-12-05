"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const EcommerceAutomationStrategyCall: React.FC = () => {
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
              }, i * 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Updated Data with Prices as requested
  const deliverables = [
    {
      title: "Comprehensive Audit",
      description: "Full analysis of your current store performance and gaps.",
    },
    {
      title: "Custom Roadmap",
      description: "Step-by-step automation strategy tailored to your niche.",
    },
    {
      title: "Competitor Analysis",
      description: "Deep dive into what your top competitors are doing right.",
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Gradient - Black with Greenish theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1a0f] to-[#001a0a] z-0"></div>
      
      {/* Greenish accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-teal-800/10 z-0"></div>
      
      {/* Light glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-teal-400/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-teal-400/20 mb-4">
             <span className="text-sm font-medium text-teal-400">Call Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What you'll get in the free strategy call
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            No fluff, just actionable insights worth thousands of dollars, completely free for a limited time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className={`
                bg-black/40 border border-teal-400/20 rounded-2xl p-8 
                flex flex-col h-full hover:bg-black/60 hover:border-teal-400/40 transition-all duration-500 ease-in-out
                ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {/* Icon */}
              <div className="mb-6">
                <CheckCircle className="w-10 h-10 text-teal-400" />
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Price and CTA */}
              <div className="pt-6 border-t border-teal-400/20 space-y-4">
                <button 
                  onClick={openCalendly}
                  className="w-full bg-teal-400 hover:bg-teal-300 text-black font-bold py-3 px-6 rounded-full flex items-center justify-between group transition-colors duration-300"
                >
                  <span>Book Now</span>
                  <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default EcommerceAutomationStrategyCall;