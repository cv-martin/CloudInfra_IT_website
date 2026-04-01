"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Search, UserCheck, FileCheck, Handshake, Briefcase } from "lucide-react";

/**
 * Hiring Process — Candidate-facing process explanation.
 * URL: /hiring-process
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Find a Role or Reach Out",
    candidate: "Browse our live job board and click 'Express Interest' on any role that fits. You can also reach out directly — even if you don't see an exact match.",
    timing: "Immediate",
  },
  {
    icon: UserCheck,
    num: "02",
    title: "Recruiter Review & First Call",
    candidate: "A specialist recruiter in your domain reviews your profile. If there's a relevant opportunity, they'll contact you for a 15–20 minute intro call.",
    timing: "Within 1 business day",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "Pre-Submission Screening",
    candidate: "Before your profile goes to any client, we verify your work authorisation and review your technical background in depth. We never surprise a client.",
    timing: "2–5 business days",
  },
  {
    icon: Handshake,
    num: "04",
    title: "Client Briefing & Interview Prep",
    candidate: "We brief you fully before any client interview: role context, team structure, interview format, technical topics, and compensation.",
    timing: "Before every interview",
  },
  {
    icon: Briefcase,
    num: "05",
    title: "Offer, Onboarding & Beyond",
    candidate: "We manage the offer conversation and help with counter-offer navigation. We stay your point of contact through the assignment and for future opportunities.",
    timing: "Ongoing",
  },
];

const candidatePromises = [
  "We never send your CV to a client without your explicit consent",
  "You will always know who the client is before interview",
  "We give you full salary/rate transparency from the first call",
  "We provide detailed interview prep — not a generic briefing email",
  "If a role isn't right, we tell you why — no radio silence",
  "We keep your profile active for future opportunities without re-applying",
];

export default function HiringProcessPage() {
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
                Navigation & <br/><span className="text-white/40">Career Pipeline.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                No black boxes. Here is exactly what our process looks like from your side — from first contact to your first day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        {/* ── SLA Strip ── */}
        <section className="bg-black relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { value: "1 Day",  label: "Recruiter Response" },
                { value: "100%",   label: "Full Briefing SLA" },
                { value: "0",      label: "Unauthorized CVs" },
                { value: "Always", label: "Salary Disclosure" },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <p className="text-3xl font-black text-white leading-none tracking-tighter ci-glow-text">{s.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mt-3">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process Steps ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Candidate Flow</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">The 5 Core Stages.</h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.num} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="ci-card p-8 group relative overflow-hidden flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                    <div className="flex items-center gap-6 lg:gap-8 shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                        <Icon className="h-7 w-7 text-[#a4f07a]" />
                      </div>
                      <span className="text-5xl font-black text-white/5 select-none">{s.num}</span>
                    </div>
                    <div className="relative z-10 flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#a4f07a] transition-colors">{s.title}</h3>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/60 bg-[#a4f07a]/5 border border-[#a4f07a]/10 px-3 py-1.5 rounded-full">
                          <Clock className="h-3 w-3" /> {s.timing}
                        </span>
                      </div>
                      <p className="text-white/40 text-lg leading-relaxed mt-3 max-w-4xl font-light">{s.candidate}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Promises & Support ── */}
        <section className="bg-[#050505] relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-6 block">Candidate Bill of Rights</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-10">Our Commitments to You.</h2>
                <ul className="flex flex-col gap-6">
                  {candidatePromises.map(p => (
                    <li key={p} className="flex items-start gap-4 text-white/60 font-light">
                      <CheckCircle2 className="h-5 w-5 text-[#a4f07a] shrink-0 mt-0.5" /> 
                      <span className="text-lg leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="flex flex-col gap-8">
                <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="ci-card p-8 bg-white/[0.01]">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Active Talent Network.</h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-6 font-light">
                    Not seeing the right role? Send us your profile. We reach out when matching roles open — often before they go public.
                  </p>
                  <Link href="/contact-a-recruiter" className="ci-pill-btn ci-pill-btn-primary group w-full justify-center">
                    Talk to a Recruiter <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </motion.div>
                <div className="rounded-3xl border border-white/5 p-8 bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.03] pointer-events-none" />
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Candidate Support.</h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-6 font-light">
                    Have questions about the protocol? Our FAQ covers visa support, interview prep, and payment timelines.
                  </p>
                  <Link href="/faqs-for-candidates" className="ci-pill-btn ci-pill-btn-outline w-full justify-center">
                    Read Candidate FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Ready to Advance?</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light">A specialist in your field will respond within 24 hours of profile submission.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/job-opportunities" className="ci-pill-btn ci-pill-btn-primary group">
                  Browse Open Roles <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link href="/contact-a-recruiter" className="ci-pill-btn ci-pill-btn-outline">
                  Contact Specialist
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
          </div>
  );
}
