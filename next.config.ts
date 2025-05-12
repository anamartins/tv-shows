import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['jsdom'],
  images: {
    remotePatterns: [new URL("https://static.tvmaze.com/uploads/images/**")],
  },
};

export default nextConfig;
