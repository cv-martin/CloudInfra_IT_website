"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HowWeWork — 5-step process.
 * Dark navy background. Giant ghost numbers as visual anchors.
 * Gives extreme visual weight without clutter.
 */

const steps = [
  {
    n: "01",
    title: "Reach Out",
    description: "Submit a staffing request with the role, skills, location, and timeline. Takes under five minutes.",
  },
  {
    n: "02",
    title: "Connect",
    description: "Your dedicated Hiring Partner reaches out within 24 hours to discuss requirements in detail.",
  },
  {
    n: "03",
    title: "Review Candidates",
    description: "We deliver a curated shortlist of pre-screened, qualified candidates — each with full vetting notes.",
  },
  {
    n: "04",
    title: "Interview & Offer",
    description: "We schedule interviews and help you extend a competitive, compliant offer to your chosen candidate.",
  },
  {
    n: "05",
    title: "Hire & Onboard",
    description: "We handle payroll, compliance, credentialing, and benefits administration end-to-end.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-black ci-section relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#a4f07a]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
              How we work with clients
            </h2>
            <p className="text-base text-white/40 mt-4 max-w-md leading-relaxed font-light">
              Five steps from your first message to your new hire&apos;s first day.
            </p>
          </div>
          <Link
            href="/our-process"
            className="text-sm font-bold text-[#a4f07a] hover:underline flex items-center gap-1.5 shrink-0 group transition-all"
          >
            Full process details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative flex flex-col ci-card p-8 group hover:border-[#a4f07a]/30 transition-all"
            >
              {/* Giant ghost number — visual anchor */}
              <span className="text-[72px] font-black leading-none text-[#a4f07a]/[0.03] select-none mb-6 -ml-1 group-hover:text-[#a4f07a]/[0.06] transition-colors">
                {step.n}
              </span>

              {/* Accent line */}
              <div className="h-0.5 w-8 bg-[#a4f07a] mb-6 ci-glow" />

              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/20">
            Hiring Partner responds within 24 hours.
          </p>
          <Link
            href="/consult-with-us"
            className="ci-pill-btn ci-pill-btn-primary group"
          >
            Request a Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
