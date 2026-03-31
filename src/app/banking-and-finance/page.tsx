"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BarChart3, Building, Globe, Users, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const disciplines = [
  { icon: TrendingUp, label: "Investment & Capital Markets", tags: ["Investment Analysts", "Equity Research", "Portfolio Managers", "Quant Analysts", "Traders"] },
  { icon: BarChart3,  label: "Risk & Compliance",           tags: ["Compliance Officers", "AML Analysts", "BSA Officers", "Credit Risk", "Regulatory Reporting"] },
  { icon: Building,   label: "Retail & Commercial Banking", tags: ["Branch Managers", "Loan Officers", "Underwriters", "Relationship Managers", "Credit Analysts"] },
  { icon: Globe,      label: "FinTech & Digital Finance",   tags: ["FinTech Product Managers", "Payments Engineers", "Blockchain Developers", "API Architects", "RegTech"] },
  { icon: Users,      label: "Accounting & Finance",        tags: ["CFOs", "Controllers", "FP&A Managers", "Treasury Analysts", "CPA / CFA"] },
  { icon: Lock,       label: "Financial Services IT",       tags: ["Core Banking Systems", "SWIFT Integration", "SOX Compliance", "Data Engineers", "Cybersecurity"] },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function BankingFinancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-14 bg-[#020510] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: "linear-gradient(to right,rgba(99,102,241,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(99,102,241,.05) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="ci-container relative z-10 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-indigo-400 mb-2">Specialty</span>
            <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight">Banking &amp; Finance Staffing</h1>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              Specialist recruiters placing finance, risk, compliance, and FinTech professionals across banks, asset managers, and financial services firms in the USA.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-2">Verified:</span>
              {["FINRA Licensed", "Series 7/63", "CFA / CPA", "AML Certified", "SOX Aware"].map(t => (
                <span key={t} className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/job-opportunities" className="inline-flex items-center gap-2 bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 active:scale-95 transition-all">
                Browse Finance Roles <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/consult-with-us" className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-6 py-3 rounded-full hover:border-white/40 hover:text-white transition-colors">
                Hire Finance Talent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <main className="flex-1">
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-indigo-500 mb-2">Finance Disciplines</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">What we staff</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {disciplines.map((d, i) => { const Icon = d.icon; return (
                <motion.div key={d.label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6 hover:border-indigo-200 hover:shadow-sm transition-all">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4">
                    <Icon className="text-indigo-500" style={{ width: 18, height: 18 }} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">{d.label}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {d.tags.map(tag => <span key={tag} className="text-[11px] text-gray-500 bg-white border border-gray-100 px-2.5 py-1 rounded-full">{tag}</span>)}
                  </div>
                </motion.div>
              ); })}
            </div>
          </div>
        </section>
        <section className="bg-gray-950">
          <div className="ci-container py-12">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
              <div>
                <h2 className="text-lg font-bold text-white mb-2">Find or fill a finance role.</h2>
                <p className="text-sm text-gray-400 max-w-md leading-relaxed">Finance professional or hiring manager — we respond within 24 hours.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/job-opportunities" className="inline-flex items-center gap-2 bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 active:scale-95 transition-all">
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
