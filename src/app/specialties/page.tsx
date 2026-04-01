"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Specialties — Industry verticals index.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const industries = [
  { label: "Information Technology",    href: "/information-technology",    accent: "#a4f07a",  roles: "Cloud, DevOps, Cybersecurity, Data, ERP, Software Engineering" },
  { label: "Hospitals & Healthcare",    href: "/hospitals-and-healthcare",  accent: "#a4f07a",  roles: "Physicians, Nurses, Allied Health, Clinical Admin, Healthcare IT" },
  { label: "Engineering",               href: "/engineering",               accent: "#a4f07a",  roles: "Mechanical, Electrical, Systems, Process, SCADA, Project Management" },
  { label: "Banking & Finance",         href: "/banking-and-finance",       accent: "#a4f07a",  roles: "Risk, Compliance, Investment, FinTech, Accounting & Finance" },
  { label: "Manufacturing",             href: "/manufacturing",            accent: "#a4f07a",  roles: "Automation, Production, Quality, Maintenance, Supply Chain" },
  { label: "Oil, Gas & Energy",         href: "/oil-and-gas",              accent: "#a4f07a",  roles: "Petroleum, Pipeline, Renewables, SCADA, HSE & Safety" },
  { label: "Pharmaceutical",            href: "/pharmaceutical",           accent: "#a4f07a",  roles: "R&D, Regulatory Affairs, QA/QC, Medical Affairs, Pharma IT" },
  { label: "Legal",                     href: "/legal",                    accent: "#a4f07a",  roles: "Litigation, Corporate Counsel, Compliance, IP, Legal Technology" },
  { label: "Aerospace",                 href: "/aerospace",                accent: "#a4f07a",  roles: "Avionics, Structures, Propulsion, MRO, Safety & Certification" },
  { label: "Defence & Space",           href: "/defence-and-space",        accent: "#a4f07a",  roles: "EW/Signals, Space Systems, C4ISR, Cyber/IA, Programme Management" },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function SpecialtiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
        <div className="ci-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-white leading-tight tracking-tighter max-w-2xl">
              Specialized Staffing Index.
            </h1>
            <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
              10 industry verticals. Every search run by a recruiter with direct domain experience in that sector — not a generalist.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        
        {/* ── Grid ── */}
        <section className="bg-black">
          <div className="ci-container py-20 lg:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {industries.map((ind, i) => (
                <motion.div 
                  key={ind.label} 
                  variants={fade} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={ind.href}
                    className="ci-card group flex flex-col p-8 lg:p-10 relative overflow-hidden h-full"
                  >
                    {/* Interior Background Motif */}
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] group-hover:opacity-[0.03] transition-opacity" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="h-px w-8 bg-[#a4f07a]/40 group-hover:w-12 group-hover:bg-[#a4f07a] transition-all" />
                        <ArrowRight className="h-5 w-5 text-white/10 group-hover:text-[#a4f07a] group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#a4f07a] transition-colors">
                        {ind.label}
                      </p>
                      <p className="text-sm text-white/30 leading-relaxed font-light mt-auto">
                        {ind.roles}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Custom Inquiry ── */}
        <section className="bg-[#0b0b0b] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.01]" />
          
          <div className="ci-container py-24 relative z-10">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Don&apos;t see your industry?</h2>
                <p className="text-base text-white/30 max-w-xl leading-relaxed font-light">
                  We also handle custom staffing programmes across sectors not listed above. Contact us and we will tell you quickly whether we can help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-primary group">
                  Request a Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact"
                  className="ci-pill-btn ci-pill-btn-outline">
                  General Enquiry
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
          </div>
  );
}
