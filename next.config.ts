import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.clerk.dev"], // Allow Clerk-hosted images
  },
};

export default nextConfig;
