import React from 'react';
import { Bell, Settings, Search } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const DashboardHeader: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex items-center">
            <div className="max-w-xs w-full lg:max-w-md">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search files..."
                  type="search"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Settings</span>
              <Settings className="h-6 w-6" />
            </button>
            
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">
                {user?.email}
              </span>
              <img
                className="h-8 w-8 rounded-full"
                src={`https://ui-avatars.com/api/?name=${user?.email}&background=0D8ABC&color=fff`}
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;