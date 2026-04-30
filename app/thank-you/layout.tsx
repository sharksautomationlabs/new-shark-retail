import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call confirmed | The Retail Automation',
  robots: { index: false, follow: false },
};

export default function ThankYouFunnelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
