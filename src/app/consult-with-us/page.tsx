"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";

/**
 * Consult With Us — Primary employer lead capture.
 * URL: /consult-with-us
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const industries = [
  "Information Technology",
  "Hospitals & Healthcare",
  "Engineering",
  "Banking & Finance",
  "Manufacturing",
  "Oil & Gas / Energy",
  "Pharmaceutical",
  "Legal",
  "Aerospace",
  "Defence & Space",
  "Other",
];

const engagementModels = [
  "Permanent / Direct Hire",
  "Contract Staffing",
  "Temporary Staffing",
  "Temp-to-Hire",
  "Not sure — advise me",
];

const timelines = [
  "ASAP (within 1–2 weeks)",
  "1 month",
  "1–3 months",
  "Exploratory / No set date",
];

const proofPoints = [
  {
    icon: Clock,
    title: "Latancy Benchmark",
    body: "Your dedicated Hiring Partner will reach out within one business day.",
  },
  {
    icon: Users,
    title: "Domain Specialist Recruiter",
    body: "Every search is handled by a recruiter with direct experience in your industry.",
  },
  {
    icon: ShieldCheck,
    title: "Full compliance & payroll",
    body: "Work authorisation verification, background checks, and payroll management included.",
  },
  {
    icon: CheckCircle2,
    title: "No placement, no fee",
    body: "For permanent roles we work on a success-fee basis. No upfront cost.",
  },
];

const inp = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] focus:bg-[#a4f07a]/5 transition-all duration-300";
const sel = `${inp} appearance-none`;

export default function ConsultWithUsPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    industry: "", model: "", timeline: "", headcount: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Staffing Request — ${form.company} (${form.industry})`);
    const body = encodeURIComponent(
      `STAFFING REQUEST\n\n` +
      `Contact: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n` +
      `Industry: ${form.industry}\nEngagement Model: ${form.model}\nTimeline: ${form.timeline}\nHeadcount: ${form.headcount || "Not specified"}\n\n` +
      `Notes:\n${form.notes || "—"}`
    );
    window.location.href = `mailto:info@cloudinfrait.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Page hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
        <div className="ci-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-white leading-tight tracking-tighter max-w-2xl">
              Request a Consultation.
            </h1>
            <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
              Tell us what you need. A dedicated Hiring Partner responds within 24 hours — no obligation, no upfront cost.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            {/* ── Left: Proof ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-12"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-4 block">Protocol Steps</span>
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">What happens next?</h2>
                <p className="text-base text-white/30 leading-relaxed font-light">
                  We keep the process simple — no procurement maze, no long sales cycle.
                </p>
              </div>

              {/* Process mini-steps */}
              <div className="flex flex-col gap-6">
                {[
                  { num: "01", text: "Submit the request terminal below." },
                  { num: "02", text: "Hiring Partner reviews and contacts you within 24h." },
                  { num: "03", text: "15-minute alignment call to scope the requirement." },
                  { num: "04", text: "Vetted shortlist delivered within 24–48 hours." },
                ].map(step => (
                  <div key={step.num} className="flex items-start gap-5 group">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#a4f07a]/30 transition-colors">
                      <span className="text-[11px] font-black text-[#a4f07a] tracking-tighter">{step.num}</span>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed pt-2.5 font-light">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5" />

              {/* Proof points */}
              <div className="grid grid-cols-1 gap-8">
                {proofPoints.map(p => (
                  <div key={p.title} className="flex items-start gap-5">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <p.icon className="h-4 w-4 text-[#a4f07a]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white tracking-tight">{p.title}</p>
                      <p className="text-xs text-white/20 mt-1.5 leading-relaxed font-light">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="ci-card p-8 bg-[#0b0b0b] relative overflow-hidden group">
                <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block relative z-10">Voice Relay</p>
                <a href="tel:+12146637826" className="text-xl font-bold text-white hover:text-[#a4f07a] transition-all tracking-tighter relative z-10">
                  (+1) 214-663-7826
                </a>
                <div className="mt-2 relative z-10">
                  <a href="mailto:info@cloudinfrait.com" className="text-xs text-white/30 hover:text-[#a4f07a] transition-all font-light">
                    info@cloudinfrait.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Form ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="ci-card p-10 lg:p-14 relative overflow-hidden group">
                <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-24 gap-8 relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-[#a4f07a]/10 border border-[#a4f07a]/25 flex items-center justify-center ci-glow">
                      <CheckCircle2 className="h-8 w-8 text-[#a4f07a]" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-white tracking-tight">Request Transmission Complete.</h2>
                      <p className="text-base text-white/30 max-w-sm mx-auto leading-relaxed font-light">
                        Your Hiring Partner will contact you within 24 hours. Check your inbox for confirmation.
                      </p>
                    </div>
                    <Link href="/" className="ci-pill-btn ci-pill-btn-outline group/btn">
                      Back to Network <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-all" />
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col gap-8"
                  >
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-4 block">Form Terminal</span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Requirement Scope</h3>
                      <p className="text-sm text-white/30 mt-3 font-light">Fields marked * are mandatory.</p>
                    </div>

                    {/* Contact info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Identity (Name) *</label>
                        <input required type="text" placeholder="Sarah Johnson" className={inp} value={form.name} onChange={set("name")} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Corporation *</label>
                        <input required type="text" placeholder="Acme Corp" className={inp} value={form.company} onChange={set("company")} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Direct Email *</label>
                        <input required type="email" placeholder="sarah@acmecorp.com" className={inp} value={form.email} onChange={set("email")} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Phone Node</label>
                        <input type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="industry-select" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Industry Vertical *</label>
                      <div className="relative">
                        <select id="industry-select" required className={sel} value={form.industry} onChange={set("industry")}>
                          <option value="" disabled>Select Sector</option>
                          {industries.map(i => <option key={i} className="bg-[#0d0d0d]">{i}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="model-select" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Engagement Model *</label>
                        <select id="model-select" required className={sel} value={form.model} onChange={set("model")}>
                          <option value="" disabled>Select Model</option>
                          {engagementModels.map(m => <option key={m} className="bg-[#0d0d0d]">{m}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="timeline-select" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Deployment Timeline *</label>
                        <select id="timeline-select" required className={sel} value={form.timeline} onChange={set("timeline")}>
                          <option value="" disabled>Urgency Level</option>
                          {timelines.map(t => <option key={t} className="bg-[#0d0d0d]">{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Headcount Protocol</label>
                      <input type="text" placeholder="e.g. 1 DevOps Engineer or 3 Staff Nurses" className={inp} value={form.headcount} onChange={set("headcount")} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Brief Description / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Describe the role brief, key skills, and work location…"
                        className={`${inp} resize-none`}
                        value={form.notes}
                        onChange={set("notes")}
                      />
                    </div>

                    <div className="flex items-center gap-3 py-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] ci-glow" />
                      <p className="text-[11px] text-white/20 leading-relaxed font-light tracking-wide uppercase">
                        Secure transmission to <span className="text-white/40 font-bold">Partners Network</span>
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="ci-pill-btn ci-pill-btn-primary w-full group"
                    >
                      Transmit Staffing Request <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

          </div>
  );
}
