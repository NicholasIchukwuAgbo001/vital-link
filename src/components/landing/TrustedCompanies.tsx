import React from "react";

const TrustedCompanies = () => {
  const companies = [
    { id: 2, name: "University College Hospital", logo: "/trusth-2.png" },
    { id: 3, name: "National Hospital Abuja", logo: "/trusth-3.png" },
    { id: 4, name: "Federal Medical Centre", logo: "/trusth-4.png" },
    { id: 5, name: "State Specialist Hospital", logo: "/trusth-5.png" },
    { id: 6, name: "Private Medical Centre", logo: "/trusth-6.png" },
    { id: 7, name: "General Hospital", logo: "/trusth-7.png" },
    { id: 8, name: "Teaching Hospital", logo: "/trusth-8.png" },
    { id: 9, name: "Regional Medical Center", logo: "/trusth-9.jpeg" },
    { id: 10, name: "Specialist Clinic", logo: "/trusth-10.png" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Healthcare Institutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join hundreds of hospitals across Nigeria transforming their vital
            records management
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-loop-scroll">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-40 h-24 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}

            {companies.map((company) => (
              <div
                key={`duplicate-${company.id}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-40 h-24 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
