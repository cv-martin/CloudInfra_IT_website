"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Layers, Settings, BarChart3, Monitor, Users, CheckCircle2 } from "lucide-react";

/**
 * Defence & Space Industry Page.
 * URL: /defence-and-space
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const disciplines = [
  { icon: Cpu,      label: "Electronic Warfare & Signals", tags: ["EW Engineers", "RF Engineers", "Signals Intelligence", "SIGINT Analysts", "Electronic Systems"] },
  { icon: Layers,   label: "Space Systems",               tags: ["Satellite Engineers", "Payload Engineers", "GNC Engineers", "Mission Analysts", "Launch Vehicle Engineers"] },
  { icon: Settings, label: "Systems & Platform Eng.",     tags: ["Systems Engineers", "Platform Architects", "SE Managers", "MBSE Specialists", "Integration & Test"] },
  { icon: BarChart3,label: "Programme & Acquisition",     tags: ["Programme Directors", "Acquisition Managers", "Cost Analysts", "CAIV Specialists", "DoD Contracts"] },
  { icon: Monitor,  label: "Cyber & Info Assurance",      tags: ["Cyber Engineers", "IA Managers", "DISA RMF", "NIST 800-53", "Security Clearance Holders"] },
  { icon: Users,    label: "C4ISR & Communications",      tags: ["C4ISR Engineers", "Comms Officers", "Network Engineers", "Satellite Comms", "Link-16 Specialists"] },
];

const whyPoints = [
  "Credentials verified for defence standards (Secret/TS-SCI, ITAR)",
  "Active sourcing for prime contractors and DoD agencies",
  "Work authorisation verified for every H-1B, TN, and OPT placement",
  "Contract, permanent, and temp-to-hire models available",
  "24–48h vetted shortlist for critical mission gaps",
];

export default function DefencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
                Defence & <br/><span className="text-white/40">Space Ops.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Placing Electronic Warfare, Space Systems, Cyber, C4ISR, and Programme Management professionals for prime contractors and space operators.
              </p>

              {/* Compliance strip */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 mr-2">
                  <ShieldCheck className="h-4 w-4 text-[#a4f07a]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Security Protocol:</span>
                </div>
                {["Secret Cleared", "TS/SCI Eligible", "ITAR Compliant", "DoD Experience", "RMF Aware"].map(t => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/60 bg-[#a4f07a]/5 border border-[#a4f07a]/10 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse Defence Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Acquire Talent
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block relative h-[450px] rounded-3xl overflow-hidden border border-white/5"
            >
              <Image
                src="/cyber-tech.png"
                alt="Mission-critical defence and space information systems"
                fill
                className="object-cover grayscale brightness-50 contrast-125 hover:grayscale-0 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-8 bottom-8">
                 <div className="ci-card p-6 bg-black/40 backdrop-blur-xl border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-2">Security Status</p>
                    <p className="text-sm text-white/60 font-light">Direct sourcing active for Cleared Nodes. <br/>Primary domains: EW, Space Systems & Cyber.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        {/* ── Disciplines Grid ── */}
        <section className="bg-black relative overflow-hidden text-white">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Defence Disciplines</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Active Verticals.</h2>
              <p className="text-lg text-white/30 mt-6 max-w-2xl font-light leading-relaxed">
                From electronic warfare to space systems engineering — we maintain a cleared talent pool for mission-critical mandates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="ci-card p-8 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                      <Icon className="h-6 w-6 text-[#a4f07a]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 tracking-tight relative z-10">{d.label}</h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {d.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black tracking-widest uppercase text-white/30 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Domain Validation ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.01] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Domain Validation</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
                  Vetting for <br/>Mission Success.
                </h2>
                <p className="text-lg text-white/30 leading-relaxed font-light mb-10 max-w-xl">
                  CloudInfra IT recruiters understand the unique demands of the Defence and Space sectors. We vet for technical mastery, security clearance validity, and the multi-disciplinary expertise required for high-stakes missions.
                </p>
                
                <div className="ci-card p-8 bg-[#0b0b0b] relative overflow-hidden group">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
                  <p className="text-sm font-bold text-white mb-6 relative z-10">Why CloudInfra IT for Defence?</p>
                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {whyPoints.map(p => (
                      <div key={p} className="flex items-start gap-4">
                        <div className="w-5 h-5 shrink-0 rounded-md bg-[#a4f07a]/10 border border-[#a4f07a]/20 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-[#a4f07a]" />
                        </div>
                        <span className="text-sm text-white/40 font-light leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-8"
              >
                 <div className="relative h-80 rounded-[2.5rem] overflow-hidden group shadow-2xl">
                    <Image
                      src="/img-team-office.png"
                      alt="Defence recruitment team collaborating on a mission-critical clearance placement"
                      fill
                      className="object-cover grayscale brightness-50 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                 </div>

                {/* Direct contact card */}
                <div className="ci-card p-10 bg-[#0d0d0d] relative overflow-hidden group">
                  <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block relative z-10">Defence Acquisition Node</p>
                  <a href="tel:+12146637826" className="text-2xl font-bold text-white hover:text-[#a4f07a] transition-all tracking-tighter relative z-10">
                    (+1) 214-663-7826
                  </a>
                  <div className="mt-2 relative z-10">
                    <a href="mailto:info@cloudinfrait.com" className="text-xs text-white/30 hover:text-[#a4f07a] transition-all font-light">
                      info@cloudinfrait.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Initiate Defence Acquisition.</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light">
                  Whether you are scaling a cleared engineering squad or looking for your next mission-critical mandate — activate the protocol within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse Defence Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Deploy Cleared Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
          </div>
  );
}
