"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseMedical, Building2, CheckCircle } from "lucide-react";

const jobSeekerBenefits = [
  "No fees — we work for you",
  "Medical & IT specializations",
  "W2 benefits on contract roles",
];

const employerBenefits = [
  "48-hour shortlist, guaranteed",
  "HIPAA, SOC2, FedRAMP specialists",
  "No placement, no fee model",
];

export default function AudienceSplit() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-2">Who we serve</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Two paths. One trusted partner.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* For Job Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#020510] to-[#0a1628] p-10 text-white"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#06B6D4]/15 border border-[#06B6D4]/30 rounded-full px-4 py-1.5 mb-6">
                <BriefcaseMedical className="h-4 w-4 text-[#06B6D4]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">For IT & Medical Professionals</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Find Your Next Role in the USA</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-7">
                Browse 400+ open IT and healthcare positions across Cloud, DevOps, EHR, Cybersecurity, and more. W2, C2C, and Direct Hire across the USA.
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {jobSeekerBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle className="h-4 w-4 text-[#06B6D4] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 bg-[#06B6D4] text-[#020510] font-bold px-7 py-3 rounded-full hover:bg-[#00d4f0] transition-all text-sm"
              >
                Browse Open Roles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* For Employers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-10 border border-slate-200"
          >
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-slate-200 border border-slate-300 rounded-full px-4 py-1.5 mb-6">
                <Building2 className="h-4 w-4 text-slate-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">For Healthcare & Tech Employers</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Your Technical Team</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                Get a HIPAA/SOC2-vetted shortlist within 48 hours. W2 payroll, compliance handling, and zero-risk onboarding — all included.
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {employerBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#06B6D4] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/employers"
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-7 py-3 rounded-full hover:bg-gray-700 transition-all text-sm"
              >
                Request Talent <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
