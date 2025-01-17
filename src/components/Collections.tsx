import React from 'react';
import { ChevronRight } from 'lucide-react';

const collections = [
  {
    title: "Trending This Week",
    places: "30 Places",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
  },
  {
    title: "Best of Mumbai",
    places: "45 Places",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
  },
  {
    title: "Newly Opened",
    places: "28 Places",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
  },
  {
    title: "Great Cafes",
    places: "22 Places",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80"
  }
];

const Collections = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Collections</h2>
            <p className="mt-2 text-gray-600">
              Explore curated lists of top restaurants, cafes, pubs, and bars in India, based on trends
            </p>
          </div>
          <button className="flex items-center text-red-500 hover:text-red-600">
            All collections <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
              <div className="h-64 relative">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{collection.title}</h3>
                  <p className="flex items-center mt-1">
                    {collection.places} <ChevronRight className="w-4 h-4 ml-1" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;