"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

const EcommerceAutomationTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Successful Investor",
      quote: "I was skeptical at first, but Ecom Sharks delivered exactly what they promised. My store is truly hands-off and the returns are amazing. It's a game-changer!",
      stars: 5
    },
    {
      name: "Sarah Lee",
      role: "Entrepreneur",
      quote: "The passive income is real! I've been able to focus on my main job while my e-commerce store generates profit in the background. Couldn't be happier with the results.",
      stars: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Business Owner",
      quote: "Ecom Sharks transformed my business completely. The automation system works flawlessly and I'm seeing consistent profits every month. Best investment I've ever made!",
      stars: 5
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Agar PlexusBackgroundWhite component apke pas hai to ye render hoga */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
         <PlexusBackgroundWhite />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent z-0"></div>
      
      {/* Floating Side Button (Optional based on previous code) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
             Success Stories
           </h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             See what our partners are saying about their automation journey.
           </p>
        </div>

        {/* Updated Grid for 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex flex-col h-full"
            >
              {/* Header: Avatar, Name, Role */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-teal-600 font-medium">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed italic flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationTestimonials;