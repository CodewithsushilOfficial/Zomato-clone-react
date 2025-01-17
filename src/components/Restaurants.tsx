import React from 'react';
import RestaurantCard from './RestaurantCard';

const restaurants = [
  {
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
    cuisine: "Italian, Pizza",
    rating: 4.5,
    deliveryTime: "30-40 min",
    priceForTwo: "₹600 for two"
  },
  {
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80",
    cuisine: "American, Fast Food",
    rating: 4.3,
    deliveryTime: "25-35 min",
    priceForTwo: "₹400 for two"
  },
  {
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
    cuisine: "Japanese, Sushi",
    rating: 4.7,
    deliveryTime: "40-50 min",
    priceForTwo: "₹800 for two"
  },
  {
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    cuisine: "Indian, North Indian",
    rating: 4.4,
    deliveryTime: "35-45 min",
    priceForTwo: "₹500 for two"
  },
  {
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    cuisine: "Healthy, Salads",
    rating: 4.6,
    deliveryTime: "20-30 min",
    priceForTwo: "₹450 for two"
  },
  {
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80",
    cuisine: "Mexican, Street Food",
    rating: 4.2,
    deliveryTime: "30-40 min",
    priceForTwo: "₹350 for two"
  }
];

const Restaurants = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;