"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Globe, Clock,
  Building2, User,
} from "lucide-react";

/*
  Our Process — /our-process
  Story-first design. No repeated boxes. No dropdown feel.
  Each step is a scene with its own visual weight and rhythm.
*/

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
});

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      {/* ── HERO — full viewport, cinematic ── */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">

        {/* Full bleed background image */}
        <div className="absolute inset-0">
          <img
            src="/images/process-hero.jpg"
            alt="CloudInfra IT recruiter reviewing candidate profiles"
            className="w-full h-full object-cover object-center brightness-[0.38]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content — centred within the full viewport, padded from nav */}
        <div className="ci-container relative z-10 ci-page-hero-fullscreen">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a4f07a]/30 bg-[#a4f07a]/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">Recruitment & Hiring Process</span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,6rem)] font-extrabold text-white leading-[1.02] tracking-tighter mb-7">
              An unbreakable match —<br />
              <span className="text-[#a4f07a]">built on process,</span><br />
              not chance.
            </h1>

            <p className="text-lg lg:text-xl text-white/68 leading-relaxed font-light max-w-2xl mb-4">
              Our thorough hiring process delivers the highest-quality results by creating a genuine alignment between client organisations and professional candidates.
            </p>
            <p className="text-base text-white/40 font-light italic mb-12">
              &ldquo;Your success story is CloudInfra IT&apos;s success story.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
                Start a Search <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link href="/jobs" className="ci-pill-btn ci-pill-btn-outline">
                I&apos;m a Candidate
              </Link>
            </div>
          </motion.div>

          {/* KPI strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-20 pt-10 border-t border-white/10"
          >
            {[
              { val: "48–72h", label: "First qualified shortlist" },
              { val: "Free",   label: "Background check package" },
              { val: "Free",   label: "Immigration support" },
              { val: "6-step", label: "Repeatable process, every time" },
            ].map(s => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#a4f07a] tracking-tight">{s.val}</span>
                <span className="text-xs text-white/40 uppercase tracking-widest font-light">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* ── STORY INTRO ── */}
        <section className="bg-[#040404] border-b border-white/6">
          <div className="ci-container py-16 lg:py-20">
            <motion.div
              variants={fade()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-6">Two principles. One promise.</p>
              <p className="text-2xl lg:text-3xl text-white font-light leading-relaxed tracking-tight">
                We operate with <strong className="font-bold text-white">honesty, respect, and a drive for deep connections</strong> with every client. And we build <strong className="font-bold text-white">strong, lasting relationships</strong> with every candidate we recruit — because a career decision is as important to us as a staffing decision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STEP 01 — CONSULTATION
            Full text, no image. Let the words breathe.
        ══════════════════════════════════════════ */}
        <section className="bg-black border-b border-white/5">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <div className="flex items-end gap-6 mb-10">
                <span className="text-[8rem] lg:text-[11rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">01</span>
                <div className="pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-2">We start by listening</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Requirements Consultation</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    Every engagement begins with a rigorous consultation. A dedicated Hiring Partner sits with you — not just to collect a job description, but to understand your corporate culture, team dynamics, and what a genuine &ldquo;right fit&rdquo; truly means for your organisation.
                  </p>
                  <p className="text-base text-white/50 leading-relaxed">
                    We also bring market intelligence to the table: current salary benchmarks, talent availability in your geography, and realistic timelines — so your expectations are grounded in reality, not hope.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    For candidates, the same depth applies. Your specialist recruiter reviews your background, your career goals, and what environments you genuinely thrive in — before putting your name anywhere.
                  </p>
                  <div className="flex flex-col gap-3 mt-8">
                    {["15–30 min alignment call", "Culture & requirements brief documented", "Market salary benchmarking shared", "Role classification confirmed"].map(d => (
                      <div key={d} className="flex items-center gap-3 text-sm text-white/55">
                        <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/70 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STEP 02 — ACTIVE SEARCH
            Dark alt background, pull stat prominent
        ══════════════════════════════════════════ */}
        <section className="bg-[#030303] border-b border-white/5">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <div className="flex items-end gap-6 mb-10">
                <span className="text-[8rem] lg:text-[11rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">02</span>
                <div className="pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-2">We go to the talent</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Active Talent Search</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    Our specialised IT and Healthcare recruiters don&apos;t post and wait. They tap into deep referral networks, technical communities, and a passive talent pipeline that traditional job boards never reach. We also conduct ongoing employment market research — giving us the intelligence to compose the ideal job description that attracts the <em>right</em> talent in the shortest time.
                  </p>
                  <p className="text-base text-white/50 leading-relaxed">
                    This is where the shortlist starts to take shape — not from a keyword match against a database, but from a specialist recruiter who understands your domain and actively works their network on your behalf.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
                    <p className="text-4xl font-black text-[#a4f07a] mb-2">Active.</p>
                    <p className="text-base text-white/55 leading-relaxed">
                      Not passive. Not a job board. A specialist recruiter working their network specifically for your role.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {["Domain-specific recruiter assigned", "Bespoke recruitment strategy formulated", "Pre-vetted talent pipeline activated"].map(d => (
                      <div key={d} className="flex items-center gap-3 text-sm text-white/50">
                        <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/60 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STEP 03 — SCREENING
            Full-bleed image + text side-by-side
        ══════════════════════════════════════════ */}
        <section className="bg-black border-b border-white/5">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <div className="flex items-end gap-6 mb-12">
                <span className="text-[8rem] lg:text-[11rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">03</span>
                <div className="pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-2">Quality over volume</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Screening & Profile Delivery</h2>
                </div>
              </div>

            </motion.div>

            {/* Full-width image — tall, breathing */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[480px] lg:h-[560px] rounded-2xl overflow-hidden mb-12 border border-white/8"
            >
              <img
                src="/images/process-consultation.jpg"
                alt="CloudInfra IT recruiter conducting in-depth candidate screening"
                className="w-full h-full object-cover object-center brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-10 left-10 max-w-lg">
                <p className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                  &ldquo;Information is power in the recruiting process.&rdquo;
                </p>
                <p className="text-sm text-white/50 mt-3 font-light">CloudInfra IT — the standard we hold our recruiters to</p>
              </div>
            </motion.div>

            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    Before any profile reaches your desk, our recruiters conduct an in-depth initial screening — reviewing credentials, work history, references, and technical or clinical capability. You receive resumes, CVs, recruiter notes, and any additional context we believe helps you make a confident decision.
                  </p>
                  <p className="text-base text-white/50 leading-relaxed">
                    We deliver a minimum of three qualified candidates within the first 48–72 hours. Your feedback after the first shortlist lets us refine immediately — narrowing the search based on what you actually respond to, not what we assumed.
                  </p>
                </div>
                <div>
                  <p className="text-base text-white/55 leading-relaxed mb-8">
                    For candidates, screening is protection: we only submit your profile where we are genuinely confident of alignment. You are briefed on every client before your details go anywhere.
                  </p>
                  <div className="flex flex-col gap-3">
                    {["3+ qualified submissions in 48–72 hours", "Recruiter assessment notes with each profile", "Structured client feedback loop built in", "Candidate briefed before profile is shared"].map(d => (
                      <div key={d} className="flex items-center gap-3 text-sm text-white/55">
                        <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/70 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STEP 04 — INTERVIEW COORDINATION
            Text only, pull-quote as visual anchor
        ══════════════════════════════════════════ */}
        <section className="bg-[#030303] border-b border-white/5">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <div className="flex items-end gap-6 mb-10">
                <span className="text-[8rem] lg:text-[11rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">04</span>
                <div className="pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-2">We handle the logistics</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Interview Coordination & Preparation</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    Once you select your top candidates, our team takes complete ownership of the scheduling process — professionally coordinating interview times, briefing candidates on your expectations and culture, and confirming attendance. You focus on evaluating the person in the room. We handle everything around it.
                  </p>
                  <p className="text-base text-white/50 leading-relaxed">
                    After every interview round, our recruitment team reconnects with both you and the candidate — guiding the process forward until the position is successfully filled. Our attention and involvement throughout means you can stay focused on your business, not the hiring logistics.
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  <blockquote className="border-l-2 border-[#a4f07a]/40 pl-6">
                    <p className="text-xl text-white/75 font-light leading-relaxed italic">
                      &ldquo;Our team makes certain candidates will arrive to their scheduled interview — prepared, briefed, and ready to perform.&rdquo;
                    </p>
                  </blockquote>
                  <div className="flex flex-col gap-3">
                    {["Full interview scheduling managed", "Candidate prepared on expectations & format", "Attendance confirmed by our team", "Post-interview debrief & guidance provided"].map(d => (
                      <div key={d} className="flex items-center gap-3 text-sm text-white/50">
                        <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/60 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STEP 05 — OFFER, VERIFICATION, ONBOARDING
            Hero moment — differentiators surfaced
        ══════════════════════════════════════════ */}
        <section className="bg-black border-b border-white/5">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <div className="flex items-end gap-6 mb-12">
                <span className="text-[8rem] lg:text-[11rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">05</span>
                <div className="pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-2">The offer stage & beyond</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Offer, Verification & Onboarding</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
                <div>
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    When you&apos;re ready to make an offer, we manage the negotiation, contract, and onboarding paperwork — so neither party faces delays when momentum matters most. For contract and temporary placements, CloudInfra IT handles payroll, benefits, tax compliance, and HR administration for the entire duration.
                  </p>
                  <p className="text-base text-white/50 leading-relaxed">
                    For candidates, we guide you through every stage: offer review, contract understanding, and first-day coordination. We stay with you past the acceptance — because a successful start matters as much as the hire itself.
                  </p>
                </div>
                <div>
                  <p className="text-base text-white/75 leading-relaxed mb-6">
                    We also go significantly further than other firms at this stage — at no extra cost.
                  </p>
                  <p className="text-sm text-white/45 leading-relaxed font-light">
                    The following services are included on request for every CloudInfra IT client. There is no additional charge.
                  </p>
                </div>
              </div>

              {/* Differentiator cards — given visual prominence here, at the point they're relevant */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Free Background Check Package",
                    body: "Reference Checks, E-Verify, California Board of License Verification, and Universal Background Screening — included at no cost on request.",
                    tag: "Included, no extra charge",
                  },
                  {
                    icon: Globe,
                    title: "Free Immigration Support",
                    body: "Clients sponsoring international candidates receive our full immigration handling package — at no charge. We manage the complexity.",
                    tag: "Included, no extra charge",
                  },
                  {
                    icon: Clock,
                    title: "Payroll & Compliance Management",
                    body: "For contract and temporary placements, all payroll, tax, benefits, and compliance are managed by CloudInfra IT from day one.",
                    tag: "Contract & temp placements",
                  },
                ].map(d => {
                  const Icon = d.icon;
                  return (
                    <div key={d.title} className="ci-card p-7 flex flex-col gap-5">
                      <div className="w-11 h-11 rounded-xl bg-[#a4f07a]/8 border border-[#a4f07a]/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#a4f07a]" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-white tracking-tight mb-2">{d.title}</p>
                        <p className="text-sm text-white/55 leading-relaxed">{d.body}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-[#a4f07a]/10">
                        <span className="text-[10px] font-black text-[#a4f07a]/60 uppercase tracking-[0.18em]">✓ {d.tag}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STEP 06 — 30/60/90 FOLLOW-THROUGH
            Closing chapter — emotional resonance
        ══════════════════════════════════════════ */}
        <section className="bg-[#030303] border-b border-white/5">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <div className="flex items-end gap-6 mb-10">
                <span className="text-[8rem] lg:text-[11rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">06</span>
                <div className="pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] mb-2">The relationship continues</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">30 / 60 / 90-Day Follow-Through</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="text-lg text-white/75 leading-relaxed mb-6">
                    We don&apos;t disappear after the start date. We maintain a persistent relationship with every client and candidate through scheduled check-ins at 30, 60, and 90 days — ensuring the placement is performing, the relationship is working, and any emerging needs are addressed before they become problems.
                  </p>
                  <p className="text-base text-white/50 leading-relaxed">
                    For clients, this means rapid response if a replacement is ever needed. For candidates on contract, it means your recruiter remains your point of contact — surfacing new opportunities, managing extensions, and handling any conversion to permanent employment.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-[#a4f07a]/80 font-light leading-relaxed italic mb-8">
                    &ldquo;The position is filled — but the partnership is just beginning.&rdquo;
                  </p>
                  <div className="flex flex-col gap-3">
                    {["Scheduled 30/60/90-day check-ins", "Rapid replacement SLA if required", "Scale-up support as your team grows", "Extension & conversion management for contractors"].map(d => (
                      <div key={d} className="flex items-center gap-3 text-sm text-white/55">
                        <CheckCircle2 className="h-4 w-4 text-[#a4f07a]/65 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA — Two paths, clear & final
        ══════════════════════════════════════════ */}
        <section className="bg-black">
          <div className="ci-container py-20 lg:py-28">
            <motion.div variants={fade()} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-[#a4f07a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Ready to begin?</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Your process starts with one conversation.
              </h2>
            </motion.div>

            <motion.div
              variants={fade(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div className="ci-card p-8 lg:p-10 flex flex-col gap-5 group hover:border-[#a4f07a]/25 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.018] group-hover:opacity-[0.035] transition-opacity" />
                <div className="relative z-10">
                  <Building2 className="h-5 w-5 text-[#a4f07a] mb-5" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a4f07a] mb-3">For Employers</p>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Ready to start your search?</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-8 font-light">
                    A 15-minute consultation is all it takes to start. We&apos;ll have your first qualified shortlist ready within 48–72 hours.
                  </p>
                  <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary">
                    Request a Consultation <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="ci-card p-8 lg:p-10 flex flex-col gap-5 group hover:border-white/18 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.018] group-hover:opacity-[0.035] transition-opacity" />
                <div className="relative z-10">
                  <User className="h-5 w-5 text-white/45 mb-5" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35 mb-3">For Candidates</p>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Looking for your next opportunity?</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-8 font-light">
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
