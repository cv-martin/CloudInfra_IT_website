"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users, BarChart3, Globe2, Clock, Quote } from "lucide-react";

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
    body: "A technical deep-dive — not a generic intake form. Your stack, team structure, your real blocker. One call, one shared brief.",
  },
  {
    num: "02",
    title: "Domain-Expert Sourcing",
    body: "Recruiters who&apos;ve worked inside engineering and clinical teams. We source passively — finding candidates who aren&apos;t on job boards.",
  },
  {
    num: "03",
    title: "Technical Screening & Compliance",
    body: "Every candidate screened against your actual requirements. Work authorisation, credentials, and compliance verified before any introduction.",
  },
  {
    num: "04",
    title: "Precision Shortlist Delivery",
    body: "3–5 highly targeted candidates, not a resume dump. 48-hour SLA for contract roles. 5–10 days for permanent search.",
  },
];

const advantages = [
  { icon: ShieldCheck, title: "Compliance Infrastructure", body: "Work auth, background checks, and licence verification on every candidate — H-1B, OPT, STEM OPT, Green Card, TN Visa." },
  { icon: Zap,         title: "48-Hour SLA",               body: "We commit to timelines in writing. Contract talent shortlisted in 24–48 hours. Permanent search in 5–10 business days." },
  { icon: Users,       title: "Domain Recruiters Only",    body: "No generalists. Every search is run by a recruiter who has worked inside or alongside the relevant engineering or clinical team." },
  { icon: BarChart3,   title: "Zero-Stale Postings",       body: "Every active role is verified daily. If a position is filled, it is removed immediately — we respect your interview time." },
  { icon: Globe2,      title: "US-Wide Reach",             body: "Headquartered in Farmers Branch, TX with placement reach across all 50 states. Remote-first and on-site engagements covered." },
  { icon: Clock,       title: "Retained, Not Transactional", body: "Your assigned Hiring Partner manages the full lifecycle — from sourcing through onboarding and 90-day check-ins." },
];

// Replace initials/name/role/bio with your actual leadership team details
const team = [
  {
    initials: "RK",
    name: "Raj Kumar",
    role: "Founder & Managing Director",
    bio: "Former infrastructure architect with 14 years in enterprise cloud environments. Built CloudInfra IT after experiencing the gap between technical hiring needs and generic recruiting firsthand.",
  },
  {
    initials: "AS",
    name: "Anita Sharma",
    role: "Head of Technology Placement",
    bio: "15+ years placing DevOps, cloud, and cybersecurity talent. Previously an engineer herself — she screens candidates the way a hiring manager would.",
  },
  {
    initials: "ML",
    name: "Marcus Lewis",
    role: "Head of Healthcare Staffing",
    bio: "Credentialing specialist with deep roots in clinical staffing. Oversees all HIPAA-compliant vetting and healthcare candidate compliance workflows.",
  },
];

