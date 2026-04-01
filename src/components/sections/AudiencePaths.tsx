"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

/**
 * AudiencePaths — Replaces the old WhoWeServe.
 *
 * ONE job: route the two audience types to their correct path.
 * No bullet lists, no paragraphs, no stats.
 * Just two clear doors — one for candidates, one for employers.
 */

export default function AudiencePaths() {
  return (
    <section className="bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full ci-grid-bg opacity-[0.03] pointer-events-none" />

      <div className="ci-container py-24 lg:py-32 relative z-10">

        {/* Stats — Animated board, fires counters on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ci-stat-board p-8 lg:p-10 mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-2 w-2 rounded-full bg-[#a4f07a] ci-glow-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Verified Performance</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "2,400+", l: "Placements Made",     sub: "across IT & Healthcare" },
              { n: "48h",    l: "Shortlist Delivery",   sub: "avg. time-to-candidates" },
              { n: "98%",    l: "Retention Rate",       sub: "year over year" },
              { n: "12",     l: "Industry Verticals",   sub: "specialized domains" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="ci-stat-cell p-5 lg:p-7 group cursor-default"
              >
                <p className="text-3xl lg:text-4xl font-black text-[#a4f07a] leading-none tracking-tighter ci-text-glow mb-3">
                  <AnimatedCounter target={s.n} duration={1500} />
                </p>
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white/70 mb-1.5 group-hover:text-white/90 transition-colors">{s.l}</p>
                <p className="text-[12px] text-white/50 font-light">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two audience cards (DataSignify Grid Logic) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Candidate path */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ci-card group p-10 flex flex-col gap-8 min-h-[440px]"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">
                  Candidate Solutions
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Accelerate your career<br />with <span className="italic text-white opacity-40">premium roles.</span>
              </h2>
              <p className="text-base text-white/70 leading-relaxed max-w-md">
                Strategic placement for IT and Healthcare professionals across the USA. 
                Full support for all major visa types and work authorizations.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-medium text-white/65">
                <CheckCircle2 className="h-4 w-4 text-[#a4f07a] shrink-0" />
                H-1B · OPT · STEM OPT Supported
              </div>
              <Link
                href="/jobs"
                className="ci-pill-btn ci-pill-btn-primary self-start group mt-4"
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
            className="ci-card group relative p-10 flex flex-col gap-8 min-h-[440px]"
          >
            {/* Subtle image overlay */}
            <div className="absolute inset-0 grayscale opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
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
                <div className="h-px w-10 bg-white/30" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/60">
                  Business Solutions
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Scale your workforce<br />with <span className="italic text-white opacity-40">elite talent.</span>
              </h2>
              <p className="text-base text-white/70 leading-relaxed max-w-md">
                Data-driven recruitment for technology and healthcare. 
                Pre-screened, compliant candidates delivered in 48 hours.
              </p>
            </div>
            
            <div className="relative pt-4">
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
