import React from 'react';
import type { Metadata } from "next";
import Header from '../../components/Header';
import OurStoryHero from '../../components/OurStoryHero';
import OurJourney from '../../components/OurJourney';
import PerformanceStats from '../../components/PerformanceStats';
import SharkDifference from '../../components/SharkDifference';
import VisionMission from '../../components/VisionMission';
import PainPoints from '../../components/PainPoints';
import WhileYouSleep from '../../components/WhileYouSleep';
import Safety from '../../components/Safety';
import Experts from '../../components/Experts';
import TeamSection from '../../components/TeamSection';
import AboutCTA from '../../components/AboutCTA';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "About The Shark Retail | Team and story",
  description:
    "Learn how The Shark Retail grew from a small operator group into a team that runs Amazon, Shopify, TikTok Shop and Walmart stores for clients around the world.",
  alternates: {
    canonical: "https://thesharkretail.com/about",
  },
};

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <OurStoryHero />
      <OurJourney />
      <WhileYouSleep />
      <TeamSection />
      <SharkDifference />
      <VisionMission />
      <PainPoints />
      <Safety />
      <PerformanceStats />
      <Experts />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
