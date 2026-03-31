import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Staffing — Nurses, Allied Health & Clinical Professionals",
  description:
    "CloudInfra IT places Physicians, Nurses, Allied Health, Clinical Administrators, and Healthcare IT professionals across US hospitals and health systems. HIPAA compliant. All visa types.",
  keywords: ["healthcare staffing", "nurse recruiter", "clinical staffing", "allied health jobs", "hospital recruiter", "healthcare IT staffing", "travel nurse recruiter"],
  openGraph: {
    title: "Healthcare Staffing — Nurses, Allied Health & Clinical | CloudInfra IT",
    description: "Placing Physicians, Nurses, Allied Health, and Healthcare IT professionals across US hospitals. HIPAA compliant staffing.",
    url: "https://www.cloudinfrait.com/hospitals-and-healthcare",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
