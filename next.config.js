/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/2025',
        destination: '/',
        permanent: false, // 307 status code (temporary redirect)
      }
    ]
  },
};

export default nextConfig;
