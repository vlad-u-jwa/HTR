import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow external images if needed in the future
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'htrwindows.ca',
      },
    ],
    // Gracefully handle missing local images
    unoptimized: false,
  },
}

export default nextConfig
