import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "10.211.55.3",
        port: "7080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "7080",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
