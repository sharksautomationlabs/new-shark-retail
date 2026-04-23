"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import PlexusBackground from '@/components/PlexusBackground';

const ThankYouPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleThankYouClick = () => {
    setShowPopup(true);
  };

  // Floating animation for the background icons
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
        {/* Background Gradient - Black with Greenish theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1a0f] to-[#001a0a] z-0"></div>
        
        {/* Greenish accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-teal-800/10 z-0"></div>
        
        {/* Overlay Texture/Plexus */}
        <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
          <PlexusBackground /> 
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6 order-1"
            >
              <div className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2">
                Retail Automation
              </div>

              {/* Main Headline */}
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Call Locked In — <br className="hidden lg:block"/>
                We&apos;re Prepping Your Dossier
              </h1>

              {/* Body Text */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-medium">
                Congratulations! Your call is booked. We&apos;ll be in touch shortly to confirm the details and prepare for our conversation.
              </p>
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
                  className="absolute top-[15%] sm:top-[10%] left-[15%] sm:left-[10%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-20 drop-shadow-2xl"
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
                  className="absolute bottom-[15%] sm:bottom-[10%] left-[15%] sm:left-[10%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-30 drop-shadow-2xl"
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

      {/* --- Final CTA Section --- */}
      <section className="relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <PlexusBackground />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent z-0"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re excited to speak with you and help you build your hands-off e-commerce business. See you on the call!
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={handleThankYouClick}
                className="inline-flex items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-black transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Thank You
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black border border-teal-400/30 rounded-2xl p-8 sm:p-12 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 w-8 h-8 flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Popup Content */}
              <div className="text-center space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Thanks for Booking!
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Thank you for booking your meeting with us! We&apos;re excited to connect with you and help you build your hands-off e-commerce business. Our team will reach out to you shortly to confirm the details and prepare for our conversation.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default ThankYouPage;