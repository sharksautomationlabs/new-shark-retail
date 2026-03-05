import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EcommerceAutomationHero from '@/components/EcommerceAutomationHero';
import OurJourney from '@/components/OurJourney';
import WhileYouSleep from '@/components/WhileYouSleep';
import EcommerceAutomationStrategyCall from '@/components/EcommerceAutomationStrategyCall';
import EcommerceAutomationStats from '@/components/EcommerceAutomationStats';
import PainPoints from '@/components/PainPoints';
import EcommerceAutomationTestimonials from '@/components/EcommerceAutomationTestimonials';
import EcommerceAutomationVideoSection from '@/components/EcommerceAutomationVideoSection';
import Safety from '@/components/Safety';
import Experts from '@/components/Experts';
import EcommerceAutomationFinalCTA from '@/components/EcommerceAutomationFinalCTA';
import EcommerceFooter from '@/components/EcommerceFooter';

const EcommerceAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main>
        <EcommerceAutomationHero />
        
        {/* 
            Modified OurJourney for this page:
            1. showVideo: Displays the video on the right.
            2. hideRoiText: Hides the specific ROI paragraph text.
            3. hideBadge: Hides the "Our Story" pill badge.
            4. customTitle: Changes the H2 heading to "About Us".
        */}
        <OurJourney 
            showVideo={true} 
            hideRoiText={true} 
            hideBadge={true} 
            customTitle="About Us" 
        />

        <WhileYouSleep />

        <EcommerceAutomationStrategyCall />
        <EcommerceAutomationStats />

        <PainPoints />

        <EcommerceAutomationTestimonials />
        <EcommerceAutomationVideoSection />

        <Safety />
        <Experts />

        <EcommerceAutomationFinalCTA />
      </main>
      
      <EcommerceFooter />
    </div>
  );
};

export default EcommerceAutomationPage;