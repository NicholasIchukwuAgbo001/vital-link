import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme.tsx";
import { ICONS } from "../constants.tsx";
import MobileMenu from "./MobileMenu.tsx";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Benefits", path: "/benefits" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/">
              <ICONS.logo className="h-10 w-10 text-primary" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(222, 84, 125, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/"
              className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              VitalLink
            </Link>
          </motion.div>
        </div>

        <div className="md:hidden flex items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <ICONS.moon className="h-5 w-5" />
            ) : (
              <ICONS.sun className="h-5 w-5" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        location.pathname === link.path
                          ? "bg-primary text-white shadow-lg"
                          : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-primary/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <ICONS.moon className="h-5 w-5" />
            ) : (
              <ICONS.sun className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        <MobileMenu
          navLinks={navLinks}
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
        />
      </AnimatePresence>
    </header>
  );
};

export default Header;
