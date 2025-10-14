
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ICONS } from '../../constants';
import ThemeToggle from '../ThemeToggle';
import { useAuthStore } from '../../store/useAuthStore';

interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
    const logout = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
        <ICONS.logo className="h-8 w-8 text-primary" />
        <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">VitalLink</span>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                isActive ? 'bg-primary-50 dark:bg-gray-700 text-primary dark:text-white font-semibold' : ''
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
         <ThemeToggle />
         <button onClick={handleLogout} className="w-full mt-4 flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <ICONS.logout className="h-5 w-5 mr-3" />
            <span>Logout</span>
         </button>
      </div>
    </div>
  );
};

export default Sidebar;
