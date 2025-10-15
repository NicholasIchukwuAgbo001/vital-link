import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ICONS } from "../../../constants.tsx";

interface MobileMenuProps {
  navLinks: { name: string; path: string }[];
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navLinks,
  isMenuOpen,
  closeMenu,
}) => {
  const location = useLocation();

  return (
    <>
      {isMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="md:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ICONS.logo className="h-8 w-8 text-primary" />
                  <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                    VitalLink
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-900">
              <nav>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          location.pathname === link.path
                            ? "bg-primary text-white shadow-lg"
                            : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-primary/10"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
