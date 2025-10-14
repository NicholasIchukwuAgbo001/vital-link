
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { ICONS } from '../constants';
import Button from './ui/Button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-full flex items-center justify-between p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div className="flex items-center">
        {theme === 'light' ? <ICONS.moon className="w-5 h-5 mr-3" /> : <ICONS.sun className="w-5 h-5 mr-3" />}
        <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
      </div>
      <div className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-200 dark:bg-gray-600">
        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
