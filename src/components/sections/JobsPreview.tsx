"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, X } from "lucide-react";

/**
 * JobsPreview — Slim homepage teaser of open positions.
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components
 */

const jobs = [
  { title: "DevOps Engineer",                    location: "Farmers Branch, TX", type: "Contract",       code: "26-05337", specialty: "IT",          summary: "CI/CD pipeline automation, AWS/Azure/GCP cloud infra management, security compliance through automation." },
  { title: "Python Developer",                   location: "Dallas, TX",          type: "Contract",       code: "26-05345", specialty: "IT",          summary: "Clean Python applications using Django or Flask. APIs, automation scripts, data processing pipelines." },
  { title: "Cloud Security Engineer",            location: "Farmers Branch, TX", type: "Contract",       code: "26-05043", specialty: "IT",          summary: "Cloud security architectures (AWS/Azure/GCP). IAM, encryption, threat monitoring, NIST/HITRUST/ISO compliance." },
  { title: "RN Case Manager – Home Health",      location: "Lebanon, NH",         type: "16-Wk Contract", code: "26-04754", specialty: "Healthcare",  summary: "Superior nursing and hospice care across Vermont and New Hampshire. 16-week contract." },
];

const visaOptions = ["H-1B","OPT (F-1)","STEM OPT","Green Card","LPR","US Citizen","TN Visa","Other"];

function ApplyModal({ job, onClose }: { job: typeof jobs[0]; onClose: () => void }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", linkedin:"", visa:"", message:"" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Interest — ${job.title} (${job.code})`);
    const body = encodeURIComponent(
      `ROLE: ${job.title}\nCODE: ${job.code}\nLOCATION: ${job.location}\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Visa: ${form.visa}\nNote: ${form.message||"—"}`
    );
    window.location.href = `mailto:info@cloudinfrait.com?subject=${subject}&body=${body}`;
  };

  const inp = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] transition-all";

  return (
    <AnimatePresence>
      <motion.div key="bd" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]" />
      <motion.div key="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring",damping:30,stiffness:300}}
        className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-black border-l border-white/10 z-[100] flex flex-col overflow-y-auto">
        
        <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

        <div className="flex items-start justify-between p-8 border-b border-white/5 shrink-0 relative z-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-2 block">Quick Apply</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{job.title}</h3>
            <p className="text-[11px] text-white/30 mt-2 font-mono uppercase tracking-[0.2em]">{job.code} · {job.location}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-white/20 hover:text-white p-2 transition-colors"><X className="h-6 w-6"/></button>
        </div>

        <div className="px-8 py-6 border-b border-white/5 shrink-0 bg-white/[0.02] relative z-10">
          <p className="text-sm text-white/40 leading-relaxed font-light italic">&ldquo;{job.summary}&rdquo;</p>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-6 p-8 flex-1 relative z-10">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Identity Name *</label>
            <input required type="text" placeholder="Jane Smith" className={inp} value={form.name} onChange={set("name")} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Email Node *</label>
              <input required type="email" placeholder="jane@example.com" className={inp} value={form.email} onChange={set("email")} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Phone Relay *</label>
              <input required type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Work Authorization *</label>
            <select title="Work Authorization Status" required className={`${inp} appearance-none`} value={form.visa} onChange={set("visa")}>
              <option value="" disabled className="bg-black">Select status</option>
              {visaOptions.map(v => <option key={v} className="bg-black">{v}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Note</label>
            <textarea rows={3} placeholder="Brief background..." className={`${inp} resize-none`} value={form.message} onChange={set("message")} />
          </div>
          
          <div className="mt-4">
            <button type="submit" className="ci-pill-btn ci-pill-btn-primary w-full group">
              Send Expression of Interest <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"/>
            </button>
            <p className="text-[10px] text-white/10 text-center mt-6 font-bold uppercase tracking-[0.3em]">
              Primary Intake: <span className="text-white/20">Recruitment Ops</span>
            </p>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default function JobsPreview() {
  const [activeJob, setActiveJob] = useState<typeof jobs[0] | null>(null);

  return (
    <section className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container py-24 lg:py-32 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#a4f07a]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Market Active</span>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Open Opportunities</h2>
            <p className="text-lg text-white/40 mt-4 font-light max-w-md">12 roles active across IT & Healthcare verticals.</p>
          </div>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] group transition-all">
            View All Openings <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
          </Link>
        </motion.div>

        {/* List */}
        <div className="flex flex-col gap-3">
          {jobs.map((job, i) => (
            <motion.div
              key={job.code}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="ci-card group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 hover:border-[#a4f07a]/30 transition-all"
            >
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${job.specialty === "IT" ? "bg-[#a4f07a]" : "bg-white/40"} ci-glow`} />
                <div className="min-w-0">
                  <p className="text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">{job.title}</p>
                  <div className="flex items-center gap-4 mt-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[#a4f07a]/40"/>{job.location}</span>
                    <span className="flex items-center gap-1.5 text-white/30">{job.type}</span>
                    <span className="hidden sm:inline text-white/10">|</span>
                    <span className={job.specialty === "IT" ? "text-[#a4f07a]/60" : "text-white/40"}>{job.specialty} Vertical</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveJob(job)}
                className="ci-pill-btn ci-pill-btn-outline !py-2.5 !px-6 text-[11px] font-black uppercase tracking-widest group/btn"
              >
                Express Interest <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform"/>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium">
          <span className="text-white/20 tracking-wider uppercase">Missing a specific role?</span>
          <Link href="/contact-a-recruiter" className="text-[#a4f07a] hover:ci-text-glow transition-all">
            Direct Intake →
          </Link>
        </div>

      </div>

      {activeJob && <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />}
    </section>
  );
}
