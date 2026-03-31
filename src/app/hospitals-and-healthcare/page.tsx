"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck,
  Stethoscope, Heart, Activity, ClipboardList, Users, Monitor,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Hospitals & Healthcare — Domain depth page.
 * URL: /hospitals-and-healthcare
 *
 * Audience: Healthcare candidates + hospital / health-system hiring managers.
 * Purpose: SEO authority, domain trust, dual conversion.
 */

const disciplines = [
  {
    icon: Stethoscope,
    label: "Physicians & Advanced Practice",
    tags: ["Physicians", "Nurse Practitioners", "Physician Assistants", "Hospitalists", "Locum Tenens"],
  },
  {
    icon: Heart,
    label: "Nursing",
    tags: ["RN Case Manager", "ICU / CCU Nurses", "OR / Periop Nurses", "Home Health RN", "Travel Nurses"],
  },
  {
    icon: Activity,
    label: "Allied Health",
    tags: ["Physical Therapists", "Occupational Therapists", "Radiographers", "Lab Technicians", "Medical Assistants"],
  },
  {
    icon: ClipboardList,
    label: "Healthcare Administration",
    tags: ["Medical Billing", "Coding (CPC / CCS)", "Revenue Cycle", "Office Managers", "Compliance Officers"],
  },
  {
    icon: Monitor,
    label: "Healthcare IT",
    tags: ["Epic / Cerner", "EHR Analysts", "HIPAA Compliance", "Health Informatics", "Clinical Data Analysts"],
  },
  {
    icon: Users,
    label: "Long-Term Care & Hospice",
    tags: ["Home Health Aides", "Hospice RNs", "Social Workers", "Care Coordinators", "DONs"],
  },
];

const engagementModels = [
  {
    title: "Travel & Contract Staffing",
    scenario: "Need to fill a critical nursing gap on short notice?",
    detail: "We place travel nurses and contract clinicians on 13–26 week assignments. Credentialing, compliance verification, and payroll handled by CloudInfra IT.",
  },
  {
    title: "Permanent / Direct Hire",
    scenario: "Building a stable clinical team?",
    detail: "We source passive candidates with the right credentials, licenses, and cultural fit. No upfront cost — success-fee only on placement.",
  },
  {
    title: "Locum Tenens",
    scenario: "Covering a physician or advanced practice vacancy?",
    detail: "We facilitate locum placements for physicians and NPs, managing credentialing verification and scheduling logistics.",
  },
  {
    title: "Healthcare IT & Admin",
    scenario: "Implementing a new EHR system or upgrading revenue cycle?",
    detail: "We place Epic/Cerner analysts, HIPAA specialists, and revenue cycle experts alongside your clinical teams for system-wide rollouts.",
  },
];

const compliancePoints = [
  "License and certification verification (RN, NP, MD) before submission",
  "Background checks and drug screening coordination",
  "HIPAA compliance verification for all healthcare placements",
  "Joint Commission standards awareness across clinical candidates",
  "USCIS work authorisation check on every international placement",
  "Malpractice history review for physician-level searches",
];

const whyPoints = [
  "Healthcare-dedicated recruiters — not generalists",
  "We verify credentials and licences before you see a CV",
  "Nationwide clinical network across all 50 states",
  "Contract, travel, and permanent engagements covered",
  "HIPAA-aware placement process",
  "24–48h vetted shortlist for urgent clinical needs",
];

export default function HospitalsHealthcarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-32 pb-14 bg-[#020510] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 ci-grid-bg-small-emerald" />
        <div className="ci-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Specialty</span>
              <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight">
                Hospitals &amp; Healthcare<br />Staffing
              </h1>
              <p className="text-sm text-white/50 mt-4 max-w-lg leading-relaxed">
                Credentialed clinical recruiters placing Physicians, Nurses, Allied Health, and Healthcare IT professionals — for hospitals, health systems, and home health agencies across the USA.
              </p>

              {/* Compliance strip */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Compliance:</span>
                </div>
                {["License Verified", "Background Checked", "HIPAA Aware", "Joint Commission"].map(tag => (
                  <span key={tag} className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 active:scale-95 transition-all"
                >
                  Browse Clinical Roles <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-6 py-3 rounded-full hover:border-white/40 hover:text-white transition-colors"
                >
                  Hire Clinical Talent
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block relative h-72 rounded-2xl overflow-hidden border border-emerald-500/20"
            >
              <Image
                src="/img-healthcare-professional.png"
                alt="Healthcare professional — nurse in a clinical setting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020510]/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1">

        {/* ── Disciplines Grid ── */}
        <section className="ci-divider bg-white">
          <div className="ci-container py-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Clinical Disciplines</span>
              <h2 className="text-[var(--text-h2)] font-bold text-gray-900 mt-1">What we staff</h2>
              <p className="text-sm text-gray-500 mt-2 max-w-xl leading-relaxed">
                From bedside nursing to healthcare IT implementation — every search is run by a recruiter with direct clinical staffing experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {disciplines.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <Icon className="text-emerald-600 h-[18px] w-[18px]" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">{d.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {d.tags.map(tag => (
                        <span key={tag} className="text-[11px] text-gray-500 bg-white border border-gray-100 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Engagement Models ── */}
        <section className="ci-divider bg-[#F8F9FB]">
          <div className="ci-container py-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Engagement Models</span>
              <h2 className="text-[var(--text-h2)] font-bold text-gray-900 mt-1">How we can work together</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {engagementModels.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-2">{m.title}</p>
                  <p className="text-sm font-semibold text-gray-800 italic mb-2">&ldquo;{m.scenario}&rdquo;</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Compliance Section ── */}
        <section className="ci-divider bg-white">
          <div className="ci-container py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Compliance-First</span>
                <h2 className="text-[var(--text-h2)] font-bold text-gray-900 mt-1 leading-tight">
                  Credentialing and compliance are not optional.
                </h2>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  In healthcare, the wrong hire is a patient-safety risk. Every clinical candidate we present has been pre-screened for licence validity, compliance history, and work authorisation before your team reviews a single name.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {compliancePoints.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-4"
              >
                {/* Why Us points */}
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
                  <p className="text-sm font-bold text-gray-900 mb-4">Why CloudInfra IT for Healthcare?</p>
                  <ul className="flex flex-col gap-3">
                    {whyPoints.map(p => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct contact card */}
                <div className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Talk to a Healthcare Recruiter</p>
                  <a href="tel:+12146637826" className="text-base font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    (+1) 214-663-7826
                  </a>
                  <br />
                  <a href="mailto:info@cloudinfrait.com" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                    info@cloudinfrait.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-gray-950 ci-divider">
          <div className="ci-container py-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div>
                <h2 className="text-xl font-bold text-white">Looking for clinical talent or a clinical role?</h2>
                <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">
                  Whether you are a nurse seeking a travel assignment or a hospital system filling a critical gap — we respond within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 active:scale-95 transition-all"
                >
                  Browse Clinical Roles <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Hire Clinical Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
