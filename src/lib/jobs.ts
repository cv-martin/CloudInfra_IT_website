export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  updated: string;
  specialty: string;
  description?: string;
  datePosted?: string;
  validThrough?: string;
  salary?: string;
}

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Senior DevOps Engineer",
    company: "CloudInfra IT (Project Client)",
    location: "Remote (US)",
    type: "Contract",
    updated: "2 hours ago",
    specialty: "Cloud & DevOps",
    datePosted: "2026-03-29",
    validThrough: "2026-06-29",
    salary: "$140,000 - $180,000",
    description: `
      <p>CloudInfra IT is seeking a Senior DevOps Engineer to lead infrastructure automation for a tier-1 finance client. You will be responsible for architecting CI/CD pipelines and managing Kubernetes clusters at scale.</p>
      <h3 class="font-bold text-white mt-4">Key Responsibilities:</h3>
      <ul class="list-disc ml-4 mt-2 space-y-2">
        <li>Architect and maintain robust CI/CD pipelines using GitLab CI and Terraform.</li>
        <li>Manage multi-cluster Kubernetes environments across AWS and Azure.</li>
        <li>Design service mesh architectures with Istio.</li>
        <li>Implement zero-trust security policies for cloud infrastructure.</li>
      </ul>
      <h3 class="font-bold text-white mt-4">Requirements:</h3>
      <ul class="list-disc ml-4 mt-2 space-y-2">
         <li>5+ years of experience in DevOps/SRE roles.</li>
         <li>Deep expertise in Terraform and Kubernetes.</li>
         <li>Certified AWS Solutions Architect or CKA.</li>
         <li>Experience with SOC2 and PCI-DSS compliance is a plus.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Vulnerability Researcher",
    company: "CloudInfra IT (Project Client)",
    location: "Dallas, TX (Hybrid)",
    type: "Direct Hire",
    updated: "1 day ago",
    specialty: "Cybersecurity",
    datePosted: "2026-03-29",
    validThrough: "2026-06-29",
    salary: "$150,000 - $190,000",
    description: `
      <p>Join our elite security research team focusing on kernel-level vulnerability discovery and exploit mitigation. You will work on cutting-edge security challenges for sovereign infrastructure.</p>
      <h3 class="font-bold text-white mt-4">Key Responsibilities:</h3>
      <ul class="list-disc ml-4 mt-2 space-y-2">
        <li>Perform deep-dive security analysis of operating system kernels.</li>
        <li>Develop proof-of-concept exploits to verify vulnerabilities.</li>
        <li>Collaborate with engineering teams to design robust mitigations.</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "SAP S/4HANA Consultant",
    company: "CloudInfra IT (Project Client)",
    location: "New York, NY (On-site)",
    type: "Contract",
    updated: "3 days ago",
    specialty: "ERP / SAP",
    datePosted: "2026-03-28",
    validThrough: "2026-06-28",
    salary: "$120 - $160 / hr",
    description: `
      <p>We are looking for an experienced SAP S/4HANA Finance consultant to lead a large-scale migration for a healthcare enterprise. Expertise in FICO and Central Finance is essential.</p>
    `,
  },
];
