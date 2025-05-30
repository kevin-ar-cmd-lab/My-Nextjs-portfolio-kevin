/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional: Enable scroll animations or WebGL support if used in Motion
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['wwww.kevinjuma.com'], // if motion images or assets are hosted externally
  },
};

module.exports = nextConfig;
