import React from "react";
import Header from "../components/landing/Header";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, Metro General Hospital",
      content:
        "VitalLink has revolutionized how we manage vital records. The time savings alone have been incredible, and our staff love the intuitive interface.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Health Information Manager, City Medical Center",
      content:
        "The security features give us peace of mind knowing our patients' sensitive data is protected. Implementation was seamless and the support team is excellent.",
      avatar: "MC",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director of Administration, Regional Health Network",
      content:
        "Since adopting VitalLink, we've reduced paperwork by 75% and improved accuracy in our records. It's become an indispensable tool for our organization.",
      avatar: "ER",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Healthcare Professionals
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from institutions that have transformed their vital records
            management with VitalLink
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
