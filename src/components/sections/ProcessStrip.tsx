"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Search, FileSignature, Users, Rocket, Target } from "lucide-react";

/**
 * ProcessStrip — "The Delivery Engine" teaser.
 * Dark band with 5 glowing step nodes and a connecting line.
 * Links to /our-process for the full technical breakdown.
 */

const processSteps = [
  { id: 1, name: "Consult",  icon: Target,        color: "#a4f07a" },
  { id: 2, name: "Source",   icon: Search,         color: "#a4f07a" },
  { id: 3, name: "Vet",      icon: FileSignature,  color: "#a4f07a" },
  { id: 4, name: "Deploy",   icon: Rocket,         color: "#a4f07a" },
  { id: 5, name: "Scale",    icon: Users,          color: "#a4f07a" },
];

export default function ProcessStrip() {
  return (
    <section className="py-24 bg-[#000000] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* ── Left: Title ───── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 text-center lg:text-left max-w-xs"
        >
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div className="h-px w-8 bg-[#a4f07a]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Methodology</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
            The Delivery Engine
          </h2>
          <Link
            href="/our-process"
            className="ci-pill-btn ci-pill-btn-outline !py-2 !px-5 text-xs group"
          >
            Explore Framework
            <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* ── Right: Step Line ───── */}
        <div className="flex-grow w-full max-w-4xl relative">

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[26px] left-8 right-8 h-px z-0 bg-white/5">
            {/* Animated pulse dot along the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#a4f07a] ci-glow"
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Step nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-5 md:flex justify-between relative z-10 gap-x-4 gap-y-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-4 group"
              >
                {/* Icon circle */}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-default transition-all duration-500 bg-[#0d0d0d] border border-white/10 group-hover:border-[#a4f07a]/40 group-hover:bg-[#a4f07a]/5">
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#a4f07a] text-[10px] font-black text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    {step.id}
                  </span>
                  <step.icon className="relative z-10 w-6 h-6 text-white/30 group-hover:text-[#a4f07a] transition-colors duration-300" />
                </div>

                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
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
