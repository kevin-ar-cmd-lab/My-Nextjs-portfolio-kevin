'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md transition-colors duration-500 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
          <img src="Kevin.jpg" alt="Logo" className="h-8 w-8 mr-2" />
            <Link href="/" className="text-2xl font-bold text-blue-400 hover:scale-105 transition-transform">
              Kevin's Space
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <MenuLinks />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none transition"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileMenuLinks />
            <button
              onClick={toggleDarkMode}
              className="block w-full text-left p-2 mt-2 rounded bg-gray-700 hover:bg-gray-600 transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop navigation with underline for active tab only
function MenuLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    {href: '/cv', label: 'cv'},
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`relative font-medium transition-colors ${
              isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
            }`}
          >
            {label}
            {isActive && (
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-400 transition-transform duration-300 scale-x-100 origin-left" />
            )}
          </Link>
        );
      })}
    </>
  );
}

// Mobile menu links
function MobileMenuLinks() {
  return (
    <>
      <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
        Home
      </Link>
      <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
        About
      </Link>
      <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
        Projects
      </Link>
      <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
        Contact
      </Link>
     <Link href="/cv" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
        Resume
      </Link>
    </>
  );
}
