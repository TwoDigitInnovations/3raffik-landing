import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import AppShowcase from '../components/AppShowcase';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>3raffik - Smart Affiliate Marketing Platform | Grow Sales with QR Codes & Referral Links</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        {/* <Benefits /> */}
        <AppShowcase />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
