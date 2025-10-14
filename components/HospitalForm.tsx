import React, { useState, useEffect } from "react";
import { Hospital } from "../types";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface HospitalFormProps {
  onSubmit: (hospital: Omit<Hospital, "id">) => void;
  onUpdate: (hospital: Hospital) => void;
  initialData?: Hospital | null;
  isEditing: boolean;
  isApproval?: boolean; // New prop for approval mode
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
    password: "",
  });

  useEffect(() => {
    if (isEditing && initialData) {
      setHospital({ ...initialData, password: initialData.password || "" });
    } else {
      setHospital({
        name: "",
        email: "",
        location: "",
        phone: "",
        password: "",
      });
    }
  }, [initialData, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHospital((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For approval mode, password is required
    if (isApproval && !hospital.password) {
      alert("Password is required for approval");
      return;
    }

    // For regular creation, password is required
    if (!isEditing && !isApproval && !hospital.password) {
      alert("Password is required when creating a new hospital");
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
