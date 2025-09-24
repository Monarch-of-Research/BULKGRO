import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Head>
        <title>Dashboard - BULKGRO</title>
      </Head>

      {/* Header */}
      <header className="bg-green-900 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">BULK<span className="text-yellow-400">GRO</span></h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.username}!</span>
            <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold">Logout</button>
          </div>
        </div>
        
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-green-900">Available Products</h3>
            <p className="text-3xl font-bold text-green-700">1,247</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-green-900">Active Groups</h3>
            <p className="text-3xl font-bold text-green-700">89</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-400">
            <h3 className="text-lg font-bold text-green-900">Your Orders</h3>
            <p className="text-3xl font-bold text-green-700">12</p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Browse Products', desc: 'View available bulk products', icon: '📦', link: '/products', color: 'from-blue-500 to-blue-600' },
            { title: 'Market Groups', desc: 'Join local market groups', icon: '👥', link: '/groups', color: 'from-green-500 to-green-600' },
            { title: 'Group Purchase', desc: 'Collaborative buying', icon: '🤝', link: '/group-purchase', color: 'from-purple-500 to-purple-600' },
            { title: 'Feedback', desc: 'Share your experience', icon: '💬', link: '/feedback', color: 'from-orange-500 to-orange-600' }
          ].map((card, index) => (
            <div 
              key={index}
              onClick={() => router.push(card.link)}
              className={`bg-gradient-to-r ${card.color} text-white rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="opacity-90">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}