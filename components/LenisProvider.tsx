"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = isCoarsePointer || window.innerWidth < 768;

    // On touch / mobile, native scroll is fine. Lenis here only ran a RAF loop
    // (smoothTouch was already off) — pure main-thread cost for no UX gain.
    // Skipping it keeps the lenis chunk off mobile and lowers TBT.
    if (prefersReducedMotion || isMobile) return;

    let isActive = true;
    let rafId: number | null = null;
    let lenisInstance: import("lenis").default | null = null;

    import("lenis").then(({ default: Lenis }) => {
      if (!isActive) return;

      const lenis = new Lenis({
        lerp: 0.16,
        duration: 0.75,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        autoRaf: false,
        gestureOrientation: "vertical",
      });

      lenisInstance = lenis;
      document.documentElement.classList.add("lenis");

      const raf = (time: number) => {
        if (!isActive) return;
        lenis.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);
    });

    return () => {
      isActive = false;
      if (rafId != null) window.cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("lenis");
      lenisInstance?.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
