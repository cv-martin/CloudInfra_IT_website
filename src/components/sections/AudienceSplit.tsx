"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, CheckCircle2 } from "lucide-react";

/**
 * AudienceSplit — High-trust navigation hub for two user journeys.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card and ci-pill-btn components
 */

const jobSeekerBenefits = [
  "Direct vetted placements",
  "Medical & IT specializations",
  "Full USCIS alignment",
];

const employerBenefits = [
  "48-hour shortlist SLA",
  "HIPAA / SOC2 technical vetting",
  "Zero placement risk models",
];

export default function AudienceSplit() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
      
      <div className="ci-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#a4f07a]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">User Protocol</span>
            <div className="h-px w-8 bg-[#a4f07a]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">Two tracks. One destination.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Candidates */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ci-card group p-12 flex flex-col relative overflow-hidden bg-[#0d0d0d]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
               <Briefcase className="h-40 w-40 text-black fill-white" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-6 bg-[#a4f07a] ci-glow" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">IT & Medical Specialists</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">Execute your next<br />career <span className="opacity-40 italic font-light">pivot.</span></h3>
              <p className="text-lg text-white/40 leading-relaxed font-light mb-10 max-w-sm">
                Gain direct access to compliant, pre-vetted roles across the Cloud and Healthcare verticals. High-performance recruitment, low noise.
              </p>

              <ul className="flex flex-col gap-4 mb-12">
                {jobSeekerBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px] text-white/50 font-light">
                    <CheckCircle2 className="h-4 w-4 text-[#a4f07a] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/jobs"
                className="ci-pill-btn ci-pill-btn-primary group"
              >
                Start Engagement <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ci-card group p-12 flex flex-col relative overflow-hidden bg-[#0a0a0a] border-[#a4f07a]/20"
          >
            <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
               <Building2 className="h-40 w-40 text-[#a4f07a]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-6 bg-white/20" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30">Enterprise Partners</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">Deploy elite technical<br />capability <span className="opacity-40 italic font-light">at scale.</span></h3>
              <p className="text-lg text-white/40 leading-relaxed font-light mb-10 max-w-sm">
                Bypass the generic resume firehose. Receive a technically-vetted shortlist of specialists ready to deliver on your tech stack within 48 hours.
              </p>

              <ul className="flex flex-col gap-4 mb-12">
                {employerBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px] text-white/50 font-light">
                    <CheckCircle2 className="h-4 w-4 text-[#a4f07a] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-outline group"
              >
                Hire Cluster <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
