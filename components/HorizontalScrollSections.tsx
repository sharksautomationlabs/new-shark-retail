"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSections({ children }: { children: React.ReactNode }) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const pin = pinRef.current;
    const strip = stripRef.current;
    if (!trigger || !pin || !strip) return;

    const count = React.Children.count(children);

    const ctx = gsap.context(() => {
      gsap.to(strip, {
        x: () => -(strip.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: () => `+=${trigger.offsetHeight}`,
          pin: pin,
          scrub: 1,
        },
      });
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} style={{ height: `${React.Children.count(children) * 100}vh` }}>
      <div ref={pinRef} className="relative h-screen w-screen overflow-hidden bg-background">
        <div
          ref={stripRef}
          className="absolute left-0 top-0 flex h-full"
          style={{ width: `${React.Children.count(children) * 100}vw` }}
        >
          {React.Children.map(children, (child) => (
            <section className="h-full shrink-0 overflow-y-auto" style={{ width: '100vw' }}>
              {child}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
