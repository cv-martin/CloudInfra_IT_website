"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3, Building, Globe, Users, Lock, CheckCircle2 } from "lucide-react";

/**
 * Banking & Finance Industry Page.
 * URL: /banking-and-finance
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const disciplines = [
  { icon: TrendingUp, label: "Investment & Capital Markets", tags: ["Investment Analysts", "Equity Research", "Portfolio Managers", "Quant Analysts", "Traders"] },
  { icon: BarChart3,  label: "Risk & Compliance",           tags: ["Compliance Officers", "AML Analysts", "BSA Officers", "Credit Risk", "Regulatory Reporting"] },
  { icon: Building,   label: "Retail & Commercial Banking", tags: ["Branch Managers", "Loan Officers", "Underwriters", "Relationship Managers", "Credit Analysts"] },
  { icon: Globe,      label: "FinTech & Digital Finance",   tags: ["FinTech Product Managers", "Payments Engineers", "Blockchain Developers", "API Architects", "RegTech"] },
  { icon: Users,      label: "Accounting & Finance",        tags: ["CFOs", "Controllers", "FP&A Managers", "Treasury Analysts", "CPA / CFA"] },
  { icon: Lock,       label: "Financial Services IT",       tags: ["Core Banking Systems", "SWIFT Integration", "SOX Compliance", "Data Engineers", "Cybersecurity"] },
];

const whyPoints = [
  "Credentials verified at source (FINRA, CFA, CPA)",
  "Active sourcing in US financial hubs (NYC, Charlotte, Dallas, Chicago)",
  "Work authorisation verified for every H-1B, TN, and OPT placement",
  "Contract, permanent, and temp-to-hire models available",
  "24–48h vetted shortlist from alignment call",
];

export default function BankingFinancePage() {
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
                Banking & <br/><span className="text-white/40">Financial Ops.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Specialist recruiters placing Finance, Risk, Compliance, and FinTech professionals across the USA.
              </p>

              {/* Compliance strip */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 mr-2">
                  <ShieldCheck className="h-4 w-4 text-[#a4f07a]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Credentials Verified:</span>
                </div>
                {["FINRA Licensed", "CFA / CPA", "AML Certified", "SOX Aware"].map(t => (
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
                  Browse Finance Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
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
                src="/hero-servers.png"
                alt="Financial services and fintech infrastructure"
                fill
                className="object-cover grayscale brightness-50 contrast-125 hover:grayscale-0 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-8 bottom-8">
                 <div className="ci-card p-6 bg-black/40 backdrop-blur-xl border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-2">Market Status</p>
                    <p className="text-sm text-white/60 font-light">Direct sourcing active in all 50 US States. <br/>Primary nodes: Risk, Compliance & FinTech.</p>
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Financial Disciplines</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Active Verticals.</h2>
              <p className="text-lg text-white/30 mt-6 max-w-2xl font-light leading-relaxed">
                From investment analysis to financial services IT — we maintain a qualified pool for USA engagements.
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
                  Vetting for <br/>Regulatory Integrity.
                </h2>
                <p className="text-lg text-white/30 leading-relaxed font-light mb-10 max-w-xl">
                  In financial services, compliance isn&apos;t a checkbox — it&apos;s the foundation. Every candidate we present is pre-screened for regulatory awareness, licensing validity, and credit/compliance history.
                </p>
                
                <div className="ci-card p-8 bg-[#0b0b0b] relative overflow-hidden group">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
                  <p className="text-sm font-bold text-white mb-6 relative z-10">Why CloudInfra IT for Finance?</p>
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
                      alt="Financial recruitment team collaborating on a risk placement"
                      fill
                      className="object-cover grayscale brightness-50 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                 </div>

                {/* Direct contact card */}
                <div className="ci-card p-10 bg-[#0d0d0d] relative overflow-hidden group">
                  <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block relative z-10">Finance Acquisition Node</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Initiate Financial Acquisition.</h2>
                <p className="text-lg text-white/30 mt-4 max-w-xl font-light">
                  Whether you are scaling a risk team or looking for your next finance mandate — activate the protocol within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-primary group"
                >
                  Browse Finance Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-outline"
                >
                  Deploy Finance Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
          </div>
  );
}
