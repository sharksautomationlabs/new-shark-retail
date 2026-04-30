"use client";

import React, { useEffect, useState } from 'react';
import SiteLoader from './SiteLoader';

export default function PageWithLoader({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let id = 0;
    id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setShowContent(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <SiteLoader />
      <div
        className="min-h-dvh"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.4s ease-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
