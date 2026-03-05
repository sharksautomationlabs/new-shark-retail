import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHuntingHero from '@/components/ProductHuntingHero';
import CompaniesTrustUs from '@/components/CompaniesTrustUs';
import ProductHuntingEdge from '@/components/ProductHuntingEdge';
import ProductHuntingMainContent from '@/components/ProductHuntingMainContent';
import ProductHuntingServices from '@/components/ProductHuntingServices';
import ProductHuntingProof from '@/components/ProductHuntingProof';
import ProductHuntingTestimonials from '@/components/ProductHuntingTestimonials';
import Safety from '@/components/Safety';
import Experts from '@/components/Experts';
import ProductHuntingCTA from '@/components/ProductHuntingCTA';

const ProductHuntingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <Header />
      
      <main>
        <ProductHuntingHero />
        <CompaniesTrustUs />
        <ProductHuntingEdge />
        <ProductHuntingMainContent />
        <ProductHuntingServices />
        <ProductHuntingProof />
        <ProductHuntingTestimonials />
        <Safety />
        <Experts />
        <ProductHuntingCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductHuntingPage;
