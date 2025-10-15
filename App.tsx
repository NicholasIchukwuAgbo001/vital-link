import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/src/hooks/useTheme.tsx";
import { AuthModalProvider } from "@/src/contexts/AuthModalContext.tsx";
import Landing from "@/src/pages/Landing.tsx";
import VerificationPage from "@/src/pages/VerificationPage.tsx";
import AdminLayout from "@/src/components/layout/AdminLayout.tsx";
import HospitalLayout from "@/src/components/layout/HospitalLayout.tsx";
import ProtectedRoute from "@/src/components/ProtectedRoute.tsx";
import AdminDashboard from "@/src/pages/admin/AdminDashboard.tsx";
import ManageHospitals from "@/src/pages/admin/ManageHospitals.tsx";
import AdminRecords from "@/src/pages/admin/AdminRecords.tsx";
import HospitalDashboard from "@/src/pages/hospital/HospitalDashboard.tsx";
import ManageRecords from "@/src/pages/hospital/ManageRecords.tsx";
import { UserRole } from "@/types.ts";

import FeaturesPage from "@/src/pages/FeaturesPage.tsx";
import HowItWorksPage from "@/src/pages/HowItWorksPage.tsx";
import BenefitsPage from "@/src/pages/BenefitsPage.tsx";
import TestimonialsPage from "@/src/pages/TestimonialsPage.tsx";
import ContactPage from "@/src/pages/ContactPage.tsx";

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
