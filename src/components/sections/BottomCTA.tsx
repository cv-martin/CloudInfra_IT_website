"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";

/**
 * BottomCTA — The page's single dark section (besides Hero).
 *
 * Two columns divided by a vertical glowing line.
 * Left: find a job. Right: hire talent.
 * Clean, high-contrast, clear.
 */

export default function BottomCTA() {
  return (
    <section className="bg-gray-950 relative overflow-hidden">

      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30 ci-grid-bg-small" />

      {/* Ambient glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none ci-radial-glow" />

      <div className="ci-container ci-section relative z-10">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#06B6D4] mb-3 block">
            Get Started Today
          </span>
          <h2 className="text-[var(--text-h2)] font-bold text-white leading-tight">
            Ready to get started?
          </h2>
          <p className="text-[var(--text-body)] text-gray-400 mt-3 max-w-sm mx-auto">
            Tell us what you need. We'll take it from there.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px lg:gap-0">

          {/* Divider line (desktop only, rendered as a column between panels) */}
          {/* Left — Find a Job */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="group flex flex-col px-0 lg:pr-16 pb-12 lg:pb-0 border-b border-gray-800 lg:border-b-0 lg:border-r lg:border-r-gray-800"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center mb-5">
              <Briefcase className="h-5 w-5 text-[#06B6D4]" />
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-3">
              For IT &amp; Healthcare Professionals
            </p>
            <h3 className="text-xl font-bold text-white mb-3">
              I&apos;m looking for work
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
              Browse open positions in IT, Healthcare, Engineering, and more. Apply quickly — a specialist recruiter will respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/job-opportunities"
                className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all duration-200"
              >
                Browse Job Opportunities <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-a-recruiter"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 text-sm font-medium px-6 py-3 rounded-full hover:border-gray-500 hover:text-white transition-colors"
              >
                Contact a Recruiter
              </Link>
            </div>
          </motion.div>

          {/* Right — Hire Talent */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col pt-12 lg:pt-0 lg:pl-16"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              For Healthcare &amp; Technology Employers
            </p>
            <h3 className="text-xl font-bold text-white mb-3">
              I need to hire talent
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
              Submit a staffing request and your dedicated Hiring Partner will reach out within 24 hours. Full compliance, payroll, and onboarding support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/consult-with-us"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
              >
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/custom-services-provided"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 text-sm font-medium px-6 py-3 rounded-full hover:border-gray-500 hover:text-white transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Contact line — bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-sm text-gray-600">
            Prefer to call?{" "}
            <a href="tel:+12146637826" className="text-gray-400 font-semibold hover:text-white transition-colors">
              (+1) 214-663-7826
            </a>
            {" "}·{" "}
            <a href="mailto:info@cloudinfrait.com" className="text-gray-400 font-semibold hover:text-white transition-colors">
              info@cloudinfrait.com
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
