import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // Add the external domain here
  },
};

export default nextConfig;
