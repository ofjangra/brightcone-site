import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Ecosystem from "@/components/Ecosystem";
import WhyChoose from "@/components/WhyChoose";
import CustomerJourney from "@/components/CustomerJourney";
import ProofOfImpact from "@/components/ProofOfImpact";
import Security from "@/components/Security";
import DeliveryApproach from "@/components/DeliveryApproach";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Ecosystem />
        <WhyChoose />
        <CustomerJourney />
        <ProofOfImpact />
        <Security />
        <DeliveryApproach />
        <Insights />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
