"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Zap, Shield, BarChart3 } from "lucide-react";

/**
 * Custom Services (Enterprise) — Specific high-volume/strategic models.
 * URL: /custom-services-provided
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const programmes = [
  {
    title: "Team Build Programme",
    subtitle: "Staff an entire squad simultaneously.",
    detail:
      "For organisations scaling cloud, data, or clinical teams from 3 to 15+ hires in a single cycle. We assign a dedicated Hiring Partner, establish a shared sourcing brief, and deliver rolling shortlists against a coordinated timeline.",
    deliverable: "Coordinated shortlists across all roles within 5–7 business days.",
    fits: ["Cloud migration teams", "Data centre builds", "Hospital wing staffing", "Technology transformation projects"],
  },
  {
    title: "Managed Staffing (MSP Lite)",
    subtitle: "Outsource your contingent workforce management.",
    detail:
      "For companies that rely on 5+ contractors at any time. We become your single vendor — handling sourcing, compliance, payroll, renewals, and replacement cover. Monthly reporting, one invoice, one account manager.",
    deliverable: "Fully operational within 10 business days of contract sign.",
    fits: ["Hospital systems with ongoing bank shifts", "Technology departments running multiple projects", "Engineering firms with seasonal contractor demand"],
  },
  {
    title: "Executive & Senior Search",
    subtitle: "C-suite, VP, and Director-level technology leadership.",
    detail:
      "For senior technology and clinical leadership hires where discretion, network depth, and cultural alignment are critical. We use a research-led retained search model that goes beyond active job seekers.",
    deliverable: "Longlist in 10 days, shortlist in 20 days from retained brief.",
    fits: ["CTO / CISO / VP Engineering", "Chief Nursing Officer / VP Clinical Operations", "Director-level IT & Programme Management"],
  },
  {
    title: "Compliance & Visa Support",
    subtitle: "Complex work authorisation — handled by specialists.",
    detail:
      "For organisations engaging H-1B transfers, OPT/STEM OPT holders, or candidates requiring TN/E-3 visa support. We manage the candidate side of the compliance workflow and partner with specialist immigration counsel for employer-side filings.",
    deliverable: "Compliance review on every candidate before submission — no exceptions.",
    fits: ["Tech companies hiring OPT/STEM OPT graduates", "Healthcare systems with H-1B nursing staff", "Any employer with USCIS-regulated hires"],
  },
];

const guarantees = [
  { icon: Shield,    text: "SLA in writing — delivery timelines committed at contract" },
  { icon: Users,     text: "Dedicated account manager for all programmes" },
  { icon: Zap,       text: "Replacement guarantee — if a placed candidate leaves within 90 days" },
  { icon: BarChart3, text: "Monthly reporting on pipeline, fill rates, and compliance status" },
];

export default function CustomServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter max-w-3xl">
              Enterprise <br/><span className="text-white/40">Scale Frameworks.</span>
            </h1>
            <p className="text-lg text-white/40 mt-8 max-w-xl leading-relaxed font-light">
              For organisations with complex, high-volume, or strategic hiring requirements that go beyond standard search protocols. Built around your unique architecture.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-primary group">
                Discuss Your Programme <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        {/* ── Programme Grid ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programmes.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="ci-card p-10 flex flex-col gap-8 group relative overflow-hidden">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                  
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-6 block">{p.title}</p>
                    <p className="text-2xl font-bold text-white/50 italic mb-4 leading-tight tracking-tight">&ldquo;{p.subtitle}&rdquo;</p>
                    <p className="text-base text-white/30 leading-relaxed font-light">{p.detail}</p>
                  </div>

                  <div className="ci-card p-6 bg-white/[0.02] border-white/5 relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 mb-2">Protocol Output</p>
                    <p className="text-sm text-white/50 font-light italic">{p.deliverable}</p>
                  </div>

                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 mb-4">Deployment Vector</p>
                    <ul className="flex flex-col gap-3">
                      {p.fits.map(f => (
                        <li key={f} className="flex items-start gap-3 text-sm text-white/40 font-light">
                          <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/40 shrink-0 mt-0.5" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enterprise Standards ── */}
        <section className="bg-[#050505] border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Enterprise Standards</span>
              <h2 className="text-4xl font-bold text-white tracking-tighter">Intrinsic Programme Assets.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
              {guarantees.map((g, i) => {
                const Icon = g.icon;
                return (
                  <motion.div key={g.text} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }} className="flex flex-col gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#a4f07a]/30 transition-colors">
                      <Icon className="h-5 w-5 text-[#a4f07a]" />
                    </div>
                    <p className="text-sm text-white/30 leading-relaxed font-light">{g.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-primary group">
                Initiate Enterprise Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
              </Link>
              <Link href="/services"
                className="ci-pill-btn ci-pill-btn-outline">
                View Service Matrix
              </Link>
            </div>
          </div>
        </section>
      </main>
          </div>
  );
}
