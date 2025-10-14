import { create } from "zustand";
import { User, UserRole, Hospital } from "../types";
import { useDataStore } from "./useDataStore";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  initialize: () => void;
}

const ADMIN_USER = { email: "admin@vitallink.ng", password: "admin123" };

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,

  initialize: () => {
    try {
      const storedUser = localStorage.getItem("vitalLinkUser");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        set({ user, isAuthenticated: true });
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("vitalLinkUser");
    }
  },

  login: async (email, password) => {
    // Admin login
    if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
      const adminUser: User = {
        id: "admin-user",
        email: ADMIN_USER.email,
        role: UserRole.ADMIN,
      };
      localStorage.setItem("vitalLinkUser", JSON.stringify(adminUser));
      set({ user: adminUser, isAuthenticated: true });
      return adminUser;
    }

    // Hospital login - only hospitals created by admin can log in
    const { hospitals } = useDataStore.getState();
    const hospital = hospitals.find((h) => h.email === email);

    // Check if hospital exists and was created by admin (has a password)
    if (hospital && hospital.password && hospital.password === password) {
      const hospitalUser: User = {
        id: `hospital-user-${hospital.id}`,
        email: hospital.email,
        role: UserRole.HOSPITAL,
        hospitalId: hospital.id,
      };
      localStorage.setItem("vitalLinkUser", JSON.stringify(hospitalUser));
      set({ user: hospitalUser, isAuthenticated: true });
      return hospitalUser;
    }

    throw new Error("Invalid credentials");
  },

  logout: () => {
    localStorage.removeItem("vitalLinkUser");
    set({ user: null, isAuthenticated: false });
  },
}));

// Initialize auth state from localStorage on app load
useAuthStore.getState().initialize();
