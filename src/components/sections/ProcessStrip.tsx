"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, FileSignature, Users, Rocket, Target } from "lucide-react";

/**
 * ProcessStrip — "The Delivery Engine" teaser.
 * Dark band with 5 glowing step nodes and a connecting line.
 * Links to /our-process for the full technical breakdown.
 */

const processSteps = [
  { id: 1, name: "Consult",  icon: Target,        color: "#06B6D4" },
  { id: 2, name: "Source",   icon: Search,         color: "#06B6D4" },
  { id: 3, name: "Vet",      icon: FileSignature,  color: "#06B6D4" },
  { id: 4, name: "Deploy",   icon: Rocket,         color: "#06B6D4" },
  { id: 5, name: "Scale",    icon: Users,          color: "#06B6D4" },
];

export default function ProcessStrip() {
  return (
    <section className="py-16 bg-[#020510] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* ── Left: Title ───── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 text-center lg:text-left"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#06B6D4] mb-2">5-Step Framework</p>
          <h2 className="text-xl font-bold tracking-tight text-white mb-3">
            The Delivery Engine
          </h2>
          <Link
            href="/our-process"
            className="inline-flex items-center gap-2 text-sm text-[#06B6D4] font-semibold group hover:gap-3 transition-all duration-200"
          >
            See Full Process
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* ── Right: Step Line ───── */}
        <div className="flex-grow w-full max-w-3xl relative">

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[22px] left-5 right-5 h-px z-0 ci-process-line">
            {/* Animated pulse dot along the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#06B6D4] ci-glow-cyan"
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Step nodes */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:flex justify-between relative z-10 gap-y-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="flex flex-col items-center gap-3 md:px-2"
              >
                {/* Icon circle */}
                <div className="relative w-11 h-11 rounded-full flex items-center justify-center cursor-default group transition-all duration-300 bg-[#06B6D4]/5 border border-[#06B6D4]/20">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#06B6D4]/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]" />
                  {/* Step number badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#06B6D4] text-[9px] font-bold text-[#020510] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.id}
                  </span>
                  <step.icon className="relative z-10 w-5 h-5 text-white/40 group-hover:text-[#06B6D4] transition-colors duration-300" />
                </div>

                <span className="text-[13px] font-semibold text-white/60 group-hover:text-white transition-colors tracking-wide">
                  {step.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
