/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.snooker.org',
        port: '',
        pathname: '/img/players/**',
      }
    ],
  },
}

module.exports = nextConfig
