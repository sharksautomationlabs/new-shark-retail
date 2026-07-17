'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FUNNEL_BRAND_NAME } from '@/lib/funnelBrand';

export const VIDEO_REVIEWS = [
  {
    id: 'review-video-1',
    videoSrc: '/videos/review-video-1.mp4',
    posterSrc: '/images/reviews/review-video-1-poster.jpg',
  },
  {
    id: 'review-video-2',
    videoSrc: '/videos/review-video-2.mp4',
    posterSrc: '/images/reviews/review-video-2-poster.jpg',
  },
] as const;

function VideoReviewCard({
  videoSrc,
  posterSrc,
  onPlay,
  videoRef,
}: {
  videoSrc: string;
  posterSrc: string;
  onPlay: () => void;
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  const [started, setStarted] = useState(false);
  const localRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-2 sm:p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-900">
        <Image
          src={posterSrc}
          alt=""
          aria-hidden
          fill
          sizes="768px"
          className="object-cover scale-125 blur-2xl opacity-50"
        />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={(el) => {
            localRef.current = el;
            videoRef(el);
          }}
          src={videoSrc}
          poster={posterSrc}
          controls={started}
          preload="none"
          playsInline
          className="relative w-full h-full object-contain"
          onPlay={() => {
            setStarted(true);
            onPlay();
          }}
        />
        {!started && (
          <button
            type="button"
            aria-label="Play video review"
            onClick={() => localRef.current?.play()}
            className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/25 transition-colors"
          >
            <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 shadow-xl">
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600 translate-x-0.5" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v13.72c0 .9.98 1.45 1.75.99l10.9-6.86a1.17 1.17 0 0 0 0-1.98L9.75 4.15A1.17 1.17 0 0 0 8 5.14z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export function VideoReviewsGrid() {
  const videoEls = useRef<Record<string, HTMLVideoElement | null>>({});

  const pauseOthers = (playingId: string) => {
    Object.entries(videoEls.current).forEach(([id, el]) => {
      if (id !== playingId && el && !el.paused) el.pause();
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-3xl mx-auto mb-8">
      {VIDEO_REVIEWS.map((video) => (
        <VideoReviewCard
          key={video.id}
          videoSrc={video.videoSrc}
          posterSrc={video.posterSrc}
          onPlay={() => pauseOthers(video.id)}
          videoRef={(el) => {
            videoEls.current[video.id] = el;
          }}
        />
      ))}
    </div>
  );
}

export const FUNNEL_REVIEW_CARDS = [
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

export const REVIEW_PLATFORM_LINKS = [
  {
    name: 'Trustpilot',
    href: 'https://www.trustpilot.com/review/theretailautomation.com',
    iconSrc: '/images/review-platforms/icon-trustpilot.png',
  },
  {
    name: 'Reviews.io',
    href: 'https://www.reviews.io/company-reviews/store/www.theretailautomation.com',
    iconSrc: '/images/review-platforms/icon-reviews-io.png',
  },
  {
    name: 'Clutch',
    href: 'https://clutch.co/profile/retail-automation',
    iconSrc: '/images/review-platforms/icon-clutch.png',
  },
  {
    name: 'Bark',
    href: 'https://www.bark.com/en/us/company/the-retail-automation/YNA7ae/',
    iconSrc: '/images/review-platforms/icon-bark.png',
  },
  {
    name: 'ProvenExpert',
    href: 'https://www.provenexpert.com/en-us/the-retail-automation/',
    iconSrc: '/images/review-platforms/icon-provenexpert.png',
  },
  {
    name: 'BBB',
    href: 'https://www.bbb.org/us/il/skokie/profile/ecommerce/the-retail-automation-0654-1000146039',
    iconSrc: '/images/review-platforms/icon-bbb.png',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61582189354952',
    iconSrc: '/images/review-platforms/icon-facebook.png',
  },
] as const;

export function ReviewPlatformLinks() {
  return (
    <div className="mt-8">
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
        Read our reviews on
      </p>
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {REVIEW_PLATFORM_LINKS.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white rounded-full border border-slate-200 shadow-sm px-4 py-2 hover:shadow-md hover:border-slate-300 transition-all"
          >
            <Image
              src={platform.iconSrc}
              alt={`${platform.name} logo`}
              width={22}
              height={22}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-slate-700">
              {platform.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function FunnelReviewCardsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
      {FUNNEL_REVIEW_CARDS.map((card) => (
        <div
          key={card.name}
          className="bg-white rounded-2xl shadow-md border border-slate-200 p-2 sm:p-3 flex flex-col"
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
  );
}

export default function PlatformReviewsSection() {
  return (
    <div className="py-10 lg:py-14 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-5 lg:px-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 text-center mb-3 tracking-tight">
          {`Proof from people who work with ${FUNNEL_BRAND_NAME}`}
        </h2>
        <p className="text-center text-slate-600 text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {`Trusted by investors who chose ${FUNNEL_BRAND_NAME}—recent feedback from partners on the experience.`}
        </p>

        <VideoReviewsGrid />

        <FunnelReviewCardsGrid />

        <ReviewPlatformLinks />

        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-bold text-base lg:text-lg underline underline-offset-4 decoration-teal-300 hover:decoration-teal-500 transition-colors"
          >
            See all reviews &amp; verify us independently →
          </Link>
        </div>
      </div>
    </div>
  );
}
