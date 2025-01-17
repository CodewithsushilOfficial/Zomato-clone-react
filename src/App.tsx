import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Collections from './components/Collections';
import Restaurants from './components/Restaurants';
import Localities from './components/Localities';
import GetApp from './components/GetApp';
import ExploreOptions from './components/ExploreOptions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <Collections />
      <Restaurants />
      <Localities />
      <GetApp />
      <ExploreOptions />
      <Footer />
    </div>
  );
}

export default App;