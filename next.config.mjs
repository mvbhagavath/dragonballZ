/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/characters',
        destination: '/',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
