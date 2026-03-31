"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const industries = [
  { label: "Information Technology",    href: "/information-technology",    accent: "#06B6D4",  roles: "Cloud, DevOps, Cybersecurity, Data, ERP, Software Engineering" },
  { label: "Hospitals & Healthcare",    href: "/hospitals-and-healthcare",  accent: "#10B981",  roles: "Physicians, Nurses, Allied Health, Clinical Admin, Healthcare IT" },
  { label: "Engineering",               href: "/engineering",               accent: "#06B6D4",  roles: "Mechanical, Electrical, Systems, Process, SCADA, Project Management" },
  { label: "Banking & Finance",         href: "/banking-and-finance",       accent: "#6366F1",  roles: "Risk, Compliance, Investment, FinTech, Accounting & Finance" },
  { label: "Manufacturing",             href: "/manufacturing",            accent: "#F59E0B",  roles: "Automation, Production, Quality, Maintenance, Supply Chain" },
  { label: "Oil, Gas & Energy",         href: "/oil-and-gas",              accent: "#F97316",  roles: "Petroleum, Pipeline, Renewables, SCADA, HSE & Safety" },
  { label: "Pharmaceutical",            href: "/pharmaceutical",           accent: "#14B8A6",  roles: "R&D, Regulatory Affairs, QA/QC, Medical Affairs, Pharma IT" },
  { label: "Legal",                     href: "/legal",                    accent: "#8B5CF6",  roles: "Litigation, Corporate Counsel, Compliance, IP, Legal Technology" },
  { label: "Aerospace",                 href: "/aerospace",                accent: "#0EA5E9",  roles: "Avionics, Structures, Propulsion, MRO, Safety & Certification" },
  { label: "Defence & Space",           href: "/defence-and-space",        accent: "#64748B",  roles: "EW/Signals, Space Systems, C4ISR, Cyber/IA, Programme Management" },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function SpecialtiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              All industries we staff.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              10 industry verticals. Every search run by a recruiter with direct domain experience in that sector — not a generalist.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <section className="bg-white">
          <div className="ci-container py-14 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {industries.map((ind, i) => (
                <motion.div key={ind.label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Link href={ind.href}
                    className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6 hover:shadow-sm group transition-all"
                    style={{ borderLeftWidth: 3, borderLeftColor: ind.accent }}>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 group-hover:text-[#0F1B2D] mb-1">{ind.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{ind.roles}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#06B6D4] shrink-0 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F1B2D]">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Don&apos;t see your industry?</h2>
                <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                  We also handle custom staffing programmes across sectors not listed above. Contact us and we will tell you quickly whether we can help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/consult-with-us"
                  className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all">
                  Request a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-6 py-3 rounded-full hover:border-white/40 hover:text-white transition-colors">
                  General Enquiry
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
