import { useState } from "react";

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

interface FieldValidation {
  [key: string]: ValidationRules;
}

interface FormErrors {
  [key: string]: string;
}

export const useFormValidation = (validationRules: FieldValidation) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string => {
    const rules = validationRules[name];
    if (!rules) return "";

    if (rules.required && !value.trim()) {
      return "This field is required";
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return "Invalid format";
    }

    if (rules.custom && !rules.custom(value)) {
      return "Invalid value";
    }

    return "";
  };

  const validateForm = (formData: { [key: string]: string }): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName] || "");
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
  };
};
