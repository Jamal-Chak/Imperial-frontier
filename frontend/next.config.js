/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  // Image optimization - unoptimized for static export
  images: {
    domains: [],
    unoptimized: true,
  },

  // Environment variables that should be available on the client side
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },

  // Webpack configuration removed to avoid Netlify plugin conflicts

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Experimental features
  experimental: {
    // Enable optimizations
  },
};

module.exports = nextConfig;
