import React from "react";
import { useAuthModal } from "../contexts/AuthModalContext";
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import ThreeBackground from "../components/landing/ThreeBackground";

const Landing = () => {
  const { openLoginModal } = useAuthModal();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-text-dark dark:bg-gray-900 dark:text-white pt-24">
      <ThreeBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection onAccessPortal={openLoginModal} />
        <CTASection onAccessPortal={openLoginModal} />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
