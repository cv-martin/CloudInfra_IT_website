"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Zap, Shield, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    title: "Compliance & Visa Sponsorship Support",
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

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function CustomServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Custom &amp; Enterprise Staffing Solutions
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              For organisations with complex, high-volume, or strategic hiring requirements that go beyond a standard single search. Built around your programme, not ours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/consult-with-us"
                className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all">
                Discuss Your Programme <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <section className="bg-white">
          <div className="ci-container py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {programmes.map((p, i) => (
                <motion.div key={p.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-7 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4] mb-1">{p.title}</p>
                    <p className="text-sm font-semibold text-gray-800 italic mb-3">&ldquo;{p.subtitle}&rdquo;</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.detail}</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-white p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Deliverable</p>
                    <p className="text-xs text-gray-600">{p.deliverable}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Best for</p>
                    <ul className="flex flex-col gap-1.5">
                      {p.fits.map(f => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#06B6D4] shrink-0 mt-0.5" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F1B2D]">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4] mb-2">Enterprise Standards</p>
              <h2 className="text-xl font-bold text-white">What every custom programme includes.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {guarantees.map((g, i) => {
                const Icon = g.icon;
                return (
                  <motion.div key={g.text} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-[#06B6D4]" />
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{g.text}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/consult-with-us"
                className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all">
                Schedule an Enterprise Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-7 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-colors">
                View all service models
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
