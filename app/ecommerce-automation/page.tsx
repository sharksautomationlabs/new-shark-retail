import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EcommerceAutomationHero from '@/components/EcommerceAutomationHero';
import OurJourney from '@/components/OurJourney';
import EcommerceAutomationStrategyCall from '@/components/EcommerceAutomationStrategyCall';
import EcommerceAutomationStats from '@/components/EcommerceAutomationStats';
// IMPORT CHANGED BELOW
import EcommerceAutomationTestimonials from '@/components/EcommerceAutomationTestimonials'; 
import EcommerceAutomationVideoSection from '@/components/EcommerceAutomationVideoSection';
import EcommerceAutomationFinalCTA from '@/components/EcommerceAutomationFinalCTA';
import EcommerceFooter from '@/components/EcommerceFooter';

const EcommerceAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main>
        <EcommerceAutomationHero />
        
        {/* Our Story with hidden text and video */}
        <OurJourney showVideo={true} hideRoiText={true} />
        
        <EcommerceAutomationStrategyCall />
        <EcommerceAutomationStats />
        
        {/* Updated Testimonials Component for this page specifically */}
        <EcommerceAutomationTestimonials />
        
        <EcommerceAutomationVideoSection />
        <EcommerceAutomationFinalCTA />
      </main>
      
      <EcommerceFooter />
    </div>
  );
};

export default EcommerceAutomationPage;