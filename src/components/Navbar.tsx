import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-500">Zomato</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center">
              <div className="flex items-center px-4 border-r border-gray-300">
                <MapPin className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Location"
                  className="ml-2 outline-none"
                />
              </div>
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for restaurant, cuisine or a dish"
                  className="ml-2 w-full outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Log in</button>
            <button className="ml-4 px-4 py-2 text-gray-700 hover:text-gray-900">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;