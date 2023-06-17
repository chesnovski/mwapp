/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.cnbcfm.com', 'pbs.twimg.com', 'upload.wikimedia.org' ],
  },
}

module.exports = nextConfig
