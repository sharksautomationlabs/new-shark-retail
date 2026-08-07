import type { Metadata } from 'next';
import { Montserrat, Barlow } from 'next/font/google';
import EcomwealthCalendlyRoot from '@/components/EcomwealthCalendlyRoot';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Client Reviews & Independent Verification | The Retail Automation',
  description:
    'Real client reviews of The Retail Automation — verified on Trustpilot, Clutch, Bark, Reviews.io and more. Watch unscripted video testimonials and verify us independently.',
  robots: { index: false, follow: false },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Calendly: preconnect so the popup widget is ready before it's needed */}
      <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <EcomwealthCalendlyRoot />
      <div className={`${montserrat.variable} ${barlow.variable} min-h-screen bg-white`}>
        {children}
      </div>
    </>
  );
}
