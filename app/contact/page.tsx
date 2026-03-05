import type { Metadata } from "next";
import Header from '../../components/Header';
import PainPoints from '../../components/PainPoints';
import Safety from '../../components/Safety';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Contact The Shark Retail | Book a call",
  description:
    "Share a bit about your Amazon, Shopify, TikTok Shop or Walmart goals and we’ll map out what working together could look like in the first 30 days.",
  alternates: {
    canonical: "https://thesharkretail.com/contact",
  },
};

export default function Contact() {
  return (
    <div>
      <Header />
      <PainPoints />
      <Safety />
      <ContactSection />
      <Footer />
    </div>
  );
}
