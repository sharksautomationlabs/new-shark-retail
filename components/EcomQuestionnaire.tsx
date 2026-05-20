'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, ArrowLeft, Loader2 } from 'lucide-react';
import { FUNNEL_BRAND_NAME } from '@/lib/funnelBrand';

type QuizAnswers = Record<string, string>;

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
      "Immediately — I'm ready right now",
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

const TOTAL_STEPS = QUESTIONS.length + 1; // +1 for contact info step

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

type ContactInfo = { name: string; email: string; phone: string };

// ── Contact Info Step ────────────────────────────────────────────────────────

function ContactStep({
  onSubmit,
  onBack,
  submitting,
}: {
  onSubmit: (info: ContactInfo) => void;
  onBack: () => void;
  submitting: boolean;
}) {
  const [info, setInfo] = useState<ContactInfo>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Partial<ContactInfo>>({});

  function validate() {
    const e: Partial<ContactInfo> = {};
    if (!info.name.trim()) e.name = 'Please enter your name.';
    if (!info.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email))
      e.email = 'Please enter a valid email.';
    if (!info.phone.trim() || info.phone.replace(/\D/g, '').length < 7)
      e.phone = 'Please enter a valid phone number.';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onSubmit(info);
  }

  function field(
    key: keyof ContactInfo,
    label: string,
    type: string,
    placeholder: string
  ) {
    return (
      <div className="mb-4">
        <label
          className="block text-sm font-semibold text-slate-300 mb-1.5"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          {label} <span className="text-teal-400">*</span>
        </label>
        <input
          type={type}
          value={info[key]}
          onChange={(e) => {
            setInfo((p) => ({ ...p, [key]: e.target.value }));
            setErrors((p) => ({ ...p, [key]: undefined }));
          }}
          placeholder={placeholder}
          className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/60 transition-all ${
            errors[key] ? 'border-red-500/70' : 'border-white/10 focus:border-teal-400/50'
          }`}
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
        {errors[key] && (
          <p className="mt-1 text-red-400 text-xs" style={{ fontFamily: 'var(--font-barlow)' }}>
            {errors[key]}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      key="contact"
      custom={1}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.28, ease: 'easeInOut' }}
    >
      <p
        className="text-white text-xl lg:text-2xl font-semibold text-center mb-2"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Almost there — where should we send your results?
      </p>
      <p
        className="text-slate-500 text-sm text-center mb-6"
        style={{ fontFamily: 'var(--font-barlow)' }}
      >
        {FUNNEL_BRAND_NAME} will reach out within 24 hours to confirm your call.
      </p>

      {field('name', 'Full Name', 'text', 'John Smith')}
      {field('email', 'Email Address', 'email', 'john@email.com')}
      {field('phone', 'Phone Number', 'tel', '+1 (555) 000-0000')}

      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-sm transition-colors disabled:opacity-40"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 disabled:opacity-60 disabled:cursor-wait text-black font-bold py-3 px-7 rounded-full transition-all"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              See My Results
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function EcomQuestionnaire({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isContactStep = step === QUESTIONS.length;
  const current = QUESTIONS[step];
  const progressPct = ((step + 1) / TOTAL_STEPS) * 100;

  function handleSelect(option: string) {
    setSelected(option);
  }

  function handleNext() {
    if (!selected) return;
    setAnswers((prev) => ({ ...prev, [current.id]: selected }));
    setSelected(null);
    setDirection(1);
    setStep((s) => s + 1);
  }

  function handleBack() {
    if (step === 0) return;
    setDirection(-1);
    const prevStep = step - 1;
    setStep(prevStep);
    if (prevStep < QUESTIONS.length) {
      setSelected(answers[QUESTIONS[prevStep].id] ?? null);
    }
  }

  async function handleContactSubmit(info: ContactInfo) {
    setSubmitting(true);
    try {
      await fetch('/api/quiz-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...info, answers }),
      });
    } catch {
      // proceed regardless — don't block the user
    } finally {
      setSubmitting(false);
      setDone(true);
    }
  }

  // ── Done screen ──
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
          Pick a time below for your free 30-minute strategy call.
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
          No obligation. 100% free. Our team will also contact you within 24 hours.
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
            {isContactStep ? 'Last step' : `Question ${step + 1} of ${QUESTIONS.length}`}
          </span>
          <span
            className="text-xs text-teal-400 font-semibold"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            {Math.round(progressPct)}% complete
          </span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-teal-400 rounded-full"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Contact info step */}
      <AnimatePresence mode="wait" custom={direction}>
        {isContactStep ? (
          <ContactStep
            key="contact"
            onSubmit={handleContactSubmit}
            onBack={handleBack}
            submitting={submitting}
          />
        ) : (
          /* Quiz question step */
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
                          isSelected ? 'border-teal-400 bg-teal-400' : 'border-white/30'
                        }`}
                      />
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

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
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
