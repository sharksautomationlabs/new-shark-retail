'use client';

import { useEffect, useRef, useState } from 'react';
import { buildCalendlyEmbedUrl } from '@/lib/calendlyRedirect';

type Props = {
  schedulingPageUrl: string;
  title?: string;
  className?: string;
  minHeight?: number;
  /** When true, iframe src loads immediately (no intersection wait). */
  preload?: boolean;
};

export default function CalendlyInlineEmbed({
  schedulingPageUrl,
  title = 'Book a call',
  className = '',
  minHeight = 650,
  preload = false,
}: Props) {
  // Always null on first render so server HTML matches client (avoid window in useState initializer).
  const [src, setSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preload) {
      setSrc(buildCalendlyEmbedUrl(schedulingPageUrl));
      return;
    }

    const el = containerRef.current;
    if (!el || src !== null) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSrc(buildCalendlyEmbedUrl(schedulingPageUrl));
          obs.disconnect();
        }
      },
      { rootMargin: '520px 0px', threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [schedulingPageUrl, preload, src]);

  return (
    <div ref={containerRef} className={className} style={{ minHeight }}>
      {src ? (
        <iframe
          src={src}
          width="100%"
          height={minHeight}
          title={title}
          className="rounded-2xl overflow-hidden w-full border-0 ring-1 ring-white/10"
          loading={preload ? 'eager' : 'lazy'}
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-2xl bg-[#0c0c12] text-slate-500 text-sm border border-white/10"
          style={{ minHeight }}
          aria-hidden
        >
          Loading calendar…
        </div>
      )}
    </div>
  );
}
