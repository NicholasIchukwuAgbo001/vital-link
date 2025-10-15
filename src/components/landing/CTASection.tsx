import React from "react";

interface CTASectionProps {
  onAccessPortal: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onAccessPortal }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Transforming Nigeria's Vital Records System
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
          Join hospitals across Nigeria already using VitalLink to overcome
          documentation challenges and ensure every life event is properly
          recorded.
        </p>
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-100">
                Access to records anytime, anywhere
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-blue-100">
                Hospitals using our platform
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-blue-100">
                Uptime reliability guarantee
              </div>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mb-6">
            <p className="text-white font-medium">
              "VitalLink has helped us reduce documentation errors by 85% and
              cut processing time from days to minutes. A game-changer for
              Nigerian healthcare." - Lagos State Hospital Administrator
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onAccessPortal}
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Access Portal
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
