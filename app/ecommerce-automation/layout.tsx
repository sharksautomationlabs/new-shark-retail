import type { Metadata } from 'next';
import Script from 'next/script';
import EcomwealthCalendlyRoot from '@/components/EcomwealthCalendlyRoot';

export const metadata: Metadata = {
  title: 'The Retail Automation | Partnership Call',
  robots: { index: false, follow: false },
};

export default function EcommerceAutomationFunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="gtm-n5xdrh49"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5XDRH49');`,
        }}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500;600;700&display=swap" />
      <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <EcomwealthCalendlyRoot />
      {children}
    </>
  );
}
