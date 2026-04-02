"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

/**
 * AudiencePaths — Route candidate vs employer to their correct path.
 *
 * Design principle: TWO clear doors. Nothing more.
 * Stat board is dark glass — authoritative, not neon-saturated.
 */

const stats = [
  { n: "3,200+", l: "Placements Made",     sub: "across IT & Healthcare" },
  { n: "48h",    l: "Shortlist Delivery",  sub: "avg. time-to-candidates" },
  { n: "98%",    l: "Retention Rate",      sub: "year over year" },
  { n: "10",     l: "Industry Verticals",  sub: "specialized domains" },
];

const candidateRoles = ["DevOps Engineer", "Cloud Architect", "SDET", "Network Engineer", "RN / NP"];
const employerRoles  = ["Contract Staffing", "Permanent Hire", "Temp-to-Hire", "Enterprise MSP"];

export default function AudiencePaths() {
  return (
    <section className="bg-black border-t border-white/[0.05] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.025] pointer-events-none" />

      <div className="ci-container py-24 lg:py-32 relative z-10">

        {/* ── Stats board — dark glass, not saturated green ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 rounded-2xl bg-[#080808] border border-white/[0.08] p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Hairline green top accent */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#a4f07a]/60 to-transparent" />

          <div className="flex items-center gap-3 mb-8">
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#a4f07a", boxShadow: "0 0 10px #a4f07a" }}
            />
            <span className="text-[10.5px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">
              Verified Performance
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 lg:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#a4f07a]/20 hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
              >
                <p className="text-3xl lg:text-[2.2rem] font-black leading-none tracking-tighter mb-3" style={{ color: "#a4f07a", textShadow: "0 0 20px rgba(164,240,122,0.5)" }}>
                  <AnimatedCounter target={s.n} duration={1400} />
                </p>
                <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-white/60 mb-1 group-hover:text-white/80 transition-colors">
                  {s.l}
                </p>
                <p className="text-[11.5px] text-white/30 font-light">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Two audience cards ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Candidate path */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ci-card group p-10 flex flex-col gap-8 min-h-[420px]"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1.5px] w-10 bg-[#a4f07a]" />
                <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-[#a4f07a]">
                  For Professionals
                </span>
              </div>
              <h2 className="text-[2rem] lg:text-[2.25rem] font-bold text-white mb-5 leading-[1.15] tracking-tight">
                Accelerate your career<br />
                <span className="text-white/30 italic font-light">with premium US roles.</span>
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed max-w-sm font-light mb-6">
                Specialist placement for IT and Healthcare professionals.
                Full support for all major visa types and work authorizations.
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2">
                {candidateRoles.map(r => (
                  <span key={r} className="text-[11px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-[12px] font-medium text-white/50">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#a4f07a] shrink-0" />
                H-1B · OPT · STEM OPT · Green Card supported
              </div>
              <Link
                href="/job-opportunities"
                className="ci-pill-btn ci-pill-btn-primary self-start group mt-2"
              >
                Find your next role
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Employer path */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ci-card group relative p-10 flex flex-col gap-8 min-h-[420px] border-white/[0.06]"
          >
            {/* Subtle image overlay */}
            <div className="absolute inset-0 grayscale opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-700 rounded-[1.5rem] overflow-hidden">
              <Image
                src="/img-team-office.png"
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="relative flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1.5px] w-10 bg-white/20" />
                <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-white/40">
                  For Employers
                </span>
              </div>
              <h2 className="text-[2rem] lg:text-[2.25rem] font-bold text-white mb-5 leading-[1.15] tracking-tight">
                Scale your technical team<br />
                <span className="text-white/30 italic font-light">with pre-screened talent.</span>
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed max-w-sm font-light mb-6">
                Data-driven recruitment for technology and healthcare.
                Compliant, domain-vetted candidates delivered in 48 hours.
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {employerRoles.map(r => (
                  <span key={r} className="text-[11px] font-medium text-white/35 bg-white/[0.03] border border-white/[0.07] px-3 py-1 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative pt-2">
              <Link
                href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-outline self-start group"
              >
                Hire Talent
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
