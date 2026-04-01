
"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import {
  ArrowRight, Clock, Building2,
  RefreshCw, Star, Zap, Users, Shield,
} from "lucide-react";

/**
 * Services — All engagement models in depth.
 * URL: /services
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const models = [
  {
    id: "permanent",
    icon: Building2,
    accent: "#a4f07a",
    label: "Permanent Staffing",
    tagline: "Building a long-term engineering team or clinical department?",
    when: [
      "You need a hire who will own a technology domain long-term",
      "Culture fit and institutional knowledge matter as much as skills",
      "You want to stop using contractors for what should be staff positions",
    ],
    how: "We source actively — passive candidates who aren't on job boards. Every finalist is technically screened and compliance-verified. You receive a shortlist of 3–5 highly targeted candidates, not a resume dump.",
    model: "Success-fee basis. No placement, no cost. Fee applies only on accepted offer.",
    deliverable: "Vetted shortlist in 5–10 business days from alignment call.",
  },
  {
    id: "contract",
    icon: Zap,
    accent: "#a4f07a",
    label: "Contract Staffing",
    tagline: "Running a cloud migration, product sprint, or infrastructure project?",
    when: [
      "You need specialist skills for a defined period (3–24 months)",
      "Budget is project-based, not headcount-based",
      "You need someone on-site or remote within 2–4 weeks",
    ],
    how: "We maintain active pipelines of contract-ready IT and Healthcare professionals — independently verified, ready to deploy. Payroll, compliance, benefits, and HR are handled by CloudInfra IT for the duration.",
    model: "Hourly or daily rate. Payroll, benefits, and tax compliance managed by CloudInfra IT.",
    deliverable: "Initial shortlist within 24–48 hours of alignment call.",
  },
  {
    id: "temporary",
    icon: Clock,
    accent: "#a4f07a",
    label: "Temporary Staffing",
    tagline: "Covering a short-term gap — leave, surge demand, or vacancy?",
    when: [
      "Coverage for maternity/sick leave or unplanned absences",
      "Seasonal demand spikes in clinical or operations teams",
      "Short-term project support (days to 3 months)",
    ],
    how: "For temporary placements, speed is everything. We activate pre-vetted candidates from our ready-to-deploy talent pool. Our fastest placements have been confirmed within hours of a request.",
    model: "Hourly rate. All admin, payroll, and compliance handled by CloudInfra IT.",
    deliverable: "Candidate available within 24–72 hours for most locations.",
  },
  {
    id: "temp-to-hire",
    icon: RefreshCw,
    accent: "#a4f07a",
    label: "Temp-to-Hire",
    tagline: "Want to trial a candidate before making a permanent commitment?",
    when: [
      "You want to evaluate cultural and technical fit before committing",
      "Budget approval for a permanent headcount is pending",
      "The role is newly created and scope may evolve",
    ],
    how: "The candidate begins on a contract basis, with a defined conversion window (typically 90–180 days). If the fit is right, we handle the conversion from contractor to permanent employee with no friction.",
    model: "Contract rates apply during trial period. Reduced conversion fee on permanent hire.",
    deliverable: "Same as contract — initial shortlist within 24–48 hours.",
  },
];

const comparisonRows = [
  { label: "Speed to shortlist",    permanent: "5–10 days",   contract: "24–48 hours", temporary: "24–72 hours", tempToHire: "24–48 hours" },
  { label: "Payroll & compliance",  permanent: "Client",       contract: "CloudInfra IT", temporary: "CloudInfra IT", tempToHire: "CloudInfra IT" },
  { label: "Commitment length",     permanent: "Indefinite",   contract: "Project-based", temporary: "Days – 3 mo", tempToHire: "90–180 days" },
  { label: "Fee structure",         permanent: "Success-fee",  contract: "Hourly rate", temporary: "Hourly rate", tempToHire: "Contract then reduced" },
  { label: "Right for",             permanent: "Core team builds", contract: "Project sprints", temporary: "Coverage gaps", tempToHire: "Trial hires" },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 ci-radial-glow pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 ci-divider" />
        <div className="ci-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a4f07a]/25 bg-[#a4f07a]/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Engagement Models</span>
            </div>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold text-white leading-[1.05] tracking-tighter">
              Every engagement model —<br />
              <span className="text-[#a4f07a]">matched</span> to how you actually hire.
            </h1>
            <p className="text-xl text-white/40 mt-8 max-w-2xl mx-auto leading-relaxed font-light">
              Four staffing models, each built for a different hiring situation. Choose based on what you need — not on what we call the service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
                Start a Conversation <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">
                Browse Open Roles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* ── Models ── */}
        <section className="bg-black">
          <div className="ci-container py-16 lg:py-24">
            <div className="flex flex-col gap-12">
              {models.map((m, _) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.id}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: _ * 0.08 }}
                    className="ci-card group relative overflow-hidden"
                  >
                    {/* Interior Background Motif */}
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] group-hover:opacity-[0.03] transition-opacity" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">

                      {/* Left icon node */}
                      <div className="lg:col-span-1 flex lg:flex-col items-center justify-start p-8 lg:p-0 lg:pt-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#0d0d0d] border border-white/10 flex items-center justify-center group-hover:border-[#a4f07a]/40 group-hover:bg-[#a4f07a]/5 transition-all duration-500">
                          <Icon className="h-6 w-6 text-[#a4f07a]/40 group-hover:text-[#a4f07a] transition-colors" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-11 p-8 pt-0 lg:p-10 lg:pl-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                          {/* Left: Name + scenario */}
                          <div className="lg:col-span-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-4 block">
                              {m.label}
                            </span>
                            <h3 className="text-xl font-bold text-white leading-tight mb-6 tracking-tight">
                              &ldquo;{m.tagline}&rdquo;
                            </h3>
                            <ul className="flex flex-col gap-3">
                              {m.when.map(w => (
                                <li key={w} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed font-light">
                                  <div className="mt-1.5 h-1 w-1 rounded-full bg-[#a4f07a] shrink-0" />
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Middle: How we do it */}
                          <div className="lg:col-span-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-4">Methodology</p>
                            <p className="text-sm text-white/50 leading-relaxed font-light">{m.how}</p>
                          </div>

                          {/* Right: Model + deliverable + CTA */}
                          <div className="lg:col-span-1 flex flex-col gap-6">
                            <div className="rounded-2xl border border-white/5 bg-[#050505] p-6 lg:p-7">
                              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 mb-3">Model Details</p>
                              <div className="flex flex-col gap-4">
                                <div>
                                  <span className="text-[10px] font-bold text-white/30 block mb-1">Fee Basis</span>
                                  <p className="text-xs text-white/60 leading-relaxed">{m.model}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] font-bold text-white/30 block mb-1">Expected Deliverable</span>
                                  <p className="text-xs text-white/60 leading-relaxed">{m.deliverable}</p>
                                </div>
                              </div>
                            </div>
                            
                            <Link
                              href="/consult-with-us"
                              className="ci-pill-btn ci-pill-btn-outline !py-3 !px-6 text-xs group"
                            >
                               Start {m.label} 
                               <ArrowRight className="h-3.5 w-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>

                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="bg-[#050505] border-t border-white/5">
          <div className="ci-container py-24">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                 <div className="h-px w-6 bg-[#a4f07a]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Reference</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Side-by-side comparison.</h2>
            </motion.div>

            <div className="overflow-x-auto rounded-3xl border border-white/5 bg-black p-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 w-48">Criteria</th>
                    {models.map(m => (
                      <th key={m.id} className="text-left px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#a4f07a]">
                        {m.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"}>
                      <td className="px-8 py-5 text-[11px] font-bold text-white/30 uppercase tracking-widest whitespace-nowrap">{row.label}</td>
                      <td className="px-8 py-5 text-sm text-white/60 font-light">{row.permanent}</td>
                      <td className="px-8 py-5 text-sm text-white/60 font-light">{row.contract}</td>
                      <td className="px-8 py-5 text-sm text-white/60 font-light">{row.temporary}</td>
                      <td className="px-8 py-5 text-sm text-white/60 font-light">{row.tempToHire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-white/20 mt-8 text-center font-light">
              Not sure which model fits? <Link href="/consult-with-us" className="text-[#a4f07a] font-bold hover:ci-text-glow transition-all">Tell us your situation</Link> — we&apos;ll advise you in the alignment call.
            </p>
          </div>
        </section>

        {/* ── Custom / Enterprise note ── */}
        <section className="bg-black border-t border-white/5">
          <div className="ci-container py-24">
            <motion.div 
              variants={fade} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              className="ci-card p-10 lg:p-14 relative group overflow-hidden"
            >
              <div className="absolute inset-0 ci-grid-bg opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-8 flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0d0d0d] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#a4f07a]/30 transition-colors">
                    <Star className="h-6 w-6 text-[#a4f07a] ci-glow" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-4 block">Strategic Accounts</span>
                    <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Custom & Enterprise Engagements</h2>
                    <p className="text-base text-white/40 leading-relaxed max-w-2xl font-light">
                      Building an entire cloud team, staffing a hospital wing, or deploying 10+ contractors simultaneously? We offer bespoke multi-hire programmes with dedicated account management, SLA guarantees, and volume pricing.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href="/custom-services-provided"
                    className="ci-pill-btn ci-pill-btn-primary"
                  >
                    Enterprise Solutions <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why CloudInfra across all models ── */}
        <section className="bg-[#0b0b0b] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02]" />
          
          <div className="ci-container py-24 relative z-10">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                { icon: Shield, title: "Compliance Infrastructure", body: "Work authorisation, background, and licence checks on every candidate — regardless of model." },
                { icon: Clock,  title: "SLA-Backed Delivery",            body: "We commit to timelines in writing. 24–48h for contract talent, 5–10 days for permanent search." },
                { icon: Users,  title: "Strategic Partnership",        body: "Your Hiring Partner manages the full lifecycle — from search to onboarding to check-ins." },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#a4f07a]" />
                    </div>
                    <p className="text-lg font-bold text-white tracking-tight">{p.title}</p>
                    <p className="text-sm text-white/30 leading-relaxed font-light">{p.body}</p>
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/consult-with-us"
                className="ci-pill-btn ci-pill-btn-primary group">
                Request a Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/our-process"
                className="ci-pill-btn ci-pill-btn-outline">
                How the process works
              </Link>
            </div>
          </div>
        </section>

      </main>
          </div>
  );
}
