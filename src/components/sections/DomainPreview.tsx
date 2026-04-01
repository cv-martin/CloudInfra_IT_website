"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * DomainPreview — Slim two-panel teaser for IT and Healthcare.
 *
 * ONE job: show the two primary specialties exist, direct to their pages.
 * Full role lists, skill tags, partner descriptions → /information-technology
 * and /hospitals-and-healthcare. Not here.
 */

export default function DomainPreview() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container py-24 lg:py-32 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#a4f07a]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Our Verticals</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-1 leading-[1.1] tracking-tight">
            Specialized in IT and <span className="opacity-40 italic">Healthcare.</span>
          </h2>
          <p className="text-lg text-white/40 mt-6 max-w-2xl leading-relaxed font-light">
            We staff with domain-specialist recruiters who understand the nuances of the US market. 
            Elite candidates, compliance-checked and ready to deploy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* IT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ci-card group"
          >
            {/* Photo */}
            <div className="relative h-64">
              <Image
                src="/img-it-professional.png"
                alt="IT professional"
                fill
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] bg-[#000]/60 backdrop-blur-md px-3 py-1 rounded">Information Technology</span>
              </div>
            </div>
            <div className="p-10">
              <p className="text-sm font-bold text-white/80 mb-3 tracking-tight">Cloud · DevOps · Security · Software Eng</p>
              <p className="text-[15px] text-white/40 leading-relaxed font-light mb-8">
                From cloud architects to ERP consultants — we source top-tier engineering talent 
                for permanent and contract-based engagements across the US.
              </p>
              <Link
                href="/information-technology"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] hover:underline underline-offset-8 group/link transition-all"
              >
                View IT Capabilities
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ci-card group"
          >
            <div className="relative h-64">
              <Image
                src="/img-healthcare-professional.png"
                alt="Healthcare professional"
                fill
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded">Hospitals & Healthcare</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-10">
              <p className="text-sm font-bold text-white/80 mb-3 tracking-tight">Physicians · Nursing · Health IT · Admin</p>
              <p className="text-[15px] text-white/40 leading-relaxed font-light mb-8">
                Access a deep network of clinical and administrative professionals. 
                Full compliance verification and USCIS support for every candidate.
              </p>
              <Link
                href="/hospitals-and-healthcare"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:underline underline-offset-8 group/link transition-all"
              >
                View Healthcare Capabilities
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* High-level summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">
            Also serving Engineering, Finance, Pharma, Legal & Aerospace
          </p>
        </motion.div>

      </div>
    </section>
  );
}
