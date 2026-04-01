"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

/**
 * Candidate FAQ Page.
 * URL: /faqs-for-candidates
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const faqs = [
  {
    category: "Getting Started",
    items: [
      { q: "Do I need to pay CloudInfra IT to find me a job?", a: "No. Our service is completely free for candidates. We are paid by the employer when a placement is made. You never pay us anything." },
      { q: "How do I apply for a role?", a: "Browse our job board at /job-opportunities and click 'Express Interest' on any role. You can also reach out directly via /contact-a-recruiter — even if you don't see an exact match, we keep active talent pools." },
      { q: "I don't see a role that fits. Should I still reach out?", a: "Yes. We frequently place candidates in roles before they are publicly listed. Send us your profile and we will notify you when a matching opportunity opens." },
      { q: "How quickly will I hear back after applying?", a: "A recruiter in your specialty will review your profile within one business day. If there is a relevant opportunity, they will reach out for a 15-minute intro call." },
    ],
  },
  {
    category: "Visa & Work Authorisation",
    items: [
      { q: "Do you work with H-1B visa holders?", a: "Yes. We place H-1B, OPT (F-1), STEM OPT, Green Card (LPR), TN Visa, E-3 Visa, and US Citizen candidates. Work authorisation is verified as part of our standard screening process." },
      { q: "Can you help with H-1B transfers?", a: "We facilitate H-1B transfers for contract and permanent roles. We work with specialist immigration counsel for employer-side filings and manage the candidate side of the compliance workflow." },
      { q: "Do you place candidates who need visa sponsorship?", a: "This depends on the client employer's willingness to sponsor. We never withhold this information — we tell you upfront whether a role is open to sponsorship before any submission." },
      { q: "What does work authorisation verified mean?", a: "Before we submit your profile to any client, we confirm your current visa status, expiry dates, and any transfer or extension requirements. No surprises for you or the employer." },
    ],
  },
  {
    category: "The Process",
    items: [
      { q: "Will my CV be sent to employers without my knowledge?", a: "Never. We will always tell you the name of the client and confirm your interest before submitting your profile. This is a firm policy — not just a guideline." },
      { q: "How do you prepare me for interviews?", a: "Before any client interview, we brief you on the role context, team structure, interview format, technical topics to prepare for, and compensation range. You go in prepared — not guessing." },
      { q: "How long does the process typically take?", a: "For contract roles, we aim to have a shortlist delivered within 24–48 hours of client alignment. For permanent roles, timelines vary — but we will tell you the expected timeline at the start of every search." },
      { q: "What happens if I get an offer I want to negotiate?", a: "We manage the offer and counter-offer on your behalf. We have benchmark compensation data for most roles and will advise you on whether a counter is appropriate and at what level." },
    ],
  },
  {
    category: "Contract & Compliance",
    items: [
      { q: "Who pays me if I'm on a contract role?", a: "For W-2 contract roles placed through CloudInfra IT, we are your employer of record. We handle payroll, tax withholding, and compliance. For C2C arrangements, you would work through your own business entity." },
      { q: "Are benefits included for contract roles?", a: "Benefits availability varies by engagement. We will confirm what is included (medical, dental, etc.) for each specific role before you accept." },
      { q: "What if the contract ends early or I want to convert to permanent?", a: "We manage this situation. For temp-to-hire roles, conversion terms are agreed upfront. If a contract ends earlier than expected, we actively work to find your next placement." },
      { q: "Do you have roles with remote working options?", a: "Yes. Many of our placements are remote-first or hybrid. We filter for this on the job board and can specifically search for remote roles matching your profile." },
    ],
  },
];

export default function CandidateFAQPage() {
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
                Directives & <br/><span className="text-white/40">Candidate FAQ.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Everything you want to know about visas, payments, process, and working with us — answered directly.
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
                  <a key={cat.category} href={`#${cat.category.replace(/\s/g, "-").toLowerCase()}`}
                    className="text-sm font-light text-white/40 hover:text-[#a4f07a] transition-colors py-2 border-l-2 border-white/5 hover:border-[#a4f07a] pl-6 -ml-[2px]">
                    {cat.category}
                  </a>
                ))}
                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-xs text-white/20 mb-4 font-light italic">Still have questions?</p>
                  <Link href="/contact-a-recruiter" className="ci-pill-btn ci-pill-btn-outline w-full justify-center text-xs">
                    Talk to a Recruiter <ArrowRight className="h-3 w-3 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-9 flex flex-col gap-16">
              {faqs.map((cat, ci) => (
                <motion.div key={cat.category} id={cat.category.replace(/\s/g, "-").toLowerCase()}
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
                  <p className="text-white/40 text-lg mt-2 font-light">A specialist in your field will answer any question within 20 minutes during work hours.</p>
                </div>
                <Link href="/contact-a-recruiter" className="ci-pill-btn ci-pill-btn-primary group relative z-10">
                  Talk to a Recruiter <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
          </div>
  );
}
