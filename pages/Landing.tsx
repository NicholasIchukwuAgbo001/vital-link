import React from "react";
import { useAuthModal } from "../contexts/AuthModalContext";
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  const { openLoginModal } = useAuthModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-24">
      <Header />
      <HeroSection onAccessPortal={openLoginModal} />
      <CTASection onAccessPortal={openLoginModal} />
      <Footer />
    </div>
  );
};

export default Landing;
