'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  DocumentTextIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();

  // Navigation links with icons for both navbars
  const links = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/about', label: 'About', icon: UserIcon },
    { href: '/projects', label: 'Projects', icon: FolderIcon },
    { href: '/cv', label: 'CV', icon: DocumentTextIcon },
    { href: '/contact', label: 'Contact', icon: PhoneIcon },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="Kevin.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full object-cover border-4 border-gray-800"
              />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 animate-cycle-color drop-shadow-sm">
                Kevin's Digital WorkSpace
              </span>
            </div>

            {/* Desktop Links with icons (hidden on small screens) */}
            <div className="hidden md:flex space-x-8 items-center">
              {links.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center space-x-1 font-medium transition-colors ${
                      isActive
                        ? 'text-blue-500 dark:text-blue-400'
                        : 'text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-500 dark:bg-blue-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar - visible only on small screens */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around h-14 items-center">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex flex-col items-center text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-blue-500 dark:text-blue-400'
                      : 'text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300'
                  }`}
                >
                  <Icon className="h-5 w-5 mb-1" aria-hidden="true" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Padding so content isn't hidden under fixed navbars */}
      <style jsx global>{`
        body {
          padding-top: 4rem; /* height of top navbar */
          padding-bottom: 3.5rem; /* height of bottom navbar on mobile */
        }
        @media (min-width: 768px) {
          body {
            padding-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}
