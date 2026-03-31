import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT & Healthcare Jobs — Browse Open Roles",
  description:
    "Browse active IT, Healthcare, Engineering, and specialist job openings placed by CloudInfra IT across the USA. Contract, permanent, and temp-to-hire. Apply in 60 seconds.",
  keywords: ["IT jobs USA", "healthcare jobs", "cloud engineer jobs", "DevOps jobs", "contract IT jobs", "H-1B jobs"],
  openGraph: {
    title: "IT & Healthcare Jobs | CloudInfra IT",
    description: "Browse active IT and Healthcare job openings across the USA. Contract, permanent, temp-to-hire.",
    url: "https://www.cloudinfrait.com/job-opportunities",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
