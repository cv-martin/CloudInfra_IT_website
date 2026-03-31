"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Clock, Building2,
  RefreshCw, Star, Zap, Users, Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Services — All engagement models in depth.
 * URL: /services
 *
 * Scenario-driven: helps employers self-select the right model.
 * Not label-driven ("we offer contract staffing") — scenario-driven
 * ("Planning a cloud migration?").
 */

const models = [
  {
    id: "permanent",
    icon: Building2,
    accent: "#0F1B2D",
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
    accent: "#06B6D4",
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
    accent: "#10B981",
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
    accent: "#8B5CF6",
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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Every engagement model — matched to how you actually hire.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              Four staffing models, each built for a different hiring situation. Choose based on what you need — not on what we call the service.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* ── Models ── */}
        <section className="bg-white">
          <div className="ci-container py-14 lg:py-16">
            <div className="flex flex-col gap-8">
              {models.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.id}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-2xl border border-gray-100 bg-[#F8F9FB] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">

                      {/* Left accent strip + icon */}
                      <div
                        className="lg:col-span-1 flex lg:flex-col items-center justify-center p-6 lg:p-0 lg:py-8 gap-4 lg:gap-0"
                        style={{ backgroundColor: m.accent + "08", borderRight: `1px solid ${m.accent}18` }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: m.accent + "12", border: `1px solid ${m.accent}25` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: m.accent }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-11 p-7 lg:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                          {/* Left: Name + scenario */}
                          <div className="lg:col-span-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: m.accent }}>
                              {m.label}
                            </p>
                            <p className="text-sm font-semibold text-gray-800 italic leading-relaxed mb-4">
                              &ldquo;{m.tagline}&rdquo;
                            </p>
                            <ul className="flex flex-col gap-2">
                              {m.when.map(w => (
                                <li key={w} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: m.accent }} />
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Middle: How we do it */}
                          <div className="lg:col-span-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">How it works</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{m.how}</p>
                          </div>

                          {/* Right: Model + deliverable + CTA */}
                          <div className="lg:col-span-1 flex flex-col gap-4">
                            <div className="rounded-xl border border-gray-100 bg-white p-4">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Fee Structure</p>
                              <p className="text-xs text-gray-600 leading-relaxed">{m.model}</p>
                            </div>
                            <div className="rounded-xl border border-gray-100 bg-white p-4">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Deliverable</p>
                              <p className="text-xs text-gray-600 leading-relaxed">{m.deliverable}</p>
                            </div>
                            <Link
                              href="/consult-with-us"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold mt-auto hover:underline"
                              style={{ color: m.accent }}
                            >
                              Request {m.label} <ArrowRight className="h-3.5 w-3.5" />
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
        <section className="bg-[#F8F9FB] border-t border-gray-100">
          <div className="ci-container py-14 lg:py-16">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="ci-label">Side by Side</span>
              <h2 className="text-xl font-bold text-[#0F1B2D] mt-1">Quick comparison</h2>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-gray-100">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 w-40">Criteria</th>
                    {models.map(m => (
                      <th key={m.id} className="text-left px-5 py-4 text-xs font-bold uppercase tracking-widest" style={{ color: m.accent }}>
                        {m.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFBFC]"}>
                      <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.label}</td>
                      <td className="px-5 py-3.5 text-xs text-gray-700">{row.permanent}</td>
                      <td className="px-5 py-3.5 text-xs text-gray-700">{row.contract}</td>
                      <td className="px-5 py-3.5 text-xs text-gray-700">{row.temporary}</td>
                      <td className="px-5 py-3.5 text-xs text-gray-700">{row.tempToHire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Not sure which model fits? <Link href="/consult-with-us" className="text-[#06B6D4] font-semibold hover:underline">Tell us your situation</Link> — we&apos;ll advise you in the alignment call.
            </p>
          </div>
        </section>

        {/* ── Custom / Enterprise note ── */}
        <section className="bg-white border-t border-gray-100">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#0F1B2D]/5 border border-[#0F1B2D]/10 flex items-center justify-center shrink-0">
                  <Star className="h-5 w-5 text-[#0F1B2D]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F1B2D] mb-1">Custom & Enterprise Engagements</p>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                    Building an entire cloud team, staffing a hospital wing, or deploying 10+ contractors simultaneously? We offer bespoke multi-hire programmes with dedicated account management, SLA guarantees, and volume pricing.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/custom-services-provided"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium px-6 py-3 rounded-full hover:border-[#06B6D4]/40 hover:text-[#06B6D4] transition-colors"
                >
                  Enterprise Solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why CloudInfra across all models ── */}
        <section className="bg-[#0F1B2D]">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Compliance on every engagement", body: "Work authorisation, background, and licence checks on every candidate — regardless of model." },
                { icon: Clock,  title: "SLA-backed delivery",            body: "We commit to timelines in writing. 24–48h for contract talent, 5–10 days for permanent search." },
                { icon: Users,  title: "Single point of contact",        body: "Your Hiring Partner manages the full lifecycle — from search to onboarding to check-ins." },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-[#06B6D4]" />
                    </div>
                    <p className="text-sm font-bold text-white">{p.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.body}</p>
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Link href="/consult-with-us"
                className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/our-process"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-7 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-colors">
                How the process works
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
