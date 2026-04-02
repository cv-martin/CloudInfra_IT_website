"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * BottomCTA — The page's closing handshake.
 *
 * Two columns: candidate & employer — direct, no ambiguity.
 * Radial green glow creates a destination feel, not an afterthought.
 */

export default function BottomCTA() {
  return (
    <section className="bg-black relative overflow-hidden border-t border-white/[0.05]">

      {/* Background — subtle grid */}
      <div className="absolute inset-0 pointer-events-none ci-grid-bg opacity-[0.025]" />

      {/* Radial glow — center top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(164,240,122,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Hairline accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#a4f07a]/30 to-transparent" />

      <div className="ci-container py-28 lg:py-36 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
            <span className="text-[10.5px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">
              Get Started
            </span>
          </div>
          <h2 className="text-[3rem] sm:text-[4rem] font-bold text-white leading-[1.05] tracking-[-0.03em]">
            Two ways in.
          </h2>
          <p className="text-lg text-white/35 mt-4 font-light max-w-md mx-auto">
            Your next opportunity — or your next hire — starts with one conversation.
          </p>
        </motion.div>

        {/* Two CTA cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Candidate */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col p-10 rounded-[2rem] bg-[#090909] border border-white/[0.07] relative group overflow-hidden hover:border-white/[0.12] transition-all duration-300"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a4f07a]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25 mb-5 relative z-10">
              For Professionals
            </span>
            <h3 className="text-[1.65rem] font-bold text-white mb-4 tracking-tight relative z-10 leading-tight">
              I&apos;m looking for a<br />new challenge.
            </h3>
            <p className="text-[15px] text-white/40 leading-relaxed font-light mb-8 max-w-xs relative z-10">
              Priority access to vetted IT and Healthcare roles. Your profile reviewed within 24 hours.
            </p>

            {/* Quote */}
            <p className="text-[12.5px] text-white/20 italic font-light mb-8 border-l border-white/[0.08] pl-4 relative z-10">
              &ldquo;Placed me in a senior DevOps role in Dallas within 3 weeks.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto relative z-10">
              <Link href="/job-opportunities" className="ci-pill-btn ci-pill-btn-primary group">
                Browse Jobs
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact-a-recruiter" className="ci-pill-btn ci-pill-btn-outline">
                Talk to a Recruiter
              </Link>
            </div>
          </motion.div>

          {/* Employer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col p-10 rounded-[2rem] border border-[#a4f07a]/15 bg-[#a4f07a]/[0.015] relative group overflow-hidden hover:border-[#a4f07a]/25 hover:bg-[#a4f07a]/[0.03] transition-all duration-300"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a4f07a]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-5 relative z-10">
              For Employers
            </span>
            <h3 className="text-[1.65rem] font-bold text-white mb-4 tracking-tight relative z-10 leading-tight">
              I need to scale my<br />technical team.
            </h3>
            <p className="text-[15px] text-white/40 leading-relaxed font-light mb-8 max-w-xs relative z-10">
              Pre-screened, domain-expert candidates. USCIS compliant. Delivered in 48 hours or less.
            </p>

            {/* Quote */}
            <p className="text-[12.5px] text-white/20 italic font-light mb-8 border-l border-[#a4f07a]/15 pl-4 relative z-10">
              &ldquo;Filled a critical Cloud Security role in under a week. Exceptional quality.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto relative z-10">
              <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary group">
                Hire Talent
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/custom-services-provided" className="ci-pill-btn ci-pill-btn-outline">
                Explore Services
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Footer info row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-5"
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[9.5px] font-black uppercase text-white/15 tracking-widest">Global Support</span>
              <a href="mailto:info@cloudinfrait.com" className="text-[13px] font-semibold text-white/50 hover:text-[#a4f07a] transition-colors">
                info@cloudinfrait.com
              </a>
            </div>
            <div className="flex flex-col border-l border-white/[0.05] pl-8">
              <span className="text-[9.5px] font-black uppercase text-white/15 tracking-widest">Direct Line</span>
              <a href="tel:+12146637826" className="text-[13px] font-semibold text-white/50 hover:text-[#a4f07a] transition-colors">
                +1 (214) 663-7826
              </a>
            </div>
          </div>
          <span className="text-[9.5px] font-black uppercase tracking-[0.4em] text-white/10 hidden sm:block">
            CloudInfra IT · US IT & Healthcare Staffing
          </span>
        </motion.div>

      </div>
    </section>
  );
}
