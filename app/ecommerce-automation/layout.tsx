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
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <EcomwealthCalendlyRoot />
      {children}
    </>
  );
}
