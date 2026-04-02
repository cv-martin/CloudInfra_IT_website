"use client";

import DomainHero from "@/components/domain/DomainHero";
import DomainDisciplines from "@/components/domain/DomainDisciplines";
import DomainEngagement from "@/components/domain/DomainEngagement";
import DomainValidation from "@/components/domain/DomainValidation";
import { 
  Cpu, Code2, Wrench, Layers, Monitor, Users 
} from "lucide-react";

/**
 * Engineering Industry Page.
 * Standardized via Domain-Based Architecture.
 */

const disciplines = [
  { icon: Cpu,     label: "Mechanical & Structural", tags: ["Mechanical Design", "PE Licensed", "SolidWorks / AutoCAD", "FEA / CFD Analysts", "Structural Steel"] },
  { icon: Code2,   label: "Electrical & Systems",    tags: ["Electrical Power", "Embedded Systems", "FPGA Engineers", "Control Systems", "High Voltage"] },
  { icon: Wrench,  label: "Maintenance & Reliability", tags: ["Maintenance Managers", "Reliability Engineers", "Predictive Maintenance", "CMMS / EAM", "Asset Integrity"] },
  { icon: Layers,  label: "Process & Chemical",      tags: ["Process Design", "P&ID Development", "Chemical Engineers", "HAZOP Leads", "Project Delivery"] },
  { icon: Monitor, label: "SCADA & Instrumentation", tags: ["PLC Programmers", "DCS Engineers", "Industrial IoT", "Automation Technicians", "Instrumentation"] },
  { icon: Users,   label: "Industrial Operations",   tags: ["Plant Managers", "Operations Leads", "Supply Chain", "Quality / EHS", "Project Management"] },
];

const engagementModels = [
  {
    title: "Project-Based / Contract",
    scenario: "Need specialized engineering depth for an industrial rollout?",
    detail: "Direct access to senior-level contractors on-site or remote. We manage full compliance, credentialing verification, and payroll overhead.",
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
    detail: "Rapid deployment of pre-vetted teams (3-15 specialists) for large-scale industrial transformations or infrastructure builds.",
  },
];

const whyPoints = [
  { text: "Every Engineering recruiter has hands-on experience in the disciplines they source." },
  { text: "Credentials and professional licences verified before submission (PE, PMP, CWI)." },
  { text: "24–48h turnaround for pre-vetted senior technical shortlists." },
  { text: "Active-sourcing model targeting passive candidates, not job boards." },
  { text: "Industrial sourcing active in 50 states, primarily Tier 1 Industrial clusters." },
];

export default function EngineeringPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      
      <DomainHero
        title="Engineering"
        subtitleAccent="Industrial Ops."
        description="Domain-specialist recruiters placing senior Mechanical, Electrical, Structural, Process, and Systems Engineers across the United States. We source for specialized industrial mandates."
        imageSrc="/hero-green-infra.png"
        imageAlt="Modern engineering and industrial infrastructure systems"
        trustLabel="Credential Clearance Level"
        trustTags={["PE Licensed", "PMP Certified", "CWI Welding", "H-1B/TN Visa", "SC Eligible"]}
        primaryCtaText="Browse Engineering Feed"
        primaryCtaHref="/jobs"
        secondaryCtaText="Acquire Talent"
        secondaryCtaHref="/consult-with-us"
        statusLabel="Industrial Status"
        statusText="Credentialed sourcing active in 50 states. Primary clusters: Tier 1 & Tier 2 suppliers."
      />

      <DomainDisciplines
        category="Disciplines"
        title="Industrial Verticals."
        description="We cover the complete engineering lifecycle. Every search cycle is managed by a recruiter with documented domain history in that specific technical cluster."
        disciplines={disciplines}
      />

      <DomainEngagement
        category="Engagement Models"
        title="Service Architecture."
        models={engagementModels}
      />

      <DomainValidation
        category="Domain Validation"
        title="Engineers who Recruit. Not just keyword matching."
        description="CloudInfra IT recruiters speak the language of engineering. We understand structural integrity, process safety, and the nuances of the USA regulatory framework."
        points={whyPoints}
        imageSrc="/img-team-office.png"
        imageAlt="Engineering recruitment team collaborating on an industrial placement"
        cardTitle="The CloudInfra IT Advantage"
      />

    </main>
  );
}
