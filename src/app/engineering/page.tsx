"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Wrench, Layers, Monitor, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const disciplines = [
  { icon: Cpu,     label: "Mechanical & Structural", tags: ["Mechanical Engineers", "Structural Engineers", "Civil Engineers", "Materials Science", "FEA/FEM Analysts"] },
  { icon: Code2,   label: "Electrical & Systems",    tags: ["Electrical Engineers", "Systems Engineers", "FPGA Engineers", "Embedded Systems", "Controls & Automation"] },
  { icon: Wrench,  label: "Project & Programme",     tags: ["Project Managers (PMP)", "Programme Managers", "Site Managers", "Construction Managers", "PMO Directors"] },
  { icon: Layers,  label: "Process & Chemical",      tags: ["Process Engineers", "Chemical Engineers", "Piping Engineers", "HAZOP Leads", "SAP PP/QM"] },
  { icon: Monitor, label: "SCADA & Instrumentation", tags: ["SCADA Engineers", "DCS Engineers", "Instrumentation Techs", "PLC Programmers", "Commissioning Engineers"] },
  { icon: Users,   label: "Engineering Management",  tags: ["Engineering Directors", "VPs of Engineering", "QA Managers", "HSE Managers", "Technical Leads"] },
];

const whyPoints = [
  "Credentials and professional licences verified before submission (PE, PMP, CWI)",
  "Active network: aerospace, oil & gas, manufacturing, defence sectors",
  "Work authorisation verified for every H-1B, TN, and OPT placement",
  "Contract, permanent, and temp-to-hire models available",
  "24–48h shortlist for contract roles from alignment call",
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function EngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-14 bg-[#020510] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: "linear-gradient(to right,rgba(6,182,212,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(6,182,212,.05) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="ci-container relative z-10">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="ci-label" style={{ color: "#06B6D4" }}>Specialty</span>
              <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight mt-1">Engineering Staffing</h1>
              <p className="text-sm text-white/50 mt-4 leading-relaxed">
                Domain-specialist recruiters placing Mechanical, Electrical, Structural, Process, and Systems Engineers across the USA — on contract, permanent, and temp-to-hire terms.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#06B6D4]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-2">Credentials Verified:</span>
                {["PE Licensed", "PMP Certified", "CWI Welding", "H-1B/TN Visa", "OSHA Aware"].map(t => (
                  <span key={t} className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/job-opportunities" className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all">
                  Browse Engineering Roles <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/consult-with-us" className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-6 py-3 rounded-full hover:border-white/40 hover:text-white transition-colors">
                  Hire Engineering Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-14 lg:py-16">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="ci-label block mb-2">Engineering Disciplines</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">What we staff</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {disciplines.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div key={d.label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6 hover:border-[#06B6D4]/30 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center mb-4">
                      <Icon className="h-4.5 w-4.5 text-[#06B6D4]" style={{ width: 18, height: 18 }} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">{d.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {d.tags.map(tag => (
                        <span key={tag} className="text-[11px] text-gray-500 bg-white border border-gray-100 px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FB] border-b border-gray-100">
          <div className="ci-container py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="ci-label block mb-3">Why CloudInfra IT</span>
                <h2 className="text-xl font-bold text-[#0F1B2D] mb-5">Not just job-title matching.</h2>
                <ul className="flex flex-col gap-3">
                  {whyPoints.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#06B6D4] shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-7 flex flex-col gap-5">
                <p className="text-sm font-bold text-[#0F1B2D]">Talk to an Engineering Recruiter</p>
                <p className="text-sm text-gray-500 leading-relaxed">Ready to staff a role or looking for your next engineering position? Reach out — we respond within one business day.</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+12146637826" className="text-sm font-semibold text-[#0F1B2D] hover:text-[#06B6D4] transition-colors">(+1) 214-663-7826</a>
                  <a href="mailto:info@cloudinfrait.com" className="text-sm text-gray-500 hover:text-[#06B6D4] transition-colors">info@cloudinfrait.com</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-gray-950">
          <div className="ci-container py-12">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
              <div>
                <h2 className="text-lg font-bold text-white mb-2">Find or fill an engineering role.</h2>
                <p className="text-sm text-gray-400 max-w-md leading-relaxed">Engineer looking for a new position, or hiring manager building a team — the first step is the same.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/job-opportunities" className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] active:scale-95 transition-all">
                  Browse Jobs <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/consult-with-us" className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                  Hire Talent
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
