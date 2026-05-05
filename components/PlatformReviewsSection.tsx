'use client';

import Image from 'next/image';
import { FUNNEL_BRAND_NAME } from '@/lib/funnelBrand';

const REVIEW_CARDS = [
  {
    name: 'Duke Morrison',
    imageSrc: '/images/reviews/review-duke-morrison.png',
  },
  {
    name: 'Jackson Ward',
    imageSrc: '/images/reviews/review-jackson-ward.png',
  },
  {
    name: 'Bridger Cole',
    imageSrc: '/images/reviews/review-bridger-cole.png',
  },
  {
    name: 'Edwin',
    imageSrc: '/images/reviews/review-edwin.png',
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
          {`Trusted by investors who chose ${FUNNEL_BRAND_NAME}—recent feedback from partners on the experience.`}
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {REVIEW_CARDS.map((card) => (
            <div
              key={card.name}
              className="bg-white/[0.04] rounded-2xl shadow-lg border border-white/10 p-2 sm:p-3 flex flex-col"
            >
              <div className="relative w-full h-[200px] sm:h-[280px] overflow-hidden rounded-lg bg-white">
                <Image
                  src={card.imageSrc}
                  alt={`${card.name} review`}
                  fill
                  sizes="(max-width: 640px) 45vw, 380px"
                  className="object-contain p-1.5 sm:p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
