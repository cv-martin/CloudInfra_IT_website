"use client";

import DomainHero from "@/components/domain/DomainHero";
import DomainDisciplines from "@/components/domain/DomainDisciplines";
import DomainEngagement from "@/components/domain/DomainEngagement";
import DomainValidation from "@/components/domain/DomainValidation";
import { 
  Cloud, Code2, Lock, Database, Cpu, Layers 
} from "lucide-react";

/**
 * Information Technology — Domain depth page.
 * Standardized via Domain-Based Architecture.
 */

const specialties = [
  { icon: Cloud,    label: "Cloud & Infrastructure",   tags: ["AWS Well-Architected", "Azure Hybrid", "GCP", "Terraform", "Kubernetes", "DevOps"] },
  { icon: Code2,    label: "Software Engineering",     tags: ["Full Stack Java", "Python / Go", ".NET Core", "React / Next.js", "Mobile (Swift/Kotlin)"] },
  { icon: Lock,     label: "Cybersecurity & GRC",      tags: ["IAM / Zero Trust", "SIEM / SOC", "Penetration Testing", "SOC2 / HIPAA Compliance", "HITRUST"] },
  { icon: Database, label: "Data & Analytics",         tags: ["Snowflake", "Databricks", "Spark / Kafka", "ETL Pipelines", "Power BI / Tableau"] },
  { icon: Cpu,      label: "Enterprise Systems (ERP)", tags: ["SAP S/4HANA", "Oracle Cloud", "ServiceNow", "Salesforce Core", "Workday Fin"] },
  { icon: Layers,   label: "IT Management & QA",       tags: ["Agile Scrum Masters", "Technical PMs", "SDET / Automation", "Business Analysts"] },
];

const engagementModels = [
  {
    title: "Project-Based / Contract",
    scenario: "Executing a mission-critical cloud migration or product sprint?",
    detail: "Direct access to senior-level contractors on-site or remote. We manage full compliance, USCIS-verified onboarding, and payroll overhead.",
  },
  {
    title: "Permanent Placement",
    scenario: "Building a foundation for long-term engineering depth?",
    detail: "We source passive candidates through localized technical nodes. Rigorous technical vetting before the first interview. Performance-guaranteed success fee.",
  },
  {
    title: "Contract-to-Hire (C2H)",
    scenario: "Want to validate technical cultural fit before a full commitment?",
    detail: "A performance-based trial period where the candidate proves value in your stack. Seamless transition to full-time status once fit is confirmed.",
  },
  {
    title: "Managed Team Deployment",
    scenario: "Need to staff a complete specialized engineering squad?",
    detail: "Rapid deployment of pre-vetted teams (3-15 specialists) for large-scale infrastructure transformations or data-lake builds.",
  },
];

const whyPoints = [
  { text: "Every IT recruiter has hands-on experience in the stacks they source." },
  { text: "I-9 and Work Authorization verified before submission (H-1B, OPT, TN)." },
  { text: "24–48h turnaround for pre-vetted senior technical shortlists." },
  { text: "Active-sourcing model targeting passive candidates, not job boards." },
  { text: "Operational nodes active in 50 states for hybrid and remote mandates." },
];

export default function InformationTechnologyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      
      <DomainHero
        title="Information"
        subtitleAccent="Technology Ops."
        description="Domain-specialist IT recruiters placing senior Cloud, DevOps, Security, Data, and Software Engineering professionals across the United States. We operate at the intersection of engineering depth and talent acquisition."
        imageSrc="/img-it-expert-node.png"
        imageAlt="Senior IT Professional specializing in cloud infrastructure and security"
        trustLabel="Compliance Clearance Level"
        trustTags={["H-1B", "OPT", "STEM OPT", "Green Card", "LPR", "US Citizen"]}
        primaryCtaText="Browse IT Feed"
        primaryCtaHref="/jobs"
        secondaryCtaText="Acquire Talent"
        secondaryCtaHref="/consult-with-us"
        statusLabel="Live Ops Status"
        statusText="Active sourcing across all major cloud tech-stacks in all 50 US States."
      />

      <DomainDisciplines
        category="Specialties"
        title="Engineering Spectrum."
        description="We cover the complete technical stack. Every search cycle is managed by a recruiter with documented domain history in that specific technical cluster."
        disciplines={specialties}
      />

      <DomainEngagement
        category="Engagement Models"
        title="Service Architecture."
        models={engagementModels}
      />

      <DomainValidation
        category="Domain Depth"
        title="Engineers who Recruit. Not the other way around."
        description="CloudInfra IT recruiters have worked directly within engineering delivery teams. We differentiate between keyword-stuffed CVs and actual architectural mastery — ensuring we never send the wrong fit."
        points={whyPoints}
        imageSrc="/img-team-office.png"
        imageAlt="Technical recruitment team collaborating on a cloud placement"
        cardTitle="The CloudInfra IT Advantage"
      />

    </main>
  );
}
