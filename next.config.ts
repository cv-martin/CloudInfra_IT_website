import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  basePath: '/CloudInfra_IT_website', // Matches the repository name
  assetPrefix: '/CloudInfra_IT_website/', // Ensures assets load from the correct path
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
