"use client";


import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, Zap, Users, Globe } from "lucide-react";

/**
 * Join Us (Careers) — Internal recruitment.
 * URL: /join-us
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const openRoles = [
  {
    title: "Senior IT Recruiter",
    type: "Full-time",
    location: "Farmers Branch, TX / Remote",
    desc: "Own end-to-end searches across Cloud, DevOps, and Cybersecurity. You will have 3+ years of IT recruiting experience.",
  },
  {
    title: "Healthcare Recruiter",
    type: "Full-time",
    location: "Farmers Branch, TX / Hybrid",
    desc: "Place clinical professionals — Nurses, Allied Health, and Admin — across hospital systems. Clinical experience preferred.",
  },
  {
    title: "Talent Sourcer — Engineering",
    type: "Contract",
    location: "Remote (US)",
    desc: "Build and maintain active candidate pipelines for Engineering. Strong Boolean search and LinkedIn Recruiter skills required.",
  },
  {
    title: "Client Success Manager",
    type: "Full-time",
    location: "Farmers Branch, TX",
    desc: "Own relationships with our employer clients post-placement. Manage renewals and service satisfaction.",
  },
];

const values = [
  { icon: Zap,   title: "Domain Authority",     body: "Every team member is expected to understand the fields they recruit in — not just the job titles. This is our core differentiator." },
  { icon: Heart, title: "Radical Transparency", body: "We tell candidates which client they are being submitted to. We tell clients when a search is difficult. No hiding problems." },
  { icon: Users, title: "Operational Autonomy", body: "We are deliberately lean. Every recruiter owns their discipline end-to-end — sourcing, screening, and submission." },
  { icon: Globe, title: "Nationwide Impact",   body: "We operate remotely across all 50 US states. Our team is distributed and independent by design." },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function JoinUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
                Architecture & <br/><span className="text-white/40">Talent Acquisition.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                We are a small team of specialist recruiters who take domain knowledge seriously. If you want to own a vertical end-to-end, let&apos;s talk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        {/* ── Values ── */}
        <section className="bg-black relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Internal Culture</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Our Core Frameworks.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={v.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="ci-card p-10 group relative overflow-hidden h-full">
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] group-hover:opacity-[0.03] transition-opacity" />
                    <div className="flex items-start gap-8 relative z-10 h-full">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#a4f07a]/30 transition-all">
                        <Icon className="h-5 w-5 text-[#a4f07a]" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#a4f07a] transition-colors">{v.title}</p>
                        <p className="text-white/40 leading-relaxed font-light">{v.body}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Open Roles ── */}
        <section className="bg-[#050505] relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a4f07a] mb-4 block">Deployment feed</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Current Openings.</h2>
            </motion.div>
            <div className="flex flex-col gap-6">
              {openRoles.map((r, i) => (
                <motion.div key={r.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="ci-card p-8 lg:p-10 group relative overflow-hidden flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] group-hover:opacity-[0.03] transition-opacity" />
                  <div className="flex-1 relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#a4f07a] transition-colors">{r.title}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/60 bg-[#a4f07a]/5 border border-[#a4f07a]/10 px-3 py-1.5 rounded-full">{r.type}</span>
                      <span className="text-xs text-white/20 font-light tracking-wide">{r.location}</span>
                    </div>
                    <p className="text-white/40 text-lg leading-relaxed font-light">{r.desc}</p>
                  </div>
                  <div className="shrink-0 relative z-10">
                    <a href={`mailto:info@cloudinfrait.com?subject=Application — ${r.title}`} className="ci-pill-btn ci-pill-btn-outline group/btn">
                      Transmit Resume <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-all" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speculative ── */}
        <section className="bg-black relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
          <div className="ci-container py-24 relative z-10">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <div className="w-12 h-1 bg-[#a4f07a] mb-10 ci-glow" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">Manual Discovery.</h2>
                <p className="text-lg text-white/30 max-w-xl leading-relaxed font-light">
                  Don&apos;t see a perfect fit? We hire for attitude and domain knowledge. If you are an experienced recruiter who takes a field seriously, initiate contact.
                </p>
                <ul className="mt-10 flex flex-col gap-6">
                  {["3+ years recruiting in a defined vertical", "Track record of delivery, not just activity", "Independent Operator mindset"].map(p => (
                    <li key={p} className="flex items-start gap-4 text-white/50 font-light">
                      <CheckCircle2 className="h-5 w-5 text-[#a4f07a] shrink-0 mt-0.5" /> 
                      <span className="text-lg">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="ci-card p-12 bg-[#a4f07a]/5 border-[#a4f07a]/10 text-center w-full max-w-md">
                   <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Initiate Transmission</h3>
                   <p className="text-white/30 text-sm mb-10 font-light italic leading-relaxed">Send your profile directly to our Partners Network for baseline review.</p>
                   <a href="mailto:info@cloudinfrait.com?subject=Speculative Application — CloudInfra IT" className="ci-pill-btn ci-pill-btn-primary w-full justify-center">
                    Send Speculative Application <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
          </div>
  );
}
