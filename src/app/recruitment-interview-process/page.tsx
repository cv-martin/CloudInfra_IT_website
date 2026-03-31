"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Shield, Search, FileCheck, Handshake, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Recruitment & Interview Process — Employer trust detail page.
 * URL: /recruitment-interview-process
 *
 * Answers the employer's core question:
 * "What exactly do you do before I see a name?"
 */

const screeningSteps = [
  {
    icon: Search,
    title: "Active Sourcing (not passive posting)",
    body: "We identify candidates through direct outreach to our network, referrals from placed professionals, and targeted search — not by posting a job and waiting. Most of our best placements were not actively looking.",
  },
  {
    icon: UserCheck,
    title: "Domain Technical Screen",
    body: "Every candidate is screened by a recruiter with direct experience in their field. For a Kubernetes architect, we test against real scenarios — not just CV keywords. For a clinical nurse, we verify specialisation and patient-care context.",
  },
  {
    icon: Shield,
    title: "Work Authorisation & Compliance",
    body: "We verify work authorisation (H-1B, OPT, STEM OPT, Green Card, LPR, US Citizen, TN Visa) before any submission. We do not send names where we cannot confirm the candidate's right to work for your specific engagement type.",
  },
  {
    icon: FileCheck,
    title: "Reference & Employment History",
    body: "We conduct reference checks and verify employment history for all shortlisted candidates. For senior roles, we validate reported project contributions before presenting.",
  },
  {
    icon: Handshake,
    title: "Candidate Briefing",
    body: "Before submission, every candidate is fully briefed: role scope, your tech stack, team structure, interview format, and compensation range. We do not send surprised candidates into your process.",
  },
];

const interviewSteps = [
  {
    num: "1",
    title: "Resume & shortlist review",
    body: "You receive a shortlist of 3–5 candidates, each with a written recruiter summary — not just a CV. We highlight technical fit, compliance status, and any nuances to know before interview.",
  },
  {
    num: "2",
    title: "Interview scheduling",
    body: "We coordinate all scheduling. First-round, second-round, technical assessments — we manage the calendars so your team doesn't spend time on logistics.",
  },
  {
    num: "3",
    title: "Feedback loop",
    body: "After each round, we gather structured feedback from both sides within 24 hours. This allows us to refine the search in real time if needed — not wait until the end.",
  },
  {
    num: "4",
    title: "Offer management",
    body: "We manage the offer conversation on your behalf — counters, compensation benchmarking, and expectation alignment. Our goal: no surprises at offer stage.",
  },
  {
    num: "5",
    title: "Onboarding & Day 1 coordination",
    body: "For contract and temporary placements, we handle payroll setup, compliance documentation, and first-day logistics. For permanent hires, we stay in contact through notice period to ensure smooth start.",
  },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function RecruitmentInterviewProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <span className="ci-label mb-2 block">For Employers</span>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              What we do before you see a name.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              Our vetting process is the reason our shortlists are small and our offer acceptance rate is high. This is the full picture of what happens between your alignment call and your first interview.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* ── SLAs ── */}
        <section className="bg-[#0F1B2D]">
          <div className="ci-container py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "24–48 h", label: "Shortlist for contract roles" },
                { value: "5–10 days", label: "Shortlist for permanent search" },
                { value: "100%", label: "Candidates work-auth verified" },
                { value: "24 h", label: "Feedback loop turnaround" },
              ].map((s, i) => (
                <motion.div key={s.label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <p className="text-[2rem] font-extrabold text-white leading-none">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Screening steps ── */}
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-14 lg:py-16">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="ci-label block mb-2">Pre-Submission Screening</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">Five gates every candidate passes before you see them.</h2>
            </motion.div>
            <div className="flex flex-col divide-y divide-gray-100">
              {screeningSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8">
                    <div className="lg:col-span-1 flex items-start">
                      <div className="w-9 h-9 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-[#06B6D4]" />
                      </div>
                    </div>
                    <div className="lg:col-span-11">
                      <p className="text-sm font-bold text-[#0F1B2D] mb-2">{s.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{s.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Interview process ── */}
        <section className="bg-[#F8F9FB] border-b border-gray-100">
          <div className="ci-container py-14 lg:py-16">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="ci-label block mb-2">Interview & Offer</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">From shortlist to Day 1 — managed end to end.</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              {interviewSteps.map((s, i) => (
                <motion.div key={s.num} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-1 lg:grid-cols-12 items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6">
                  <div className="lg:col-span-1">
                    <div className="w-8 h-8 rounded-full bg-[#0F1B2D]/5 border border-[#0F1B2D]/10 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#0F1B2D]">{s.num}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-11">
                    <p className="text-sm font-bold text-[#0F1B2D] mb-1.5">{s.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-white">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="w-10 h-0.5 bg-[#06B6D4] mb-5" />
                <h2 className="text-xl font-bold text-[#0F1B2D] mb-3">Ready to see how this works for your role?</h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  A 15-minute alignment call is all we need to scope your requirement and commit to a delivery timeline. No obligation.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <Link href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all">
                  Book Alignment Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/our-process"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-500 text-sm font-medium px-7 py-3.5 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors">
                  View full process overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
