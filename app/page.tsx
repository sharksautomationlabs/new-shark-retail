import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedInSection from '../components/FeaturedInSection';
import PageWithLoader from '../components/PageWithLoader';

const WhileYouSleep = dynamic(() => import('../components/WhileYouSleep'), { ssr: true });
const PainPoints = dynamic(() => import('../components/PainPoints'), { ssr: true });
const CallToAction = dynamic(() => import('../components/CallToAction'), { ssr: true });
const Safety = dynamic(() => import('../components/Safety'), { ssr: true });
const CompaniesTrustUs = dynamic(() => import('../components/CompaniesTrustUs'), { ssr: true });
const Experts = dynamic(() => import('../components/Experts'), { ssr: true });
const ContactSection = dynamic(() => import('../components/ContactSection'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: "Earn $4,000 in 30 days | Retail Automation",
  description:
    "Partner with one team to launch and run Amazon, Shopify, TikTok Shop and Walmart stores. We focus on clear reporting and steady growth so you can see real movement in the first 30 days.",
  alternates: {
    canonical: "https://thesharkretail.com/",
  },
};

export default function Home() {
  return (
    <PageWithLoader>
      <div>
        <Header />
        <Hero />
        <FeaturedInSection />
        <WhileYouSleep />
        <PainPoints />
        <CallToAction />
        <Safety />
        <CompaniesTrustUs />
        <Experts />
        <ContactSection />
        <Footer />
      </div>
    </PageWithLoader>
  );
}
