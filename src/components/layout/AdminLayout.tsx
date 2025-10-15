import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import { ICONS } from "../../../constants.tsx";
import { UserRole } from "../../../types.ts";

const adminNavItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: ICONS.dashboard },
  { path: "/admin/hospitals", label: "Hospitals", icon: ICONS.hospitals },
  { path: "/admin/records", label: "Records", icon: ICONS.records },
];

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const currentNavItem = adminNavItems.find((item) =>
    location.pathname.startsWith(item.path)
  );
  const title = currentNavItem ? currentNavItem.label : "Admin Dashboard";

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar navItems={adminNavItems} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
