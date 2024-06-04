/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'icon-library.com',
      'cdn.buymeacoffee.com',
      'avatars.githubusercontent.com',
      'pbs.twimg.com',
      'encrypted-tbn0.gstatic.com',
      'apps.apple.com',
    ],
  },
};

module.exports = nextConfig;
