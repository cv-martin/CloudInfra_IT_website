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
    description: "We verify every active posting daily. If a role is filled or a candidate is off-market, its removed immediately to save your time.",
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
    <section className="py-32 bg-[var(--ivory)] theme-light relative overflow-hidden">
      {/* Institutional Watermark */}
      <div className="absolute right-0 bottom-0 text-[20rem] font-black text-black/[0.02] select-none translate-x-1/4 translate-y-1/4 font-serif pointer-events-none uppercase">
        Trust
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 border-b border-black/5 pb-16">
          <div className="max-w-3xl">
            <h2 className="text-[0.65rem] font-black uppercase tracking-[0.5em] text-black/40 mb-6">Institutional integrity</h2>
            <p className="text-5xl font-extrabold tracking-tight text-black sm:text-7xl font-serif leading-[1.05]">
              The assurance of <br />
              <span className="italic font-light text-black/60 tracking-tight">sovereign technical vetting.</span>
            </p>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-black/50 text-xl leading-relaxed font-light italic">
               &quot;We provide the technical and regulatory certainty that generalist agencies cannot match.&quot;
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <motion.div 
              key={advantage.name} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-black/5 border border-black/5 group-hover:bg-black group-hover:text-white transition-all duration-700">
                    <advantage.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <span className="text-[0.6rem] font-black text-black/30 uppercase tracking-[0.3em]">{advantage.metric}</span>
              </div>
              
              <dl>
                <dt className="text-2xl font-bold leading-tight text-black mb-6 flex items-center gap-3">
                  {advantage.name}
                  <ArrowUpRight className="h-4 w-4 text-black/20 group-hover:text-black transition-all" />
                </dt>
                <dd className="text-lg leading-relaxed text-black/50 font-light">
                  {advantage.description}
                </dd>
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
