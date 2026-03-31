import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consult With Us — Request an IT or Healthcare Staffing Partner",
  description:
    "Submit your staffing requirement to CloudInfra IT. A Hiring Partner responds within 24 hours. No placement fee until you hire. Start with a 15-minute alignment call.",
  keywords: ["hire IT staff", "IT staffing agency", "healthcare staffing request", "contract recruiter", "engineering recruiter Texas"],
  openGraph: {
    title: "Request a Staffing Consultation | CloudInfra IT",
    description: "Tell us your requirement. A specialist Hiring Partner will respond within 24 hours. No cost until placement.",
    url: "https://www.cloudinfrait.com/consult-with-us",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
