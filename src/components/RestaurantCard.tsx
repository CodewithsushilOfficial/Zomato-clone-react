import React from 'react';
import { Star } from 'lucide-react';

interface RestaurantProps {
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
}

const RestaurantCard: React.FC<RestaurantProps> = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceForTwo,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 py-1 rounded">
          {priceForTwo}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center bg-green-500 px-2 py-1 rounded">
            <span className="text-white text-sm font-medium">{rating}</span>
            <Star className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">{cuisine}</p>
        <p className="text-gray-500 text-sm">{deliveryTime} delivery time</p>
      </div>
    </div>
  );
};

export default RestaurantCard;