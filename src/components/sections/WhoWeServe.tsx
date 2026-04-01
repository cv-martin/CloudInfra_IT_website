"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * WhoWeServe — First real content section after Hero.
 *
 * Layout: Two-part section.
 * 1. Stats bar — bold proof numbers up top
 * 2. Split layout — image (real people) on left, two audience paths on right
 *
 * Human photo makes the emotional connection that text alone cannot.
 */

const stats = [
  { value: "2,400+", label: "Professionals Placed", sub: "across IT & Healthcare" },
  { value: "48h",    label: "Avg. Time-to-Shortlist", sub: "from brief to candidates" },
  { value: "98%",    label: "Client Retention Rate", sub: "year-over-year" },
  { value: "10+",    label: "Industry Specialties", sub: "nationwide" },
];

const seekerPoints = [
  "Permanent, Contract, Temporary, and Temp-to-Hire",
  "IT and Healthcare roles across the USA",
  "Specialist recruiter responds within 24 hours",
];

const employerPoints = [
  "Curated shortlist delivered within 48 hours",
  "Domain-specialist recruiters — not generalists",
  "Full compliance, payroll, and onboarding support",
];

export default function WhoWeServe() {
  return (
    <section className="bg-white ci-divider">
      <div className="ci-container ci-section">

        {/* ── Stats bar ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-8 py-7 flex flex-col gap-1">
              <span className="text-4xl font-black text-gray-900 tracking-tight">{s.value}</span>
              <span className="text-sm font-semibold text-gray-800">{s.label}</span>
              <span className="text-xs text-gray-400">{s.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Split layout: image left | audience paths right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Photo with caption overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[520px]"
          >
            <Image
              src="/CloudInfra_IT_website/img-team-office.png"
              alt="CloudInfra IT team — professionals collaborating in a modern office environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay for caption readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Caption badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
                CloudInfra IT
              </span>
              <p className="text-white font-semibold text-base mt-1">
                Specialist recruiters matching talent to opportunity — across IT and Healthcare.
              </p>
            </div>
          </motion.div>

          {/* Right — Two audience paths stacked */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Section heading */}
            <div>
              <span className="ci-label">Who We Serve</span>
              <h2 className="text-[var(--text-h2)] font-bold text-gray-900 leading-tight mt-1">
                One firm.<br className="hidden sm:block" /> Two audiences.
              </h2>
            </div>

            {/* Card: Job Seeker */}
            <div className="rounded-2xl border border-[#06B6D4]/25 bg-[#F0FDFF] p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#06B6D4] mb-3">
                For IT &amp; Healthcare Professionals
              </p>
              <h3 className="text-base font-bold text-gray-900 mb-2">Find your next role in the USA</h3>
              <ul className="space-y-2 mb-4">
                {seekerPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-[#06B6D4] mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/job-opportunities"
                className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0891b2] transition-colors group"
              >
                Browse Open Positions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Card: Employer */}
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">
                For Healthcare &amp; Technology Employers
              </p>
              <h3 className="text-base font-bold text-white mb-2">Build your team with confidence</h3>
              <ul className="space-y-2 mb-4">
                {employerPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-gray-600 mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/consult-with-us"
                className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
