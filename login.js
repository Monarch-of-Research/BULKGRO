import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (formData.username) {
      localStorage.setItem('user', JSON.stringify(formData));
      router.push('/dashboard');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-center justify-center p-4">
      <Head>
        <title>{isLogin ? 'Login' : 'Sign Up'} - BULKGRO</title>
      </Head>

      <div className="max-w-md w-full bg-green-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-green-600 overflow-hidden">
        {/* Header */}
        <div className="bg-green-900 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">BULK<span className="text-yellow-400">GRO</span></h1>
          <p className="text-green-200">{isLogin ? 'Welcome Back' : 'Create Account'}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-green-100 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                placeholder="Enter your username"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-green-100 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-green-100 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-green-100 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 py-3 rounded-lg font-bold hover:scale-105 transform transition-all duration-300"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-yellow-300 hover:text-yellow-200 transition-colors duration-200"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}