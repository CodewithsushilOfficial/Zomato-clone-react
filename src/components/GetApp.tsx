import React from 'react';
import { Smartphone, Mail } from 'lucide-react';

const GetApp = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80"
              alt="Mobile App"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get the Zomato app</h2>
            <p className="text-gray-600 mb-8">
              We will send you a link, open it on your phone to download the app
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <Mail className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <Smartphone className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Share App Link
            </button>
            <div className="mt-8">
              <p className="text-gray-600 mb-4">Download app from</p>
              <div className="flex gap-4">
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt="Play Store"
                  className="h-10 cursor-pointer"
                />
                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt="App Store"
                  className="h-10 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;