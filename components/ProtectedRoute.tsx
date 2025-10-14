import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { UserRole } from "../types";
import { useAuthModal } from "../contexts/AuthModalContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { isAuthenticated, user } = useAuthStore();
  const { openLoginModal } = useAuthModal();
  const location = useLocation();

  if (!isAuthenticated) {
    openLoginModal();

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Please log in to access this content
          </p>
        </div>
      </div>
    );
  }

  if (user?.role !== role) {
    const dashboardPath =
      user?.role === UserRole.ADMIN
        ? "/admin/dashboard"
        : "/hospital/dashboard";
    return <Navigate to={dashboardPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
