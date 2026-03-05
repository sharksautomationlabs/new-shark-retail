import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
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
  title: "The Shark Retail - E-commerce Automation Solutions",
  description: "We build and run Amazon, Shopify, TikTok Shop and Walmart stores for investors and operators who want a calm, transparent partner. Our team handles the daily work so you can focus on decisions and see real progress in the first 30 days.",
  keywords: ["e-commerce automation", "Amazon automation", "Shopify automation", "TikTok Shop automation", "Walmart automation", "Amazon PPC management", "virtual assistant", "account reinstatement", "content creation", "keyword research", "product hunting", "The Shark Retail"],
  authors: [{ name: "The Shark Retail" }],
  creator: "The Shark Retail",
  publisher: "The Shark Retail",
  applicationName: "The Shark Retail",
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
    siteName: 'The Shark Retail',
    title: 'The Shark Retail - E-commerce Automation Solutions',
    description: 'We build and run Amazon, Shopify, TikTok Shop and Walmart stores for investors and operators who want a calm, transparent partner. Our team handles the daily work so you can focus on decisions and see real progress in the first 30 days.',
    images: [
      {
        url: '/images/sharks-retail-logo.png',
        width: 1200,
        height: 630,
        alt: 'The Shark Retail Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sharkretail',
    creator: '@sharkretail',
    title: 'The Shark Retail - E-commerce Automation Solutions',
    description: 'We build and run Amazon, Shopify, TikTok Shop and Walmart stores for investors and operators who want a calm, transparent partner.',
    images: ['/images/sharks-retail-logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/sharks-retail-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/sharks-retail-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/sharks-retail-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/sharks-retail-logo.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://thesharkretail.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
              name: "The Shark Retail",
              url: "https://thesharkretail.com",
              logo: "https://thesharkretail.com/images/sharks-retail-logo.png",
            }),
          }}
        />
        <MetaPixel />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
