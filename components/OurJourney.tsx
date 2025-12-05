"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface OurJourneyProps {
  showVideo?: boolean;
  hideRoiText?: boolean;
  // New props for customization
  hideBadge?: boolean; 
  customTitle?: string;
}

const OurJourney: React.FC<OurJourneyProps> = ({ 
  showVideo = false, 
  hideRoiText = false,
  hideBadge = false,
  customTitle = ""
}) => {
  useEffect(() => {
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

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-l from-teal-50/30 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Conditional Badge Rendering */}
            {!hideBadge && (
              <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
                <MessageCircle className="w-4 h-4 text-teal-700" />
                <span className="text-sm font-semibold text-teal-800 tracking-wide">
                  Our Story
                </span>
              </div>
            )}

            {/* Conditional Title Rendering */}
            {customTitle ? (
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                 {customTitle}
               </h2>
            ) : (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                From Managing Millions to{' '}
                <span className="text-teal-600 block mt-2">Democratizing E-Commerce</span>
              </h2>
            )}

            {/* Text Content */}
            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Most ideas start small, but we started with a <span className="font-semibold text-teal-600">monumental proof of concept</span>. 
                  Our co-founders, hailing from the world of investment and asset management, were tasked with a unique challenge: 
                  guiding Fortune 500 clients to invest in the burgeoning e-commerce ecosystem.
                </p>
                
                {!hideRoiText && (
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                    <p className="font-semibold text-teal-800">
                      The result? They spearheaded investments that generated a staggering{' '}
                      <span className="text-xl font-bold">$1 million in ROI</span>.
                    </p>
                  </div>
                )}
                
                <p>
                  That was the birth of <span className="font-bold text-teal-600">Shark Automation Labs</span>. We decided to harness our expertise 
                  to make the trillion-dollar e-commerce industry accessible to everyone.
                </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="group inline-flex items-center gap-3 bg-teal-400 hover:bg-teal-500 text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-200 cursor-pointer"
              >
                <span className="font-bold text-lg uppercase tracking-wider">Let&apos;s Talk</span>
                <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5 text-teal-600" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Visual Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // Optimized height for 320px mobile up to 1440px desktop
            className={`order-1 lg:order-2 ${showVideo ? 'h-full min-h-[250px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center' : ''}`}
          >
            {showVideo ? (
              /* Video Container */
              <div 
                className="relative w-full h-auto overflow-hidden bg-white"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0px 0px 25px #ccc'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[20px]"
                >
                  <source src="/videos/hero-vid-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              /* Investment Growth Visualization (Default) */
              <div className="relative bg-gradient-to-br from-teal-50 to-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl border border-teal-100 h-full flex flex-col justify-center">
                <div className="space-y-6 md:space-y-8">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Investment Growth</h3>
                    <p className="text-sm md:text-base text-gray-600">Fortune 500 E-Commerce Investments</p>
                  </div>
                  
                  {/* Chart Bars */}
                  <div className="space-y-5">
                    {/* Reusable Bar Logic for cleanliness */}
                    {[
                      { year: 'Year 1', width: '25%', amount: '$250K', delay: 0.5 },
                      { year: 'Year 2', width: '50%', amount: '$500K', delay: 0.7 },
                      { year: 'Year 3', width: '75%', amount: '$750K', delay: 0.9 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between gap-3 md:gap-4">
                        <span className="text-xs md:text-sm font-medium text-gray-600 w-10 md:w-12">{item.year}</span>
                        <div className="flex-1 h-3 bg-teal-100/50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.width }}
                            transition={{ duration: 1, delay: item.delay }}
                            className="h-full bg-teal-400 rounded-full"
                          ></motion.div>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-gray-700 w-14 md:w-16 text-right">{item.amount}</span>
                      </div>
                    ))}

                    <div className="flex items-center justify-between gap-3 md:gap-4">
                      <span className="text-xs md:text-sm font-bold text-teal-800 w-10 md:w-12">Now</span>
                      <div className="flex-1 h-4 bg-teal-100/50 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 1.1 }}
                          className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                        ></motion.div>
                      </div>
                      <span className="text-xs md:text-sm font-extrabold text-teal-600 w-14 md:w-16 text-right">$1M+</span>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 p-4 md:p-6 bg-teal-50 rounded-2xl border border-teal-100">
                    <p className="text-xs md:text-sm text-teal-800 font-semibold uppercase tracking-wider">
                      Total ROI Generated
                    </p>
                    <p className="text-2xl md:text-4xl font-extrabold text-teal-600 mt-2">$1 Million</p>
                  </div>
                </div>
              </div>
            )}
            
            {!showVideo && (
              <>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-teal-400/20 rounded-full animate-pulse blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-300/20 rounded-full animate-pulse blur-xl" style={{animationDelay: '1s'}}></div>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;