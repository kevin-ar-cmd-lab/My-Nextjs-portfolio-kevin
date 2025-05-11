// components/Footer.jsx
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulating email submission
    setError('');
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">Portfolio</a>
            <p className="text-gray-400 mt-2">© 2025 Kevin Juma. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Dribbble">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
              <li><a href="/skills" className="text-gray-400 hover:text-white transition duration-300">Skills</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/web-development" className="text-gray-400 hover:text-white transition duration-300">Web Development</a></li>
              <li><a href="/mobile-development" className="text-gray-400 hover:text-white transition duration-300">Mobile Development</a></li>
              <li><a href="/ui-ux-design" className="text-gray-400 hover:text-white transition duration-300">UI/UX Design</a></li>
              <li><a href="/consulting" className="text-gray-400 hover:text-white transition duration-300">Consulting</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for updates</p>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row">
              <div className="flex mb-4 md:mb-0">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
