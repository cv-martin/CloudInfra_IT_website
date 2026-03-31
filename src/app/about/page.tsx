"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * About — McKinsey/prestige editorial design.
 *
 * Design language: institutional authority
 *   - Massive display typography (dark navy, near-serif weight)
 *   - Sparse white space, editorial column grids
 *   - Restrained cyan accent (one line, one button)
 *   - Professional photography, no glow/gradients
 *   - Precise language — no superlatives without specifics
 */

const stats = [
  { value: "2,400+", label: "Placements made" },
  { value: "48 h",   label: "Average shortlist delivery" },
  { value: "12",     label: "Industry verticals" },
  { value: "98%",    label: "Contract completion rate" },
];

const principles = [
  {
    number: "01",
    title: "Domain expertise is not negotiable.",
    body: "Every recruiter at CloudInfra IT has worked inside or directly alongside engineering teams. We know what a Kubernetes architect looks like versus a keyword-padded CV. That distinction is the entire business.",
  },
  {
    number: "02",
    title: "Specificity is a form of respect.",
    body: "We do not send generic shortlists. Every candidate we present has been briefed on your exact requirement, screened against your tech stack, and work-authorisation verified before your team invests one hour of interview time.",
  },
  {
    number: "03",
    title: "Compliance is infrastructure.",
    body: "In IT and Healthcare staffing, a non-compliant hire creates downstream risk — legal, operational, and reputational. Our credentialing and USCIS verification process is not a formality. It is the product.",
  },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ─────────────────────────────────────────
          HERO  — massive editorial headline
      ───────────────────────────────────────── */}
      <section className="pt-36 pb-20 bg-white border-b border-gray-100">
        <div className="ci-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">

            {/* Left — headline column */}
            <div className="lg:col-span-7 lg:pr-16">
              {/* Thin cyan rule — the ONLY accent in the hero */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-12 h-0.5 bg-[#06B6D4] mb-8 origin-left"
              />

              <motion.h1
                variants={fade}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.55 }}
                className="text-[clamp(2.6rem,5.5vw,5rem)] font-extrabold leading-[1.05] tracking-tight"
                style={{ color: "#0F1B2D" }}
              >
                We were engineers<br />
                before we were<br />
                recruiters.
              </motion.h1>

              <motion.p
                variants={fade}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-8 text-[1rem] text-gray-500 leading-relaxed max-w-lg"
              >
                CloudInfra IT was founded by technologists who lived through the
                frustration of generic recruiting — and built a firm where every
                search is run by someone who has been in the room with the technology.
              </motion.p>

              <motion.div
                variants={fade}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.18 }}
                className="mt-10 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all"
                >
                  Request a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-7 py-3.5 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors"
                >
                  Browse Open Roles
                </Link>
              </motion.div>
            </div>

            {/* Right — editorial photograph */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block lg:col-span-5 relative"
            >
              {/* Offset decorative block — pure navy, no glow */}
              <div
                className="absolute -top-6 -right-6 w-48 h-32 rounded-xl z-0"
                style={{ backgroundColor: "#0F1B2D" }}
              />
              <div className="relative z-10 rounded-2xl overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/img-it-professional.png"
                  alt="CloudInfra IT — technology professional"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STATS BAR — dark navy, precise numbers
      ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0F1B2D" }}>
        <div className="ci-container py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <p className="text-[2.2rem] font-extrabold text-white leading-none tracking-tight">
                  {s.value}
                </p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">

        {/* ─────────────────────────────────────────
            STORY — two-column editorial narrative
        ───────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Sticky label column */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] mb-4">
                    Our Story
                  </span>
                  <h2 className="text-2xl font-bold text-[#0F1B2D] leading-tight">
                    Why CloudInfra IT exists.
                  </h2>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    Farmers Branch, TX — Founded 2021
                  </p>
                </div>
              </div>

              {/* Narrative — editorial body copy */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-8 flex flex-col gap-7 text-[0.9375rem] text-gray-600 leading-relaxed"
              >
                <p>
                  The problem was visible long before the company existed. Senior engineers
                  would receive calls from recruiters who could not distinguish between a
                  cloud architect and a systems administrator — recruiters who matched on
                  job titles, not technical depth. Roles would stay open for months.
                  Teams would settle for "close enough."
                </p>
                <p>
                  CloudInfra IT was built to close that gap. Our founding principle was
                  simple: if you want to place elite IT and Healthcare professionals,
                  your recruiters need to understand what elite looks like in those
                  fields — not in theory, but from having worked there.
                </p>
                <p>
                  Every search we run today reflects that founding discipline. We source
                  actively, we screen technically, and we verify compliance before a
                  client spends a single hour on interviews. The result is a shortlist
                  that is small, deliberate, and ready to hire.
                </p>
                <p>
                  We operate across the full United States, headquartered in
                  Farmers Branch, Texas — placing IT engineers, clinical professionals,
                  and leadership in permanent, contract, and temp-to-hire engagements
                  across 12 industry verticals.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            PRINCIPLES — numbered editorial cards
        ───────────────────────────────────────── */}
        <section className="bg-[#F8F9FB] border-b border-gray-100">
          <div className="ci-container py-20 lg:py-24">

            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] mb-3">
                How We Work
              </span>
              <h2 className="text-2xl font-bold text-[#0F1B2D]">
                Three principles we do not compromise on.
              </h2>
            </motion.div>

            <div className="flex flex-col divide-y divide-gray-200">
              {principles.map((p, i) => (
                <motion.div
                  key={p.number}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
                >
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <span className="text-[3rem] font-extrabold leading-none text-gray-100 select-none">
                      {p.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-10">
                    <h3 className="text-[1rem] font-bold text-[#0F1B2D] mb-3 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[0.9375rem] text-gray-500 leading-relaxed max-w-2xl">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            PRESENCE — clean location / coverage
        ───────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] mb-4">
                  Coverage
                </span>
                <h2 className="text-2xl font-bold text-[#0F1B2D] leading-tight mb-6">
                  US-based. Nationwide reach.
                </h2>
                <div className="flex flex-col gap-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                    <span>Headquartered — 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                    <span>Placements across all 50 US states, including remote-first engagements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                    <span>Specialising in Texas corridor: Dallas, Farmers Branch, Austin, Houston</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                    <span>H-1B, OPT, STEM OPT, Green Card, LPR, TN Visa — all engagement types</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact details — clean, institutional */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-7"
              >
                <div
                  className="rounded-2xl p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
                  style={{ backgroundColor: "#0F1B2D" }}
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</p>
                    <a href="tel:+12146637826" className="text-lg font-bold text-white hover:text-[#06B6D4] transition-colors">
                      (+1) 214-663-7826
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</p>
                    <a href="mailto:info@cloudinfrait.com" className="text-lg font-bold text-white hover:text-[#06B6D4] transition-colors">
                      info@cloudinfrait.com
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Office</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      2727 LBJ Freeway, Suite 220<br />
                      Farmers Branch, TX 75234, USA
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            BOTTOM CTA — editorial confidence
        ───────────────────────────────────────── */}
        <section className="bg-[#F8F9FB]">
          <div className="ci-container py-20">
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8">
                <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
                <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-[#0F1B2D] leading-tight">
                  The right hire changes everything.
                </h2>
                <p className="text-sm text-gray-500 mt-4 max-w-lg leading-relaxed">
                  A DevOps engineer who actually understands Kubernetes. A nurse whose credentials are verified before the first interview. A recruiter who knows the difference. That is the standard we hold ourselves to.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <Link
                  href="/consult-with-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all whitespace-nowrap"
                >
                  Hire with CloudInfra IT <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/job-opportunities"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-8 py-4 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  Browse IT &amp; Healthcare Roles
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
