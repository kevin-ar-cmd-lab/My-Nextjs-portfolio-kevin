'use client';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true);

    // Simulate async action
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast.success('Subscribed successfully!');
    }, 1500);
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full">
        <input
          type="email"
          placeholder="Your Email"
          className={`flex-1 px-4 py-2 rounded-md border text-black focus:outline-none ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : <i className="fas fa-paper-plane mr-2" />}
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </>
  );
}
