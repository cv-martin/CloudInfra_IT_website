"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Search, UserCheck, FileCheck, Handshake, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Hiring Process — Candidate-facing process explanation.
 * URL: /hiring-process
 *
 * Mirrors /recruitment-interview-process but from the CANDIDATE perspective.
 * Reduces anxiety: "what happens to me after I apply?"
 */

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Find a role or reach out",
    candidate: "Browse our live job board and click &apos;Express Interest&apos; on any role that fits. You can also reach out directly — even if you don&apos;t see an exact match, we keep active candidate profiles for future openings.",
    timing: "Immediate",
  },
  {
    icon: UserCheck,
    num: "02",
    title: "Recruiter review & first call",
    candidate: "A specialist recruiter in your domain reviews your profile within one business day. If there&apos;s a relevant opportunity, they&apos;ll contact you for a 15–20 minute intro call to understand your background, preferences, and constraints.",
    timing: "Within 1 business day",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "Pre-submission screening",
    candidate: "Before your profile goes to any client, we verify your work authorisation, review your technical background in depth, and check any certifications or licences relevant to the role. We never surprise a client with an unvetted submission.",
    timing: "2–5 business days",
  },
  {
    icon: Handshake,
    num: "04",
    title: "Client briefing & interview prep",
    candidate: "We brief you fully before any client interview: role context, team structure, interview format, technical topics to expect, and compensation range. You go in prepared — not guessing.",
    timing: "Before every interview",
  },
  {
    icon: Briefcase,
    num: "05",
    title: "Offer, onboarding & beyond",
    candidate: "We manage the offer conversation and help with counter-offer navigation. For contract roles, we handle payroll setup, compliance, and first-day logistics. We stay your point of contact through the assignment and for future opportunities.",
    timing: "Ongoing",
  },
];

const candidatePromises = [
  "We never send your CV to a client without your explicit consent",
  "You will always know who the client is before interview",
  "We give you full salary/rate transparency from the first call",
  "We provide detailed interview prep — not a generic briefing email",
  "If a role isn&apos;t right, we tell you why — no radio silence",
  "We keep your profile active for future opportunities without re-applying",
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function HiringProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <span className="ci-label block mb-2">For Candidates</span>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              What happens after you apply.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              No black boxes. Here is exactly what our process looks like from your side — from first contact to your first day.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* SLA strip */}
        <section style={{ backgroundColor: "#0F1B2D" }}>
          <div className="ci-container py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "1 day",  label: "Recruiter response time" },
                { value: "100%",   label: "Full briefing before every interview" },
                { value: "0",      label: "CVs sent without your consent" },
                { value: "Always", label: "Your salary range disclosed upfront" },
              ].map((s, i) => (
                <motion.div key={s.label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <p className="text-[2rem] font-extrabold text-white leading-none">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process steps */}
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-14 lg:py-16">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
              <span className="ci-label block mb-2">The 5 Steps</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">From initial contact to Day 1 — and beyond.</h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.num} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl border border-gray-100 bg-[#F8F9FB] p-7">
                    {/* Step number + icon */}
                    <div className="lg:col-span-2 flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-[#06B6D4]" />
                      </div>
                      <span className="text-[2rem] font-extrabold text-gray-100 leading-none select-none">{s.num}</span>
                    </div>
                    {/* Content */}
                    <div className="lg:col-span-7">
                      <p className="text-sm font-bold text-[#0F1B2D] mb-2">{s.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.candidate}</p>
                    </div>
                    {/* Timing */}
                    <div className="lg:col-span-3 lg:text-right">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#06B6D4] bg-[#06B6D4]/8 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full">
                        <Clock className="h-3 w-3" /> {s.timing}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Candidate promises */}
        <section className="bg-[#F8F9FB] border-b border-gray-100">
          <div className="ci-container py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="ci-label block mb-3">Our Commitments to You</span>
                <h2 className="text-xl font-bold text-[#0F1B2D] leading-tight mb-6">
                  What you can always expect from us.
                </h2>
                <ul className="flex flex-col gap-3">
                  {candidatePromises.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#06B6D4] shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="flex flex-col gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="text-sm font-bold text-[#0F1B2D] mb-2">Not seeing the right role?</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    Send us your profile anyway. We keep active talent pools across all our specialties and reach out when a matching role opens — often before it goes public.
                  </p>
                  <Link href="/contact-a-recruiter"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline">
                    Talk to a recruiter <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="text-sm font-bold text-[#0F1B2D] mb-2">Have a question about the process?</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    Our candidate FAQ covers everything from visa support to interview prep to payment timelines.
                  </p>
                  <Link href="/faqs-for-candidates"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline">
                    Read candidate FAQ <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
              <div>
                <div className="w-10 h-0.5 bg-[#06B6D4] mb-5" />
                <h2 className="text-xl font-bold text-[#0F1B2D] mb-2">Ready to start?</h2>
                <p className="text-sm text-gray-500 max-w-md leading-relaxed">Browse open roles or send us your profile — a specialist in your field will respond within one business day.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/job-opportunities"
                  className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all">
                  Browse Open Roles <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact-a-recruiter"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-7 py-3.5 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors">
                  Talk to a Recruiter
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
