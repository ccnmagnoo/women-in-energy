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
  crossOrigin: 'anonymous',

  images: {
    domains: [
      'instaladoras.web.app',
      'energy-providers.web.app',
      'instaladoras.vercel.app',
      'energia.gob.cl',
      'i.postimg.cc',
      'platform-lookaside.fbsbx.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname: 'energia.gob.cl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
