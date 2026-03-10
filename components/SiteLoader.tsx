"use client";

import React, { useEffect, useState } from 'react';

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#020205] overflow-hidden"
      style={{ animation: 'loaderFadeOut 0.6s ease-out 2.2s forwards' }}
      aria-hidden="true"
    >
      <div className="loader-ring" />
      <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 px-4">
        <img
          src="/images/sharks-retail-logo.png"
          alt=""
          className="h-8 w-auto opacity-90 sm:h-10"
        />
        <span className="text-base sm:text-lg font-semibold text-white">
          <span className="text-[#14b8a6]">Shark</span> Retail
        </span>
      </div>
      <style jsx>{`
        .loader-ring {
          width: 56px;
          height: 56px;
          border: 2px solid rgba(20, 184, 166, 0.2);
          border-top-color: #14b8a6;
          border-radius: 50%;
          animation: loaderSpin 0.9s linear infinite;
          box-shadow: 0 0 24px rgba(20, 184, 166, 0.4);
        }
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes loaderFadeOut {
          to { opacity: 0; pointer-events: none; }
        }
      `}</style>
    </div>
  );
}
