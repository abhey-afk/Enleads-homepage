/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
}

module.exports = nextConfig;
