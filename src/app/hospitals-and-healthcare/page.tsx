"use client";

import DomainHero from "@/components/domain/DomainHero";
import DomainDisciplines from "@/components/domain/DomainDisciplines";
import DomainEngagement from "@/components/domain/DomainEngagement";
import DomainValidation from "@/components/domain/DomainValidation";
import { 
  Stethoscope, Heart, Activity, ClipboardList, Monitor, Users 
} from "lucide-react";

/**
 * Hospitals & Healthcare — Domain depth page.
 * Standardized via Domain-Based Architecture.
 */

const clinicalDisciplines = [
  {
    icon: Stethoscope,
    label: "Physicians & Advanced Practice",
    tags: ["Physicians", "Nurse Practitioners", "Physician Assistants", "Hospitalists", "Locum Tenens"],
  },
  {
    icon: Heart,
    label: "Nursing & Critical Care",
    tags: ["ICU / ER / OR Nurses", "Telemetry RNs", "Labor & Delivery", "Nurse Educators", "Dialysis Specialists"],
  },
  {
    icon: Activity,
    label: "Allied Health Services",
    tags: ["Physical Therapists", "Occupational Therapists", "Radiologists", "Lab Techs", "Pathology"],
  },
  {
    icon: ClipboardList,
    label: "Healthcare Administration",
    tags: ["Compliance Officers", "Medical Billing (CPC)", "Revenue Cycle", "Risk Managers", "Case Managers"],
  },
  {
    icon: Monitor,
    label: "Healthcare IT (EHR)",
    tags: ["Epic / Cerner Leads", "EHR Implementation", "Health Informatics", "Cybersecurity", "Health Data Ops"],
  },
  {
    icon: Users,
    label: "Long-Term Care Ops",
    tags: ["Home Health RNs", "Hospice Care", "DONs / ADONs", "Skilled Nursing", "Social Workers"],
  },
];

const clinicalEngagement = [
  {
    title: "Travel & Crisis Staffing",
    scenario: "Addressing critical unit vacancies or rapid-response needs?",
    detail: "We deploy travel clinicians on 13–26 week mandates. Credentialing, HIPAA orientation, and US regulatory compliance managed at the source.",
  },
  {
    title: "Permanent Clinical Placement",
    scenario: "Establishing a core foundation of long-term patient care?",
    detail: "Direct-hire clinical sourcing targeting passive national networks. We verify licenses and background history before the first presentation.",
  },
  {
    title: "Locum Tenens & Per Diem",
    scenario: "Covering advanced practice or physician gaps during peak demand?",
    detail: "Rapid deployment of physicians and NPs to ensure continuity of care. Logistic scheduling and malpractice coverage coordination available.",
  },
  {
    title: "Health IT Transformation",
    scenario: "Scaling for a large-scale EHR (Epic/Cerner) implementation?",
    detail: "A specialized node for clinical informatics and IT specialists who understand the intersection of technology and patient safety.",
  },
];

const clinicalPoints = [
  { text: "Joint Commission aware placement protocols for acute care systems." },
  { text: "License verification (RN, MD, NP, PA) at source via national databases." },
  { text: "Credentialing-as-a-Service available for all travel placements." },
  { text: "US Work Authorization (H-1B, OPT, TN) verified for all foreign-trained professionals." },
  { text: "Active practitioner nodes in 50 states catering to regional hospital clusters." },
];

export default function HospitalsHealthcarePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      
      <DomainHero
        title="Clinical &"
        subtitleAccent="Healthcare Ops."
        description="Credentialed clinician recruiters placing senior Physicians, Nurses, Allied Health, and EHR specialists across the United States. We operate with a primary focus on patient-safety and clinical compliance."
        imageSrc="/img-healthcare-expert-node.png"
        imageAlt="Senior Healthcare Professional in a modern clinical tech environment"
        trustLabel="Compliance Protocol Level"
        trustTags={["Joint Commission", "HIPAA Aware", "USCIS Verified", "BLS/ACLS/NRP", "Board Certified"]}
        primaryCtaText="Browse Clinical Feed"
        primaryCtaHref="/jobs"
        secondaryCtaText="Acquire Talent"
        secondaryCtaHref="/consult-with-us"
        statusLabel="Clinical Unit Status"
        statusText="Secondary source nodes active. Primary US hospital networks integrated for rapid-response mandates."
      />

      <DomainDisciplines
        category="Disciplines"
        title="Clinical Spectrum."
        description="We cover the entire clinical and administrative lifecycle. Every search is managed by a recruiter who understands the nuance of patient outcomes and board standards."
        disciplines={clinicalDisciplines}
      />

      <DomainEngagement
        category="Engagement Models"
        title="Care Architecture."
        models={clinicalEngagement}
      />

      <DomainValidation
        category="Compliance Priority"
        title="Credentialing is not Optional. It is Essential."
        description="In healthcare staffing, the wrong hire is a patient-safety risk. CloudInfra IT applies a Zero-Tolerance policy for credentialing — verifying licenses and background data before any candidate meets your unit Leads."
        points={clinicalPoints}
        imageSrc="/img-team-office.png"
        imageAlt="Clinical recruitment team collaborating on a hospital placement"
        cardTitle="The Clinical Trust Framework"
      />

    </main>
  );
}
