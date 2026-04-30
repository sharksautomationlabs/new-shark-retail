'use client';

import Image from 'next/image';
import { FUNNEL_BRAND_NAME } from '@/lib/funnelBrand';

/** Review screenshots (2×2) — order: Clutch, Bark, Reviews.io, Trustpilot. */
const REVIEW_CARDS = [
  {
    name: 'Clutch',
    imageSrc: '/images/reviews/review-1.png',
  },
  {
    name: 'Bark',
    imageSrc: '/images/reviews/review-2.png',
  },
  {
    name: 'Reviews.io',
    imageSrc: '/images/reviews/review-3.png',
  },
  {
    name: 'Trustpilot',
    imageSrc: '/images/reviews/review-4.png',
  },
] as const;

/** Official platform wordmarks (PNG) — one row, each in its own box + link. */
const LOGO_ROW = [
  {
    name: 'Clutch',
    logoSrc: '/images/review-platforms/logo-clutch.png',
    href: 'https://clutch.co/profile/ecom-sharkss',
    linkLabel: 'View on Clutch',
  },
  {
    name: 'Bark',
    logoSrc: '/images/review-platforms/logo-bark.png',
    href: 'https://www.bark.com/en/ca/company/ecom-sharkss/bvoaVv/',
    linkLabel: 'See on Bark',
  },
  {
    name: 'Reviews.io',
    logoSrc: '/images/review-platforms/logo-reviews-io.png',
    href: 'https://www.reviews.io/company-reviews/store/www.ecomsharkss.com',
    linkLabel: 'Read on Reviews.io',
  },
  {
    name: 'Facebook',
    logoSrc: '/images/review-platforms/logo-facebook.png',
    href: 'https://www.facebook.com/people/Ecommerce-Sharks/61584113035162/?sk=reviews',
    linkLabel: 'See on Facebook',
  },
] as const;

export default function PlatformReviewsSection() {
  return (
    <div className="py-10 lg:py-14 bg-[#08080c] border-y border-white/5">
      <div className="container mx-auto px-5 lg:px-20">
        <h2 className="text-xl lg:text-3xl font-bold text-white text-center mb-3 tracking-tight">
          {`Proof from people who work with ${FUNNEL_BRAND_NAME}`}
        </h2>
        <p className="text-center text-slate-400 text-sm lg:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          {`Trusted by investors who chose ${FUNNEL_BRAND_NAME}—see reviews on Clutch, Bark, Reviews.io, and Facebook.`}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {REVIEW_CARDS.map((card) => (
            <div
              key={card.name}
              className="bg-white/[0.04] rounded-2xl shadow-lg border border-white/10 flex items-center justify-center min-h-[160px] sm:min-h-[200px] p-2 sm:p-3"
            >
              <Image
                src={card.imageSrc}
                alt={`${card.name} review`}
                width={480}
                height={320}
                sizes="(max-width: 768px) 50vw, 480px"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-5xl mx-auto w-full px-1">
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 shadow-md px-3 py-4 sm:px-5 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                {LOGO_ROW.map((item) => {
                  const isSvg = item.logoSrc.endsWith('.svg');
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-w-0 flex-col items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 hover:border-teal-400/40 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex h-11 sm:h-12 w-full items-center justify-center px-1">
                        <Image
                          src={item.logoSrc}
                          alt={`${item.name} logo`}
                          width={isSvg ? 140 : 150}
                          height={isSvg ? 34 : 44}
                          className="max-h-8 sm:max-h-9 w-auto max-w-[130px] object-contain object-center rounded-md"
                          unoptimized
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-teal-400 group-hover:text-teal-300 transition-colors text-center leading-tight">
                        {item.linkLabel} →
                      </span>
                    </a>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
