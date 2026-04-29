'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { setupCalendlyRedirect } from '@/lib/calendlyRedirect';

/** Loads Calendly widget.js + message listener for funnel pages only (no site-wide badge). */
export default function EcomwealthCalendlyRoot() {
  useEffect(() => {
    setupCalendlyRedirect();
  }, []);

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
    />
  );
}
