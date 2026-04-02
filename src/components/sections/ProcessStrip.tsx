"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Search, FileSignature, Users, Rocket, Target } from "lucide-react";

/**
 * ProcessStrip — How we place you, in 5 steps.
 *
 * User-centred: every step answers "what happens TO ME."
 * Links to /our-process for the full technical breakdown.
 */

const processSteps = [
  {
    id: 1,
    name: "Consult",
    desc: "We learn your exact requirements",
    icon: Target,
  },
  {
    id: 2,
    name: "Source",
    desc: "Domain-specialist search begins",
    icon: Search,
  },
  {
    id: 3,
    name: "Vet",
    desc: "Technical + compliance screening",
    icon: FileSignature,
  },
  {
    id: 4,
    name: "Deploy",
    desc: "48-hour shortlist delivered",
    icon: Rocket,
  },
  {
    id: 5,
    name: "Scale",
    desc: "Ongoing support & workforce growth",
    icon: Users,
  },
];

export default function ProcessStrip() {
  return (
    <section className="py-24 bg-[#000] border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">

        {/* ── Left: title + CTA ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 text-center lg:text-left max-w-[280px]"
        >
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div className="h-[1.5px] w-8 bg-[#a4f07a]" />
            <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-[#a4f07a]">
              Methodology
            </span>
          </div>
          <h2 className="text-[1.85rem] font-bold tracking-tight text-white mb-3 leading-tight">
            How We<br />Place You.
          </h2>
          <p className="text-[13.5px] text-white/35 font-light mb-7 leading-relaxed">
            A proven 5-step framework from first brief to deployed talent.
          </p>
          <Link
            href="/our-process"
            className="ci-pill-btn ci-pill-btn-outline !py-2.5 !px-5 text-[12.5px] group"
          >
            See Full Framework
            <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* ── Right: step nodes ───────────────────────────── */}
        <div className="flex-grow w-full max-w-4xl relative">

          {/* Connecting line */}
          <div className="hidden md:block absolute top-[28px] left-7 right-7 h-px z-0 bg-white/[0.05]">
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#a4f07a]"
              style={{ boxShadow: "0 0 10px rgba(164,240,122,0.9)" }}
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-5 md:flex justify-between relative z-10 gap-x-4 gap-y-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-4 group cursor-default"
              >
                {/* Step number + icon circle */}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-[#0a0a0a] border border-white/[0.09] group-hover:border-[#a4f07a]/35 group-hover:bg-[#a4f07a]/[0.06] transition-all duration-400">
                  {/* Number badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] rounded-full bg-[#a4f07a] text-[9px] font-black text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-250">
                    {step.id}
                  </span>
                  <step.icon className="w-5 h-5 text-white/25 group-hover:text-[#a4f07a] transition-colors duration-300" />
                </div>

                {/* Label + description */}
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45 group-hover:text-white transition-colors">
                    {step.name}
                  </span>
                  <span className="text-[10.5px] text-white/25 font-light leading-tight max-w-[90px] group-hover:text-white/45 transition-colors">
                    {step.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
