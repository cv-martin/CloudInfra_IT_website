import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Staffing — Cloud, DevOps, Cybersecurity & More",
  description:
    "CloudInfra IT places Cloud Architects, DevOps Engineers, Cybersecurity leads, Data Engineers, and ERP specialists across the USA. H-1B, OPT, Green Card — all visa types. 24–48h shortlist.",
  keywords: ["IT staffing", "cloud engineer recruiter", "DevOps jobs", "cybersecurity recruiter", "H-1B IT jobs", "data engineer staffing"],
  openGraph: {
    title: "IT Staffing — Cloud, DevOps, Cybersecurity | CloudInfra IT",
    description: "Domain-specialist IT recruiter placing Cloud Architects, DevOps, Security, and Data engineers across the USA. 24-48h shortlist SLA.",
    url: "https://www.cloudinfrait.com/information-technology",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
