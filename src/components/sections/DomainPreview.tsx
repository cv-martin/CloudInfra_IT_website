"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * DomainPreview — Primary domain snapshot for IT and Healthcare.
 *
 * ONE job: Show the two primary specialties, route to their pages.
 * Full role lists, partner details → domain-specific pages. Not here.
 */

const additionalVerticals = [
  { label: "Engineering",       href: "/engineering" },
  { label: "Banking & Finance", href: "/banking-and-finance" },
  { label: "Pharmaceutical",    href: "/pharmaceutical" },
  { label: "Legal",             href: "/legal" },
  { label: "Aerospace",         href: "/aerospace" },
  { label: "Defence & Space",   href: "/defence-and-space" },
  { label: "Manufacturing",     href: "/manufacturing" },
  { label: "Oil & Energy",      href: "/oil-and-gas" },
];

export default function DomainPreview() {
  return (
    <section className="bg-black relative overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container py-24 lg:py-32 relative z-10">

        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1.5px] w-10 bg-[#a4f07a]" />
            <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-[#a4f07a]">
              Our Verticals
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
            Deep domain expertise.<br />
            <span className="text-white/30 italic font-light">Two primary verticals.</span>
          </h2>
          <p className="text-[16px] text-white/45 mt-5 max-w-2xl leading-relaxed font-light">
            Our recruiters are engineers and clinicians first — they understand
            the technical nuances of every role they fill.
          </p>
        </motion.div>

        {/* ── Two domain cards ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* IT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ci-card group overflow-hidden"
          >
            <div className="relative h-60">
              <Image
                src="/img-it-professional.png"
                alt="IT professional at work"
                fill
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
              <div className="absolute bottom-5 left-7">
                <span className="text-[9.5px] font-black uppercase tracking-[0.3em] text-[#a4f07a] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded">
                  Information Technology
                </span>
              </div>
            </div>

            <div className="p-8">
              <p className="text-[12px] font-bold text-white/70 mb-3 tracking-wide">
                Cloud · DevOps · Security · Software Engineering · Data
              </p>
              <p className="text-[14.5px] text-white/40 leading-relaxed font-light mb-7">
                From cloud architects to ERP consultants — we source top-tier engineering talent
                for permanent and contract engagements across all 50 states.
              </p>
              <Link
                href="/information-technology"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-[#a4f07a] hover:underline underline-offset-8 group/link transition-all"
              >
                View IT Capabilities
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Healthcare */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ci-card group overflow-hidden"
          >
            <div className="relative h-60">
              <Image
                src="/img-healthcare-professional.png"
                alt="Healthcare professional"
                fill
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
              <div className="absolute bottom-5 left-7">
                <span className="text-[9.5px] font-black uppercase tracking-[0.3em] text-white/75 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded">
                  Hospitals & Healthcare
                </span>
              </div>
            </div>

            <div className="p-8">
              <p className="text-[12px] font-bold text-white/70 mb-3 tracking-wide">
                Physicians · Nursing · Health IT · Allied Health · Admin
              </p>
              <p className="text-[14.5px] text-white/40 leading-relaxed font-light mb-7">
                Access a deep network of clinical and administrative professionals.
                Full compliance verification and USCIS support on every candidate.
              </p>
              <Link
                href="/hospitals-and-healthcare"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-white/70 hover:text-white hover:underline underline-offset-8 group/link transition-all"
              >
                View Healthcare Capabilities
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* ── Additional verticals tag row ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8 border-t border-white/[0.05]"
        >
          <span className="text-[10.5px] font-black uppercase tracking-[0.25em] text-white/25 shrink-0">
            Also Serving
          </span>
          <div className="flex flex-wrap gap-2">
            {additionalVerticals.map((v) => (
              <Link
                key={v.label}
                href={v.href}
                className="text-[11.5px] font-medium text-white/35 border border-white/[0.07] px-3.5 py-1.5 rounded-full hover:text-[#a4f07a] hover:border-[#a4f07a]/30 hover:bg-[#a4f07a]/[0.04] transition-all duration-200"
              >
                {v.label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
