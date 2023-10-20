/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bits-oasis.org',
          port: '',
          pathname: '/media/**',
        },
      ],
    },
  };
  
  const withVideos = require('next-videos');
  
  module.exports = withVideos(nextConfig);
  