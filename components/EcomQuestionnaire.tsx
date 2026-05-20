'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import { FUNNEL_BRAND_NAME } from '@/lib/funnelBrand';

type Question = {
  id: string;
  question: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    id: 'capital',
    question: 'What is your available investment capital?',
    options: [
      'Under $5,000',
      '$5,000 – $10,000',
      '$10,000 – $25,000',
      '$25,000 or more',
    ],
  },
  {
    id: 'experience',
    question: 'What is your e-commerce experience level?',
    options: [
      'Complete beginner – never sold online',
      'Tried before but had no success',
      'Some experience, want to grow',
      'Already running a store',
    ],
  },
  {
    id: 'goal',
    question: 'What is your monthly income goal?',
    options: [
      '$2,000 – $5,000 / month',
      '$5,000 – $10,000 / month',
      '$10,000 – $25,000 / month',
      '$25,000+ / month',
    ],
  },
  {
    id: 'platform',
    question: 'Which platform are you most interested in?',
    options: [
      'Amazon FBA',
      'TikTok Shop',
      'Shopify / DTC',
      'Multiple platforms',
    ],
  },
  {
    id: 'timeline',
    question: 'How soon are you ready to get started?',
    options: [
      'Immediately — I\'m ready right now',
      'Within the next 30 days',
      'Within 1–3 months',
      'Just exploring my options',
    ],
  },
  {
    id: 'motivation',
    question: 'What is your biggest goal right now?',
    options: [
      'Build a passive income stream',
      'Replace my 9-to-5 job completely',
      'Scale an existing business',
      'Generate extra income on the side',
    ],
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function EcomQuestionnaire({
  onComplete,
}: {
  /** Called when user finishes — parent scrolls to Calendly */
  onComplete: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const progress = ((step) / total) * 100;

  function handleSelect(option: string) {
    setSelected(option);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [current.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (step + 1 < total) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
    setSelected(answers[QUESTIONS[step - 1].id] ?? null);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center py-6"
      >
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-teal-400/15 flex items-center justify-center ring-2 ring-teal-400/40">
            <CheckCircle className="w-10 h-10 text-teal-400" />
          </div>
        </div>
        <h3
          className="text-3xl lg:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Congratulations — You Qualify!
        </h3>
        <p
          className="text-slate-400 text-base lg:text-lg mb-2 max-w-xl mx-auto"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          Based on your answers, {FUNNEL_BRAND_NAME} can build and scale a
          profitable e-commerce store for you.
        </p>
        <p
          className="text-teal-400 font-semibold text-base mb-8"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          The next step is a free 30-minute strategy call with our team.
        </p>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-black font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg shadow-teal-500/30"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          Book My Free Strategy Call
          <ChevronRight className="w-5 h-5" />
        </button>
        <p
          className="mt-4 text-slate-500 text-sm"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          No obligation. 100% free. Our team will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <p
          className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          60-Second Qualification
        </p>
        <h3
          className="text-2xl lg:text-3xl font-bold text-white"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Find Out If You Qualify for {FUNNEL_BRAND_NAME}
        </h3>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1.5">
          <span
            className="text-xs text-slate-500"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Question {step + 1} of {total}
          </span>
          <span
            className="text-xs text-teal-400 font-semibold"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            {Math.round(((step + 1) / total) * 100)}% complete
          </span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-teal-400 rounded-full"
            initial={{ width: `${progress}%` }}
            animate={{ width: `${((step + 1) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.28, ease: 'easeInOut' }}
        >
          <p
            className="text-white text-xl lg:text-2xl font-semibold text-center mb-5"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {current.question}
          </p>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {current.options.map((option) => {
              const isSelected = selected === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-teal-400/15 border-teal-400 text-teal-300 ring-1 ring-teal-400/60'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-teal-400/50 hover:bg-teal-400/5 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'border-teal-400 bg-teal-400'
                          : 'border-white/30'
                      }`}
                    />
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 0}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-sm disabled:opacity-0 transition-colors"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={!selected}
          className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold py-3 px-7 rounded-full transition-all"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          {step + 1 === total ? 'See My Results' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
