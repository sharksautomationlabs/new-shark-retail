import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompaniesTrustUs from "@/components/CompaniesTrustUs";
import DigitalMarketingHero from "@/components/DigitalMarketingHero";
import DigitalMarketingMainContent from "@/components/DigitalMarketingMainContent";
import DigitalMarketingServices from "@/components/DigitalMarketingServices";
import DigitalMarketingEdge from "@/components/DigitalMarketingEdge";
import DigitalMarketingTestimonials from "@/components/DigitalMarketingTestimonials";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

export const metadata = {
  title: "Digital Marketing | Shark Retail",
  description:
    "Elite digital marketing for e-commerce—PPC, SEO, social media, content marketing, and analytics. Scale smarter, sell faster with Shark Retail.",
  keywords: [
    "Digital Marketing",
    "E-commerce Marketing",
    "PPC",
    "SEO",
    "Social Media Marketing",
    "Content Marketing",
    "Shark Retail",
  ],
};

const DigitalMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <Header />

      <main>
        <DigitalMarketingHero />
        <CompaniesTrustUs />
        <DigitalMarketingMainContent />
        <DigitalMarketingServices />
        <DigitalMarketingEdge />
        <DigitalMarketingTestimonials />
        <DigitalMarketingCTA />
      </main>

      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;
