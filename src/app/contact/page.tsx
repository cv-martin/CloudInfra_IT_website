"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Building2, UserCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Contact — General enquiries page.
 * URL: /contact
 *
 * Two-path design:
 *   - Employers → routed to /consult-with-us (dedicated form)
 *   - Candidates → routed to /job-opportunities
 *   - General enquiry form for everything else
 *
 * Keeps the white-base / prestige editorial aesthetic.
 */

const inp = "w-full bg-[#F8F9FB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#06B6D4]/60 transition-colors";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`General Enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@cloudinfrait.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── Page hero ── */}
      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight">
              Get in touch.
            </h1>
            <p className="text-sm text-gray-500 mt-4 max-w-lg leading-relaxed">
              We respond to every enquiry within one business day.
              For faster service, use a dedicated path below.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* ── Left column ── */}
            <div className="lg:col-span-5 flex flex-col gap-10">

              {/* Audience shortcuts */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Quickest path
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/consult-with-us"
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F9FB] px-5 py-4 hover:border-[#06B6D4]/40 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0F1B2D] flex items-center justify-center shrink-0">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-[#06B6D4] transition-colors">
                        I want to hire talent
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">Request a Consultation →</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#06B6D4] transition-colors" />
                  </Link>

                  <Link
                    href="/job-opportunities"
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F9FB] px-5 py-4 hover:border-[#06B6D4]/40 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#06B6D4] flex items-center justify-center shrink-0">
                      <UserCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-[#06B6D4] transition-colors">
                        I&apos;m looking for a job
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">Browse open positions →</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#06B6D4] transition-colors" />
                  </Link>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Real contact details */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="flex flex-col gap-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Direct contact
                </p>

                <a href="tel:+12146637826" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F9FB] border border-gray-100 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-[#06B6D4]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Phone</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#06B6D4] transition-colors">
                      (+1) 214-663-7826
                    </p>
                  </div>
                </a>

                <a href="mailto:info@cloudinfrait.com" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F9FB] border border-gray-100 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-[#06B6D4]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#06B6D4] transition-colors">
                      info@cloudinfrait.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F9FB] border border-gray-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-[#06B6D4]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Office</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      2727 LBJ Freeway, Suite 220<br />
                      Farmers Branch, TX 75234, USA
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Response SLA note */}
              <div className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-5">
                <p className="text-xs font-semibold text-gray-900 mb-1">Response time</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All enquiries receive a reply within one business day. For urgent staffing needs, call us directly — we respond faster by phone.
                </p>
              </div>
            </div>

            {/* ── Right column: general enquiry form ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#06B6D4]" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Message sent!</h2>
                    <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                      We&apos;ll be in touch within one business day.
                    </p>
                    <Link href="/" className="mt-2 text-sm font-semibold text-[#06B6D4] hover:underline inline-flex items-center gap-1">
                      Back to Home <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-base font-bold text-gray-900">General enquiry</h2>
                      <p className="text-xs text-gray-400 mt-1">
                        Not sure which path to take? Send us a note and we&apos;ll direct you.
                      </p>
                    </div>

                    <form onSubmit={submit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="Jane Smith"
                            className={inp}
                            value={form.name}
                            onChange={set("name")}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Email *</label>
                          <input
                            required
                            type="email"
                            placeholder="jane@example.com"
                            className={inp}
                            value={form.email}
                            onChange={set("email")}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Phone</label>
                        <input
                          type="tel"
                          placeholder="+1 (214) 000-0000"
                          className={inp}
                          value={form.phone}
                          onChange={set("phone")}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Message *</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us how we can help…"
                          className={`${inp} resize-none`}
                          value={form.message}
                          onChange={set("message")}
                        />
                      </div>

                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        Sent directly to{" "}
                        <span className="text-gray-500 font-medium">info@cloudinfrait.com</span>.
                        We do not share your details.
                      </p>

                      <button
                        type="submit"
                        className="w-full bg-[#0F1B2D] text-white text-sm font-bold py-4 rounded-xl hover:bg-[#1a2e4a] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        Send Enquiry <ArrowRight className="h-4 w-4" />
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
