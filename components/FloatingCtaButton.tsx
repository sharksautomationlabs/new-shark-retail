"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const LIGHT_SECTION_SELECTOR = "[data-light-section]";

export default function FloatingCtaButton() {
  const [isOverLight, setIsOverLight] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const check = () => {
      const els = document.querySelectorAll(LIGHT_SECTION_SELECTOR);
      const x = window.innerWidth - 10;
      const y = window.innerHeight / 2;
      let over = false;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) over = true;
      });
      setIsOverLight(over);
    };

    const onScrollOrResize = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        check();
        rafRef.current = null;
      });
    };

    check();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const base =
    "hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm transition-all duration-300 ease-out group hover:bg-teal-500 hover:text-white";
  const overDark = "bg-white text-teal-600";
  const overLight = "bg-black text-white";

  return (
    <motion.a
      href="/contact"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: "spring" as const, stiffness: 120, damping: 20 }}
      className={`${base} ${isOverLight ? overLight : overDark}`}
      style={{ willChange: "background-color, color" }}
    >
      <span className="flex items-center gap-2">
        Let&apos;s Talk Business
        <span className={`w-2 h-2 rounded-full animate-ping inline-block ${isOverLight ? "bg-white" : "bg-teal-500"} group-hover:opacity-100`} />
      </span>
    </motion.a>
  );
}
