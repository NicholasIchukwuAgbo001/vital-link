import React from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../../../constants.tsx";
import SocialLinks from "./SocialLinks.tsx";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Solutions", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Updates", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
    ],
    company: [
      { name: "About", href: "/#contact" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/#contact" },
      { name: "Partners", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Link to="/">
                <ICONS.logo className="h-8 w-8 text-primary" />
              </Link>
              <Link to="/" className="ml-2 text-xl font-bold">
                VitalLink
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Secure digital registration of life events for modern healthcare
              systems.
            </p>
            <div className="mb-6">
              <SocialLinks />
            </div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} VitalLink. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              {links.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">
            VitalLink is committed to providing secure and reliable vital
            records management for healthcare institutions worldwide.
          </p>
          <p className="text-sm">
            Designed and built with ❤️ for healthcare professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
