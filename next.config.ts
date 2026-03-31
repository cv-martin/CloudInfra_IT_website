import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Addressing the Turbopack workspace root warning
  turbopack: {
    root: path.resolve(__dirname, "./"),
  },
  // Ensure we can load the logo and future remote images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinfrait.com",
      },
    ],
  },
};

export default nextConfig;
