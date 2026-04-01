"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Flame, Cpu, BarChart3, Layers, Users, Monitor } from "lucide-react";

/**
 * Oil, Gas & Energy Industry Page.
 * URL: /oil-and-gas
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const disciplines = [
  { icon: Flame,    label: "Petroleum & Drilling",        tags: ["Petroleum Engineers", "Drilling Engineers", "Well Completion", "Reservoir Engineers", "Mudloggers"] },
  { icon: Cpu,      label: "Process & Pipeline",          tags: ["Process Engineers", "Pipeline Engineers", "P&ID Engineers", "Piping Designers", "HAZOP Leads"] },
  { icon: BarChart3,label: "Project Management",          tags: ["Project Managers", "Programme Directors", "Site Managers", "Commissioning Engineers", "PMO"] },
  { icon: Layers,   label: "Renewable Energy",            tags: ["Wind Turbine Techs", "Solar Engineers", "Battery Storage", "Grid Engineers", "Energy Analysts"] },
  { icon: Monitor,  label: "SCADA & Instrumentation",     tags: ["DCS Engineers", "SCADA Specialists", "Instrumentation Techs", "Electrical Engineers", "PLC Programmers"] },
  { icon: Users,    label: "HSE & Regulatory",            tags: ["HSE Managers", "Safety Officers", "Environmental Engineers", "Regulatory Compliance", "OSHA Auditors"] },
];

export default function OilGasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
                Energy & <br/><span className="text-white/40">Resource Ops.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Placing Petroleum, Process, Renewable Energy, and SCADA professionals across upstream, midstream, downstream, and energy transition sectors.
              </p>

              {/* Compliance strip */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 mr-2">
                  <ShieldCheck className="h-4 w-4 text-[#a4f07a]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Credentials Verified:</span>
                </div>
                {["IADC Certified", "OSHA 30", "API Standards", "HSE Cleared", "H1B/TN Visa"].map(t => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/60 bg-[#a4f07a]/5 border border-[#a4f07a]/10 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link href="/job-opportunities" className="ci-pill-btn ci-pill-btn-primary group">
                  Browse Energy Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-outline">
                  Acquire Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        {/* ── Disciplines Grid ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Energy Disciplines</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Active Verticals.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div key={d.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="ci-card p-8 group relative overflow-hidden">
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                      <Icon className="h-6 w-6 text-[#a4f07a]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 tracking-tight relative z-10">{d.label}</h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {d.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black tracking-widest uppercase text-white/30 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Initiate Energy Acquisition.</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light">Upstream, midstream, downstream, or renewables — activate the protocol today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/job-opportunities" className="ci-pill-btn ci-pill-btn-primary group">
                  Browse Energy Roles <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-outline">
                  Deploy Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
          </div>
  );
}
