"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const OurJourney: React.FC = () => {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-l from-teal-50/30 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Story Content (Layout changed to Left Align) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Badge (Added to match layout) */}
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
              <MessageCircle className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-semibold text-teal-800 tracking-wide">
                Our Story
              </span>
            </div>

            {/* Heading (Left Aligned now) */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              From Managing Millions to{' '}
              <span className="text-teal-600 block mt-2">Democratizing E-Commerce</span>
            </h2>

            {/* Text Content (Same as provided) */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Most ideas start small, but we started with a <span className="font-semibold text-teal-600">monumental proof of concept</span>. 
                  Our co-founders, hailing from the world of investment and asset management, were tasked with a unique challenge: 
                  guiding Fortune 500 clients to invest in the burgeoning e-commerce ecosystem.
                </p>
                
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                  <p className="font-semibold text-teal-800">
                    The result? They spearheaded investments that generated a staggering{' '}
                    <span className="text-xl font-bold">$1 million in ROI</span>.
                  </p>
                </div>
                
                <p>
                  That was the birth of <span className="font-bold text-teal-600">Shark Automation Labs</span>. We decided to harness our expertise 
                  to make the trillion-dollar e-commerce industry accessible to everyone.
                </p>
            </div>

            {/* Button (Moved from Floating side to Bottom to match Layout) */}
            <div className="pt-2">
              <a href="/contact" className="group inline-flex items-center gap-3 bg-teal-400 hover:bg-teal-500 text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-200 cursor-pointer">
                <span className="font-bold text-lg uppercase tracking-wider">Let&apos;s Talk</span>
                <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5 text-teal-600" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Visual Elements (Chart kept same, but styled as a Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Investment Growth Visualization Container */}
            <div className="relative bg-gradient-to-br from-teal-50 to-white p-8 rounded-[40px] shadow-2xl border border-teal-100 h-full flex flex-col justify-center">
              
              {/* Chart-like visualization */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Growth</h3>
                  <p className="text-gray-600">Fortune 500 E-Commerce Investments</p>
                </div>
                
                {/* Animated bars */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-600 w-12">Year 1</span>
                    <div className="flex-1 h-3 bg-teal-100/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "25%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-teal-400 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-sm font-bold text-gray-700 w-16 text-right">$250K</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-600 w-12">Year 2</span>
                    <div className="flex-1 h-3 bg-teal-100/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-teal-400 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-sm font-bold text-gray-700 w-16 text-right">$500K</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-600 w-12">Year 3</span>
                    <div className="flex-1 h-3 bg-teal-100/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-teal-400 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-sm font-bold text-gray-700 w-16 text-right">$750K</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-teal-800 w-12">Now</span>
                    <div className="flex-1 h-4 bg-teal-100/50 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-sm font-extrabold text-teal-600 w-16 text-right">$1M+</span>
                  </div>
                </div>
                
                {/* ROI Highlight Box */}
                <div className="text-center mt-6 p-6 bg-teal-50 rounded-2xl border border-teal-100">
                  <p className="text-sm text-teal-800 font-semibold uppercase tracking-wider">
                    Total ROI Generated
                  </p>
                  <p className="text-4xl font-extrabold text-teal-600 mt-2">$1 Million</p>
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Circles (Kept from original) */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-teal-400/20 rounded-full animate-pulse blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-300/20 rounded-full animate-pulse blur-xl" style={{animationDelay: '1s'}}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;