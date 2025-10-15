import React, { useState } from "react";
import Header from "../components/landing/Header";
import ContactInfo from "../components/landing/ContactInfo";
import ContactForm from "../components/landing/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about VitalLink? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
