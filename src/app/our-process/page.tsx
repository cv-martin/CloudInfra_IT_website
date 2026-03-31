"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target, Search, FileSignature, Rocket, Users,
  ArrowRight, CheckCircle2, ShieldCheck, Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Our Process — Full 5-step delivery breakdown.
 * URL: /our-process (linked from Header, ProcessStrip, and Footer)
 *
 * Two views: Employers + Candidates.
 * Answers: "How does CloudInfra IT actually work? What happens after I click?"
 */

const steps = [
  {
    id: 1,
    name: "Consult",
    icon: Target,
    color: "#06B6D4",
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
    color: "#06B6D4",
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
    color: "#06B6D4",
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
    color: "#06B6D4",
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
    color: "#06B6D4",
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
  { icon: Clock,        label: "24–48h Shortlist", sub: "From alignment call to vetted candidates" },
  { icon: ShieldCheck,  label: "Compliance-First",  sub: "Work auth verified before every submission" },
  { icon: CheckCircle2, label: "No Surprises",      sub: "Full briefing for candidates and clients" },
];

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Page hero */}
      <section className="pt-32 pb-14 bg-[#020510]">
        <div className="ci-container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="ci-label">How We Work</span>
            <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight mt-1">
              The Delivery Engine
            </h1>
            <p className="text-sm text-white/50 mt-3 max-w-xl leading-relaxed">
              Five clear steps from first contact to first day. No surprises — for candidates or clients.
            </p>
          </motion.div>

          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap gap-6">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center">
                  <tp.icon className="h-4 w-4 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{tp.label}</p>
                  <p className="text-[11px] text-white/40">{tp.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-16 lg:py-20">

          {/* Step-by-step */}
          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  className="relative flex gap-8"
                >
                  {/* Left: Icon column + connector line */}
                  <div className="flex flex-col items-center shrink-0">
                    {/* Circle */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center z-10 shrink-0 bg-[#06B6D4]/5 border border-[#06B6D4]/30">
                      <Icon className="h-5 w-5 text-[#06B6D4]" />
                    </div>
                    {/* Connector line */}
                    {!isLast && (
                      <div className="w-px flex-1 mt-2 mb-0 bg-[#06B6D4]/15 min-h-[40px]" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className={`flex-1 pb-12 ${isLast ? "pb-0" : ""}`}>
                    {/* Step number + name */}
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4]">
                        Step {step.id}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{step.name}</h2>
                    <p className="text-sm text-gray-400 italic mb-5">{step.tagline}</p>

                    {/* Two-column: Employer vs Candidate */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                      {/* Employer */}
                      <div className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">For Employers</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.employer}</p>
                      </div>
                      {/* Candidate */}
                      <div className="rounded-2xl border border-[#06B6D4]/12 bg-[#06B6D4]/[0.03] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4]/60 mb-2">For Candidates</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.candidate}</p>
                      </div>
                    </div>

                    {/* Bullet guarantees */}
                    <ul className="flex flex-col sm:flex-row gap-3">
                      {step.bullets.map(b => (
                        <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <section className="border-t border-gray-100 bg-[#F8F9FB]">
          <div className="ci-container py-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900">Ready to start the process?</h2>
                <p className="text-sm text-gray-500 mt-2">
                  Employer or candidate — the first step is the same: reach out.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all"
                >
                  Request a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium px-6 py-3 rounded-full hover:border-gray-300 hover:text-gray-900 transition-colors"
                >
                  Browse Job Openings
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
