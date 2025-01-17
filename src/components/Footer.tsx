import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Zomato</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                <Globe className="w-5 h-5" />
                India
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                <Globe className="w-5 h-5" />
                English
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">ABOUT ZOMATO</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Who We Are</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Work With Us</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">ZOMAVERSE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Zomato</a></li>
                <li><a href="#" className="hover:text-white">Blinkit</a></li>
                <li><a href="#" className="hover:text-white">Feeding India</a></li>
                <li><a href="#" className="hover:text-white">Hyperpure</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">FOR RESTAURANTS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white">Apps For You</a></li>
                <li><a href="#" className="hover:text-white">For Enterprises</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">LEARN MORE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;