// Replace with verified client quotes before going to production
const testimonials = [
  {
    quote: "We&apos;d been burned by generalists who couldn&apos;t tell a Kubernetes cluster from a VM. CloudInfra sent three DevOps engineers in 36 hours — all cleared technically, all visa-verified. One of them is still our lead infra engineer.",
    name: "Director of Engineering",
    company: "US Healthcare Technology Company",
    sector: "Cloud / DevOps",
  },
  {
    quote: "Most agencies treat healthcare credentials as a checkbox. CloudInfra actually understands the compliance stack — HIPAA, state licensure, background checks. Four travel nurses placed in under two weeks with zero credentialing issues.",
    name: "HR Director",
    company: "Multi-State Health System",
    sector: "Clinical Staffing",
  },
  {
    quote: "As a startup scaling fast, we couldn&apos;t afford a bad hire. The 48-hour shortlist was real — not marketing. Three candidates, all technically solid. We made an offer in the first round.",
    name: "CTO",
    company: "Series B SaaS Company, Texas",
    sector: "Software Engineering",
  },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28 bg-black overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 ci-radial-glow pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 ci-divider" />
        <div className="ci-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a4f07a]/25 bg-[#a4f07a]/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">About CloudInfra IT</span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show"
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.0] tracking-tighter text-white"
          >
            We were engineers<br />
            <span className="text-[#a4f07a]">before</span> we were recruiters.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show"
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 text-xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light"
          >
            CloudInfra IT was founded by technologists who lived through the frustration of generic recruiting.
            Every search we run is led by someone who has been in the room with the technology.
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show"
            transition={{ delay: 0.22 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
              Request a Consultation <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">Browse Open Roles</Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BOARD ── */}
      <section className="bg-black py-12">
        <div className="ci-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="ci-stat-board p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#a4f07a] animate-pulse ci-glow" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Verified Performance</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="ci-stat-cell p-6 lg:p-8 text-center"
                >
                  <p className="text-4xl lg:text-5xl font-black text-[#a4f07a] leading-none tracking-tighter ci-text-glow mb-3">{s.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* ── OUR STORY ── */}
        <section className="bg-[#050505] border-t border-white/5">
          <div className="ci-container py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-6">Our Story</span>
                <h2 className="text-4xl font-bold text-white leading-tight mb-6 tracking-tight">
                  Built from frustration.<br />Driven by precision.
                </h2>
                <div className="flex flex-col gap-5 text-white/60 font-light leading-relaxed">
                  <p>
                    CloudInfra IT was started by engineers who sat on the other side of the hiring table — who received
                    resumes for &ldquo;senior Kubernetes engineers&rdquo; who&apos;d never touched a cluster, who watched
                    recruiters confuse Azure and AWS, who spent weeks on candidates that were simply wrong.
                  </p>
                  <p>
                    The company was founded on a single premise: recruiting for technical and clinical roles requires
                    real domain knowledge. Not keyword matching. Not resume volume. The kind of understanding you
                    only get by having done the work yourself.
                  </p>
                  <p>
                    Today, every search at CloudInfra IT is run by a recruiter who has worked inside or alongside
                    the discipline they&apos;re hiring for. That&apos;s not a tagline — it&apos;s the only way we operate.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="ci-stat-board p-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 ci-grid-bg opacity-[0.04] pointer-events-none" />
                <div className="relative z-10">
                  <div className="h-px w-12 bg-[#a4f07a] mb-8" />
                  <blockquote className="text-2xl font-bold text-white leading-snug tracking-tight mb-6">
                    &ldquo;The right hire is not about finding someone who can do the job.
                    It&apos;s about finding someone who has already solved exactly this problem.&rdquo;
                  </blockquote>
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#a4f07a]">CloudInfra IT — Founding Principle</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── THE TEAM ── */}
        <section className="bg-black border-t border-white/5">
          <div className="ci-container py-24">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">The Team</span>
                <div className="h-px w-8 bg-[#a4f07a]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Who you&apos;re working with.</h2>
              <p className="text-lg text-white/60 mt-4 max-w-xl mx-auto font-light">
                No account managers. No middlemen. Your search is run by a person with domain expertise in your field.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  variants={fade} initial="hidden" whileInView="show"
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="ci-card p-8 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#a4f07a]/10 border border-[#a4f07a]/20 flex items-center justify-center mb-6 group-hover:bg-[#a4f07a]/15 group-hover:border-[#a4f07a]/30 transition-all duration-300">
                    <span className="text-lg font-black text-[#a4f07a] tracking-tight">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#a4f07a] mb-4">{member.role}</p>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH (preview) ── */}
        <section className="bg-[#050505] border-t border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Our Approach</span>
                <div className="h-px w-8 bg-[#a4f07a]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">A results-focused process.</h2>
              <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
                From first brief to confirmed placement — every step is designed to protect your time and deliver precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fade} initial="hidden" whileInView="show"
                  viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                  className="ci-card p-8 group"
                >
                  <div className="ci-process-num mb-4">{step.num}.</div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-snug">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{step.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                href="/our-process"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] hover:text-white transition-colors duration-200 group"
              >
                See the full process in detail
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── DIFFERENTIATORS ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Differentiators</span>
                <div className="h-px w-8 bg-[#a4f07a]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">What sets us apart.</h2>
              <p className="text-lg text-white/60 mt-4 max-w-xl mx-auto font-light">
                We don&apos;t just fill positions — we deliver certainty that generalist agencies cannot match.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    variants={fade} initial="hidden" whileInView="show"
                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="ci-card p-8 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#a4f07a]/8 border border-[#a4f07a]/15 flex items-center justify-center mb-6 group-hover:bg-[#a4f07a]/15 group-hover:border-[#a4f07a]/30 transition-all duration-300">
                      <Icon className="h-6 w-6 text-[#a4f07a]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{adv.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light">{adv.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CLIENT VOICES (TESTIMONIALS) ── */}
        <section className="bg-[#050505] border-t border-white/5">
          <div className="ci-container py-24">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Client Voices</span>
                <div className="h-px w-8 bg-[#a4f07a]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Heard from the field.</h2>
              <p className="text-lg text-white/60 mt-4 max-w-xl mx-auto font-light">
                Real outcomes. Real clients. No resume dumps, no wasted interviews.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fade} initial="hidden" whileInView="show"
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="ci-card p-8 flex flex-col gap-6"
                >
                  <Quote className="h-8 w-8 text-[#a4f07a] opacity-50 shrink-0" />
                  <p className="text-white/70 text-base leading-relaxed font-light flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-white/8 pt-5">
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[11px] text-white/40 mt-1">{t.company}</p>
                    <span className="inline-block mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#a4f07a] bg-[#a4f07a]/8 border border-[#a4f07a]/15 px-3 py-1 rounded-full">
                      {t.sector}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRESENCE + CONTACT ── */}
        <section className="bg-black border-t border-white/5">
          <div className="ci-container py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-6">Infrastructure</span>
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
                      <span className="text-sm text-white/60 leading-relaxed font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: 0.1 }}
              >
                <div className="ci-stat-board p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 relative overflow-hidden">
                  <div className="absolute inset-0 ci-grid-bg opacity-[0.04] pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">Phone</p>
                    <a href="tel:+12146637826" className="text-xl font-bold text-white hover:text-[#a4f07a] transition-colors tracking-tight">
                      (+1) 214-663-7826
                    </a>
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">Email</p>
                    <a href="mailto:info@cloudinfrait.com" className="text-xl font-bold text-white hover:text-[#a4f07a] transition-colors tracking-tight">
                      info@cloudinfrait.com
                    </a>
                  </div>
                  <div className="sm:col-span-2 relative z-10 pt-6 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">Headquarters</p>
                    <p className="text-base text-white/60 font-light leading-relaxed">
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
              variants={fade} initial="hidden" whileInView="show"
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
                <p className="text-lg text-white/60 max-w-xl mx-auto font-light leading-relaxed mb-10">
                  A DevOps engineer who actually understands Kubernetes. A nurse whose credentials are verified before
                  the first interview. That is the standard we hold ourselves to.
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
