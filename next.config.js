/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i0.wp.com',
      'image.cnbcfm.com',
      'www.nasaspaceflight.com',
      'www.teslarati.com',
      'mars.nasa.gov',
      'www.nasa.gov',
      'cdn.arstechnica.net',
      'europeanspaceflight.com',
      'cdn.tlpnetwork.com'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}

module.exports = nextConfig
