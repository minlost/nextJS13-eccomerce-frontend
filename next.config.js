/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  experimental: {
    nextScriptWorkers: true,
  },
}

module.exports = nextConfig
