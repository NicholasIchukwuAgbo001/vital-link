import { useAuthModal } from "../contexts/AuthModalContext.tsx";
import { motion } from "framer-motion";
import Header from "../components/landing/Header.tsx";
import HeroSection from "../components/landing/HeroSection.tsx";
import CTASection from "../components/landing/CTASection.tsx";
import TrustedCompanies from "../components/landing/TrustedCompanies.tsx";
import Footer from "../components/landing/Footer.tsx";

const Landing = () => {
  const { openLoginModal } = useAuthModal();

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-text-dark dark:bg-gray-900 dark:text-white">
      <div className="relative z-0">
        <Header />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <HeroSection onAccessPortal={openLoginModal} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CTASection onAccessPortal={openLoginModal} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TrustedCompanies />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
