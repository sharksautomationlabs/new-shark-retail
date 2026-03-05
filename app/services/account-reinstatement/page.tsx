import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountReinstatementHero from '@/components/AccountReinstatementHero';
import CompaniesTrustUs from '@/components/CompaniesTrustUs';
import AccountReinstatementMainContent from '@/components/AccountReinstatementMainContent';
import AccountReinstatementServices from '@/components/AccountReinstatementServices';
import AccountReinstatementProof from '@/components/AccountReinstatementProof';
import AccountReinstatementTestimonials from '@/components/AccountReinstatementTestimonials';
import Safety from '@/components/Safety';
import Experts from '@/components/Experts';
import AccountReinstatementCTA from '@/components/AccountReinstatementCTA';

const AccountReinstatementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <Header />

      <main>
        <AccountReinstatementHero />
        <CompaniesTrustUs />
        <AccountReinstatementMainContent />
        <AccountReinstatementServices />
        <AccountReinstatementProof />
        <AccountReinstatementTestimonials />
        <Safety />
        <Experts />
        <AccountReinstatementCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AccountReinstatementPage;