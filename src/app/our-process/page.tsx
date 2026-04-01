"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import {
  Target, Search, FileSignature, Rocket, Users,
  ArrowRight, CheckCircle2, ShieldCheck, Clock,
} from "lucide-react";

/**
 * Our Process — Full 5-step delivery breakdown.
 * URL: /our-process
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const steps = [
  {
    id: 1,
    name: "Consult",
    icon: Target,
    tagline: "We listen for outcomes, not just keywords.",
    employer: "Submit a staffing request outlining your technical requirement, team structure, timeline, and engagement model. A dedicated Hiring Partner reviews it within a few hours and books a 15-minute alignment call to finalise the delivery roadmap.",
    candidate: "Reach out via the job board or direct contact form. A specialist recruiter reviews your profile and identifies the best-fit active roles — no generic job board spam.",
    bullets: [
      "Requirement scoping call (15–30 min)",
      "Role classification: permanent, contract, temp-to-hire",
      "Work authorisation verified from day one",
    ],
  },
  {
    id: 2,
    name: "Source",
    icon: Search,
    tagline: "Domain-specialist recruiters, not generalists.",
    employer: "Our IT and Healthcare recruiters tap deep referral networks, technical communities, and passive candidate pipelines. We do not post on a generic job board and wait — we actively search.",
    candidate: "Your profile is matched against our active client requirements. If there's no current fit, you are placed in our talent pool and contacted when a relevant role opens.",
    bullets: [
      "Active search — not passive job board",
      "Technical screening by domain specialists",
      "Visa and compliance pre-check",
    ],
  },
  {
    id: 3,
    name: "Vet",
    icon: FileSignature,
    tagline: "Only shortlisted candidates reach you.",
    employer: "Every candidate is technically screened against your role brief — not just keyword-matched. References checked, work authorisation verified, and employment history validated before you see a single name.",
    candidate: "You will be briefed on the client, role expectations, interview format, and technical requirements before any submission. We prepare you — we do not just forward CVs.",
    bullets: [
      "Technical capability screen",
      "Work authorisation & background verification",
      "Reference and employment history check",
    ],
  },
  {
    id: 4,
    name: "Deploy",
    icon: Rocket,
    tagline: "Fast, streamlined offer and onboarding.",
    employer: "Shortlist delivered within 24–48 hours of alignment. Interview scheduling is handled by us. Offer, contracting, payroll setup, and compliance paperwork — all managed end-to-end so your team does not lose time.",
    candidate: "Interview preparation, offer negotiation support, and full onboarding coordination. For contract roles: payroll, compliance documentation, and first-day logistics handled by CloudInfra IT.",
    bullets: [
      "24–48h shortlist from alignment call",
      "Interview scheduling & offer coordination",
      "Onboarding, payroll & compliance handled",
    ],
  },
  {
    id: 5,
    name: "Scale",
    icon: Users,
    tagline: "We stay engaged — not just transactional.",
    employer: "Post-placement check-ins at 30, 60, and 90 days. If requirements scale, we respond within hours. Performance issues are resolved proactively — with replacements available if needed.",
    candidate: "Your recruiter remains your point of contact throughout the engagement. New opportunities are surfaced as they arise. Contract extensions and permanent conversions are coordinated by us.",
    bullets: [
      "30/60/90-day placement check-ins",
      "Rapid replacement SLA if needed",
      "Scale-up support for team buildouts",
    ],
  },
];

const trustPoints = [
  { icon: Clock,        label: "24–48h Shortlist", sub: "Latency benchmark" },
  { icon: ShieldCheck,  label: "Compliance-First",  sub: "Verified at source" },
  { icon: CheckCircle2, label: "Zero Noise",      sub: "Vetted submissions only" },
];

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Page hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
        <div className="ci-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
              The Delivery Engine.
            </h1>
            <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
              Five clear steps from first contact to first day. No surprises — for candidates or clients.
            </p>
          </motion.div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap gap-8 lg:gap-12">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <tp.icon className="h-5 w-5 text-[#a4f07a]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{tp.label}</p>
                  <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mt-0.5">{tp.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-24">

          {/* Step-by-step */}
          <div className="flex flex-col gap-0 max-w-6xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="relative flex gap-10 lg:gap-16"
                >
                  {/* Left: Icon column + connector line */}
                  <div className="flex flex-col items-center shrink-0 w-16">
                    {/* Circle */}
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center z-10 shrink-0 bg-[#0d0d0d] border border-white/10 group-hover:border-[#a4f07a]/40 transition-colors">
                      <Icon className="h-7 w-7 text-[#a4f07a]" />
                    </div>
                    {/* Connector line */}
                    {!isLast && (
                      <div className="w-px flex-1 mt-4 mb-4 bg-gradient-to-b from-[#a4f07a]/40 to-transparent min-h-[100px]" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-24 lg:pb-32"}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">
                        Protocol 0{step.id}
                      </span>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tighter">{step.name}</h2>
                    <p className="text-lg text-[#a4f07a]/40 mb-10 font-light">&ldquo;{step.tagline}&rdquo;</p>

                    {/* Two-column: Employer vs Candidate */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                      {/* Employer */}
                      <div className="ci-card p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 ci-grid-bg-small opacity-[0.01] pointer-events-none" />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block">Stakeholder View</span>
                        <p className="text-base text-white/60 leading-relaxed font-light">{step.employer}</p>
                      </div>
                      
                      {/* Candidate */}
                      <div className="ci-card p-8 border-[#a4f07a]/5 bg-[#a4f07a]/[0.02] relative overflow-hidden group">
                         <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none" />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#a4f07a]/40 mb-4 block">Candidate View</span>
                        <p className="text-base text-white/60 leading-relaxed font-light">{step.candidate}</p>
                      </div>
                    </div>

                    {/* Bullet guarantees */}
                    <div className="flex flex-wrap gap-4 lg:gap-8">
                      {step.bullets.map(b => (
                        <div key={b} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                          <CheckCircle2 className="h-4 w-4 text-[#a4f07a]" />
                          <span className="text-xs text-white/40 font-bold tracking-tight">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <section className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left"
            >
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Ready to activate the process?</h2>
                <p className="text-lg text-white/30 mt-4 font-light max-w-xl">
                  Whether you are scaling a team or looking for your next tech tenure, our delivery engine is ready.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Request Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/job-opportunities"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Browse Job Openings
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

          </div>
  );
}
