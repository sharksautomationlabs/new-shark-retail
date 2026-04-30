import type { Metadata } from 'next';
import EcomwealthCalendlyRoot from '@/components/EcomwealthCalendlyRoot';

export const metadata: Metadata = {
  title: 'Retail Automation | Partnership Call',
  robots: { index: false, follow: false },
};

export default function EcommerceAutomationFunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <EcomwealthCalendlyRoot />
      {children}
    </>
  );
}
