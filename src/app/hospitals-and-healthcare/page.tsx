"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck,
  Stethoscope, Heart, Activity, ClipboardList, Users, Monitor,
} from "lucide-react";

/**
 * Hospitals & Healthcare — Domain depth page.
 * URL: /hospitals-and-healthcare
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
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
                Clinical & <br/><span className="text-white/40">Healthcare Ops.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Credentialed clinical recruiters placing Physicians, Nurses, Allied Health, and Healthcare IT professionals across the USA.
              </p>

              {/* Compliance strip */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 mr-2">
                  <ShieldCheck className="h-4 w-4 text-[#a4f07a]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Compliance Protocol:</span>
                </div>
                {["License Verified", "HIPAA Aware", "Joint Commission"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/60 bg-[#a4f07a]/5 border border-[#a4f07a]/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse Clinical Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
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
                src="/img-healthcare-professional.png"
                alt="Healthcare professional — nurse in a clinical setting"
                fill
                className="object-cover grayscale brightness-50 contrast-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 text-right">
                 <div className="inline-block ci-card p-6 bg-black/40 backdrop-blur-xl border-white/10 text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-2">Unit Status</p>
                    <p className="text-sm text-white/60 font-light">Credentialing verified at source. <br/>National practitioner database integration active.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* ── Disciplines Grid ── */}
        <section className="bg-black relative overflow-hidden text-white">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Clinical Disciplines</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">What we staff.</h2>
              <p className="text-lg text-white/30 mt-6 max-w-2xl font-light leading-relaxed">
                From bedside nursing to healthcare IT implementation — every search is run by a recruiter with direct clinical staffing experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.label}
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
                    <h3 className="text-lg font-bold text-white mb-4 tracking-tight relative z-10">{d.label}</h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {d.tags.map(tag => (
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Collaborative Deployment.</h2>
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
          </div>
        </section>

        {/* ── Compliance-First ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.01] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Compliance Priority</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
                  Credentialing is <br/>not Optional.
                </h2>
                <p className="text-lg text-white/30 leading-relaxed font-light mb-10 max-w-xl">
                  In healthcare, the wrong hire is a patient-safety risk. Every clinical candidate we present has been pre-screened for licence validity, compliance history, and work authorisation before transmission.
                </p>
                
                <div className="ci-card p-8 bg-[#0b0b0b] relative overflow-hidden group">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
                  <p className="text-sm font-bold text-white mb-6 relative z-10">Why CloudInfra IT for Healthcare?</p>
                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {whyPoints.map(p => (
                      <div key={p} className="flex items-start gap-4">
                        <div className="w-5 h-5 shrink-0 rounded-md bg-[#a4f07a]/10 border border-[#a4f07a]/20 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-[#a4f07a]" />
                        </div>
                        <span className="text-sm text-white/40 font-light leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-8"
              >
                 <div className="relative h-80 rounded-[2.5rem] overflow-hidden group shadow-2xl">
                    <Image
                      src="/img-team-office.png"
                      alt="Healthcare recruiters collaborating"
                      fill
                      className="object-cover grayscale brightness-50 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                 </div>

                {/* Direct contact card */}
                <div className="ci-card p-10 bg-[#0d0d0d] relative overflow-hidden group">
                  <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block relative z-10">Communication Node</p>
                  <a href="tel:+12146637826" className="text-2xl font-bold text-white hover:text-[#a4f07a] transition-all tracking-tighter relative z-10">
                    (+1) 214-663-7826
                  </a>
                  <div className="mt-2 relative z-10">
                    <a href="mailto:info@cloudinfrait.com" className="text-xs text-white/30 hover:text-[#a4f07a] transition-all font-light">
                      info@cloudinfrait.com
                    </a>
                  </div>
                </div>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight text-center lg:text-left">Initiate Clinical Acquisition.</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light text-center lg:text-left">
                  Whether you are a nurse seeking a travel mandate or a hospital system filling a critical unit gap — activate the protocol within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse Clinical Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Deploy Clinical Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
          </div>
  );
}
