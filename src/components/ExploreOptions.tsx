import React from 'react';
import { ChevronDown } from 'lucide-react';

const ExploreOptions = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore options near me</h2>
        <div className="space-y-4">
          {['Popular cuisines near me', 'Popular restaurant types near me', 'Top Restaurant Chains', 'Cities We Deliver To'].map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white">
              <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50">
                <span className="text-gray-700 font-medium">{category}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreOptions;