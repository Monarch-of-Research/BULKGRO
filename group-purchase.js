import { useState } from 'react';
import Head from 'next/head';

const groupPurchases = [
  { 
    id: 1, 
    product: 'Premium Rice', 
    image: '🍚', 
    originalPrice: '₦28,000', 
    groupPrice: '₦25,000', 
    savings: '₦3,000', 
    membersNeeded: 10,
    currentMembers: 7,
    deadline: '2023-12-31',
    location: 'Nationwide'
  },
  { 
    id: 2, 
    product: 'Organic Fertilizer', 
    image: '🧪', 
    originalPrice: '₦15,000', 
    groupPrice: '₦12,000', 
    savings: '₦3,000', 
    membersNeeded: 20,
    currentMembers: 15,
    deadline: '2023-12-25',
    location: 'South West'
  },
  { 
    id: 3, 
    product: 'Seedlings Pack', 
    image: '🌱', 
    originalPrice: '₦8,000', 
    groupPrice: '₦6,500', 
    savings: '₦1,500', 
    membersNeeded: 15,
    currentMembers: 10,
    deadline: '2023-12-28',
    location: 'North Central'
  }
];

export default function GroupPurchase() {
  const [selectedPurchase, setSelectedPurchase] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Head>
        <title>Group Purchase - BULKGRO</title>
      </Head>

      <header className="bg-green-900 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">BULK<span className="text-yellow-400">GRO</span></h1>
          <p className="text-green-200">Collaborative Buying Power</p>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-8">Active Group Purchases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupPurchases.map(purchase => (
            <div key={purchase.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{purchase.image}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{purchase.product}</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Original Price:</span>
                    <span className="line-through text-red-500">{purchase.originalPrice}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Group Price:</span>
                    <span className="text-green-600 font-bold">{purchase.groupPrice}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">You Save:</span>
                    <span className="text-yellow-600 font-bold">{purchase.savings}</span>
                  </p>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Members: {purchase.currentMembers}/{purchase.membersNeeded}</span>
                    <span>{Math.round((purchase.currentMembers / purchase.membersNeeded) * 100)}%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(purchase.currentMembers / purchase.membersNeeded) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">📍 {purchase.location} • ⏰ {purchase.deadline}</p>
                <button 
                  onClick={() => setSelectedPurchase(purchase)}
                  className="w-full bg-yellow-400 text-green-900 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
                >
                  Join Purchase
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for joining group purchase */}
        {selectedPurchase && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-green-900 mb-4">Join {selectedPurchase.product} Group Purchase</h3>
              <p className="mb-4">You are about to join the group purchase for {selectedPurchase.product} at {selectedPurchase.groupPrice}.</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setSelectedPurchase(null)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    // Handle join logic here
                    alert(`Successfully joined ${selectedPurchase.product} group purchase!`);
                    setSelectedPurchase(null);
                  }}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium"
                >
                  Confirm Join
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}