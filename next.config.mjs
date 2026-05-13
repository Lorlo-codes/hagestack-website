/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.base44.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'base44.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
