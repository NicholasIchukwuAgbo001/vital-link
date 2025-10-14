import React from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../../constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <ICONS.logo className="h-10 w-10 text-primary" />
          </Link>
          <Link
            to="/"
            className="ml-2 text-2xl font-bold text-gray-900 dark:text-white"
          >
            VitalLink
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/features"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/benefits"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
