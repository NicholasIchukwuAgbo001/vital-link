import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Hospital } from "../../types.ts";
import Input from "./ui/Input.tsx";
import Button from "./ui/Button.tsx";

interface HospitalFormProps {
  onSubmit: (hospital: Omit<Hospital, "id">) => void;
  onUpdate: (hospital: Hospital) => void;
  initialData?: Hospital | null;
  isEditing: boolean;
  isApproval?: boolean;
}

const HospitalForm: React.FC<HospitalFormProps> = ({
  onSubmit,
  onUpdate,
  initialData,
  isEditing,
  isApproval = false,
}) => {
  const [hospital, setHospital] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    license: "",
    password: "",
  });

  useEffect(() => {
    if (isEditing && initialData) {
      setHospital({
        name: initialData.name,
        email: initialData.email,
        location: initialData.location,
        phone: initialData.phone,
        license: initialData.license,
        password: initialData.password || "",
      });
    } else {
      setHospital({
        name: "",
        email: "",
        location: "",
        phone: "",
        license: "",
        password: "",
      });
    }
  }, [initialData, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHospital((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!hospital.name.trim()) {
      toast.error("Hospital name is required");
      return false;
    }

    if (!hospital.location.trim()) {
      toast.error("Location is required");
      return false;
    }

    if (!hospital.phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }

    if (!hospital.license.trim()) {
      toast.error("License number is required");
      return false;
    }

    if (!hospital.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(hospital.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(hospital.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    if (isApproval && !hospital.password) {
      toast.error("Password is required for approval");
      return false;
    }

    if (!isEditing && !isApproval && !hospital.password) {
      toast.error("Password is required when creating a new hospital");
      return false;
    }

    if (hospital.password && hospital.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isEditing && initialData) {
      onUpdate({ ...initialData, ...hospital });
    } else {
      onSubmit(hospital);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Hospital Name"
        name="name"
        value={hospital.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={hospital.email}
        onChange={handleChange}
        required
        disabled={isEditing || isApproval}
      />
      <Input
        label="Location"
        name="location"
        value={hospital.location}
        onChange={handleChange}
        required
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={hospital.phone}
        onChange={handleChange}
        required
      />
      <Input
        label="License Number"
        name="license"
        value={hospital.license}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={hospital.password}
        onChange={handleChange}
        required={isApproval || !isEditing}
        placeholder={
          isEditing || isApproval
            ? "Leave blank to keep current password"
            : "Required for hospital login"
        }
      />
      <Button type="submit" fullWidth>
        {isApproval
          ? "Approve Hospital"
          : isEditing
          ? "Update Hospital"
          : "Create Hospital"}
      </Button>
    </form>
  );
};

export default HospitalForm;
