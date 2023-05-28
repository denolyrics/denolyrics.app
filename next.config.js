/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["app.denolyrics.com"],
  },
};

module.exports = nextConfig;
