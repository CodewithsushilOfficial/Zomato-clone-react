import React from 'react';
import { ChevronRight } from 'lucide-react';

const localities = [
  "Lower Parel (388 places)",
  "Powai (388 places)",
  "Bandra Kurla Complex (388 places)",
  "Bandra West (388 places)",
  "Vashi (388 places)",
  "Fort (388 places)",
  "Juhu (388 places)",
  "Andheri West (388 places)"
];

const Localities = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular localities in Mumbai</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {localities.map((locality, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-gray-700">{locality}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Localities;