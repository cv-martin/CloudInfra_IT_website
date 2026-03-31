"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, UserCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** /contact-a-recruiter — Candidate-specific contact. */

const specialties = [
  { label: "Information Technology",      href: "/information-technology",      note: "Cloud, DevOps, Cybersecurity, Data, ERP, Software" },
  { label: "Hospitals & Healthcare",       href: "/hospitals-and-healthcare",    note: "Nurses, Allied Health, Clinical Admin, Healthcare IT" },
  { label: "Engineering",                  href: "/engineering",                 note: "Mechanical, Electrical, Systems, Process, SCADA" },
  { label: "Banking & Finance",            href: "/banking-and-finance",         note: "Risk, Compliance, Investment, FinTech, Accounting" },
  { label: "Manufacturing & Industrial",   href: "/manufacturing",              note: "Automation, Production, Quality, Supply Chain" },
  { label: "Oil, Gas & Energy",            href: "/oil-and-gas",                note: "Petroleum, Pipeline, Renewables, SCADA, HSE" },
  { label: "Pharmaceutical",               href: "/pharmaceutical",             note: "R&D, Regulatory Affairs, QA/QC, Medical Affairs" },
  { label: "Legal",                        href: "/legal",                       note: "Litigation, Corporate Counsel, Compliance, IP" },
  { label: "Aerospace",                    href: "/aerospace",                  note: "Avionics, Structures, Propulsion, MRO, Safety" },
  { label: "Defence & Space",              href: "/defence-and-space",           note: "EW, Space Systems, C4ISR, Cyber, Programme Mgmt" },
];

const inp = "w-full bg-[#F8F9FB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#06B6D4]/60 transition-colors";
const sel = `${inp} appearance-none`;

import { useState } from "react";

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

  const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <span className="ci-label block mb-2">For Candidates</span>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Talk to a specialist recruiter.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              Tell us your field and your situation. A recruiter with direct experience in your domain will be in touch within one business day — no generic responses.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left — specialties + contact */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <motion.div variants={fade} initial="hidden" animate="show">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Our Specialties</p>
                <div className="flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-100 overflow-hidden">
                  {specialties.map(s => (
                    <Link key={s.label} href={s.href}
                      className="flex items-start gap-3 px-4 py-3.5 bg-white hover:bg-[#F8F9FB] transition-colors group">
                      <UserCircle className="h-4 w-4 text-gray-300 group-hover:text-[#06B6D4] shrink-0 mt-0.5 transition-colors" />
                      <div>
                        <p className="text-sm font-medium text-gray-800 group-hover:text-[#0F1B2D] transition-colors">{s.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{s.note}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fade} initial="hidden" animate="show" transition={{ delay: 0.1 }}
                className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Prefer to call?</p>
                <a href="tel:+12146637826" className="text-base font-bold text-gray-900 hover:text-[#06B6D4] transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (+1) 214-663-7826
                </a>
                <a href="mailto:info@cloudinfrait.com" className="text-sm text-gray-500 hover:text-[#06B6D4] transition-colors flex items-center gap-2 mt-2">
                  <Mail className="h-4 w-4" /> info@cloudinfrait.com
                </a>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div variants={fade} initial="hidden" animate="show" transition={{ delay: 0.1 }} className="lg:col-span-7">
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center">
                      <UserCircle className="h-5 w-5 text-[#06B6D4]" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Message sent!</h2>
                    <p className="text-sm text-gray-500 max-w-xs leading-relaxed">A recruiter in your specialty will be in touch within one business day.</p>
                    <Link href="/job-opportunities" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#06B6D4] hover:underline">
                      Browse open roles <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-base font-bold text-gray-900">Your details</h2>
                      <p className="text-xs text-gray-400 mt-1">Fields marked * are required.</p>
                    </div>
                    <form onSubmit={submit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Full Name *</label>
                          <input required type="text" placeholder="Alex Johnson" className={inp} value={form.name} onChange={set("name")} />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Email *</label>
                          <input required type="email" placeholder="alex@email.com" className={inp} value={form.email} onChange={set("email")} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Phone</label>
                          <input type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1.5 block" htmlFor="visa-select">Work Authorisation</label>
                          <select id="visa-select" aria-label="Work authorisation status" className={sel} value={form.visa} onChange={set("visa")}>
                            <option value="">Select status</option>
                            {["US Citizen", "Green Card (LPR)", "H-1B", "OPT (F-1)", "STEM OPT", "TN Visa", "E-3 Visa", "Other"].map(v => <option key={v}>{v}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1.5 block" htmlFor="specialty-select">Your Specialty / Field *</label>
                        <select id="specialty-select" aria-label="Your specialty or professional field" required className={sel} value={form.specialty} onChange={set("specialty")}>
                          <option value="">Select your field</option>
                          {specialties.map(s => <option key={s.label}>{s.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1.5 block">What are you looking for? *</label>
                        <textarea required rows={4} placeholder="E.g. contract DevOps roles in Texas, remote full-time nursing positions, permanent senior finance roles..." className={`${inp} resize-none`} value={form.message} onChange={set("message")} />
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed">Sent to <span className="font-medium text-gray-500">info@cloudinfrait.com</span>. We never share your details without consent.</p>
                      <button type="submit" className="w-full bg-[#06B6D4] text-white text-sm font-bold py-4 rounded-xl hover:bg-[#0891b2] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        Send to a Specialist Recruiter <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
