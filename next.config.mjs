/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CollegeWebsite', // MUST match your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
