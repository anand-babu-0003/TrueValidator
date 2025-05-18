import React from 'react';
import { Heart } from 'lucide-react';

const DashboardFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span className="text-gray-500">by TrueValidator</span>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Help Center
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © {currentYear} TrueValidator. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;