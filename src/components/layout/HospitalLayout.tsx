import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar.tsx";
import { ICONS } from "../../../constants.tsx";

const hospitalNavItems = [
  { path: "/hospital/dashboard", label: "Dashboard", icon: ICONS.dashboard },
  { path: "/hospital/records", label: "Records", icon: ICONS.records },
  { path: "/hospital/profile", label: "Profile", icon: ICONS.hospitals },
];

const HospitalLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentNavItem = hospitalNavItems.find((item) =>
    location.pathname.startsWith(item.path)
  );
  const title = currentNavItem ? currentNavItem.label : "Hospital Dashboard";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-20 flex items-center justify-between px-4">
        <div className="flex items-center">
          <ICONS.logo className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
            VitalLink
          </span>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-700 dark:text-gray-300"
          aria-label="Toggle sidebar"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <ResponsiveSidebar
        navItems={hospitalNavItems}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex-1 flex flex-col overflow-hidden pt-16 md:pt-0">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HospitalLayout;
