/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
}

module.exports = nextConfig
