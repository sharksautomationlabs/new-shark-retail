import type { Metadata } from "next";
import Header from '../components/Header';
import Hero from '../components/Hero';
import InvestmentLifecycle from '../components/InvestmentLifecycle';
import WhySharkRetail from '../components/WhySharkRetail';
import PainPoints from '../components/PainPoints';
import WhileYouSleep from '../components/WhileYouSleep';
import CallToAction from '../components/CallToAction';
import Safety from '../components/Safety';
import ContactSection from '../components/ContactSection';
import FeaturedInSection from '../components/FeaturedInSection';
import CompaniesTrustUs from '../components/CompaniesTrustUs';
import Experts from '../components/Experts';
import Footer from '../components/Footer';
import PageWithLoader from '../components/PageWithLoader';

export const metadata: Metadata = {
  title: "Earn $4,000 in 30 days | The Shark Retail",
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
        <InvestmentLifecycle />
        <WhySharkRetail />
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
