import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  basePath: isProd ? '/CloudInfra_IT_website' : '', // Active only in production for GitHub Pages
  assetPrefix: isProd ? '/CloudInfra_IT_website/' : '', // Active only in production
  // Addressing the Turbopack workspace root warning
  turbopack: {
    root: path.resolve(__dirname, "./"),
  },
  // Ensure we can load the logo and future remote images
  images: {
    unoptimized: true, // Required for static export as GitHub Pages isn't a dynamic host
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinfrait.com",
      },
    ],
  },
};

export default nextConfig;
