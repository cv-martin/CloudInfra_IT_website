"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users, BarChart3, Globe2, Clock } from "lucide-react";

const stats = [
  { value: "2,400+", label: "Placements Made" },
  { value: "98%",    label: "Client Retention" },
  { value: "48h",    label: "Avg. Shortlist" },
  { value: "12",     label: "Industry Verticals" },
];

const approach = [
  {
    num: "01",
    title: "Discovery & Alignment",
    body: "We start with a technical deep-dive — not a generic intake form. Your stack, your team structure, your real blocker. One call, one shared brief.",
  },
  {
    num: "02",
    title: "Domain-Expert Sourcing",
    body: "Our recruiters have worked inside engineering and clinical teams. We source passively — finding candidates who aren't on job boards because they don't need to be.",
  },
  {
    num: "03",
    title: "Technical Screening & Compliance",
    body: "Every candidate is screened against your actual requirements — not just job titles. Work authorisation, credentials, and compliance verified before any introduction.",
  },
  {
    num: "04",
    title: "Precision Shortlist Delivery",
    body: "You receive 3–5 highly targeted candidates, not a resume dump. 48-hour SLA for contract roles. 5–10 days for permanent search. Every candidate is ready to interview.",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Compliance Infrastructure",
    body: "Work auth, background checks, and licence verification on every candidate — H-1B, OPT, STEM OPT, Green Card, TN Visa.",
  },
  {
    icon: Zap,
    title: "48-Hour SLA",
    body: "We commit to timelines in writing. Contract talent shortlisted in 24–48 hours. Permanent search in 5–10 business days.",
  },
  {
    icon: Users,
    title: "Domain Recruiters Only",
    body: "No generalists. Every search is run by a recruiter who has worked inside or alongside the relevant engineering or clinical team.",
  },
  {
    icon: BarChart3,
    title: "Zero-Stale Postings",
    body: "Every active role is verified daily. If a position is filled, it is removed immediately — we respect your interview time.",
  },
  {
    icon: Globe2,
    title: "US-Wide Reach",
    body: "Headquartered in Farmers Branch, TX with placement reach across all 50 states. Remote-first and on-site engagements covered.",
  },
  {
    icon: Clock,
    title: "Retained, Not Transactional",
    body: "Your assigned Hiring Partner manages the full lifecycle — from sourcing through onboarding and 90-day check-ins.",
  },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      {/* ── HERO — Centered, radial glow, grid bg ── */}
      <section className="relative pt-40 pb-28 bg-black overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        {/* Radial glow spotlight */}
        <div className="absolute inset-0 ci-radial-glow pointer-events-none" />
        {/* Faint separator line */}
        <div className="absolute bottom-0 left-0 right-0 ci-divider" />

        <div className="ci-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a4f07a]/25 bg-[#a4f07a]/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">
              About CloudInfra IT
            </span>
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.0] tracking-tighter text-white"
          >
            We were engineers<br />
            <span className="text-[#a4f07a]">before</span> we were recruiters.
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light"
          >
            CloudInfra IT was founded by technologists who lived through the frustration of generic recruiting.
            Every search we run is led by someone who has been in the room with the technology.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.22 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
              Request a Consultation <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">
              Browse Open Roles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BOARD — DataSignify container style ── */}
      <section className="bg-black py-12">
        <div className="ci-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="ci-stat-board p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#a4f07a] animate-pulse ci-glow" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">
                Verified Performance
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="ci-stat-cell p-6 lg:p-8 text-center"
                >
                  <p className="text-4xl lg:text-5xl font-black text-[#a4f07a] leading-none tracking-tighter ci-text-glow mb-3">
                    {s.value}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* ── OUR APPROACH — 4-column numbered grid ── */}
        <section className="bg-[#050505] border-t border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Our Approach</span>
                <div className="h-px w-8 bg-[#a4f07a]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                A results-focused process.
              </h2>
              <p className="text-lg text-white/40 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
                From first brief to confirmed placement — every step is designed to protect your time and deliver precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="ci-card p-8 group"
                >
                  <div className="ci-process-num mb-4">{step.num}.</div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT SETS US APART — 6-card grid ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Differentiators</span>
                <div className="h-px w-8 bg-[#a4f07a]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                What sets us apart.
              </h2>
              <p className="text-lg text-white/40 mt-4 max-w-xl mx-auto font-light">
                We don&apos;t just fill positions — we deliver certainty that generalist agencies cannot match.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="ci-card p-8 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#a4f07a]/8 border border-[#a4f07a]/15 flex items-center justify-center mb-6 group-hover:bg-[#a4f07a]/15 group-hover:border-[#a4f07a]/30 transition-all duration-400">
                      <Icon className="h-6 w-6 text-[#a4f07a]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light">
                      {adv.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PRESENCE GRID ── */}
        <section className="bg-[#050505] border-t border-white/5">
          <div className="ci-container py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-6">
                  Infrastructure
                </span>
                <h2 className="text-4xl font-bold text-white leading-tight mb-8 tracking-tight">
                  US-based.<br />Nationwide reach.
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    "Headquartered — 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234",
                    "Placements across all 50 US states including remote-first",
                    "Texas corridor specialists: Dallas · Austin · Houston",
                    "H-1B · OPT · STEM OPT · Green Card · LPR · TN Visa — all types",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="mt-2 h-1 w-1 rounded-full bg-[#a4f07a] shrink-0 ci-glow" />
                      <span className="text-sm text-white/40 leading-relaxed font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="ci-stat-board p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 relative overflow-hidden">
                  <div className="absolute inset-0 ci-grid-bg opacity-[0.04] pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25 mb-3">Phone Terminal</p>
                    <a href="tel:+12146637826" className="text-xl font-bold text-white hover:text-[#a4f07a] transition-colors tracking-tight">
                      (+1) 214-663-7826
                    </a>
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25 mb-3">Electronic Mail</p>
                    <a href="mailto:info@cloudinfrait.com" className="text-xl font-bold text-white hover:text-[#a4f07a] transition-colors tracking-tight">
                      info@cloudinfrait.com
                    </a>
                  </div>
                  <div className="sm:col-span-2 relative z-10 pt-6 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25 mb-3">Headquarters</p>
                    <p className="text-base text-white/40 font-light leading-relaxed">
                      2727 LBJ Freeway, Suite 220<br />Farmers Branch, TX 75234, USA
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BAND ── */}
        <section className="bg-black py-24">
          <div className="ci-container">
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="ci-cta-band p-12 lg:p-20 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 ci-grid-bg opacity-[0.04] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#a4f07a]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Ready to start</span>
                  <div className="h-px w-10 bg-[#a4f07a]" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tighter mb-6">
                  The right hire changes everything.
                </h2>
                <p className="text-lg text-white/40 max-w-xl mx-auto font-light leading-relaxed mb-10">
                  A DevOps engineer who actually understands Kubernetes. A nurse whose credentials are verified before the first interview. That is the standard we hold ourselves to.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
                    Hire with CloudInfra <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                  <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">
                    Browse Tech &amp; Health Roles
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
          </div>
  );
}
