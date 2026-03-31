"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <span className="ci-label block mb-2">For Candidates</span>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Frequently asked questions.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              Everything you want to know about visas, payments, process, and working with us — answered directly.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sticky nav */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Jump to</p>
                {faqs.map(cat => (
                  <a key={cat.category} href={`#${cat.category.replace(/\s/g, "-").toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-[#06B6D4] transition-colors">
                    {cat.category}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3">Still have questions?</p>
                  <Link href="/contact-a-recruiter" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#06B6D4] hover:underline">
                    Talk to a recruiter <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="lg:col-span-9 flex flex-col gap-10">
              {faqs.map((cat, ci) => (
                <motion.div key={cat.category} id={cat.category.replace(/\s/g, "-").toLowerCase()}
                  variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: ci * 0.05 }}>
                  <h2 className="text-base font-bold text-[#0F1B2D] mb-4 pb-3 border-b border-gray-100">{cat.category}</h2>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => {
                      const id = `${ci}-${item.q.slice(0, 20)}`;
                      const isOpen = open === id;
                      return (
                        <div key={id} className="rounded-xl border border-gray-100 overflow-hidden">
                          <button onClick={() => setOpen(isOpen ? null : id)}
                            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-[#F8F9FB] hover:bg-gray-50 transition-colors">
                            <span className="text-sm font-medium text-gray-800">{item.q}</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                                <p className="px-5 py-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">{item.a}</p>
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
              <div className="rounded-2xl border border-[#06B6D4]/20 bg-[#06B6D4]/5 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                <div>
                  <p className="text-sm font-bold text-[#0F1B2D] mb-1">Didn&apos;t find your answer?</p>
                  <p className="text-sm text-gray-500">A recruiter in your field will answer any question — and usually faster than an FAQ.</p>
                </div>
                <Link href="/contact-a-recruiter"
                  className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all shrink-0">
                  Talk to a Recruiter <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
