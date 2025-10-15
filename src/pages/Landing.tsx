import { useAuthModal } from "../contexts/AuthModalContext.tsx";
import Header from "../components/landing/Header.tsx";
import HeroSection from "../components/landing/HeroSection.tsx";
import CTASection from "../components/landing/CTASection.tsx";
import Footer from "../components/landing/Footer.tsx";

const Landing = () => {
  const { openLoginModal } = useAuthModal();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-text-dark dark:bg-gray-900 dark:text-white pt-24">
      <div className="relative z-0">
        <Header />
        <HeroSection onAccessPortal={openLoginModal} />
        <CTASection onAccessPortal={openLoginModal} />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
