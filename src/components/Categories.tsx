import React from 'react';
import { Coffee, Pizza, Sandwich, IceCream, Beef, Salad } from 'lucide-react';

const categories = [
  { name: 'Breakfast', icon: Coffee },
  { name: 'Pizza', icon: Pizza },
  { name: 'Sandwich', icon: Sandwich },
  { name: 'Desserts', icon: IceCream },
  { name: 'Meat', icon: Beef },
  { name: 'Healthy', icon: Salad },
];

const Categories = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <Icon className="w-12 h-12 text-red-500 mb-2" />
                <span className="text-gray-700 font-medium">{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;