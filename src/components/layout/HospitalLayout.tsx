import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import { ICONS } from "../../../constants.tsx";

const hospitalNavItems = [
  { path: "/hospital/dashboard", label: "Dashboard", icon: ICONS.dashboard },
  { path: "/hospital/records", label: "Records", icon: ICONS.records },
];

const HospitalLayout: React.FC = () => {
  const location = useLocation();
  const currentNavItem = hospitalNavItems.find((item) =>
    location.pathname.startsWith(item.path)
  );
  const title = currentNavItem ? currentNavItem.label : "Hospital Dashboard";

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar navItems={hospitalNavItems} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HospitalLayout;
