/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://images.prismic.io'],
    deviceSizes: [80, 160, 320, 640, 750, 828, 1080, 1200, 1920, 2048]
  }
};

module.exports = nextConfig;
