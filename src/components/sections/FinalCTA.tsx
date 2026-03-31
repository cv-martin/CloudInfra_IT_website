"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseMedical, Building2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Job seekers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden p-10 flex flex-col items-start"
            style={{ background: "linear-gradient(135deg, #020510 0%, #0a1628 100%)" }}
          >
            <div className="absolute top-0 right-0 h-48 w-48 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="inline-flex items-center gap-2 border border-[#06B6D4]/30 bg-[#06B6D4]/10 rounded-full px-3 py-1 mb-6">
                <BriefcaseMedical className="h-3.5 w-3.5 text-[#06B6D4]" />
                <span className="text-xs text-[#06B6D4] font-bold uppercase tracking-wide">IT & Medical Professionals</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Looking for a role?</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                Search hundreds of IT and medical positions. Apply in minutes. Our specialist recruiters follow up within 24 hours — no spam, no outsourced response teams.
              </p>

              <Link
                href="/jobs"
                className="mt-auto inline-flex items-center gap-2 bg-[#06B6D4] text-[#020510] font-bold px-7 py-3 rounded-full hover:bg-[#00d4f0] transition-all text-sm"
              >
                Search All Jobs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden p-10 flex flex-col items-start"
            style={{ background: "linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)" }}
          >
            <div className="absolute bottom-0 right-0 h-48 w-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 mb-6">
                <Building2 className="h-3.5 w-3.5 text-white" />
                <span className="text-xs text-white font-bold uppercase tracking-wide">Healthcare & Tech Employers</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Need to hire fast?</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Get a HIPAA-vetted, SOC2-cleared shortlist within 48 hours. W2 payroll, compliance handling, and full onboarding support. Zero placement risk.
              </p>

              <Link
                href="/employers"
                className="mt-auto inline-flex items-center gap-2 bg-white text-[#0891b2] font-bold px-7 py-3 rounded-full hover:bg-white/90 transition-all text-sm"
              >
                Start a Hiring Brief <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
