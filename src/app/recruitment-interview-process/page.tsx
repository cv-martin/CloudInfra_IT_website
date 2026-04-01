"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Search, FileCheck, Handshake, UserCheck } from "lucide-react";

/**
 * Recruitment & Interview Process — Employer trust detail page.
 * URL: /recruitment-interview-process
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const screeningSteps = [
  {
    icon: Search,
    title: "Active Sourcing (not passive posting)",
    body: "We identify candidates through direct outreach to our network, referrals from placed professionals, and targeted search — not by posting a job and waiting.",
  },
  {
    icon: UserCheck,
    title: "Domain Technical Screen",
    body: "Every candidate is screened by a recruiter with direct experience in their field. We test against real scenarios — not just CV keywords.",
  },
  {
    icon: Shield,
    title: "Work Authorisation & Compliance",
    body: "We verify work authorisation (H-1B, Green Card, US Citizen, TN Visa) before any submission. We confirm the candidate's right to work for your specific engagement.",
  },
  {
    icon: FileCheck,
    title: "Reference & History",
    body: "We conduct reference checks and verify employment history for all shortlisted candidates. We validate reported project contributions before presenting.",
  },
  {
    icon: Handshake,
    title: "Candidate Briefing",
    body: "Before submission, every candidate is fully briefed: role scope, tech stack, and compensation range. No surprised candidates in your process.",
  },
];

const interviewSteps = [
  {
    num: "01",
    title: "Resume & Shortlist Review",
    body: "Shortlist of 3–5 candidates, each with a written recruiter summary on technical fit and compliance status.",
  },
  {
    num: "02",
    title: "Interview Scheduling",
    body: "We coordinate all scheduling and assessments, managing the calendars so your team stays focused.",
  },
  {
    num: "03",
    title: "Feedback Loop",
    body: "Structured feedback gathered from both sides within 24 hours to refine the search in real-time.",
  },
  {
    num: "04",
    title: "Offer Management",
    body: "We manage the offer conversation — counters, benchmarking, and expectation alignment. No surprises at offer stage.",
  },
  {
    num: "05",
    title: "Onboarding Coordination",
    body: "Handling payroll setup, compliance documentation, and first-day logistics for contract or perm hires.",
  },
];

export default function RecruitmentInterviewProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
                Protocol & <br/><span className="text-white/40">Acquisition Pipeline.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Our vetting process is the reason our shortlists are lean and our offer acceptance rate is exceptional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        {/* ── SLAs ── */}
        <section className="bg-black relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { value: "24–48h", label: "Contract Shortlist" },
                { value: "5–10d", label: "Permanent Search" },
                { value: "100%", label: "Auth Verified" },
                { value: "24h", label: "Feedback Loop" },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <p className="text-3xl font-black text-white leading-none tracking-tighter ci-glow-text">{s.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mt-3">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Screening Steps ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Stage 01: Pre-Submission</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">The Qualification Gates.</h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {screeningSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="ci-card p-8 group relative overflow-hidden flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 relative z-10 shadow-lg">
                      <Icon className="h-7 w-7 text-[#a4f07a]" />
                    </div>
                    <div className="relative z-10 lg:pl-4">
                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#a4f07a] transition-colors">{s.title}</h3>
                      <p className="text-white/40 text-lg leading-relaxed max-w-3xl font-light">{s.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Interview Process ── */}
        <section className="bg-[#050505] relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Stage 02: Acquisition Flow</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Unified Coordination.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviewSteps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="ci-card p-8 group relative overflow-hidden border-white/5 bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-6xl font-black text-white">{s.num}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#a4f07a]/5 border border-[#a4f07a]/10 flex items-center justify-center mb-6">
                    <span className="text-[10px] font-black text-[#a4f07a]">{s.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Activate Your Protocol.</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light">A 15-minute alignment call is all we need to execute your acquisition strategy.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary group">
                  Book Alignment <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link href="/our-process" className="ci-pill-btn ci-pill-btn-outline">
                  Technical Overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
          </div>
  );
}
