'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ShieldCheck, ArrowRight, Star, Phone, BadgeCheck } from 'lucide-react';
import {
  VideoReviewsGrid,
  FunnelReviewCardsGrid,
  REVIEW_PLATFORM_LINKS,
} from '@/components/PlatformReviewsSection';
import {
  proofDisclaimer,
  heroContent,
  footerContent,
} from '@/lib/ecomwealthContent';
import {
  FUNNEL_BRAND_NAME,
  FUNNEL_CONTACT_EMAIL,
  FUNNEL_CONTACT_MAILTO,
  FUNNEL_CONTACT_PHONE_DISPLAY,
  FUNNEL_CONTACT_PHONE_TEL,
  FUNNEL_LOGO_SRC,
} from '@/lib/funnelBrand';

const CALENDLY_URL = `https://calendly.com/theretailautomation/30min?month=${new Date().toISOString().slice(0, 7)}`;

const ratingBreakdown = [
  { score: '4.9', label: 'Quality of Work' },
  { score: '5.0', label: 'Value for Cost' },
  { score: '4.7', label: 'On-Time Delivery' },
  { score: '4.7', label: 'Willing to Refer Us' },
] as const;

const objections = [
  {
    id: 'obj-1',
    question: '“What if I invest and nothing happens?”',
    answer: `That's exactly why our incentives are tied to your results. We target $4,000+ in trackable sales in your first 30 days after launch — and if your store doesn't generate more than your initial investment, we keep managing it at no additional cost until it does. We only win when your store wins.`,
  },
  {
    id: 'obj-2',
    question: '“Will you disappear once my store is live?”',
    answer: `No. Launch is where our work starts, not where it ends. Our team runs the day-to-day operations — sourcing, fulfillment, customer support, and optimization — with dashboard access and regular performance reporting, so you can see exactly what's happening at any time.`,
  },
  {
    id: 'obj-3',
    question: '“I have zero eCommerce experience. Is this really for me?”',
    answer: `Yes — that's who this is built for. This is a 100% done-for-you service for investors and business owners, not a course you have to figure out. Most partners spend roughly 30–60 minutes a week reviewing performance and approving the occasional decision. We handle the rest.`,
  },
  {
    id: 'obj-4',
    question: '“How do I know these reviews are real?”',
    answer: `Don't take our word for it — every platform below is independent, and we can't edit or remove what clients write there. Read our profiles on Trustpilot, Reviews.io, Clutch, Bark, and ProvenExpert, and watch the unscripted client videos on this page. Verify everything yourself.`,
  },
] as const;

/** 5-star row with fractional fill (e.g. 4.7 → 94% gold). */
function Stars({ value = 5, size = 'md' }: { value?: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizing = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const row = (cls: string) => (
    <div className={`flex gap-0.5 ${cls}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={sizing} fill="currentColor" strokeWidth={0} aria-hidden />
      ))}
    </div>
  );
  return (
    <div className="relative inline-block" role="img" aria-label={`${value} out of 5 stars`}>
      {row('text-slate-200')}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${(value / 5) * 100}%` }}>
        {row('text-amber-400')}
      </div>
    </div>
  );
}

/** Subtle scroll-reveal wrapper — fades content up the first time it enters view. */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-teal-600 font-semibold text-base lg:text-lg uppercase tracking-[0.22em] mb-3"
      style={{ fontFamily: 'var(--font-barlow)' }}
    >
      {children}
    </p>
  );
}

