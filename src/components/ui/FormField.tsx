import React from "react";

interface FormFieldProps {
  label: string;
  id: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  children,
  required = false,
  error,
}) => {
  return (
    <div className="text-left">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;
