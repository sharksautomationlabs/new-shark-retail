import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap", "framer-motion", "swiper"],
  },
};

export default nextConfig;
