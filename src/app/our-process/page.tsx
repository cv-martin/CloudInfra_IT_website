"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Search, FileText,
  CalendarCheck, ClipboardCheck, HeartHandshake,
  Building2, User, CheckCircle2, ShieldCheck,
  Globe, Clock, ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Our Process  /our-process
   Brochure-quality layout: overview → depth → imagery → CTA
   Dual audience throughout: Employer & Candidate perspectives
───────────────────────────────────────────────────────────── */

/** High-level phase map — shown as scannable overview */
const phases = [
  { num: "01", icon: Phone,         label: "Consultation",       desc: "We learn your world before we start." },
  { num: "02", icon: Search,        label: "Active Search",      desc: "Specialist networks reach who job boards miss." },
  { num: "03", icon: FileText,      label: "Screening",          desc: "Qualified profiles in 48–72 hours, not weeks." },
  { num: "04", icon: CalendarCheck, label: "Interview & Prep",   desc: "Fully coordinated — you just show up." },
  { num: "05", icon: ClipboardCheck,label: "Offer & Onboarding", desc: "Verified. Compliant. Ready from day one." },
  { num: "06", icon: HeartHandshake,label: "30/60/90 Follow-Up", desc: "We stay engaged long after start date." },
];

/** Detailed steps with dual-perspective content */
const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Requirements Consultation",
    summary: "We start by deeply understanding — not just documenting.",
    image: null,
    forClient: {
      label: "For Employers",
      body: "A dedicated Hiring Partner books a consultation call (15–30 min) to learn your corporate culture, team dynamics, and what a genuine 'right fit' looks like for your organisation. We also share current market intelligence — salary benchmarks, talent availability, and realistic timelines — before we open any search.",
    },
    forCandidate: {
      label: "For Candidates",
      body: "Your specialist recruiter reviews your background and career goals in depth, matched against active client requirements in your domain. No generic job applications. We only put your profile forward where you genuinely fit — and where you want to be.",
    },
    deliverables: ["Culture & requirements brief", "Market salary benchmarking", "Role classification confirmed"],
  },
  {
    num: "02",
    icon: Search,
    title: "Active Talent Search & Market Intelligence",
    summary: "We go to the talent. We don't wait for applications.",
    image: null,
    forClient: {
      label: "For Employers",
      body: "Our specialised IT and Healthcare recruiters tap deep referral networks, professional communities, and a passive talent pipeline that traditional job boards never reach. We then compose the ideal job description attracting the right talent in the shortest possible time — using our market research, not guesswork.",
    },
    forCandidate: {
      label: "For Candidates",
      body: "You enter our active pipeline across multiple practice areas and seniority levels. When your profile aligns with a current or upcoming requirement, you're the first call we make — not an afterthought from a keyword search.",
    },
    deliverables: ["Active sourcing — not passive posting", "Domain-specialist recruiter assigned", "Bespoke recruitment strategy formulated"],
  },
  {
    num: "03",
    icon: FileText,
    title: "Candidate Screening & Profile Delivery",
    summary: "You receive full profiles, not résumé dumps.",
    image: "/images/process-consultation.jpg",
    imageAlt: "CloudInfra IT recruiter conducting in-depth candidate screening",
    forClient: {
      label: "For Employers",
      body: "We deliver a minimum of three qualified candidates within the first 48–72 hours. Each submission includes a résumé, recruiter assessment notes, and any supporting information we believe helps you make a confident, informed decision. Your feedback after the first shortlist lets us immediately fine-tune the search.",
    },
    forCandidate: {
      label: "For Candidates",
      body: "An in-depth screening happens before your profile is shared anywhere — covering your credentials, work history, and references. We only present you to clients where we are confident of a genuine match. You are briefed on every client before your details go forward.",
    },
    deliverables: ["3+ qualified submissions within 48–72 hours", "Full candidate brief per profile", "Structured client feedback loop"],
  },
  {
    num: "04",
    icon: CalendarCheck,
    title: "Interview Coordination & Candidate Preparation",
    summary: "Both sides walk into the room ready.",
    image: null,
    forClient: {
      label: "For Employers",
      body: "Our team professionally schedules each interview, prepares candidates on your expectations and culture, and confirms attendance. You focus entirely on evaluating the person — not chasing coordinators or answering intake calls. After every round, we reconnect with you to guide the process forward.",
    },
    forCandidate: {
      label: "For Candidates",
      body: "Before every interview, you receive a full brief: who you're meeting, what the company values, the interview format, and what to prepare technically and professionally. We make sure you walk in confident — not anxious.",
    },
    deliverables: ["Full interview scheduling managed", "Candidate preparation session included", "Post-interview debrief & guidance"],
  },
  {
    num: "05",
    icon: ClipboardCheck,
    title: "Offer Management, Verification & Onboarding",
    summary: "Background checked, compliantly onboarded, ready from day one.",
    image: "/img-team-office.png",
    imageAlt: "CloudInfra IT team managing onboarding and compliance",
    highlight: true,
    forClient: {
      label: "For Employers",
      body: "Upon request, we provide a complimentary background check package — at no cost to you. Choose from: Reference Checks, E-Verify, California Board of License Verification, and Universal Background Screening. For clients sponsoring international talent, we also provide a complimentary immigration package, covering the complexity so you can focus on the hire.",
    },
    forCandidate: {
      label: "For Candidates",
      body: "We support you through the full offer stage — negotiation, contract review, and work authorisation where applicable. For contract and temporary placements, payroll, tax compliance, and benefits are fully managed by CloudInfra IT from your first day.",
    },
    deliverables: ["Free background check package", "Free immigration package (on request)", "Payroll & compliance fully managed"],
  },
  {
    num: "06",
    icon: HeartHandshake,
    title: "30 / 60 / 90-Day Follow-Through",
    summary: "We stay engaged long after the start date.",
    image: null,
    forClient: {
      label: "For Employers",
      body: "Scheduled check-ins at 30, 60, and 90 days keep us aligned with how the placement is performing and whether your team's needs have evolved. If a rapid replacement is required, our SLA covers that. As your team scales, we scale with you.",
    },
    forCandidate: {
      label: "For Candidates",
      body: "Your recruiter remains your point of contact beyond placement. We track your progress, surface new opportunities as contracts near completion, and manage extensions or permanent conversions on your behalf.",
    },
    deliverables: ["Proactive 30/60/90-day check-ins", "Rapid replacement SLA", "Ongoing scale-up partnership"],
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Free Background Check Package",
    body: "Reference Checks, E-Verify, California Board of License Verification, and Universal Background Screening — provided at no cost on request.",
  },
  {
    icon: Globe,
    title: "Free Immigration Support Package",
    body: "Clients wishing to sponsor international candidates receive our full immigration package at no charge. We handle the complexity, you focus on the hire.",
  },
  {
    icon: Clock,
    title: "48–72 Hour Candidate Delivery",
    body: "Three or more qualified submissions within 48 to 72 hours of your brief. Every time — backed by our SLA.",
  },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      {/* ══════════════════════════════════════════════════
          HERO — Value statement + team image
      ══════════════════════════════════════════════════ */}
      <section className="pt-40 pb-0 bg-black relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 ci-radial-glow pointer-events-none" />

        <div className="ci-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">

            {/* Left: Headline & philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="pb-16"
            >
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a4f07a]/30 bg-[#a4f07a]/5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Recruitment & Hiring Process</span>
              </div>

              <h1 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-tighter mb-6">
                An unbreakable match —<br />
                <span className="text-[#a4f07a]">built on process,</span><br />
                not chance.
              </h1>

              <p className="text-lg text-white/65 leading-relaxed font-light mb-5 max-w-lg">
                Our thorough hiring process delivers the highest-quality results by creating a genuine alignment between client organisations and professional candidates. We operate on two principles: deep client understanding and strong candidate relationships.
              </p>

              <p className="text-sm text-white/40 leading-relaxed font-light max-w-lg italic">
                &ldquo;Your success story is CloudInfra IT&apos;s success story.&rdquo;
              </p>

              <div className="flex items-center gap-6 mt-10">
                <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
                  Start a Search <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">
                  I&apos;m a Candidate
                </Link>
              </div>
            </motion.div>

            {/* Right: Image — bleeds to edge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="relative h-[520px] lg:h-[620px] rounded-t-2xl overflow-hidden self-end"
            >
              <img
                src="/img-team-office.png"
                alt="CloudInfra IT team in strategic consultation"
                className="h-full w-full object-cover object-top brightness-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

              {/* Floating KPI chips anchored to image bottom */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-3 flex-wrap">
                {[
                  { val: "48–72h", label: "first shortlist" },
                  { val: "Free",   label: "background checks" },
                  { val: "Free",   label: "immigration support" },
                  { val: "6-step", label: "verified process" },
                ].map(s => (
                  <div key={s.label} className="flex items-baseline gap-1.5 px-4 py-2 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md">
                    <span className="text-sm font-black text-[#a4f07a]">{s.val}</span>
                    <span className="text-[10px] text-white/45 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS OVERVIEW — Scannable at a glance
          (The "brochure contents page" moment)
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#040404] border-t border-b border-white/6">
        <div className="ci-container py-16 lg:py-20">

          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-[#a4f07a]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Process Overview</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Six phases. Every placement.
            </h2>
            <p className="text-sm text-white/45 mt-2 font-light">
              A consistent, repeatable framework applied to every engagement — IT or Healthcare, permanent or contract.
            </p>
          </motion.div>

          {/* Phase grid — scannable, icon-led */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex flex-col items-start p-5 rounded-xl border border-white/6 bg-white/[0.015] hover:border-[#a4f07a]/20 hover:bg-white/[0.025] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-black text-white/20 tabular-nums">{p.num}</span>
                    <ChevronRight className="h-3 w-3 text-white/10" />
                  </div>
                  <Icon className="h-5 w-5 text-[#a4f07a]/60 group-hover:text-[#a4f07a] transition-colors mb-3" />
                  <p className="text-sm font-bold text-white mb-1 tracking-tight">{p.label}</p>
                  <p className="text-xs text-white/35 leading-snug font-light">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* ══════════════════════════════════════════════════
            PHILOSOPHY SPLIT — Two audiences, one commitment
        ══════════════════════════════════════════════════ */}
        <section className="bg-black border-b border-white/5">
          <div className="ci-container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#a4f07a]/8 border border-[#a4f07a]/25 flex items-center justify-center mt-0.5">
                  <Building2 className="h-5 w-5 text-[#a4f07a]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a4f07a] mb-2">Our Commitment to Clients</p>
                  <p className="text-sm text-white/65 leading-relaxed">
                    We operate with honesty, respect, and a genuine drive to build lasting client relationships. Before opening any search, we invest the time to clearly understand your corporate culture, staffing needs, and long-term objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/12 flex items-center justify-center mt-0.5">
                  <User className="h-5 w-5 text-white/50" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/45 mb-2">Our Commitment to Candidates</p>
                  <p className="text-sm text-white/65 leading-relaxed">
                    We build strong, lasting relationships with every professional we recruit. Finding the right career move matters as much to us as filling the role — because your success is what builds our reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DETAILED STEPS — Numbered vertical process
        ══════════════════════════════════════════════════ */}
        <section className="bg-black">
          <div className="ci-container py-16 lg:py-24">

            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">In Detail</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Step by step — what actually happens.
              </h2>
              <p className="text-sm text-white/45 mt-2 font-light">
                Each phase is shown from both perspectives: what we deliver to employers, and what we do for candidates.
              </p>
            </motion.div>

            <div className="flex flex-col">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <motion.div
                    key={step.num}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 ${!isLast ? 'pb-12 mb-4 border-b border-white/5' : 'pb-0'}`}
                  >
                    {/* Connector line */}
                    {!isLast && (
                      <div className="absolute left-[1.35rem] top-14 w-px h-[calc(100%-3rem)] bg-white/6 hidden lg:block" />
                    )}

                    {/* Icon + number */}
                    <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-2 w-full lg:w-12 shrink-0">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border z-10 ${step.highlight ? 'bg-[#a4f07a]/12 border-[#a4f07a]/35' : 'bg-[#0d0d0d] border-white/10'}`}>
                        <Icon className={`h-4 w-4 ${step.highlight ? 'text-[#a4f07a]' : 'text-[#a4f07a]/55'}`} />
                      </div>
                      <span className="text-[10px] font-black text-white/18 tracking-widest lg:text-center">{step.num}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      {/* Heading */}
                      <div className="mb-6">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">{step.title}</h3>
                        <p className="text-sm text-white/38 font-light italic">{step.summary}</p>
                      </div>

                      {/* Optional image for key phases */}
                      {step.image && (
                        <div className="mb-7 rounded-2xl overflow-hidden border border-white/8 h-56 lg:h-64 relative">
                          <img
                            src={step.image}
                            alt={step.imageAlt}
                            className="h-full w-full object-cover brightness-[0.5]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
                          <div className="absolute bottom-5 left-6">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#a4f07a]">Phase {step.num}</span>
                            <p className="text-sm text-white/70 font-light mt-1">{step.summary}</p>
                          </div>
                        </div>
                      )}

                      {/* Dual perspective blocks */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                        <div className="rounded-xl border border-white/8 bg-white/[0.018] p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 className="h-3.5 w-3.5 text-[#a4f07a]/60" />
                            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#a4f07a]/75">{step.forClient.label}</span>
                          </div>
                          <p className="text-sm text-white/65 leading-relaxed">{step.forClient.body}</p>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.018] p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <User className="h-3.5 w-3.5 text-white/35" />
                            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/38">{step.forCandidate.label}</span>
                          </div>
                          <p className="text-sm text-white/65 leading-relaxed">{step.forCandidate.body}</p>
                        </div>
                      </div>

                      {/* Deliverable tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(d => (
                          <div
                            key={d}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border ${step.highlight
                              ? 'border-[#a4f07a]/30 bg-[#a4f07a]/6 text-[#a4f07a]/80 font-semibold'
                              : 'border-white/8 bg-white/[0.02] text-white/45'
                            }`}
                          >
                            <CheckCircle2 className={`h-3 w-3 shrink-0 ${step.highlight ? 'text-[#a4f07a]' : 'text-[#a4f07a]/45'}`} />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DIFFERENTIATORS — What others charge for,
            we include as standard
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#040404] border-t border-white/6 relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02]" />

          <div className="ci-container py-20 relative z-10">

            {/* Section intro */}
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-end">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6 bg-[#a4f07a]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Included at No Extra Cost</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  Services others bill separately for.<br />
                  <span className="text-[#a4f07a]">We include as standard.</span>
                </h2>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-light lg:text-right max-w-md lg:ml-auto">
                Every CloudInfra IT client has access to our complimentary background check package and immigration support — tools that give you the complete picture before making any hiring decision.
              </p>
            </motion.div>

            {/* Differentiator cards */}
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {differentiators.map(d => {
                const Icon = d.icon;
                return (
                  <div key={d.title} className="ci-card p-8 flex flex-col gap-5 group hover:border-[#a4f07a]/25 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#a4f07a]/8 border border-[#a4f07a]/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#a4f07a]" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-white tracking-tight mb-2">{d.title}</p>
                      <p className="text-sm text-white/55 leading-relaxed font-light">{d.body}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <span className="text-[10px] font-black text-[#a4f07a]/60 uppercase tracking-[0.2em]">Included ✓</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            IMAGE BREAK — Human moment, professional context
        ══════════════════════════════════════════════════ */}
        <section className="relative h-[380px] overflow-hidden">
          <img
            src="/images/process-consultation.jpg"
            alt="CloudInfra IT recruiter supporting candidate through the process"
            className="h-full w-full object-cover object-center brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="ci-container">
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-4">Our Approach</p>
                <p className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight mb-4">
                  &ldquo;We guide the entire process — so clients can focus on their company, not the hiring logistics.&rdquo;
                </p>
                <p className="text-sm text-white/50 font-light">
                  CloudInfra IT — IT & Healthcare Staffing, North America
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DUAL CTA — Two paths, clear next step
        ══════════════════════════════════════════════════ */}
        <section className="bg-black border-t border-white/6">
          <div className="ci-container py-20 lg:py-24">

            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">
                Ready to put the process to work?
              </h2>
              <p className="text-sm text-white/45 font-light">
                Whether you&apos;re hiring or looking, your next step is the same — a conversation.
              </p>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Employers */}
              <div className="ci-card p-8 flex flex-col gap-5 group hover:border-[#a4f07a]/25 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.018] group-hover:opacity-[0.035] transition-opacity" />
                <div className="relative z-10">
                  <Building2 className="h-5 w-5 text-[#a4f07a] mb-4" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a4f07a] mb-3">For Employers</p>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Ready to start your search?</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-7 font-light">
                    Tell us your requirements in a 15-minute consultation. We&apos;ll have your first qualified shortlist ready within 48–72 hours.
                  </p>
                  <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
                    Request a Consultation <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Candidates */}
              <div className="ci-card p-8 flex flex-col gap-5 group hover:border-white/18 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.018] group-hover:opacity-[0.035] transition-opacity" />
                <div className="relative z-10">
                  <User className="h-5 w-5 text-white/45 mb-4" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35 mb-3">For Candidates</p>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Looking for your next opportunity?</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-7 font-light">
                    We place IT and Healthcare professionals across North America. Let a specialist recruiter match you to roles you won&apos;t find on job boards.
                  </p>
                  <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">
                    Browse Open Roles <ArrowRight className="h-4 w-4 ml-2" />
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
