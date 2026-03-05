"use client";

import React, { useEffect, useState } from 'react';
import SiteLoader from './SiteLoader';

export default function PageWithLoader({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <SiteLoader />
      <div
        className="min-h-screen"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
