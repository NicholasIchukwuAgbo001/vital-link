import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 sm:pr-4 mb-1 sm:mb-0"
        >
          {label}
        </label>
      )}
      <div className="sm:w-2/3">
        <input
          id={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
