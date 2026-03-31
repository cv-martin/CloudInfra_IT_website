import type { MetadataRoute } from "next";

/**
 * Sitemap — auto-discovered by Google.
 * URL: /sitemap.xml
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cloudinfrait.com";
  const now = new Date("2026-03-31");

  const routes: { url: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    // Tier 1 — Core
    { url: "/",                                priority: 1.0,  changeFrequency: "weekly" },
    { url: "/job-opportunities",               priority: 0.95, changeFrequency: "weekly" },
    { url: "/consult-with-us",                 priority: 0.95, changeFrequency: "monthly" },
    { url: "/our-process",                     priority: 0.85, changeFrequency: "monthly" },
    { url: "/about",                           priority: 0.80, changeFrequency: "monthly" },
    { url: "/contact",                         priority: 0.75, changeFrequency: "monthly" },

    // Tier 2 — Services
    { url: "/services",                        priority: 0.90, changeFrequency: "monthly" },
    { url: "/custom-services-provided",        priority: 0.80, changeFrequency: "monthly" },
    { url: "/recruitment-interview-process",   priority: 0.80, changeFrequency: "monthly" },

    // Tier 2 — Industries
    { url: "/information-technology",          priority: 0.90, changeFrequency: "monthly" },
    { url: "/hospitals-and-healthcare",        priority: 0.90, changeFrequency: "monthly" },
    { url: "/engineering",                     priority: 0.85, changeFrequency: "monthly" },
    { url: "/banking-and-finance",             priority: 0.80, changeFrequency: "monthly" },
    { url: "/manufacturing",                   priority: 0.80, changeFrequency: "monthly" },
    { url: "/oil-and-gas",                     priority: 0.80, changeFrequency: "monthly" },
    { url: "/pharmaceutical",                  priority: 0.80, changeFrequency: "monthly" },
    { url: "/legal",                           priority: 0.80, changeFrequency: "monthly" },
    { url: "/aerospace",                       priority: 0.80, changeFrequency: "monthly" },
    { url: "/defence-and-space",               priority: 0.80, changeFrequency: "monthly" },

    // Tier 3 — Trust / SEO depth
    { url: "/hiring-process",                  priority: 0.75, changeFrequency: "monthly" },
    { url: "/contact-a-recruiter",             priority: 0.75, changeFrequency: "monthly" },
    { url: "/faqs-for-candidates",             priority: 0.75, changeFrequency: "monthly" },
    { url: "/faq",                             priority: 0.75, changeFrequency: "monthly" },
    { url: "/specialties",                     priority: 0.75, changeFrequency: "monthly" },
    { url: "/join-us",                         priority: 0.65, changeFrequency: "monthly" },
    { url: "/blog",                            priority: 0.70, changeFrequency: "weekly" },

    // Legal
    { url: "/privacy-policy",                  priority: 0.30, changeFrequency: "yearly" },
    { url: "/terms-service-conditions",        priority: 0.30, changeFrequency: "yearly" },
  ];

  return routes.map(r => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
