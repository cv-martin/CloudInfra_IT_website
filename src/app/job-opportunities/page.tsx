"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Briefcase, ShieldAlert, Search, X, ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Job Opportunities — Full job board.
 *
 * All 12 Q1 2026 positions. Aligned with the "white-base, cyan-accent"
 * design system. Express-Interest drawer identical to JobsPreview on home.
 * URL: /job-opportunities   (matches Footer + Header nav)
 */

const jobs = [
  { id: "26-05345", title: "Python Developer",               location: "Dallas, TX",          type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Clean Python applications using Django or Flask. APIs, automation scripts, data processing pipelines. Travel and relocation to unanticipated client sites possible." },
  { id: "26-05344", title: "Network Engineer",               location: "Dallas, TX",          type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Design, implement, and maintain LAN/WAN/cloud network infrastructure. Cisco, Juniper, and SD-WAN experience preferred. Travel possible." },
  { id: "26-05343", title: "PL/SQL Developer",              location: "Dallas, TX",          type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Develop and optimise complex PL/SQL stored procedures, triggers, and functions. Oracle database administration and performance tuning." },
  { id: "26-05342", title: "Java Developer",                 location: "Farmers Branch, TX",  type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Enterprise Java development with Spring Boot microservices. REST API design, JUnit testing, CI/CD integration. Travel and relocation possible." },
  { id: "26-05341", title: "ETL Developer",                  location: "Farmers Branch, TX",  type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Build and maintain ETL pipelines using Informatica, Talend, or SSIS. Data warehousing, SQL Server, integration with cloud data platforms." },
  { id: "26-05340", title: "iOS Developer",                  location: "Farmers Branch, TX",  type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Native iOS development using Swift and SwiftUI. App Store publishing, CI/CD with Fastlane, REST integrations. Travel and relocation possible." },
  { id: "26-05339", title: ".NET Developer",                 location: "Dallas, TX",          type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "C# / .NET 8 web application development. ASP.NET Core, Entity Framework, Azure DevOps. Agile team environments. Travel possible." },
  { id: "26-05338", title: "SQL Developer",                  location: "Dallas, TX",          type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "Develop and optimise SQL queries, stored procedures, and reports. SQL Server / PostgreSQL. Power BI integration a plus. Travel possible." },
  { id: "26-05337", title: "DevOps Engineer",                location: "Farmers Branch, TX",  type: "Contract",       specialty: "IT",         date: "Mar 17, 2026", summary: "CI/CD pipeline automation, AWS/Azure/GCP cloud infra management, security compliance through automation. Travel and relocation possible." },
  { id: "26-05044", title: "Systems Engineer (SAP)",         location: "Farmers Branch, TX",  type: "Contract",       specialty: "IT",         date: "Mar 16, 2026", summary: "SAP S/4HANA functional and technical consulting. ABAP development, system configuration, and cross-module integration experience." },
  { id: "26-05043", title: "Cloud Security Engineer",        location: "Farmers Branch, TX",  type: "Contract",       specialty: "IT",         date: "Mar 16, 2026", summary: "Cloud security architectures (AWS/Azure/GCP). IAM, encryption, threat monitoring, NIST/HITRUST/ISO compliance. Travel possible." },
  { id: "26-04754", title: "RN Case Manager – Home Health",  location: "Lebanon, NH",         type: "16-Wk Contract", specialty: "Healthcare", date: "Mar 12, 2026", summary: "Superior nursing and hospice care across Vermont and New Hampshire. Mon–Fri 08:00–16:30, rotating weekends. 16-week contract." },
];

const visaOptions = ["H-1B", "OPT (F-1)", "STEM OPT", "Green Card", "Lawful Permanent Resident (LPR)", "US Citizen", "TN Visa", "Other"];

type Job = typeof jobs[0];

function ApplyDrawer({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", visa: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application — ${job.title} (${job.id})`);
    const body = encodeURIComponent(
      `ROLE: ${job.title}\nCODE: ${job.id}\nLOCATION: ${job.location}\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `LinkedIn: ${form.linkedin || "—"}\nVisa: ${form.visa}\n\nNote:\n${form.message || "—"}`
    );
    window.location.href = `mailto:info@cloudinfrait.com?subject=${subject}&body=${body}`;
  };

  const inp = "w-full bg-[#F8F9FB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#06B6D4]/60 transition-colors";

  return (
    <AnimatePresence>
      <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />
      <motion.div key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white border-l border-gray-200 z-50 flex flex-col overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4]">Express Interest</span>
            <h3 className="text-lg font-bold text-gray-900 mt-1">{job.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{job.location} · Code: {job.id}</p>
          </div>
          <button onClick={onClose} aria-label="Close application drawer" className="text-gray-400 hover:text-gray-700 p-1 mt-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Summary */}
        <div className="px-6 py-4 border-b border-gray-100 shrink-0 bg-[#F8F9FB]">
          <p className="text-sm text-gray-500 leading-relaxed">{job.summary}</p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="flex flex-col gap-4 p-6 flex-1">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Full Name *</label>
            <input required type="text" placeholder="Jane Smith" className={inp} value={form.name} onChange={set("name")} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Email *</label>
              <input required type="email" placeholder="jane@example.com" className={inp} value={form.email} onChange={set("email")} />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Phone *</label>
              <input required type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">LinkedIn URL</label>
            <input type="url" placeholder="https://linkedin.com/in/yourprofile" className={inp} value={form.linkedin} onChange={set("linkedin")} />
          </div>
          <div>
            <label htmlFor="visa-select" className="text-xs font-semibold text-gray-500 mb-1.5 block">Work Authorization *</label>
            <select id="visa-select" required className={`${inp} appearance-none`} value={form.visa} onChange={set("visa")}>
              <option value="" disabled>Select visa / work status</option>
              {visaOptions.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Cover Note</label>
            <textarea rows={3} placeholder="Brief note about your background or availability..." className={`${inp} resize-none`} value={form.message} onChange={set("message")} />
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Your details go directly to <span className="text-gray-500 font-medium">info@cloudinfrait.com</span>. We never share without your consent.
          </p>
          <button type="submit"
            className="w-full bg-[#06B6D4] text-white text-sm font-bold py-3.5 rounded-xl hover:bg-[#0891b2] active:scale-95 transition-all flex items-center justify-center gap-2">
            Send to Recruiter <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

const SPECIALTY_FILTER = ["All", "IT", "Healthcare"] as const;
type Filter = typeof SPECIALTY_FILTER[number];

export default function JobOpportunitiesPage() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = jobs.filter(j => {
    const matchSpec = filter === "All" || j.specialty === filter;
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.location.toLowerCase().includes(search.toLowerCase());
    return matchSpec && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Page hero */}
      <section className="pt-32 pb-12 bg-[#020510]">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ci-label">Open Positions</span>
            <h1 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-white leading-tight mt-1">
              Job Opportunities
            </h1>
            <p className="text-sm text-white/50 mt-3 max-w-xl leading-relaxed">
              All {jobs.length} active roles — IT and Healthcare. Apply quickly, a specialist recruiter responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* Fraud warning */}
        <div className="bg-red-50 border-b border-red-200">
          <div className="ci-container py-3 flex items-start gap-3">
            <ShieldAlert className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Job Fraud Warning:</strong> CloudInfra IT will never ask for payment during the hiring process.
              Official communications always come from <code className="bg-red-100 px-1 rounded font-mono">@cloudinfrait.com</code>.
            </p>
          </div>
        </div>

        <div className="ci-container py-12">

          {/* Search + filter bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title or location…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-[#F8F9FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#06B6D4]/60 transition-colors"
              />
            </div>

            {/* Specialty filter pills */}
            <div className="flex items-center gap-2">
              {SPECIALTY_FILTER.map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                    filter === s
                      ? "bg-[#06B6D4] text-white border-[#06B6D4]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#06B6D4]/50 hover:text-[#06B6D4]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="self-center text-sm text-gray-400 shrink-0 ml-auto">
              {filtered.length} of {jobs.length} roles
            </p>
          </div>

          {/* Job list */}
          <div className="flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-200 overflow-hidden bg-white">
            {filtered.length === 0 && (
              <div className="px-6 py-12 text-center text-sm text-gray-400">
                No roles match your filters — <button className="text-[#06B6D4] font-semibold hover:underline" onClick={() => { setSearch(""); setFilter("All"); }}>clear filters</button>
              </div>
            )}
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 hover:bg-gray-50 transition-colors group"
              >
                {/* Left */}
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  {/* Specialty dot */}
                  <div className={`h-2 w-2 rounded-full mt-1.5 sm:mt-0 shrink-0 ${job.specialty === "IT" ? "bg-[#06B6D4]" : "bg-emerald-500"}`} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{job.title}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{job.type}</span>
                      <span className="hidden sm:inline text-gray-300">·</span>
                      <span className={`hidden sm:inline font-semibold ${job.specialty === "IT" ? "text-[#06B6D4]" : "text-emerald-600"}`}>{job.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    {job.date}
                  </span>
                  <button
                    onClick={() => setActiveJob(job)}
                    className="text-xs font-semibold text-[#06B6D4] border border-[#06B6D4]/30 px-4 py-1.5 rounded-full hover:bg-[#06B6D4] hover:text-white transition-colors shrink-0"
                  >
                    Express Interest
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-gray-500">
            <span>Don&apos;t see your role?</span>
            <Link href="/contact-a-recruiter" className="text-[#06B6D4] font-semibold hover:underline">
              Send us your CV — a recruiter will match you.
            </Link>
          </div>

        </div>
      </main>

      <Footer />

      {activeJob && <ApplyDrawer job={activeJob} onClose={() => setActiveJob(null)} />}
    </div>
  );
}
