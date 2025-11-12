/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Output configuration
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: [],
    unoptimized: false,
  },
  
  // Environment variables that should be available on the client side
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  
  // Webpack configuration (if needed)
  webpack: (config, { isServer }) => {
    // Add any custom webpack config here
    return config;
  },
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Experimental features
  experimental: {
    // Enable optimizations
  },
};

module.exports = nextConfig;
