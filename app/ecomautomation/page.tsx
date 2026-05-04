'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Play } from 'lucide-react';
import EcomWealthFAQ from '@/components/EcomWealthFAQ';
import PlatformReviewsSection from '@/components/PlatformReviewsSection';
import {
  heroContent,
  trustStripContent,
  applyCtaContent,
  footerContent,
} from '@/lib/ecomwealthContent';
import CalendlyInlineEmbed from '@/components/CalendlyInlineEmbed';
import {
  FUNNEL_BRAND_NAME,
  FUNNEL_CONTACT_EMAIL,
  FUNNEL_CONTACT_MAILTO,
  FUNNEL_CONTACT_PHONE_DISPLAY,
  FUNNEL_CONTACT_PHONE_TEL,
  FUNNEL_LOGO_SRC,
} from '@/lib/funnelBrand';

const faqItems = [
  { id: 'faq-1', question: 'Can you really guarantee $4,000 in sales in 30 days?', answer: 'Yes, it is 110% true. We provide this guarantee because of our tested, high profit products and our proven system. We don\'t guess, we execute with data. That is why we are more than confident in hitting that target for your store.' },
  { id: 'faq-2', question: 'What happens on this call?', answer: 'We build a high level blueprint for your brand if you have an existing one or a launch plan if you are starting fresh. We find where you are losing money and create a roadmap to dominate your niche. You leave with total clarity.' },
  { id: 'faq-3', question: 'Is there a catch or a fee?', answer: 'Not at all. This session is free because we believe in showing value first. If we see a big opportunity to grow your store together, we can discuss a partnership, but there is zero pressure.' },
  { id: 'faq-4', question: 'Is my business the right fit?', answer: 'We work with founders and investors ready to stop playing small. Whether you are scaling an existing brand or starting today, this is for owners who prioritize aggressive growth on platforms like TikTok and Shopify.' },
  { id: 'faq-5', question: 'How do I prepare?', answer: 'Find a quiet space and bring a notepad. If you have an existing brand, have your store data ready. We want to give you the best advice possible so please show up focused and ready to work.' },
  { id: 'faq-6', question: 'Can I reschedule my time?', answer: 'Our calendar fills up fast. If something comes up, use the link in your email to reschedule at least 24 hours in advance. This lets another hungry entrepreneur take your spot.' },
  { id: 'faq-7', question: 'Who am I speaking with?', answer: 'You are talking to a senior strategist from The Retail Automation team. These are real experts who scale stores every day. No fluff and no beginners, just pros who know how to win.' },
];

const CALENDLY_URL_DEFAULT = 'https://calendly.com/ecomsharkss-info/30min';
const CALENDLY_URL_ECOMMERCE_AUTOMATION = 'https://calendly.com/theretailautomation-info/30min';

function isEcommerceAutomationPath(pathname: string | null) {
  if (!pathname) return false;
  return pathname === '/ecommerce-automation' || pathname.startsWith('/ecommerce-automation/');
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

function LazyYouTube({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsInView(true), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full bg-black rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      {isInView ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#020205]">
          <Play className="w-12 h-12 text-teal-400/60" />
        </div>
      )}
    </div>
  );
}

