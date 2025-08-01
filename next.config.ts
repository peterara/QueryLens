import type { NextConfig } from "next";
import { NextConfigComplete } from "next/dist/server/config-shared";
import path from "path";

const nextConfig: NextConfig & Partial<NextConfigComplete> = {
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
  
  // Load environment variables from parent directory
  env: {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
  },
};

export default nextConfig;
