import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./hooks/useTheme";
import { AuthModalProvider } from "./contexts/AuthModalContext";
import Landing from "./pages/Landing";
import VerificationPage from "./pages/VerificationPage";
import AdminLayout from "./components/layout/AdminLayout";
import HospitalLayout from "./components/layout/HospitalLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageHospitals from "./pages/admin/ManageHospitals";
import AdminRecords from "./pages/admin/AdminRecords";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import ManageRecords from "./pages/hospital/ManageRecords";
import { UserRole } from "./types";

import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import BenefitsPage from "./pages/BenefitsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <HashRouter>
        <AuthModalProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/verify/:certificateId"
              element={<VerificationPage />}
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute role={UserRole.ADMIN}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="hospitals" element={<ManageHospitals />} />
              <Route path="records" element={<AdminRecords />} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>

            <Route
              path="/hospital"
              element={
                <ProtectedRoute role={UserRole.HOSPITAL}>
                  <HospitalLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<HospitalDashboard />} />
              <Route path="records" element={<ManageRecords />} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthModalProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
