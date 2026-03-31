"use client";

import Link from "next/link";
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
    <section className="bg-[#0B1120] ci-section">
      <div className="ci-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="ci-label">Our Process</span>
            <h2 className="text-[var(--text-h2)] font-bold text-white leading-tight mt-1">
              How we work with clients
            </h2>
            <p className="text-sm text-gray-400 mt-3 max-w-md leading-relaxed">
              Five steps from your first message to your new hire's first day.
            </p>
          </div>
          <Link
            href="/our-process"
            className="text-sm font-semibold text-[#06B6D4] hover:underline flex items-center gap-1.5 shrink-0 group"
          >
            Full process details <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
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
              className="relative flex flex-col"
            >
              {/* Giant ghost number — visual anchor */}
              <span className="text-[88px] font-black leading-none text-white/[0.04] select-none mb-2 -ml-1">
                {step.n}
              </span>

              {/* Cyan accent line */}
              <div className="h-px w-10 bg-[#06B6D4] mb-4" />

              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500">
            Submit a staffing request — your Hiring Partner will respond within 24 hours.
          </p>
          <Link
            href="/consult-with-us"
            className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] transition-colors shrink-0"
          >
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
