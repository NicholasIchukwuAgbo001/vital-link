import React from "react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onAccessPortal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onAccessPortal }) => {
  const navigate = useNavigate();

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Births unregistered annually in Nigeria
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Reduction in documentation errors
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">90%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Faster processing time with digital system
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-700 dark:text-yellow-300 font-medium">
                Nigeria faces critical challenges with vital records management.
                With over 60% of births and deaths going unregistered annually,
                it impacts healthcare planning, resource allocation, and legal
                documentation.
              </p>
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
