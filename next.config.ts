import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1'; // Vercel sets this for both production and preview deployments

const nextConfig: NextConfig = {
  // If we are on Vercel, we use dynamic serving (default)
  // If on GitHub Pages (production, but not Vercel), we use static export
  output: (isProd && !isVercel) ? 'export' : undefined,

  // If we are on Vercel, we serve from the root '/'
  // If on GitHub Pages, we serve from the subpath
  basePath: (isProd && !isVercel) ? '/CloudInfra_IT_website' : '',

  // Similar logic for assetPrefix
  assetPrefix: (isProd && !isVercel) ? '/CloudInfra_IT_website/' : '',

  // Addressing the Turbopack workspace root warning
  turbopack: {
    root: path.resolve(__dirname, "./"),
  },
  // Ensure we can load the logo and future remote images
  images: {
    unoptimized: true, // Required for static export and standard cross-platform consistency
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinfrait.com",
      },
    ],
  },
};

export default nextConfig;
