/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  distDir: 'build',
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
};

module.exports = nextConfig;
