import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thesharkretail.com'),
  title: "Retail Automation - E-commerce Automation Solutions",
  description: "We build and run Amazon, Shopify, TikTok Shop and Walmart stores for investors and operators who want a calm, transparent partner. Our team handles the daily work so you can focus on decisions and see real progress in the first 30 days.",
  keywords: ["e-commerce automation", "Amazon automation", "Shopify automation", "TikTok Shop automation", "Walmart automation", "Amazon PPC management", "virtual assistant", "account reinstatement", "content creation", "keyword research", "product hunting", "Retail Automation"],
  authors: [{ name: "Retail Automation" }],
  creator: "Retail Automation",
  publisher: "Retail Automation",
  applicationName: "Retail Automation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesharkretail.com',
    siteName: 'Retail Automation',
    title: 'Retail Automation - E-commerce Automation Solutions',
    description: 'We build and run Amazon, Shopify, TikTok Shop and Walmart stores for investors and operators who want a calm, transparent partner. Our team handles the daily work so you can focus on decisions and see real progress in the first 30 days.',
    images: [
      {
        url: '/images/retail-automation-logo.png',
        width: 1200,
        height: 630,
        alt: 'Retail Automation Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail Automation - E-commerce Automation Solutions',
    description: 'We build and run Amazon, Shopify, TikTok Shop and Walmart stores for investors and operators who want a calm, transparent partner.',
    images: ['/images/retail-automation-logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/retail-automation-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/retail-automation-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/retail-automation-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/retail-automation-logo.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://thesharkretail.com',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get('x-pathname') ?? '';
  const isThankYou =
    pathname === '/thank-you' || pathname.startsWith('/thank-you/');

  const metaPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1334596645435728');
fbq('track', 'PageView');`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* next/font self-hosts Geist — no runtime Google Fonts request, so no gstatic preconnect needed */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preload" href="/images/sharks-retail-header-logo.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/fonts/ITCAvantGardeStd-Bk.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        {isThankYou ? (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N5XDRH49"
              height={0}
              width={0}
              title="Google Tag Manager"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organization schema for richer search results */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Retail Automation",
              url: "https://thesharkretail.com",
              logo: "https://thesharkretail.com/images/retail-automation-logo.png",
            }),
          }}
        />
        <LenisProvider>
          {children}
        </LenisProvider>
        {/* Meta Pixel — afterInteractive so it never blocks first paint */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: metaPixelScript }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Meta Pixel noscript fallback */}
          <img
            height={1}
            width={1}
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1334596645435728&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
