import { useState } from 'react';
import Head from 'next/head';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Head>
        <title>Feedback - BULKGRO</title>
      </Head>

      <header className="bg-green-900 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">BULK<span className="text-yellow-400">GRO</span></h1>
          <p className="text-green-200">We'd love to hear from you</p>
        </div>
      </header>

      <div className="container mx-auto p-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-green-900 mb-8">Share Your Feedback</h2>

        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <p>Thank you for your feedback! We'll get back to you soon.</p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-green-900 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-green-900 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-green-900 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-green-900 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300"
            >
              Submit Feedback
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">Contact Information</h3>
            <p className="text-gray-600">Email: support@bulkgro.com</p>
            <p className="text-gray-600">Phone: +234 800 123 4567</p>
            <p className="text-gray-600">Address: 123 Agricultural Plaza, Abuja, Nigeria</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">FAQ</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Return Policy</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}