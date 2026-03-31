"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Consult With Us — Primary employer lead capture.
 * URL: /consult-with-us
 *
 * Two-column layout:
 *   Left:  Proof points, process preview, trust signals
 *   Right: Lead capture form → mailto (pre-Supabase)
 *
 * Rule: Form must feel EASY. Every friction point reduced.
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
    title: "Response within 24 hours",
    body: "Your dedicated Hiring Partner will reach out within one business day to discuss your requirements.",
  },
  {
    icon: Users,
    title: "Domain-specialist recruiters",
    body: "Every search is handled by a recruiter with direct experience in your industry — not a generalist.",
  },
  {
    icon: ShieldCheck,
    title: "Full compliance & payroll",
    body: "Work authorisation verification, background checks, and payroll management included for all engagements.",
  },
  {
    icon: CheckCircle2,
    title: "No placement, no fee",
    body: "For permanent roles we work on a success-fee basis. No upfront cost until you hire.",
  },
];

const inp = "w-full bg-[#F8F9FB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#06B6D4]/60 transition-colors";
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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Page hero */}
      <section className="pt-32 pb-14 bg-[#020510]">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ci-label">For Employers</span>
            <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight mt-1">
              Request a Consultation
            </h1>
            <p className="text-sm text-white/50 mt-3 max-w-xl leading-relaxed">
              Tell us what you need. A dedicated Hiring Partner responds within 24 hours — no obligation, no upfront cost.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ── Left: Proof ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">What happens next?</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We keep the process simple — no procurement maze, no long sales cycle.
                </p>
              </div>

              {/* Process mini-steps */}
              <div className="flex flex-col gap-5">
                {[
                  { num: "1", text: "Submit the form — takes 2 minutes." },
                  { num: "2", text: "A Hiring Partner reviews and contacts you within 24 hours." },
                  { num: "3", text: "15-minute alignment call to scope the requirement." },
                  { num: "4", text: "Vetted shortlist delivered within 24–48 hours of alignment." },
                ].map(step => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-7 h-7 shrink-0 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#06B6D4]">{step.num}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{step.text}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Proof points */}
              <div className="flex flex-col gap-5">
                {proofPoints.map(p => (
                  <div key={p.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-[#F8F9FB] border border-gray-100 flex items-center justify-center">
                      <p.icon className="h-4 w-4 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{p.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Prefer to call?</p>
                <a href="tel:+12146637826" className="text-base font-bold text-gray-900 hover:text-[#06B6D4] transition-colors">
                  (+1) 214-663-7826
                </a>
                <br />
                <a href="mailto:info@cloudinfrait.com" className="text-sm text-gray-500 hover:text-[#06B6D4] transition-colors">
                  info@cloudinfrait.com
                </a>
              </div>
            </motion.div>

            {/* ── Right: Form ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7 text-[#06B6D4]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Request received!</h2>
                  <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                    Your Hiring Partner will contact you within 24 hours. Check your email for a confirmation.
                  </p>
                  <Link href="/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline">
                    Back to Home <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5"
                >
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">Tell us about your requirement</h3>
                    <p className="text-xs text-gray-400">All fields marked * are required.</p>
                  </div>

                  {/* Contact info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Your Name *</label>
                      <input required type="text" placeholder="Sarah Johnson" className={inp} value={form.name} onChange={set("name")} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Company Name *</label>
                      <input required type="text" placeholder="Acme Corp" className={inp} value={form.company} onChange={set("company")} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Work Email *</label>
                      <input required type="email" placeholder="sarah@acmecorp.com" className={inp} value={form.email} onChange={set("email")} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Phone</label>
                      <input type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry-select" className="text-xs font-semibold text-gray-500 mb-1.5 block">Industry *</label>
                    <select id="industry-select" required className={sel} value={form.industry} onChange={set("industry")}>
                      <option value="" disabled>Select your industry</option>
                      {industries.map(i => <option key={i}>{i}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="model-select" className="text-xs font-semibold text-gray-500 mb-1.5 block">Engagement Model *</label>
                      <select id="model-select" required className={sel} value={form.model} onChange={set("model")}>
                        <option value="" disabled>Select model</option>
                        {engagementModels.map(m => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline-select" className="text-xs font-semibold text-gray-500 mb-1.5 block">Hiring Timeline *</label>
                      <select id="timeline-select" required className={sel} value={form.timeline} onChange={set("timeline")}>
                        <option value="" disabled>When do you need talent?</option>
                        {timelines.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Headcount Needed</label>
                    <input type="text" placeholder="e.g. 1 DevOps Engineer, or 3–5 nurses" className={inp} value={form.headcount} onChange={set("headcount")} />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Brief Description of the Role</label>
                    <textarea
                      rows={4}
                      placeholder="Describe the role, key skills required, work location, any compliance requirements..."
                      className={`${inp} resize-none`}
                      value={form.notes}
                      onChange={set("notes")}
                    />
                  </div>

                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Your information is sent directly to <span className="text-gray-500 font-medium">info@cloudinfrait.com</span>. We do not share your data with third parties.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#06B6D4] text-white text-sm font-bold py-4 rounded-xl hover:bg-[#0891b2] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Submit Staffing Request <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
