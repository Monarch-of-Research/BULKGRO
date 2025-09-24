import { useState } from 'react';
import Head from 'next/head';

const marketGroups = [
  { id: 1, name: 'Lagos Farmers Cooperative', location: 'Lagos', members: 245, products: 12, image: '🏙️' },
  { id: 2, name: 'Kano Grain Merchants', location: 'Kano', members: 189, products: 8, image: '🌾' },
  { id: 3, name: 'Port Harcourt Fishermen', location: 'Rivers', members: 156, products: 5, image: '🎣' },
  { id: 4, name: 'Abuja Vegetable Growers', location: 'Abuja', members: 98, products: 15, image: '🥦' },
  { id: 5, name: 'Ibadan Poultry Farmers', location: 'Oyo', members: 267, products: 10, image: '🐔' },
  { id: 6, name: 'Enugu Root Crops', location: 'Enugu', members: 134, products: 7, image: '🍠' }
];

export default function Groups() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = marketGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Head>
        <title>Market Groups - BULKGRO</title>
      </Head>

      <header className="bg-green-900 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">BULK<span className="text-yellow-400">GRO</span></h1>
          <p className="text-green-200">Connect with Local Market Groups</p>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Search and Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Market Groups</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search groups by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 bg-white border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <div key={group.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{group.image}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{group.name}</h3>
                <p className="text-green-600 font-semibold mb-2">📍 {group.location}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>👥 {group.members} members</span>
                  <span>📦 {group.products} products</span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}