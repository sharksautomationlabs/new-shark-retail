"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = isCoarsePointer || window.innerWidth < 768;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: isMobile ? 0.22 : 0.16,
      duration: isMobile ? 0.65 : 0.75,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false,
      wheelMultiplier: isMobile ? 0.95 : 1,
      touchMultiplier: 1,
      autoRaf: false,
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis");

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
      document.documentElement.classList.remove("lenis");
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
