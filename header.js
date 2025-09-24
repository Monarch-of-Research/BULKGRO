import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <header className="bg-green-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 
          className="text-3xl font-bold cursor-pointer" 
          onClick={() => router.push('/dashboard')}
        >
          BULK<span className="text-yellow-400">GRO</span>
        </h1>
        
        <nav className="hidden md:flex space-x-6">
          <a 
            onClick={() => router.push('/dashboard')} 
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            Dashboard
          </a>
          <a 
            onClick={() => router.push('/products')} 
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            Products
          </a>
          <a 
            onClick={() => router.push('/groups')} 
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            Groups
          </a>
          <a 
            onClick={() => router.push('/group-purchase')} 
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            Group Purchase
          </a>
          <a 
            onClick={() => router.push('/feedback')} 
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            Feedback
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {user && <span>Welcome, {user.username}!</span>}
          <button 
            onClick={handleLogout}
            className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}