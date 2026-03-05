import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompaniesTrustUs from "@/components/CompaniesTrustUs";
import AmazonPPCHero from "@/components/AmazonPPCHero";
import AmazonPPCMainContent from "@/components/AmazonPPCMainContent";
import AmazonPPCServices from "@/components/AmazonPPCServices";
import AmazonPPCEdge from "@/components/AmazonPPCEdge";
import AmazonPPCTestimonials from "@/components/AmazonPPCTestimonials";
import Safety from "@/components/Safety";
import Experts from "@/components/Experts";
import AmazonPPCCTA from "@/components/AmazonPPCCTA";

export const metadata = {
  title: "Amazon PPC Management | Shark Retail",
  description:
    "Elite Amazon PPC management—lower ACOS, boost ROAS. Sponsored Products, Sponsored Brands, and Display optimization. Scale your Amazon advertising profitably with Shark Retail.",
  keywords: [
    "Amazon PPC",
    "Amazon PPC Management",
    "Sponsored Products",
    "Sponsored Brands",
    "ACOS Optimization",
    "ROAS",
    "Amazon Advertising",
    "Shark Retail",
  ],
};

const AmazonPPCManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <Header />

      <main>
        <AmazonPPCHero />
        <CompaniesTrustUs />
        <AmazonPPCMainContent />
        <AmazonPPCServices />
        <AmazonPPCEdge />
        <AmazonPPCTestimonials />
        <Safety />
        <Experts />
        <AmazonPPCCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AmazonPPCManagementPage;
