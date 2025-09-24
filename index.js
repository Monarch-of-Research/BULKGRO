import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      <Head>
        <title>BULKGRO - Agricultural Bulk Market</title>
      </Head>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="animate-pulse-slow w-full h-full bg-gradient-to-r from-green-400 to-yellow-200 rounded-full blur-3xl"></div>
        </div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 3D Animation Placeholder */}
        <div className="mb-8 w-64 h-64 bg-green-800 rounded-full flex items-center justify-center border-4 border-gold">
          <div className="text-6xl">🌾</div>
        </div>

        <h1 className={`text-6xl md:text-8xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          BULK<span className="text-yellow-400">GRO</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl leading-relaxed">
          Nigeria's Premier Agricultural Bulk Marketplace
          <br />
          <span className="text-yellow-300">Connecting Farmers, Suppliers & Buyers Nationwide</span>
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex">
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25"
          >
            Get Started
          </button>
          
          <button className="border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-green-900 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl">
          {[
            { icon: '🤝', title: 'B2B Marketplace', desc: 'Business-to-business transactions' },
            { icon: '🌍', title: 'Nationwide Reach', desc: 'Connect across Nigeria' },
            { icon: '📦', title: 'Bulk Purchases', desc: 'Group buying power' }
          ].map((feature, index) => (
            <div key={index} className="bg-green-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-600 hover:border-yellow-400 transition-all duration-300">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="text-yellow-300 font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-green-100">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}