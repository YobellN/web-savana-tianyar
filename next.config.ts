import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://images.pexels.com/**')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
