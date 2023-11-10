/**
 * How to deploy at hosting Next JS on firebase
 * https://firebase.google.com/docs/hosting/frameworks/nextjs?hl=es-419
 * https://youtu.be/TJqJ-WY3XxA
 */

/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  // output: 'export',

  images: {
    domains: ['instaladoras.web.app', 'energy-providers.web.app'],
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
