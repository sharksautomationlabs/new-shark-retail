'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/ecomwealthContent';

interface EcomWealthFAQProps {
  items: FAQItem[];
  reducedMotion?: boolean;
}

export default function EcomWealthFAQ({ items, reducedMotion: propReducedMotion }: EcomWealthFAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = propReducedMotion ?? prefersReducedMotion ?? false;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between gap-4 py-4 px-6 text-left hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080c]"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="text-base lg:text-lg font-semibold text-white">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-teal-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <motion.div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              initial={false}
              animate={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.3, ease: 'easeInOut' }
              }
              className="overflow-hidden"
            >
              <div className="px-6 pb-4 pt-0 text-slate-300 text-sm lg:text-base leading-relaxed border-t border-white/10">
                {item.answer}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
