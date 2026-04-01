"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

/**
 * Client FAQ Page.
 * URL: /faq
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const faqs = [
  {
    category: "Working With Us",
    items: [
      { q: "How do we get started?", a: "Submit a staffing request at /consult-with-us. A Hiring Partner will contact you within 24 hours for a 15-minute alignment call to scope your requirement and commit to a delivery timeline." },
      { q: "What information do you need to start a search?", a: "A basic role brief is enough to start. We typically capture: job title, key technical requirements, team structure, work location, and engagement type (contract/permanent/temp). We refine during the alignment call." },
      { q: "Do you work with companies of all sizes?", a: "Yes. We work with startups hiring their first engineer, mid-market companies building teams, and enterprise organisations running team builds or managed staffing programmes." },
      { q: "Can we use you as our exclusive recruiter for a role?", a: "Yes, and we prefer it for permanent roles — it allows us to invest more heavily in sourcing. For contingency searches, we also operate on a non-exclusive basis." },
    ],
  },
  {
    category: "Fees & Pricing",
    items: [
      { q: "How are you paid for permanent placements?", a: "Permanent hires are on a success-fee basis only. You pay nothing until you make an offer and it is accepted. Our fee is a percentage of the first-year base salary, agreed before search begins." },
      { q: "How are contract and temporary staffing billed?", a: "For contract and temp placements, you pay a bill rate (hourly or daily) that covers the candidate's pay, CloudInfra IT's payroll costs, and our margin. There are no additional placement fees." },
      { q: "Is there a guarantee period for permanent placements?", a: "Yes. We offer a standard replacement guarantee. If a permanent placement leaves within the agreed period (typically 90 days), we will re-run the search at no additional fee." },
      { q: "Do you charge upfront fees or retainers for standard searches?", a: "No. Standard contingency searches are fully success-fee based. Retained search is available for executive and senior leadership roles where a research-led approach is required." },
    ],
  },
  {
    category: "Vetting & Compliance",
    items: [
      { q: "What checks do you run on candidates before submission?", a: "Every submitted candidate has passed: technical domain screen, work authorisation verification, employment history review, reference check (on request), and background check coordination. We never send an unscreened name." },
      { q: "How do you verify work authorisation?", a: "We review and verify each candidate's visa status, expiry dates, and any transfer or extension requirements before submission. We do not submit candidates whose right to work cannot be confirmed for your engagement type." },
      { q: "Are you compliant with EEOC and employment law?", a: "Yes. All our searches are conducted in compliance with EEOC guidelines. We do not filter candidates on protected characteristics and advise clients on compliant practices." },
      { q: "Who is the employer of record for contract workers?", a: "For W-2 contract placements, CloudInfra IT is the employer of record. We handle payroll, tax withholding, workers' compensation, and compliance for the duration of the engagement." },
    ],
  },
  {
    category: "Process & Timelines",
    items: [
      { q: "How long does it take to receive a shortlist?", a: "For contract roles, we deliver an initial shortlist within 24–48 hours of the alignment call. For permanent roles, 5–10 business days is our standard — though complex senior searches may take longer." },
      { q: "What happens if we reject the entire shortlist?", a: "We regroup immediately. We gather structured feedback within 24 hours, refine the search brief, and deliver a replacement shortlist. This rarely happens because we calibrate together on the alignment call." },
      { q: "Can you handle multiple roles simultaneously?", a: "Yes. We have the capacity to run multiple concurrent searches, including team build programmes for 5–15+ positions. A dedicated account manager coordinates across all roles." },
      { q: "Do you support remote-first hiring?", a: "Yes. We place across all 50 states, including fully remote engagements. We specify remote/hybrid/on-site at the brief stage and only present candidates who meet your location requirements." },
    ],
  },
];

export default function ClientFAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

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
                Framework & <br/><span className="text-white/40">Client FAQ.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Fees, compliance, timelines, and how we operate — answered directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Sticky nav */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-40 flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block">Classification</span>
                {faqs.map(cat => (
                  <a key={cat.category} href={`#${cat.category.replace(/[\s&]/g, "-").toLowerCase()}`}
                    className="text-sm font-light text-white/40 hover:text-[#a4f07a] transition-colors py-2 border-l-2 border-white/5 hover:border-[#a4f07a] pl-6 -ml-[2px]">
                    {cat.category}
                  </a>
                ))}
                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-xs text-white/20 mb-4 font-light italic">Ready to hire?</p>
                  <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-outline w-full justify-center text-xs">
                    Request a Consultation <ArrowRight className="h-3 w-3 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-9 flex flex-col gap-16">
              {faqs.map((cat, ci) => (
                <motion.div key={cat.category} id={cat.category.replace(/[\s&]/g, "-").toLowerCase()}
                  variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: ci * 0.05 }}>
                  <h2 className="text-xl font-bold text-white mb-8 pb-4 border-b border-white/5 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#a4f07a]/30" />
                    {cat.category}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {cat.items.map((item) => {
                      const id = `${ci}-${item.q.slice(0, 20)}`;
                      const isOpen = open === id;
                      return (
                        <div key={id} className={`ci-card overflow-hidden transition-all duration-300 ${isOpen ? "bg-white/[0.04] border-[#a4f07a]/20" : "bg-white/[0.01]"}`}>
                          <button onClick={() => setOpen(isOpen ? null : id)}
                            className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group">
                            <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? "text-[#a4f07a]" : "text-white/80 group-hover:text-white"}`}>{item.q}</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#a4f07a]" : "text-white/20"}`} />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <div className="px-8 pb-8">
                                  <div className="h-[1px] bg-white/5 mb-6" />
                                  <p className="text-white/40 text-lg leading-relaxed font-light">{item.a}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}

              {/* Bottom CTA */}
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="ci-card p-10 bg-[#a4f07a]/5 border-[#a4f07a]/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 justify-between">
                <div className="absolute inset-0 ci-grid-bg opacity-[0.05] pointer-events-none" />
                <div className="relative z-10 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Direct Support Required?</h3>
                  <p className="text-white/40 text-lg mt-2 font-light">Book a 15-minute call with a Hiring Partner — no obligation, no sales pitch.</p>
                </div>
                <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary group relative z-10">
                  Request a Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
          </div>
  );
}
