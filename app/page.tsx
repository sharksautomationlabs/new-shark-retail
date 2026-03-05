import Header from '../components/Header';
import Hero from '../components/Hero';
import InvestmentLifecycle from '../components/InvestmentLifecycle';
import WhySharkRetail from '../components/WhySharkRetail';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';
import FeaturedInSection from '../components/FeaturedInSection';
import CompaniesTrustUs from '../components/CompaniesTrustUs';
import Footer from '../components/Footer';
import PageWithLoader from '../components/PageWithLoader';

export default function Home() {
  return (
    <PageWithLoader>
      <div>
        <Header />
        <Hero />
        <FeaturedInSection />
        <InvestmentLifecycle />
        <WhySharkRetail />
        <CallToAction />
        <CompaniesTrustUs />
        <ContactSection />
        <Footer />
      </div>
    </PageWithLoader>
  );
}
