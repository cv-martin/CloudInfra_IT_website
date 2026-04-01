"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

/**
 * BottomCTA — The page's single dark section (besides Hero).
 *
 * Two columns divided by a vertical glowing line.
 * Left: find a job. Right: hire talent.
 * Clean, high-contrast, clear.
 */

export default function BottomCTA() {
  return (
    <section className="bg-black relative overflow-hidden">

      {/* Background Motifs */}
      <div className="absolute inset-0 pointer-events-none ci-grid-bg opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#a4f07a]/40 to-transparent" />

      <div className="ci-container py-32 relative z-10">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-2 w-2 rounded-full bg-[#a4f07a] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">
              Action Center
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tighter">
            Ready to <span className="opacity-40 italic">evolve?</span>
          </h2>
        </motion.div>

        {/* Two columns (DataSignify Grid Logic) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Candidate Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col p-12 rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Building2 className="h-32 w-32 text-white" />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Professionals</span>
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{"I'm looking for a"}<br />new challenge.</h3>
            <p className="text-lg text-white/40 leading-relaxed font-light mb-10 max-w-sm">
                Get priority access to vetted roles in IT and Healthcare. Your application processed in 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                href="/job-opportunities"
                className="ci-pill-btn ci-pill-btn-primary group"
              >
                Browse Jobs
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact-a-recruiter"
                className="ci-pill-btn ci-pill-btn-outline"
              >
                Talk to a Recruiter
              </Link>
            </div>
          </motion.div>

          {/* Right — Employer Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col p-12 rounded-[2.5rem] border border-[#a4f07a]/20 bg-[#a4f07a]/[0.02] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
               <Building2 className="h-32 w-32 text-[#a4f07a]" />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-6 tracking-widest">Enterprise</span>
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">I need to scale<br />my technical team.</h3>
            <p className="text-lg text-white/40 leading-relaxed font-light mb-10 max-w-sm">
               Direct access to pre-screened talent clusters. Full compliance and faster deployment guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-primary group"
              >
                Hire Talent
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/custom-services-provided"
                className="ci-pill-btn ci-pill-btn-outline"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Global Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Global Support</span>
              <a href="mailto:info@cloudinfrait.com" className="text-sm font-bold text-white/60 hover:text-[#a4f07a] transition-colors">info@cloudinfrait.com</a>
            </div>
            <div className="flex flex-col border-l border-white/5 pl-8">
              <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Direct Line</span>
              <a href="tel:+12146637826" className="text-sm font-bold text-white/60 hover:text-[#a4f07a] transition-colors">+1 (214) 663-7826</a>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 hidden sm:block">CloudInfra IT Framework v2.6</span>
        </motion.div>

      </div>
    </section>
  );
}
