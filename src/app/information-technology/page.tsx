"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck,
  Cloud, Code2, Lock, Database, Cpu, Layers,
} from "lucide-react";

/**
 * Information Technology — Domain depth page.
 * URL: /information-technology
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
                Information <br/><span className="text-white/40">Technology Ops.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Domain-specialist IT recruiters placing Cloud, DevOps, Security, Data, and Software Engineering professionals across the USA.
              </p>

              {/* Visa strip */}
              <div className="mt-10 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 mr-2">
                  <ShieldCheck className="h-4 w-4 text-[#a4f07a]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Visa Clearance Level:</span>
                </div>
                {visaTypes.map(v => (
                  <span key={v} className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/60 bg-[#a4f07a]/5 border border-[#a4f07a]/10 px-3 py-1 rounded-full">
                    {v}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse IT Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Acquire Talent
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block relative h-[450px] rounded-3xl overflow-hidden border border-white/5"
            >
              <Image
                src="/img-it-professional.png"
                alt="IT professional working at a cloud engineering workstation"
                fill
                className="object-cover grayscale brightness-50 contrast-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-8 bottom-8">
                 <div className="ci-card p-6 bg-black/40 backdrop-blur-xl border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-2">Live Status</p>
                    <p className="text-sm text-white/60 font-light">Direct sourcing active in all 50 US States across all major cloud tech-stacks.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* ── Specialties Grid ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Deployment Vectors</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Active Verticals.</h2>
              <p className="text-lg text-white/30 mt-6 max-w-2xl font-light leading-relaxed">
                We cover the full IT spectrum. Every search is run by a recruiter with real domain experience in that specific area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((sp, i) => {
                const Icon = sp.icon;
                return (
                  <motion.div
                    key={sp.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="ci-card p-8 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                      <Icon className="h-6 w-6 text-[#a4f07a]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 tracking-tight relative z-10">{sp.label}</h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {sp.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black tracking-widest uppercase text-white/30 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg">
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
        <section className="bg-[#050505] border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Engagement Protocols</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Collaboration Delivery.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {engagementModels.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="ci-card p-10 bg-black/40 backdrop-blur-sm relative overflow-hidden group"
                >
                   <div className="absolute inset-0 ci-grid-bg opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-6 block relative z-10">{m.title}</p>
                  <p className="text-xl font-bold text-white/50 italic mb-4 leading-snug relative z-10">&ldquo;{m.scenario}&rdquo;</p>
                  <p className="text-base text-white/40 leading-relaxed font-light relative z-10">{m.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href="/custom-services-provided" className="text-xs font-black uppercase tracking-[0.4em] text-white/20 hover:text-[#a4f07a] transition-all">
                Access Enterprise Frameworks <ArrowRight className="h-4 w-4 inline ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Why CloudInfra IT ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.01] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Legacy Benchmark</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
                  Engineers by Design, <br/>Recruiters by Protocol.
                </h2>
                <p className="text-lg text-white/30 leading-relaxed font-light mb-10 max-w-xl">
                  Every CloudInfra IT recruiter has worked directly alongside engineering teams. We understand what a 5+ year DevOps engineer looks like versus a buzzword-padded CV — and we never transmit the wrong fit.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {whyPoints.map(p => (
                    <div key={p} className="flex items-start gap-4">
                      <div className="w-5 h-5 shrink-0 rounded-md bg-[#a4f07a]/10 border border-[#a4f07a]/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="h-3 w-3 text-[#a4f07a]" />
                      </div>
                      <span className="text-sm text-white/40 font-light leading-relaxed">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl"
              >
                <Image
                  src="/img-team-office.png"
                  alt="CloudInfra IT recruitment team collaborating"
                  fill
                  className="object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-10 border border-white/5 rounded-[1.5rem] pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Initiate IT Acquisition.</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light">
                  Whether you are scaling a cloud squad or looking for your next engineering mandate — activate the protocol today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse IT Openings <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Deploy IT Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
          </div>
  );
}
