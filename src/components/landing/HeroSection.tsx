import React from "react";
import { useNavigate } from "react-router-dom";
import HeroStats from "./HeroStats.tsx";
import HeroChallenge from "./HeroChallenge.tsx";
import RotatingStats from "./RotatingStats.tsx";

interface HeroSectionProps {
  onAccessPortal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onAccessPortal }) => {
  const navigate = useNavigate();

  const stats = [
    {
      value: "24/7",
      label: "Access to records anytime, anywhere",
      color: "text-primary",
    },
    {
      value: "500+",
      label: "Hospitals using our platform",
      color: "text-green-600",
    },
    {
      value: "99.9%",
      label: "Uptime reliability guarantee",
      color: "text-purple-600",
    },
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen py-5 px-4 sm:px-6 lg:px-8 relative z-0 mt-0 pt-20"
      style={{ backgroundImage: "url('/hero-img.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Secure Digital Registration of{" "}
            <span className="text-primary">Life Events</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-6">
            VitalLink provides a secure, efficient, and tamper-proof system for
            registering birth and death certificates. Streamline your hospital's
            documentation process while ensuring data integrity and compliance.
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <HeroStats stats={stats} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <HeroChallenge />
              <RotatingStats />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onAccessPortal}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-600 transition-all transform hover:scale-105"
            >
              Access Portal
            </button>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-primary dark:text-white border-2 border-primary font-semibold rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
