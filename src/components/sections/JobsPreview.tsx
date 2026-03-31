"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ArrowRight, X } from "lucide-react";

/**
 * JobsPreview — Slim homepage teaser of open positions.
 *
 * ONE job: show that real jobs exist, prompt the candidate to click through.
 * Does NOT try to be a full job board — that is /job-opportunities.
 *
 * Layout: compact table-style list, 4 roles max.
 * Apply drawer: same as FeaturedJobs — mailto to recruiter.
 */

const jobs = [
  { title: "DevOps Engineer",                    location: "Farmers Branch, TX", type: "Contract",       code: "26-05337", specialty: "IT",          summary: "CI/CD pipeline automation, AWS/Azure/GCP cloud infra management, security compliance through automation. Travel and relocation to unanticipated client sites possible." },
  { title: "Python Developer",                   location: "Dallas, TX",          type: "Contract",       code: "26-05345", specialty: "IT",          summary: "Clean Python applications using Django or Flask. APIs, automation scripts, data processing pipelines. Travel and relocation to unanticipated client sites possible." },
  { title: "Cloud Security Engineer",            location: "Farmers Branch, TX", type: "Contract",       code: "26-05043", specialty: "IT",          summary: "Cloud security architectures (AWS/Azure/GCP). IAM, encryption, threat monitoring, NIST/HITRUST/ISO compliance. Travel possible." },
  { title: "RN Case Manager – Home Health",      location: "Lebanon, NH",         type: "16-Wk Contract", code: "26-04754", specialty: "Healthcare",  summary: "Superior nursing and hospice care across Vermont and New Hampshire. Mon–Fri 08:00–16:30, rotating weekends. 16-week contract." },
];

const visaOptions = ["H-1B","OPT (F-1)","STEM OPT","Green Card","Lawful Permanent Resident (LPR)","US Citizen","TN Visa","Other"];

function ApplyModal({ job, onClose }: { job: typeof jobs[0]; onClose: () => void }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", linkedin:"", visa:"", message:"" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application — ${job.title} (${job.code})`);
    const body = encodeURIComponent(
      `ROLE: ${job.title}\nCODE: ${job.code}\nLOCATION: ${job.location}\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `LinkedIn: ${form.linkedin||"—"}\nVisa: ${form.visa}\n\nNote:\n${form.message||"—"}`
    );
    window.location.href = `mailto:info@cloudinfrait.com?subject=${subject}&body=${body}`;
  };

  const inp = "w-full bg-[#131C2E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4]/60 transition-colors";

  return (
    <AnimatePresence>
      <motion.div key="bd" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose} className="fixed inset-0 bg-black/60 z-40" />
      <motion.div key="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring",damping:28,stiffness:260}}
        className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-[#0B1120] border-l border-white/10 z-50 flex flex-col overflow-y-auto">
        <div className="flex items-start justify-between p-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4]">Express Interest</span>
            <h3 className="text-lg font-bold text-white mt-1">{job.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{job.location} · Code: {job.code}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-gray-500 hover:text-white p-1 mt-1"><X className="h-5 w-5"/></button>
        </div>
        <div className="px-6 py-4 border-b border-white/5 shrink-0">
          <p className="text-sm text-gray-400 leading-relaxed">{job.summary}</p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4 p-6 flex-1">
          <div>
            <label className="text-xs text-gray-400 mb-1.5 block">Full Name *</label>
            <input required type="text" placeholder="Jane Smith" className={inp} value={form.name} onChange={set("name")} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">Email *</label>
              <input required type="email" placeholder="jane@example.com" className={inp} value={form.email} onChange={set("email")} />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">Phone *</label>
              <input required type="tel" placeholder="+1 (214) 000-0000" className={inp} value={form.phone} onChange={set("phone")} />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1.5 block">LinkedIn URL</label>
            <input type="url" placeholder="https://linkedin.com/in/yourprofile" className={inp} value={form.linkedin} onChange={set("linkedin")} />
          </div>
          <div>
            <label htmlFor="visa-select-preview" className="text-xs text-gray-400 mb-1.5 block">Work Authorization *</label>
            <select id="visa-select-preview" required className={`${inp} appearance-none`} value={form.visa} onChange={set("visa")}>
              <option value="" disabled>Select visa / work status</option>
              {visaOptions.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1.5 block">Cover Note</label>
            <textarea rows={3} placeholder="Brief note about your background or availability..." className={`${inp} resize-none`} value={form.message} onChange={set("message")} />
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            Your details go directly to <span className="text-gray-500">info@cloudinfrait.com</span>. We never share without your consent.
          </p>
          <button type="submit" className="w-full bg-[#06B6D4] text-white text-sm font-bold py-3.5 rounded-xl hover:bg-[#0891b2] transition-colors flex items-center justify-center gap-2">
            Send to Recruiter <ArrowRight className="h-4 w-4"/>
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default function JobsPreview() {
  const [activeJob, setActiveJob] = useState<typeof jobs[0] | null>(null);

  return (
    <section className="bg-[#F8F9FB] ci-divider">
      <div className="ci-container py-14 lg:py-16">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
        >
          <div>
            <span className="ci-label">Open Positions</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">12 roles open now — IT &amp; Healthcare</h2>
          </div>
          <Link href="/job-opportunities" className="text-sm font-semibold text-[#06B6D4] hover:underline flex items-center gap-1 shrink-0 group">
            View all openings <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform"/>
          </Link>
        </motion.div>

        {/* Compact list */}
        <div className="flex flex-col divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden bg-white">
          {jobs.map((job, i) => (
            <motion.div
              key={job.code}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                {/* Specialty dot */}
                <div className={`h-2 w-2 rounded-full mt-1 sm:mt-0 shrink-0 ${job.specialty === "IT" ? "bg-[#06B6D4]" : "bg-emerald-500"}`} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{job.title}</p>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3"/>{job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3"/>{job.type}</span>
                    <span className="hidden sm:inline text-gray-300">·</span>
                    <span className={`hidden sm:inline font-medium ${job.specialty === "IT" ? "text-[#06B6D4]" : "text-emerald-600"}`}>{job.specialty}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveJob(job)}
                className="self-start sm:self-center text-xs font-semibold text-[#06B6D4] border border-[#06B6D4]/30 px-4 py-1.5 rounded-full hover:bg-[#06B6D4] hover:text-white transition-colors shrink-0"
              >
                Express Interest
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-gray-500">
          <span>Don&apos;t see your role?</span>
          <Link href="/contact-a-recruiter" className="text-[#06B6D4] font-semibold hover:underline">
            Send us your CV — a recruiter will match you.
          </Link>
        </div>

      </div>

      {activeJob && <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />}
    </section>
  );
}
