import React from "react";
import Header from "../components/landing/Header";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "1",
      title: "Admin Creates Accounts",
      description:
        "System administrators create and manage hospital accounts through the centralized admin portal.",
    },
    {
      number: "2",
      title: "Hospital Login & Record",
      description:
        "Authorized hospitals log in to register birth and death information through our intuitive interface.",
    },
    {
      number: "3",
      title: "Verify & Share",
      description:
        "Instantly generate verifiable certificates with QR codes that can be shared electronically or printed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How VitalLink Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple, efficient process for registering and managing vital
            records
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
