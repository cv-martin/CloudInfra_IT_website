"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import {
  ArrowRight, Clock, Building2,
  RefreshCw, Star, Zap, Users, Shield,
  CheckCircle2,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Services page  /services
   Design: natural, scenario-first — each model tells its own
   story before the user reads a single word of body copy.
───────────────────────────────────────────────────────────── */

const models = [
  {
    id: "permanent",
    icon: Building2,
    scenarioTag: "Core Team Build",
    scenarioDesc: "Hiring someone who will own a domain for years",
    label: "Permanent Staffing",
    tagline: "Building a long-term engineering team or clinical department?",
    image: "/images/service-permanent.jpg",
    when: [
      "You need a hire who will own a technology domain long-term",
      "Culture fit and institutional knowledge matter as much as skills",
      "You want to stop using contractors for what should be staff positions",
    ],
    how: "We source actively — passive candidates who aren't on job boards. Every finalist is technically screened and compliance-verified. You receive a shortlist of 3–5 highly targeted candidates, not a resume dump.",
    feeBasis: "Success-fee only. No placement, no cost.",
    deliverable: "Vetted shortlist in 5–10 business days from alignment call.",
  },
  {
    id: "contract",
    icon: Zap,
    scenarioTag: "Sprint Capacity",
    scenarioDesc: "Specialist talent for a defined project window",
    label: "Contract Staffing",
    tagline: "Running a cloud migration, product sprint, or infrastructure project?",
    image: "/images/service-contract.jpg",
    when: [
      "You need specialist skills for a defined period (3–24 months)",
      "Budget is project-based, not headcount-based",
      "You need someone on-site or remote within 2–4 weeks",
    ],
    how: "We maintain active pipelines of contract-ready IT and Healthcare professionals — independently verified, ready to deploy. Payroll, compliance, benefits, and HR are handled by CloudInfra IT for the duration.",
    feeBasis: "Hourly or daily rate. All payroll and compliance managed by us.",
    deliverable: "Initial shortlist within 24–48 hours of alignment call.",
  },
  {
    id: "temporary",
    icon: Clock,
    scenarioTag: "Gap Coverage",
    scenarioDesc: "Filling an immediate vacancy, fast",
    label: "Temporary Staffing",
    tagline: "Covering a short-term gap — leave, surge demand, or vacancy?",
    image: "/images/service-temporary.jpg",
    when: [
      "Coverage for maternity/sick leave or unplanned absences",
      "Seasonal demand spikes in clinical or operations teams",
      "Short-term project support (days to 3 months)",
    ],
    how: "For temporary placements, speed is everything. We activate pre-vetted candidates from our ready-to-deploy talent pool. Our fastest placements have been confirmed within hours of a request.",
    feeBasis: "Hourly rate. Admin, payroll, and compliance handled by us.",
    deliverable: "Candidate available within 24–72 hours for most locations.",
  },
  {
    id: "temp-to-hire",
    icon: RefreshCw,
    scenarioTag: "Try Before You Commit",
    scenarioDesc: "Trial a candidate before making a permanent offer",
    label: "Temp-to-Hire",
    tagline: "Want to trial a candidate before making a permanent commitment?",
    image: "/images/service-temp-to-hire.jpg",
    when: [
      "Evaluate cultural and technical fit before committing",
      "Budget approval for permanent headcount is pending",
      "The role is newly created and the scope may evolve",
    ],
    how: "The candidate begins on a contract basis, with a defined conversion window (typically 90–180 days). If the fit is right, we handle the conversion from contractor to permanent employee with no friction.",
    feeBasis: "Contract rates during trial. Reduced conversion fee at hire.",
    deliverable: "Same as contract — initial shortlist within 24–48 hours.",
  },
];