export default function EcomAutomationPage() {
  const pathname = usePathname();
  const calendlyUrl = isEcommerceAutomationPath(pathname) ? CALENDLY_URL_ECOMMERCE_AUTOMATION : CALENDLY_URL_DEFAULT;

  const openCalendly = () => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as {
      Calendly?: {
        initPopupWidget: (opts: { url: string; onEventScheduled?: () => void }) => void;
      };
    };
    w.Calendly?.initPopupWidget({
      url: calendlyUrl,
      onEventScheduled: () => {
        window.location.assign('/thank-you');
      },
    });
  };

  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  useEffect(() => { if (heroInView) heroControls.start('visible'); }, [heroControls, heroInView]);

  return (
    <div className="w-full min-h-screen bg-[#020205] text-slate-200 overflow-x-hidden">
      {/* Hero */}
      <div ref={heroRef} className="relative bg-[#020205] pt-4 lg:pt-8 pb-8 lg:pb-12 overflow-hidden border-b border-white/5">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] bg-black/40 rounded-full blur-3xl" />
        <div className="container mx-auto px-5 lg:px-20 relative z-10">
          <motion.div initial="hidden" animate={heroControls} variants={containerVariants} className="max-w-6xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-4 flex justify-center">
              <Link href="/" className="inline-block">
                <div className="relative w-[160px] h-[52px] lg:w-[220px] lg:h-[72px]">
                  <Image src={FUNNEL_LOGO_SRC} alt={FUNNEL_BRAND_NAME} fill className="object-contain object-center" priority sizes="(max-width: 1024px) 160px, 220px" />
                </div>
              </Link>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-5 leading-[1.05] tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A fully managed e-commerce business—
              <br />
              with at least $4,000 in trackable sales
              <br />
              <span className="text-teal-400">in your first 30 days.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base lg:text-lg text-slate-400 mb-5 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>
              {heroContent.subhead}
            </motion.p>
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto bg-teal-400 text-black font-bold py-3 px-6 rounded-t-2xl mb-0 text-lg lg:text-xl text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {heroContent.doneForYouText.split('. ')[0]}. <span className="text-white/95">{heroContent.doneForYouText.split('. ')[1]}</span>. {heroContent.videoPrompt}
            </motion.div>
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto rounded-b-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 -mt-px">
              <LazyYouTube youtubeId="ZPY3hkj7xSE" title={heroContent.videoTitle} />
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-5 text-xl lg:text-2xl text-slate-300 font-medium leading-snug" style={{ fontFamily: "'Barlow', sans-serif" }}>
              {heroContent.applyBelowLine1}
              <br />
              {heroContent.applyBelowLine2}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* TrustStrip */}
      <div className="py-4 lg:py-6 bg-teal-950/20 border-y border-white/5">
        <div className="container mx-auto px-5 lg:px-20 text-center">
          <p className="text-lg lg:text-xl text-white font-semibold max-w-3xl mx-auto" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {trustStripContent.partnershipsText}
          </p>
        </div>
      </div>

      {/* Calendly Embed */}
      <div className="py-8 lg:py-12 bg-[#050508]">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <CalendlyInlineEmbed
              schedulingPageUrl={calendlyUrl}
              title={`Book a call with ${FUNNEL_BRAND_NAME}`}
              minHeight={650}
            />
          </div>
        </div>
      </div>

      <PlatformReviewsSection />

      {/* PartnerStoreResults - Dashboard Screenshots */}
      <div className="py-16 lg:py-24 bg-[#050508] border-t border-white/5">
        <div className="container mx-auto px-5 lg:px-20">
          <h2 className="text-xl lg:text-3xl font-bold text-white text-center mb-9" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Real partner results—on the record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/[0.03] rounded-2xl overflow-hidden shadow-xl border border-white/10 aspect-[4/3] flex items-center justify-center">
                <Image
                  src={`/images/partner-results/result-${i === 2 ? '2-tiktok' : i}.png`}
                  alt={`Partner store result ${i}`}
                  width={480}
                  height={360}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Calendly Embed - Second */}
          <div className="mt-16 max-w-4xl mx-auto">
            <CalendlyInlineEmbed
              schedulingPageUrl={calendlyUrl}
              title={`Book a call with ${FUNNEL_BRAND_NAME}`}
              minHeight={650}
            />
          </div>
        </div>
      </div>

      {/* Market Graph Section */}
      <div className="py-16 lg:py-24 bg-[#020205] relative overflow-hidden border-y border-white/5">
        <div className="absolute top-[-100px] right-[-50px] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-5 lg:px-20 relative z-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-2 max-w-5xl mx-auto leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Global e-commerce is on pace to pass
            <br />
            <span className="text-teal-400">$8.15 trillion by 2026</span>
          </h2>
          <p className="text-center text-slate-400 text-sm lg:text-base mb-9" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Trillions in online revenue—are you positioned to capture your slice?
          </p>
          <div className="max-w-5xl mx-auto">
            {/* Combined Bar + Line Chart */}
            <div className="relative w-full" style={{ minHeight: '320px' }}>
              <svg viewBox="0 0 880 320" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                </defs>
                {/* Data: year, value, x (center), barHeight (0-160), y (line point, 240 - barHeight*0.9) */}
                {[
                  { year: '2017', value: '$2.38', x: 50, barH: 53, y: 187 },
                  { year: '2018', value: '$2.98', x: 130, barH: 67, y: 173 },
                  { year: '2019', value: '$3.35', x: 210, barH: 75, y: 165 },
                  { year: '2020', value: '$4.25', x: 290, barH: 95, y: 145 },
                  { year: '2021', value: '$5.21', x: 370, barH: 117, y: 123 },
                  { year: '2022', value: '$5.72', x: 450, barH: 128, y: 112 },
                  { year: '2023', value: '$6.31', x: 530, barH: 141, y: 99 },
                  { year: '2024*', value: '$6.91', x: 610, barH: 155, y: 85 },
                  { year: '2025*', value: '$7.53', x: 690, barH: 169, y: 71 },
                  { year: '2026*', value: '$8.15', x: 770, barH: 183, y: 57 },
                  { year: '2027*', value: '$8.91', x: 830, barH: 200, y: 40 },
                ].map((d) => (
                  <g key={d.year}>
                    <rect x={d.x - 28} y={240 - d.barH} width="44" height={d.barH} rx="4" fill="url(#barGradient)" />
                    <text x={d.x} y={240 - d.barH - 8} textAnchor="middle" fill="#99f6e4" fontSize="12" fontFamily="Barlow, sans-serif">{d.value}</text>
                    <text x={d.x} y="268" textAnchor="middle" fill="#99f6e4" fontSize="11" fontFamily="Barlow Condensed, sans-serif">{d.year}</text>
                  </g>
                ))}
                {/* White line through data points */}
                <polyline points="50,187 130,173 210,165 290,145 370,123 450,112 530,99 610,85 690,71 770,57 830,40" fill="none" stroke="#99f6e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {[
                  { x: 50, y: 187 }, { x: 130, y: 173 }, { x: 210, y: 165 }, { x: 290, y: 145 },
                  { x: 370, y: 123 }, { x: 450, y: 112 }, { x: 530, y: 99 }, { x: 610, y: 85 },
                  { x: 690, y: 71 }, { x: 770, y: 57 }, { x: 830, y: 40 },
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="5" fill="#2dd4bf" stroke="#ccfbf1" strokeWidth="1" />
                ))}
              </svg>
            </div>
            <div className="flex justify-between items-center mt-2 px-2 text-xs text-slate-500" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <span>Source: eMarketer Insider Intelligence</span>
              <span>*Projected</span>
            </div>
            <div className="text-center mt-10">
              <button type="button" onClick={openCalendly} className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-teal-500/25" style={{ fontFamily: "'Barlow', sans-serif" }}>
                {applyCtaContent.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 lg:py-24 bg-[#08080c] border-t border-white/5">
        <div className="container mx-auto px-5 lg:px-20">
          <h2 className="text-xl lg:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Questions we hear most often
          </h2>
          <div className="max-w-3xl mx-auto">
            <EcomWealthFAQ items={faqItems} />
          </div>
          <div className="text-center mt-12">
            <button type="button" onClick={openCalendly} className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-black font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-teal-500/20" style={{ fontFamily: "'Barlow', sans-serif" }}>
              {applyCtaContent.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#020205] border-t border-white/10 py-10 lg:py-14">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {footerContent.links.map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-8 mb-6 text-center">
            <a href={FUNNEL_CONTACT_MAILTO} className="text-teal-400 hover:text-teal-300 font-semibold text-sm sm:text-base transition-colors">
              {FUNNEL_CONTACT_EMAIL}
            </a>
            <a href={FUNNEL_CONTACT_PHONE_TEL} className="text-white font-semibold text-sm sm:text-base hover:text-teal-400 transition-colors">
              {FUNNEL_CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <p className="text-slate-500 text-sm text-center mb-6">
            {footerContent.copyright}
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {footerContent.disclaimers.map((d, i) => (
              <p key={i} className="text-slate-600 text-xs leading-relaxed">{d}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
