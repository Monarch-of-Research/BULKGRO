import { useState } from 'react';
import Head from 'next/head';

const products = [
  { id: 1, name: 'Premium Rice', price: '₦25,000/bag', location: 'Kano', image: '🍚', category: 'Grains' },
  { id: 2, name: 'Fresh Tomatoes', price: '₦15,000/crate', location: 'Lagos', image: '🍅', category: 'Vegetables' },
  { id: 3, name: 'Beans', price: '₦22,000/bag', location: 'Kaduna', image: '🫘', category: 'Grains' },
  { id: 4, name: 'Plantains', price: '₦8,000/bunch', location: 'Ogun', image: '🍌', category: 'Fruits' },
  { id: 5, name: 'Palm Oil', price: '₦18,000/jerrican', location: 'Delta', image: '🛢️', category: 'Oils' },
  { id: 6, name: 'Yam Tubers', price: '₦12,000/100 pieces', location: 'Benue', image: '🍠', category: 'Tubers' }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Grains', 'Vegetables', 'Fruits', 'Oils', 'Tubers'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Head>
        <title>Products - BULKGRO</title>
      </Head>

      <header className="bg-green-900 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">BULK<span className="text-yellow-400">GRO</span></h1>
          <p className="text-green-200">Agricultural Products Marketplace</p>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Browse Products</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{product.price}</p>
                <p className="text-gray-600 mb-4">📍 {product.location}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}