export default function ReviewsPage() {
  const openCalendly = () => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as {
      Calendly?: {
        initPopupWidget: (opts: { url: string; onEventScheduled?: () => void }) => void;
      };
    };
    w.Calendly?.initPopupWidget({
      url: CALENDLY_URL,
      onEventScheduled: () => {
        window.location.assign('/thank-you');
      },
    });
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-700 overflow-x-hidden">
      {/* Header — logo + back to home */}
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-5 lg:px-20 py-4 flex items-center justify-between">
          <Link href="/" className="inline-block">
            <div className="relative w-[140px] h-[46px] lg:w-[180px] lg:h-[58px]">
              <Image
                src={FUNNEL_LOGO_SRC}
                alt={FUNNEL_BRAND_NAME}
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 1024px) 140px, 180px"
              />
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm lg:text-base font-semibold text-slate-600 hover:text-teal-600 transition-colors"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-white pt-12 lg:pt-20 pb-10 lg:pb-14 overflow-hidden border-b border-slate-200">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-3xl" />
        <div className="container mx-auto px-5 lg:px-20 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center">
            <SectionEyebrow>Client Reviews</SectionEyebrow>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-[1.08] tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Still Skeptical? Good.
              <br />
              <span className="text-teal-600">Verify Everything Yourself.</span>
            </h1>
            <p
              className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              {`Every review of ${FUNNEL_BRAND_NAME} on this page is backed by independent platforms we can't edit and real clients on camera. Don't trust our website — check the sources.`}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#video-reviews"
                className="w-full max-w-xs sm:w-auto sm:max-w-none inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-teal-500/25"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Watch Client Videos
              </a>
              <a
                href="#verify"
                className="w-full max-w-xs sm:w-auto sm:max-w-none inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-teal-700 font-bold py-4 px-8 rounded-full transition-all border-2 border-teal-500"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                <ShieldCheck className="w-4 h-4" />
                Verify Us Independently
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overall rating + breakdown */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-5 lg:px-20">
          <Reveal className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg px-6 py-8 lg:px-12 lg:py-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="text-center flex-shrink-0">
                  <p
                    className="text-6xl lg:text-7xl font-bold text-slate-900 leading-none mb-3"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    4.7<span className="text-2xl lg:text-3xl text-slate-400 font-semibold"> / 5</span>
                  </p>
                  <Stars value={4.7} size="lg" />
                  <p
                    className="mt-3 text-sm text-slate-500"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    Average across independent platforms
                  </p>
                </div>
                <div className="hidden lg:block w-px self-stretch bg-slate-200" />
                <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                  {ratingBreakdown.map((metric) => (
                    <div key={metric.label} className="text-center lg:text-left">
                      <p
                        className="text-2xl lg:text-3xl font-bold text-teal-600"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {metric.score}
                        <span className="text-base text-slate-400 font-semibold"> / 5</span>
                      </p>
                      <p
                        className="text-sm lg:text-base text-slate-600 font-medium"
                        style={{ fontFamily: 'var(--font-barlow)' }}
                      >
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Independent verification platforms */}
      <section id="verify" className="py-16 lg:py-24 bg-white scroll-mt-6">
        <div className="container mx-auto px-5 lg:px-20">
          <Reveal className="text-center mb-10 lg:mb-12">
            <SectionEyebrow>Verify Us Independently</SectionEyebrow>
            <h2
              className="text-3xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Our Reviews Live On Platforms
              <br className="hidden sm:block" />
              <span className="text-teal-600"> We Don&apos;t Control.</span>
            </h2>
            <p
              className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Click any profile below. These are live, third-party pages — we can&apos;t edit, filter,
              or delete what clients say there.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {REVIEW_PLATFORM_LINKS.map((platform, i) => (
              <Reveal key={platform.name} delay={i * 0.04}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border border-slate-200 shadow-sm rounded-2xl px-5 py-5 transition-all hover:border-teal-300 hover:shadow-md"
                >
                  <Image
                    src={platform.iconSrc}
                    alt={`${platform.name} logo`}
                    width={40}
                    height={40}
                    className="rounded-full flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <p
                      className="text-lg font-semibold text-slate-900"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {platform.name}
                    </p>
                    <p
                      className="flex items-center gap-1 text-sm text-teal-600 font-medium"
                      style={{ fontFamily: 'var(--font-barlow)' }}
                    >
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verified profile
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video reviews */}
      <section id="video-reviews" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 scroll-mt-6">
        <div className="container mx-auto px-5 lg:px-20">
          <Reveal className="text-center mb-10">
            <SectionEyebrow>On Camera</SectionEyebrow>
            <h2
              className="text-3xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Real Clients. Real Faces. <span className="text-teal-600">On Camera.</span>
            </h2>
            <p
              className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Unscripted recordings from real partners. No actors. No paid endorsements.
            </p>
          </Reveal>
          <VideoReviewsGrid />
        </div>
      </section>

      {/* Written reviews — screenshots straight from the review platforms */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-5 lg:px-20">
          <Reveal className="text-center mb-10 lg:mb-12">
            <SectionEyebrow>In Their Words</SectionEyebrow>
            <h2
              className="text-3xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              What Partners Say About
              <br className="hidden sm:block" />
              <span className="text-teal-600"> Working With Us</span>
            </h2>
            <p
              className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Straight from the review platforms — exactly as clients wrote them.
            </p>
          </Reveal>
          <FunnelReviewCardsGrid />
          <p
            className="text-center text-slate-500 text-xs leading-relaxed max-w-3xl mx-auto mt-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            {proofDisclaimer}
          </p>
        </div>
      </section>

      {/* Objection Q&A — the questions skeptics actually ask */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-5 lg:px-20">
          <Reveal className="text-center mb-10 lg:mb-14">
            <SectionEyebrow>Fair Questions</SectionEyebrow>
            <h2
              className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              The Questions Skeptics Ask Us —
              <br className="hidden sm:block" />
              <span className="text-teal-600"> Answered Straight.</span>
            </h2>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-5">
            {objections.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl px-6 py-6 lg:px-8 lg:py-7">
                  <h3
                    className="text-xl lg:text-2xl font-bold text-slate-900 mb-3"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {item.question}
                  </h3>
                  <p
                    className="text-base lg:text-lg text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="max-w-3xl mx-auto mt-8">
            <p
              className="text-center text-xs lg:text-sm text-slate-500 leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              {heroContent.performanceDisclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guarantee / final CTA */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-teal-200/40 rounded-full blur-3xl" />
        <div className="container mx-auto px-5 lg:px-20 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionEyebrow>Zero-Risk Next Step</SectionEyebrow>
            <h2
              className="text-4xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Hit $4,000+ In Your First 30 Days —
              <br />
              <span className="text-teal-600">Or We Keep Working For Free.</span>
            </h2>
            <p
              className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              If your store doesn&apos;t generate more than your initial investment, we keep managing
              it at no additional cost until it does. No pressure, no obligation — just a
              conversation to see if this is the right fit for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5">
              <a
                href={FUNNEL_CONTACT_PHONE_TEL}
                className="w-full max-w-xs sm:w-auto sm:max-w-none inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-teal-700 font-bold py-4 px-8 rounded-full transition-all border-2 border-teal-500"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                <Phone className="w-4 h-4" />
                {FUNNEL_CONTACT_PHONE_DISPLAY}
              </a>
              <button
                type="button"
                onClick={openCalendly}
                className="w-full max-w-xs sm:w-auto sm:max-w-none inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 sm:px-10 text-base sm:text-lg rounded-full transition-all shadow-lg shadow-teal-500/25"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                Claim Your Free Consultation
              </button>
            </div>
            <p
              className="text-xs lg:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              {heroContent.performanceDisclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-10 lg:py-14">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {footerContent.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-teal-600 text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-8 mb-6 text-center">
            <a
              href={FUNNEL_CONTACT_MAILTO}
              className="text-teal-600 hover:text-teal-300 font-semibold text-sm sm:text-base transition-colors"
            >
              {FUNNEL_CONTACT_EMAIL}
            </a>
            <a
              href={FUNNEL_CONTACT_PHONE_TEL}
              className="text-slate-900 font-semibold text-sm sm:text-base hover:text-teal-600 transition-colors"
            >
              {FUNNEL_CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <p className="text-slate-500 text-sm text-center mb-6">{footerContent.copyright}</p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {footerContent.disclaimers.map((d, i) => (
              <p key={i} className="text-slate-600 text-xs leading-relaxed">
                {d}
              </p>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
