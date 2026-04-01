"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Users, BarChart3, ArrowUpRight } from "lucide-react";

const advantages = [
  {
    name: "Non-Commission Vetting",
    description: "Our technical leads vet candidates based on infrastructure integrity, not sales internal quotas. You get a specialist, not a resume dump.",
    icon: ShieldCheck,
    metric: "100% Technical"
  },
  {
    name: "Zero-Stale Dates",
    description: "We verify every active posting daily. If a role is filled or a candidate is off-market, it's removed immediately to save your time.",
    icon: Zap,
    metric: "< 24h Freshness"
  },
  {
    name: "Sovereign Compliance",
    description: "Specialized in US-based IT infrastructure with deep expertise in SOC2, PCI-DSS, and EEO/AA compliance standards.",
    icon: BarChart3,
    metric: "Fed-Ready"
  },
  {
    name: "Scale SLAs",
    description: "Whether its a single contractor or a 20-person platform engineering squad, we deliver a qualified shortlist within 24-48 hours.",
    icon: Users,
    metric: "48h Shortlist"
  },
];

export default function ProofSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Decorative Grid BG */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
      
      {/* Institutional Watermark */}
      <div className="absolute right-0 bottom-0 text-[15rem] lg:text-[20rem] font-black text-white/[0.02] select-none translate-x-1/4 translate-y-1/4 pointer-events-none uppercase tracking-tighter">
        Trust
      </div>

      <div className="ci-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 border-b border-white/5 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#a4f07a]" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a]">Institutional integrity</h2>
            </div>
            <p className="text-5xl font-extrabold tracking-tighter text-white sm:text-7xl leading-[1.05]">
              The assurance of <br />
              <span className="text-white/40 italic font-light tracking-tight">sovereign technical vetting.</span>
            </p>
          </div>
          <div className="lg:max-w-sm">
             <p className="text-white/40 text-xl leading-relaxed font-light italic border-l-2 border-[#a4f07a]/30 pl-6">
               &quot;We provide the technical and regulatory certainty that generalist agencies cannot match.&quot;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div 
              key={advantage.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="ci-card p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
              
              <div className="mb-10 flex items-center justify-between relative z-10">
                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#a4f07a]/30 group-hover:bg-[#a4f07a]/5 text-[#a4f07a] transition-all duration-500">
                    <advantage.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{advantage.metric}</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold leading-tight text-white mb-6 flex items-center justify-between">
                  {advantage.name}
                  <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-[#a4f07a] transition-all" />
                </h3>
                <p className="text-sm leading-relaxed text-white/40 font-light">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
