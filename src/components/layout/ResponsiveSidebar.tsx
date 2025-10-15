import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ICONS } from "../constants.tsx";
import ThemeToggle from "../ThemeToggle.tsx";
import { useAuthStore } from "../../store/useAuthStore.ts";

interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ResponsiveSidebarProps {
  navItems: NavItem[];
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({
  navItems,
  isSidebarOpen,
  toggleSidebar,
}) => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const closeSidebar = () => {
    toggleSidebar();
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed md:relative z-40 md:z-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-64 w-64 pt-16 md:pt-0`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
          <div className="flex items-center">
            <ICONS.logo className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              VitalLink
            </span>
          </div>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            aria-label="Close sidebar"
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

        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700 hidden md:flex">
          <ICONS.logo className="h-8 w-8 text-primary" />
          <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">
            VitalLink
          </span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  isActive
                    ? "bg-primary-50 dark:bg-gray-700 text-primary dark:text-white font-semibold"
                    : ""
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <ThemeToggle />
          <button
            onClick={() => {
              handleLogout();
              closeSidebar();
            }}
            className="w-full mt-4 flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ICONS.logout className="h-5 w-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSidebar;
