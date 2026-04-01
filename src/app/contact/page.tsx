"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Building2, UserCircle } from "lucide-react";

/**
 * Contact — General enquiries page.
 * URL: /contact
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const inp = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] focus:bg-[#a4f07a]/5 transition-all duration-300";

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
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Page hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
        <div className="ci-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-white leading-tight tracking-tighter">
              Get in touch.
            </h1>
            <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
              We respond to every enquiry within one business day.
              For faster service, use a dedicated path below.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* ── Left column ── */}
            <div className="lg:col-span-5 flex flex-col gap-12">

              {/* Audience shortcuts */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6 block">
                  Quickest path
                </span>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/consult-with-us"
                    className="ci-card group flex items-center gap-6 p-6 hover:border-[#a4f07a]/40 transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 ci-grid-bg-small opacity-0 group-hover:opacity-[0.03] transition-opacity" />
                    <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#a4f07a]/40 group-hover:bg-[#a4f07a]/5 transition-colors relative z-10">
                      <Building2 className="h-5 w-5 text-white group-hover:text-[#a4f07a] transition-colors" />
                    </div>
                    <div className="flex-1 relative z-10">
                      <p className="text-base font-bold text-white group-hover:text-[#a4f07a] transition-colors tracking-tight">
                        I want to hire talent
                      </p>
                      <p className="text-xs text-white/30 mt-1 font-light">Request a Consultation →</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/10 group-hover:text-[#a4f07a] group-hover:translate-x-1 transition-all relative z-10" />
                  </Link>

                  <Link
                    href="/job-opportunities"
                    className="ci-card group flex items-center gap-6 p-6 hover:border-[#a4f07a]/40 transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 ci-grid-bg-small opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                    <div className="w-12 h-12 rounded-2xl bg-[#a4f07a]/5 border border-[#a4f07a]/20 flex items-center justify-center shrink-0 group-hover:bg-[#a4f07a]/10 transition-colors relative z-10">
                      <UserCircle className="h-5 w-5 text-[#a4f07a]" />
                    </div>
                    <div className="flex-1 relative z-10">
                      <p className="text-base font-bold text-white group-hover:text-[#a4f07a] transition-colors tracking-tight">
                        I&apos;m looking for a job
                      </p>
                      <p className="text-xs text-white/30 mt-1 font-light">Browse open positions →</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/10 group-hover:text-[#a4f07a] group-hover:translate-x-1 transition-all relative z-10" />
                  </Link>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Real contact details */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="flex flex-col gap-8"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 block">
                  Direct terminals
                </span>

                <a href="tel:+12146637826" className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#a4f07a]/30 transition-colors">
                    <Phone className="h-4 w-4 text-[#a4f07a] group-hover:ci-glow transition-all" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1.5">Phone Network</p>
                    <p className="text-lg font-bold text-white group-hover:text-[#a4f07a] transition-colors tracking-tight">
                      (+1) 214-663-7826
                    </p>
                  </div>
                </a>

                <a href="mailto:info@cloudinfrait.com" className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#a4f07a]/30 transition-colors">
                    <Mail className="h-4 w-4 text-[#a4f07a] group-hover:ci-glow transition-all" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1.5">Data Relay (Email)</p>
                    <p className="text-lg font-bold text-white group-hover:text-[#a4f07a] transition-colors tracking-tight">
                      info@cloudinfrait.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-[#a4f07a]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1.5">Geospatial HQ</p>
                    <p className="text-base text-white/40 leading-relaxed font-light">
                      2727 LBJ Freeway, Suite 220<br />
                      Farmers Branch, TX 75234, USA
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Response SLA note */}
              <div className="rounded-3xl border border-white/5 bg-[#0b0b0b] p-7 pt-8 relative overflow-hidden group">
                <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                <p className="text-xs font-bold text-white mb-3 tracking-tight relative z-10">Uptime & Latency</p>
                <p className="text-sm text-white/30 leading-relaxed font-light relative z-10">
                  All enquiries receive a reply within one business day (latency &#60; 24h). For urgent staffing needs, call us directly — our voice network is prioritised.
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
              <div className="ci-card p-10 lg:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
                
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 gap-6 relative z-10">
                    <div className="w-16 h-16 rounded-3xl bg-[#a4f07a]/10 border border-[#a4f07a]/25 flex items-center justify-center ci-glow">
                      <Mail className="h-6 w-6 text-[#a4f07a]" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-white tracking-tight">Transmission successful.</h2>
                      <p className="text-base text-white/30 max-w-xs leading-relaxed font-light">
                         We&apos;ll be in touch within one business day.
                      </p>
                    </div>
                    <Link href="/" className="mt-4 ci-pill-btn ci-pill-btn-outline group/btn">
                      Back to Network <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ) : (
                  <div className="relative z-10">
                    <div className="mb-10">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-4 block">Form Terminal</span>
                      <h2 className="text-2xl font-bold text-white tracking-tight">General enquiry</h2>
                      <p className="text-sm text-white/30 mt-3 font-light leading-relaxed">
                        Not sure which path to take? Send us a note and we&apos;ll direct you.
                      </p>
                    </div>

                    <form onSubmit={submit} className="flex flex-col gap-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="Jane Smith"
                            className={inp}
                            value={form.name}
                            onChange={set("name")}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Identity (Email) *</label>
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

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Phone Node (Optional)</label>
                        <input
                          type="tel"
                          placeholder="+1 (214) 000-0000"
                          className={inp}
                          value={form.phone}
                          onChange={set("phone")}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Message Content *</label>
                        <textarea
                          required
                          rows={6}
                          placeholder="Tell us how we can help…"
                          className={`${inp} resize-none`}
                          value={form.message}
                          onChange={set("message")}
                        />
                      </div>

                      <div className="flex items-center gap-3 py-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] ci-glow" />
                        <p className="text-[11px] text-white/20 leading-relaxed font-light tracking-wide uppercase">
                          Secure transmission to <span className="text-white/40 font-bold">info@cloudinfrait.com</span>
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="ci-pill-btn ci-pill-btn-primary w-full group"
                      >
                        Transmit Enquiry <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

          </div>
  );
}
