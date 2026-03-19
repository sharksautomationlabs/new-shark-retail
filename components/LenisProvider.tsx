"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = isCoarsePointer || window.innerWidth < 768;

    const lenis = new Lenis({
      // Higher lerp = less perceived "lag" behind finger/mouse.
      lerp: prefersReducedMotion ? 1 : isMobile ? 0.2 : 0.14,
      duration: prefersReducedMotion ? 0 : isMobile ? 0.75 : 0.85,
      smoothWheel: !prefersReducedMotion,
      smoothTouch: !prefersReducedMotion,
      syncTouch: true,
      wheelMultiplier: isMobile ? 0.9 : 1,
      touchMultiplier: isMobile ? 1.5 : 2,
      autoRaf: false,
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis");

    // Tell ScrollTrigger to use Lenis scroll value (getter/setter)
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value, { immediate: true });
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    let isActive = true;
    let rafId: number | null = null;

    const raf = (time: number) => {
      if (!isActive) return;
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      isActive = false;
      if (rafId != null) window.cancelAnimationFrame(rafId);
      ScrollTrigger.scrollerProxy(document.body, {});
      document.documentElement.classList.remove("lenis");
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
