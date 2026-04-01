"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";

/**
 * FinalCTA — The closing argument of the homepage.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - Matrix / Grid patterning
 */

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
      
      <div className="ci-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Professionals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ci-card group p-12 flex flex-col items-start relative overflow-hidden bg-[#0d0d0d]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Briefcase className="h-32 w-32 text-white" />
            </div>

            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-8 bg-[#a4f07a] ci-glow" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">Candidates</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                Accelerate your<br />career <span className="opacity-40 italic font-light">pathway.</span>
              </h3>
              <p className="text-lg text-white/40 leading-relaxed font-light mb-12 max-w-sm">
                Get direct access to vetted roles at tier-1 US firms. No third-party layers, just high-performance recruitment.
              </p>

              <Link
                href="/jobs"
                className="ci-pill-btn ci-pill-btn-primary group mt-auto"
              >
                Explore Market <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ci-card group p-12 flex flex-col items-start relative overflow-hidden bg-[#a4f07a]/[0.02] border-[#a4f07a]/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
               <Building2 className="h-32 w-32 text-[#a4f07a]" />
            </div>

            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-8 bg-white/20" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">Enterprise</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                Scale your technical<br />delivery <span className="opacity-40 italic font-light">velocity.</span>
              </h3>
              <p className="text-lg text-white/40 leading-relaxed font-light mb-12 max-w-sm">
                Deploy compliant, pre-screened teams in under 48 hours. Zero placement risk, 100% USCIS alignment.
              </p>

              <Link
                href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-outline group mt-auto"
              >
                Hire Talent Cluster <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