const comparisonRows = [
  { label: "Speed to shortlist",   permanent: "5–10 days",        contract: "24–48 hrs",      temporary: "24–72 hrs",     tempToHire: "24–48 hrs" },
  { label: "Payroll & compliance", permanent: "Client-managed",   contract: "CloudInfra IT",  temporary: "CloudInfra IT", tempToHire: "CloudInfra IT" },
  { label: "Commitment length",    permanent: "Indefinite",        contract: "Project-based",  temporary: "Days – 3 mo",   tempToHire: "90–180 days" },
  { label: "Fee structure",        permanent: "Success-fee",       contract: "Hourly rate",    temporary: "Hourly rate",   tempToHire: "Contract → reduced" },
  { label: "Ideal for",            permanent: "Core team builds",  contract: "Project sprints", temporary: "Coverage gaps", tempToHire: "Trial hires" },
];

const pillars = [
  { icon: Shield, title: "Compliance Infrastructure",  body: "Work authorisation, background, and licence checks on every candidate — regardless of engagement model." },
  { icon: Clock,  title: "SLA-Backed Delivery",         body: "We commit timelines in writing. 24–48h for contract talent, 5–10 days for permanent search." },
  { icon: Users,  title: "Dedicated Account Management", body: "Your Hiring Partner manages the full lifecycle — from search brief through onboarding and check-ins." },
];

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.035] pointer-events-none" />
        <div className="absolute inset-0 ci-radial-glow pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 ci-divider" />

        <div className="ci-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a4f07a]/30 bg-[#a4f07a]/6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Engagement Models</span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold text-white leading-[1.06] tracking-tighter">
              Four ways to hire —<br />
              <span className="text-[#a4f07a]">one partner</span> for all of them.
            </h1>

            {/* Sub */}
            <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Permanent hires, contract specialists, temporary cover, or trial-first engagements.
              Each model is engineered for a specific hiring situation — not just a label on a brochure.
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

        {/* ── Service Model Cards ── */}
        <section className="bg-black">
          <div className="ci-container py-16 lg:py-24">
            <div className="flex flex-col gap-10">
              {models.map((m, i) => {
                const Icon = m.icon;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={m.id}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="ci-card group relative overflow-hidden"
                  >
                    {/* Subtle interior grid */}
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.018] group-hover:opacity-[0.035] transition-opacity duration-500" />

                    <div className={`relative z-10 flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      
                      {/* Image Side */}
                      <div className="w-full lg:w-[42%] relative min-h-[300px] lg:min-h-full overflow-hidden">
                        <motion.div 
                          initial={{ scale: 1.1, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute inset-0 h-full w-full"
                        >
                          <img 
                            src={m.image} 
                            alt={m.label}
                            className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          />
                          {/* Overlays for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                          <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-black/80 via-transparent to-transparent hidden lg:block`} />
                        </motion.div>
                        
                        {/* Scenario tag pinned to image on mobile, or floating */}
                        <div className="absolute top-6 left-6 z-20">
                           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#a4f07a]/30 bg-black/60 backdrop-blur-md">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a4f07a]">
                                {m.scenarioTag}
                              </span>
                           </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                        
                        {/* Top bar: icon + label */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0d0d0d] border border-white/12 flex items-center justify-center group-hover:border-[#a4f07a]/50 group-hover:bg-[#a4f07a]/8 transition-all duration-400">
                            <Icon className="h-4 w-4 text-[#a4f07a]/60 group-hover:text-[#a4f07a] transition-colors" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                            {m.label}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
                          &ldquo;{m.tagline}&rdquo;
                        </h3>
                        <p className="text-sm text-white/40 mb-8 font-light italic">
                          {m.scenarioDesc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                          {/* Left Col: When */}
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a4f07a] mb-4">When to use</p>
                            <ul className="flex flex-col gap-3">
                              {m.when.map(w => (
                                <li key={w} className="flex items-start gap-3 text-sm text-white/65 leading-relaxed">
                                  <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/70 shrink-0 mt-0.5" />
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right Col: Logistics / CTA */}
                          <div className="flex flex-col gap-6">
                            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                               <div className="flex flex-col gap-4">
                                  <div>
                                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block mb-1">Fee Basis</span>
                                    <p className="text-xs text-white/70 leading-relaxed">{m.feeBasis}</p>
                                  </div>
                                  <div className="h-px bg-white/5" />
                                  <div>
                                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block mb-1">Deliverable</span>
                                    <p className="text-xs text-white/70 leading-relaxed">{m.deliverable}</p>
                                  </div>
                               </div>
                            </div>

                            <Link
                              href="/consult-with-us"
                              className="ci-pill-btn ci-pill-btn-outline !py-3 !px-6 text-xs group/btn self-start"
                            >
                              Start {m.label}
                              <ArrowRight className="h-3.5 w-3.5 ml-2 transition-transform group-hover/btn:translate-x-1" />
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
        <section className="bg-[#050505] border-t border-white/6">
          <div className="ci-container py-20 lg:py-24">

            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Quick Reference</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Which model fits your situation?
              </h2>
              <p className="text-sm text-white/50 mt-2 font-light">Scan this table to find your match in under 30 seconds.</p>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.18em] text-white/40 w-44">
                      Criteria
                    </th>
                    {models.map(m => (
                      <th key={m.id} className="text-left px-6 py-5">
                        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a4f07a] block">
                          {m.label}
                        </span>
                        <span className="text-[10px] text-white/30 font-normal normal-case tracking-normal mt-0.5 block">
                          {m.scenarioTag}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.012]" : ""}>
                      <td className="px-6 py-4 text-xs font-semibold text-white/55 whitespace-nowrap">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-white/70">{row.permanent}</td>
                      <td className="px-6 py-4 text-sm text-white/70">{row.contract}</td>
                      <td className="px-6 py-4 text-sm text-white/70">{row.temporary}</td>
                      <td className="px-6 py-4 text-sm text-white/70">{row.tempToHire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-white/40 mt-6 text-center font-light">
              Not sure which model fits?{" "}
              <Link href="/consult-with-us" className="text-[#a4f07a] font-semibold hover:underline underline-offset-2 transition-all">
                Tell us your situation
              </Link>{" "}
              — we&apos;ll advise you in the alignment call.
            </p>
          </div>
        </section>

        {/* ── Enterprise note ── */}
        <section className="bg-black border-t border-white/6">
          <div className="ci-container py-20 lg:py-24">
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="ci-card p-8 lg:p-12 relative group overflow-hidden"
            >
              <div className="absolute inset-0 ci-grid-bg opacity-[0.025] group-hover:opacity-[0.045] transition-opacity duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-8 flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0d0d0d] border border-white/12 flex items-center justify-center group-hover:border-[#a4f07a]/35 transition-colors">
                    <Star className="h-5 w-5 text-[#a4f07a]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-3 block">
                      Strategic Accounts
                    </span>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-tight">
                      Custom & Enterprise Engagements
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed max-w-2xl font-light">
                      Building an entire cloud team, staffing a hospital wing, or deploying 10+ contractors simultaneously?
                      We offer bespoke multi-hire programmes with dedicated account management, SLA guarantees, and volume pricing.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link href="/custom-services-provided" className="ci-pill-btn ci-pill-btn-primary">
                    Enterprise Solutions <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why CloudInfra across all models ── */}
        <section className="bg-[#080808] border-t border-white/6 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02]" />

          <div className="ci-container py-20 lg:py-24 relative z-10">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Across Every Model</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                What you get regardless of which model you choose.
              </h2>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex flex-col gap-4 p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#a4f07a]/20 hover:bg-white/[0.03] transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#a4f07a]" />
                    </div>
                    <p className="text-base font-bold text-white tracking-tight">{p.title}</p>
                    <p className="text-sm text-white/55 leading-relaxed font-light">{p.body}</p>
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-14 pt-10 border-t border-white/6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary group">
                Request a Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/our-process" className="ci-pill-btn ci-pill-btn-outline">
                How the process works
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
