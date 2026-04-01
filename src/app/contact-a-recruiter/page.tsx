"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, UserCircle } from "lucide-react";
import { useState } from "react";

/**
 * Contact a Recruiter — Candidate-specific contact.
 * URL: /contact-a-recruiter
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const specialties = [
  { label: "Information Technology",      href: "/information-technology",      note: "Cloud, DevOps, Cyber, Data, ERP" },
  { label: "Hospitals & Healthcare",       href: "/hospitals-and-healthcare",    note: "Nurses, Allied, Clinical, IT" },
  { label: "Engineering",                  href: "/engineering",                 note: "Mechanical, Electrical, Systems" },
  { label: "Banking & Finance",            href: "/banking-and-finance",         note: "Risk, Compliance, Fintech, Tax" },
  { label: "Manufacturing & Industrial",   href: "/manufacturing",              note: "Automation, Quality, Supply Chain" },
  { label: "Oil, Gas & Energy",            href: "/oil-and-gas",                note: "Petroleum, Renewables, HSE" },
  { label: "Pharmaceutical",               href: "/pharmaceutical",             note: "R&D, Regulatory, QA/QC" },
  { label: "Legal",                        href: "/legal",                       note: "Litigation, Corporate, IP" },
  { label: "Aerospace",                    href: "/aerospace",                  note: "Avionics, Structures, MRO" },
  { label: "Defence & Space",              href: "/defence-and-space",           note: "EW, Space, C4ISR, Cyber" },
];

const inp = "w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a]/40 transition-all font-light";
const sel = `${inp} appearance-none cursor-pointer`;

export default function ContactRecruiterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", specialty: "", visa: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Candidate Enquiry — ${form.specialty} — ${form.name}`);
    const body = encodeURIComponent(`CANDIDATE ENQUIRY\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nSpecialty: ${form.specialty}\nVisa/Work Auth: ${form.visa || "—"}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:info@cloudinfrait.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
                Protocol & <br/><span className="text-white/40">Recruiter Access.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Tell us your field and your situation. A specialist recruiter in your domain will be in touch within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Left — Specialties + Reach out */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-8 block">Domain Specialties</span>
                <div className="flex flex-col gap-2">
                  {specialties.map((s) => (
                    <Link key={s.label} href={s.href}
                      className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#a4f07a]/30 group transition-all">
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#a4f07a] transition-colors">{s.label}</p>
                        <p className="text-[10px] text-white/20 mt-1 font-light tracking-wider">{s.note}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/10 group-hover:text-[#a4f07a] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="ci-card p-8 bg-[#a4f07a]/5 border-[#a4f07a]/10 relative overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.03] pointer-events-none" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a4f07a] mb-6 block">Direct Channels</span>
                <div className="space-y-4">
                  <a href="tel:+12146637826" className="flex items-center gap-4 text-lg font-bold text-white hover:text-[#a4f07a] transition-all">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Phone className="h-4 w-4" />
                    </div>
                    (+1) 214-663-7826
                  </a>
                  <a href="mailto:info@cloudinfrait.com" className="flex items-center gap-4 text-lg font-bold text-white/60 hover:text-[#a4f07a] transition-all">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Mail className="h-4 w-4" />
                    </div>
                    info@cloudinfrait.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-7">
              <div className="ci-card p-10 group relative overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                    <div className="w-20 h-20 rounded-full bg-[#a4f07a]/10 border border-[#a4f07a]/25 flex items-center justify-center shadow-lg ci-glow">
                      <UserCircle className="h-10 w-10 text-[#a4f07a]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Transmission Received.</h2>
                    <p className="text-lg text-white/30 max-w-xs leading-relaxed font-light">A specialist in your domain will be in touch within 24 hours.</p>
                    <Link href="/job-opportunities" className="ci-pill-btn ci-pill-btn-primary mt-6">
                      Browse Active Feed <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold text-white tracking-tight">Initiate Protocol.</h2>
                      <p className="text-white/20 text-sm mt-2 font-light">Fields marked with an asterisk are required for transmission.</p>
                    </div>
                    <form onSubmit={submit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3 block">Identity *</label>
                          <input required type="text" placeholder="Full Name" className={inp} value={form.name} onChange={set("name")} />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3 block">Direct Email *</label>
                          <input required type="email" placeholder="email@address.com" className={inp} value={form.email} onChange={set("email")} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3 block">Phone Baseline</label>
                          <input type="tel" placeholder="+1 (000) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3 block">Auth Status</label>
                          <select aria-label="Work authorisation status" className={sel} value={form.visa} onChange={set("visa")}>
                            <option value="">Select Work Auth</option>
                            {["US Citizen", "Green Card (LPR)", "H-1B", "OPT (F-1)", "STEM OPT", "TN Visa", "Other"].map(v => <option key={v} className="bg-black text-white">{v}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3 block">Core Specialty *</label>
                        <select aria-label="Your specialty or professional field" required className={sel} value={form.specialty} onChange={set("specialty")}>
                          <option value="">Select Domain Specialty</option>
                          {specialties.map(s => <option key={s.label} className="bg-black text-white">{s.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3 block">Objectives *</label>
                        <textarea required rows={5} placeholder="Describe your career goals or specific requirements..." className={`${inp} resize-none`} value={form.message} onChange={set("message")} />
                      </div>
                      <p className="text-[11px] text-white/10 leading-relaxed font-light mt-2 italic">Sent to secure baseline: info@cloudinfrait.com</p>
                      <button type="submit" className="ci-pill-btn ci-pill-btn-primary w-full justify-center mt-4">
                        Send to Domain Specialist <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
          </div>
  );
}
