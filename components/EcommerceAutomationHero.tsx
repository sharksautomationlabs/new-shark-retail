"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EcommerceAutomationHero: React.FC = () => {
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

  // Animation variants for floating icons
  const floatAnimation = (delay: number) => ({
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      y: {
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
        repeatType: "loop" as const
      },
      rotate: {
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
        repeatType: "loop" as const
      }
    }
  });

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60" // Opacity set to blend with overlays
        >
          <source src="/videos/banner-ecommerce.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay to ensure text readability over video */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Greenish accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-teal-800/10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6 order-1"
          >
            {/* ECOM SHARK Label */}
            <div className="text-teal-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">
              SHARK RETAIL
            </div>

            {/* Main Headline */}
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-[46px] xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              The Only E-commerce Investment
              with a <span style={{ color: 'oklch(77.7% 0.152 181.912)' }}>Guaranteed Return</span>
            </h1>

            {/* Body Text */}
            <p className="text-xs sm:text-sm md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
              The Done-For-You System That Gets You to $4,000 in 30 Days—or We Work for Free.
            </p>

            {/* Sub-text / CTA Prompt */}
            <p className="text-[10px] sm:text-xs md:text-base text-teal-400 font-semibold">
              Curious now? Book a meeting with one of our senior consultants today.
            </p>

            {/* Button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center bg-teal-400 text-[#0a2e38] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-wider rounded-full transition-all hover:bg-white hover:scale-105 shadow-lg hover:shadow-teal-400/50"
              >
                Book Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Floating 3D Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-2 flex items-center justify-center perspective-1000"
          >
            {/* Container for images to keep them grouped in square shape */}
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-full flex items-center justify-center">

              {/* Amazon Logo (Top Left) */}
              <motion.div
                animate={floatAnimation(0)}
                className="absolute top-[15%] sm:top-[10%] left-[15%] sm:left-[10%] lg:left-[-20px] xl:left-[10%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-20 drop-shadow-2xl"
              >
                <img
                  src="/images/hero-amazon-logo.png"
                  alt="Amazon"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </motion.div>

              {/* Walmart Logo (Top Right) */}
              <motion.div
                animate={floatAnimation(1.5)}
                className="absolute top-[15%] sm:top-[10%] right-[15%] sm:right-[10%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-10 drop-shadow-2xl"
              >
                <img
                  src="/images/hero-walmart-logo.png"
                  alt="Walmart"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </motion.div>

              {/* Shopify Logo (Bottom Left) */}
              <motion.div
                animate={floatAnimation(0.5)}
                className="absolute bottom-[15%] sm:bottom-[10%] left-[15%] sm:left-[10%] lg:left-[-18px] xl:left-[10%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-30 drop-shadow-2xl"
              >
                <img
                  src="/images/hero-shopify-logo.png"
                  alt="Shopify"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </motion.div>

              {/* TikTok Logo (Bottom Right) */}
              <motion.div
                animate={floatAnimation(2)}
                className="absolute bottom-[15%] sm:bottom-[10%] right-[15%] sm:right-[10%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-20 drop-shadow-2xl"
              >
                <img
                  src="/images/hero-tiktok-logo.png"
                  alt="TikTok"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationHero;