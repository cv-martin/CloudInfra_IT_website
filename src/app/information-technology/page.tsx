"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck,
  Cloud, Code2, Lock, Database, Cpu, Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Information Technology — Domain depth page.
 * URL: /information-technology
 *
 * Audience: IT candidates + IT hiring managers.
 * Purpose: SEO authority, domain trust, dual conversion.
 */

const specialties = [
  { icon: Cloud,    label: "Cloud & Infrastructure",   tags: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "DevOps"] },
  { icon: Code2,    label: "Software Engineering",     tags: ["Java", "Python", ".NET", "Node.js", "iOS", "Android"] },
  { icon: Lock,     label: "Cybersecurity",            tags: ["IAM", "SIEM", "Zero Trust", "Penetration Testing", "GRC", "HITRUST"] },
  { icon: Database, label: "Data & Analytics",         tags: ["SQL", "ETL", "Spark", "Snowflake", "Power BI", "Tableau"] },
  { icon: Cpu,      label: "ERP & Enterprise Systems", tags: ["SAP S/4HANA", "Oracle", "ServiceNow", "Salesforce", "Workday"] },
  { icon: Layers,   label: "IT Management & QA",       tags: ["Project Managers", "Scrum Masters", "QA Engineers", "Business Analysts"] },
];

const visaTypes = ["H-1B", "OPT (F-1)", "STEM OPT", "Green Card", "LPR", "US Citizen", "TN Visa"];

const engagementModels = [
  {
    title: "Contract Staffing",
    scenario: "Planning a cloud migration or a specific product sprint?",
    detail: "We provide senior IT contractors — on-site or remote — for fixed-term projects with full compliance and payroll handled.",
  },
  {
    title: "Permanent / Direct Hire",
    scenario: "Building a long-term engineering team?",
    detail: "We source, vet, and deliver passive candidates who aren't on job boards. Success-fee only — no placement, no cost.",
  },
  {
    title: "Temp-to-Hire",
    scenario: "Want to trial a candidate before committing?",
    detail: "Start with a contract period. If the fit is right, convert to permanent. We handle the transition with no friction.",
  },
  {
    title: "Custom / Team Build",
    scenario: "Need to staff an entire cloud squad or data team?",
    detail: "We can source and deploy 3–15 specialists simultaneously. Managed deployment for large infrastructure projects.",
  },
];

const whyPoints = [
  "Every IT recruiter has direct hands-on domain experience",
  "Work authorisation verified before every submission",
  "24–48h vetted shortlist from alignment call",
  "Active sourcing — we don't wait for applicants",
  "USCIS-compliant engagements for H-1B, OPT, STEM OPT",
  "Roles placed across Texas, nationwide remote, and all US states",
];

export default function InformationTechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-32 pb-14 bg-[#020510] relative overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none opacity-40 ci-grid-bg-small" />
        <div className="ci-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="ci-label">Specialty</span>
              <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight mt-1">
                Information Technology<br />Staffing
              </h1>
              <p className="text-sm text-white/50 mt-4 max-w-lg leading-relaxed">
                Domain-specialist IT recruiters placing Cloud, DevOps, Security, Data, and Software Engineering professionals across the USA — on contract, permanent, or temp-to-hire terms.
              </p>

              {/* Visa strip */}
              <div className="mt-8 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#06B6D4]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Visa Supported:</span>
                </div>
                {visaTypes.map(v => (
                  <span key={v} className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {v}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all"
                >
                  Browse IT Roles <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-6 py-3 rounded-full hover:border-white/40 hover:text-white transition-colors"
                >
                  Hire IT Talent
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block relative h-72 rounded-2xl overflow-hidden border border-[#06B6D4]/20"
            >
              <Image
                src="/CloudInfra_IT_website/img-it-professional.png"
                alt="IT professional working at a cloud engineering workstation"
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

        {/* ── Specialties Grid ── */}
        <section className="ci-divider bg-white">
          <div className="ci-container py-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="ci-label">IT Disciplines</span>
              <h2 className="text-[var(--text-h2)] font-bold text-gray-900 mt-1">What we staff</h2>
              <p className="text-sm text-gray-500 mt-2 max-w-xl leading-relaxed">
                We cover the full IT spectrum — from cloud infrastructure to ERP consulting. Every search is run by a recruiter with real domain experience in that specific area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {specialties.map((sp, i) => {
                const Icon = sp.icon;
                return (
                  <motion.div
                    key={sp.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6 hover:border-[#06B6D4]/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center mb-4">
                      <Icon className="h-4.5 w-4.5 text-[#06B6D4]" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">{sp.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {sp.tags.map(tag => (
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
              <span className="ci-label">Engagement Models</span>
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
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] mb-2">{m.title}</p>
                  <p className="text-sm font-semibold text-gray-800 italic mb-2">&ldquo;{m.scenario}&rdquo;</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <Link href="/custom-services-provided" className="text-sm text-gray-400 hover:text-[#06B6D4] transition-colors hover:underline">
                View all custom & enterprise solutions →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Why CloudInfra IT ── */}
        <section className="ci-divider bg-white">
          <div className="ci-container py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="ci-label">Why Us</span>
                <h2 className="text-[var(--text-h2)] font-bold text-gray-900 mt-1 leading-tight">
                  We were technologists before we were recruiters.
                </h2>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  Every CloudInfra IT IT recruiter has worked in or directly alongside engineering teams. We understand what a 5+ year DevOps engineer looks like versus a buzzword-padded CV — and we never send you the wrong fit.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {whyPoints.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#06B6D4] shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden"
              >
                <Image
                  src="/CloudInfra_IT_website/img-team-office.png"
                  alt="CloudInfra IT recruitment team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
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
                <h2 className="text-xl font-bold text-white">Ready to find or fill an IT role?</h2>
                <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">
                  Whether you are a DevOps engineer looking for a contract or a CTO building a cloud team — we start the same way: a conversation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all"
                >
                  Browse IT Jobs <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Hire IT Talent
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
