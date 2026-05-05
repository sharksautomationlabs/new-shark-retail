import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call confirmed | The Retail Automation',
  robots: { index: false, follow: false },
};

export default function ThankYouFunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N5XDRH49"
          height={0}
          width={0}
          title="Google Tag Manager"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {children}
    </>
  );
}
