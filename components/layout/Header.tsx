
import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';

const Header: React.FC<{ title: string }> = ({ title }) => {
  const user = useAuthStore(state => state.user);

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
      <div className="flex items-center">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800 dark:text-white">{user?.email}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
