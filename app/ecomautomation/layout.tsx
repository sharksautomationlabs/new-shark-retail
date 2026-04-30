import type { Metadata } from 'next';
import EcomwealthCalendlyRoot from '@/components/EcomwealthCalendlyRoot';

export const metadata: Metadata = {
  title: 'The Retail Automation | Partnership Call',
  robots: { index: false, follow: false },
};

export default function EcomAutomationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <EcomwealthCalendlyRoot />
      {children}
    </>
  );
}
