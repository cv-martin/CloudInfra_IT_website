"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <span className="ci-label block mb-2">For Clients</span>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Client FAQ.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              Fees, compliance, timelines, and how we operate — answered directly.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Jump to</p>
                {faqs.map(cat => (
                  <a key={cat.category} href={`#${cat.category.replace(/[\s&]/g, "-").toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-[#06B6D4] transition-colors">{cat.category}</a>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3">Ready to hire?</p>
                  <Link href="/consult-with-us" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#06B6D4] hover:underline">
                    Request a Consultation <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-10">
              {faqs.map((cat, ci) => (
                <motion.div key={cat.category} id={cat.category.replace(/[\s&]/g, "-").toLowerCase()}
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

              <div className="rounded-2xl border border-[#0F1B2D]/10 bg-[#F8F9FB] p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                <div>
                  <p className="text-sm font-bold text-[#0F1B2D] mb-1">Still have questions?</p>
                  <p className="text-sm text-gray-500">Book a 15-minute call with a Hiring Partner — no obligation, no sales pitch.</p>
                </div>
                <Link href="/consult-with-us"
                  className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all shrink-0">
                  Request a Consultation <ArrowRight className="h-4 w-4" />
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
