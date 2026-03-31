import type { MetadataRoute } from "next";

/**
 * Robots.txt — auto-discovered by crawlers.
 * URL: /robots.txt
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/contact-us"], // disallow redirect alias
      },
    ],
    sitemap: "https://www.cloudinfrait.com/sitemap.xml",
    host: "https://www.cloudinfrait.com",
  };
}
