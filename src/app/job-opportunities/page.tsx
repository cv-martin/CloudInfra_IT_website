"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Briefcase, ShieldAlert, Search, X, ArrowRight,
} from "lucide-react";

/**
 * Job Opportunities — Full job board.
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
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

const inp = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] focus:bg-[#a4f07a]/5 transition-all duration-300";

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

  return (
    <AnimatePresence>
      <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]" />
      <motion.div key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-black border-l border-white/10 z-[100] flex flex-col overflow-y-auto">

        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between p-8 border-b border-white/5 shrink-0 relative z-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-3 block">Application Terminal</span>
            <h3 className="text-2xl font-bold text-white tracking-tight leading-none">{job.title}</h3>
            <p className="text-sm text-white/30 mt-3 font-light">{job.location} · Instance Code: {job.id}</p>
          </div>
          <button onClick={onClose} aria-label="Close application drawer" className="text-white/20 hover:text-white transition-colors p-2 -mr-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Summary */}
        <div className="px-8 py-6 border-b border-white/5 shrink-0 bg-[#050505] relative z-10">
          <p className="text-sm text-white/40 leading-relaxed font-light italic">&ldquo;{job.summary}&rdquo;</p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="flex flex-col gap-8 p-8 flex-1 relative z-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Full Identity Name *</label>
            <input required type="text" placeholder="Jane Smith" className={inp} value={form.name} onChange={set("name")} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Email Node *</label>
              <input required type="email" placeholder="jane@example.com" className={inp} value={form.email} onChange={set("email")} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Phone Relay *</label>
              <input required type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Professional URL (LinkedIn)</label>
            <input type="url" placeholder="https://linkedin.com/in/yourprofile" className={inp} value={form.linkedin} onChange={set("linkedin")} />
          </div>
          <div className="space-y-2">
            <label htmlFor="visa-select" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Work Authorization Protocol *</label>
            <select id="visa-select" required className={`${inp} appearance-none`} value={form.visa} onChange={set("visa")}>
              <option value="" disabled className="bg-[#0d0d0d]">Select visa / work status</option>
              {visaOptions.map(v => <option key={v} className="bg-[#0d0d0d]">{v}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Cover Brief</label>
            <textarea rows={4} placeholder="Brief note about your background or availability..." className={`${inp} resize-none`} value={form.message} onChange={set("message")} />
          </div>
          
          <div className="flex items-center gap-3 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] ci-glow" />
            <p className="text-[11px] text-white/20 leading-relaxed font-light tracking-wide uppercase">
              Secure transmission to <span className="text-white/40 font-bold">Recruitment Ops</span>
            </p>
          </div>

          <button type="submit"
            className="ci-pill-btn ci-pill-btn-primary w-full group">
            Send to Recruiter <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Page hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
        <div className="ci-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
              Active Job Feed.
            </h1>
            <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
              All {jobs.length} active roles — IT and Healthcare. Apply quickly, a specialist recruiter responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-black">

        {/* Fraud warning */}
        <div className="bg-[#a4f07a]/5 border-b border-[#a4f07a]/10">
          <div className="ci-container py-4 flex items-start gap-4">
            <ShieldAlert className="h-5 w-5 text-[#a4f07a] shrink-0 mt-0.5" />
            <p className="text-xs text-white/40 leading-relaxed font-light">
              <strong className="text-white font-bold">Protocol Alert:</strong> CloudInfra IT will never ask for payment during the hiring process.
              Official communications always come from <code className="text-[#a4f07a] font-mono mx-1">@cloudinfrait.com</code>.
            </p>
          </div>
        </div>

        <div className="ci-container py-20 lg:py-24">

          {/* Search + filter bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center">
            {/* Search input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-4 h-5 w-5 text-white/20 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title or location…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] transition-all"
              />
            </div>

            {/* Specialty filter pills */}
            <div className="flex items-center gap-3 p-1.5 bg-white/5 rounded-2xl border border-white/5">
              {SPECIALTY_FILTER.map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-xl transition-all ${
                    filter === s
                      ? "bg-[#a4f07a] text-black shadow-[0_0_20px_rgba(164,240,122,0.3)]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/10 ml-auto hidden lg:block">
              {filtered.length} of {jobs.length} roles active
            </p>
          </div>

          {/* Job list */}
          <div className="flex flex-col gap-4">
            {filtered.length === 0 && (
              <div className="px-6 py-20 text-center rounded-3xl border border-white/5 bg-[#050505]">
                <p className="text-sm text-white/20 font-light mb-6">No roles match your search filters.</p>
                <button className="ci-pill-btn ci-pill-btn-outline" onClick={() => { setSearch(""); setFilter("All"); }}>Reset Selection</button>
              </div>
            )}
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="ci-card group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 lg:p-8 relative overflow-hidden"
              >
                 <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] group-hover:opacity-[0.03] transition-opacity pointer-events-none" />
                
                {/* Left */}
                <div className="flex items-center gap-6 flex-1 min-w-0 relative z-10">
                  {/* Specialty indicator */}
                  <div className={`h-10 w-10 flex-shrink-0 rounded-xl border flex items-center justify-center transition-colors ${
                    job.specialty === "IT" 
                      ? "border-[#a4f07a]/20 bg-[#a4f07a]/5" 
                      : "border-blue-500/20 bg-blue-500/5 text-blue-400"
                  }`}>
                    <Briefcase className={`h-5 w-5 ${job.specialty === "IT" ? "text-[#a4f07a]" : "text-blue-400"}`} />
                  </div>
                  
                  <div className="min-w-0">
                    <p className="text-xl font-bold text-white tracking-tight group-hover:text-[#a4f07a] transition-colors">{job.title}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-xs font-light text-white/30">
                      <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#a4f07a]/40" />{job.location}</span>
                      <span className="flex items-center gap-2 uppercase tracking-widest font-black text-[9px] px-2 py-0.5 rounded bg-white/5">{job.type}</span>
                      <span className={`uppercase tracking-[0.2em] font-black text-[10px] ${job.specialty === "IT" ? "text-[#a4f07a]" : "text-blue-400"}`}>{job.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-8 shrink-0 relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 hidden sm:block">
                    {job.date}
                  </span>
                  <button
                    onClick={() => setActiveJob(job)}
                    className="ci-pill-btn ci-pill-btn-primary !py-3 !px-6 text-xs group/btn"
                  >
                    Express Interest <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/30 font-light">
            <span>Don&apos;t see your specific role?</span>
            <Link href="/contact" className="text-[#a4f07a] font-bold hover:ci-text-glow transition-all">
              Send us your CV — we will match you.
            </Link>
          </div>

        </div>
      </main>

      
      {activeJob && <ApplyDrawer job={activeJob} onClose={() => setActiveJob(null)} />}
    </div>
  );
}
