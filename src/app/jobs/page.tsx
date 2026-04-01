import { Search, MapPin, Briefcase, ShieldAlert, Clock, ArrowRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { mockJobs } from "@/lib/jobs";

/**
 * Jobs Index — Main searchable job feed.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - Grid-based technical motifs
 */

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
            
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
            Market <span className="text-white/40 italic">Inventory.</span>
          </h1>
          <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
            Real-time access to {mockJobs.length} active roles across IT and Healthcare clusters in North America.
          </p>
        </div>
      </section>

      <main className="flex-1 bg-black">
        
        {/* Protocol Alert Band */}
        <div className="bg-[#a4f07a]/5 border-b border-[#a4f07a]/10">
          <div className="ci-container py-4 flex items-center gap-4">
            <ShieldAlert className="h-5 w-5 text-[#a4f07a] shrink-0" />
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
              <span className="text-white">Protocol:</span> CloudInfra IT will never request fees for placement. Official domain: @cloudinfrait.com
            </p>
          </div>
        </div>

        <div className="ci-container py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* Navigation / Filters */}
            <aside className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-8">Search Parameters</h2>
                <div className="space-y-6">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-[#a4f07a] transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Keywords..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] focus:bg-[#a4f07a]/5 transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-[#a4f07a] transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Geography..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#a4f07a] focus:bg-[#a4f07a]/5 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Deployment Mode</h3>
                <div className="space-y-3">
                  {["Remote First", "Hybrid", "On-site"].map(mode => (
                    <label key={mode} className="flex items-center gap-3 text-xs font-bold text-white/40 cursor-pointer hover:text-white transition-colors group">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-[#a4f07a] transition-all" />
                      {mode}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Engagement Type</h3>
                <div className="space-y-3">
                  {["Contract", "Direct Placement", "Contract-to-Hire"].map(type => (
                    <label key={type} className="flex items-center gap-3 text-xs font-bold text-white/40 cursor-pointer hover:text-white transition-colors group">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-[#a4f07a] transition-all" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Role Feed */}
            <section className="lg:col-span-3 space-y-10">
              <div className="flex items-center justify-between pb-8 border-b border-white/5">
                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">Active Feed Output</h2>
                <p className="text-[11px] text-[#a4f07a] font-bold uppercase tracking-widest bg-[#a4f07a]/10 px-3 py-1 rounded">{mockJobs.length} Roles Identified</p>
              </div>

              <div className="space-y-4">
                {mockJobs.map(job => (
                  <div key={job.id} className="ci-card p-8 group relative overflow-hidden transition-all hover:border-[#a4f07a]/30">
                    <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                      <div className="space-y-4">
                        <Link href={`/jobs/${job.id}`} className="text-2xl font-bold text-white tracking-tight group-hover:text-[#a4f07a] transition-colors inline-block">
                          {job.title}
                        </Link>
                        <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
                          <span className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5 text-[#a4f07a]/40" /> {job.company}</span>
                          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#a4f07a]/40" /> {job.location}</span>
                          <span className="flex items-center gap-2 text-[#a4f07a]/60"><Clock className="h-3.5 w-3.5" /> Updated {job.updated}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-8 shrink-0">
                         <span className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-white/10 px-4 py-1 rounded bg-white/5 border border-white/5">
                           {job.type}
                         </span>
                         <Link 
                           href={`/jobs/${job.id}`} 
                           className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a4f07a]/5 border border-[#a4f07a]/20 text-[#a4f07a] hover:bg-[#a4f07a] hover:text-black transition-all group/btn shadow-[0_0_20px_rgba(164,240,122,0.1)]"
                           aria-label={`View details for ${job.title}`}
                         >
                           <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                         </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feed Logic */}
              <div className="mt-16 pt-12 border-t border-white/5 flex justify-center">
                <button className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-[#a4f07a] transition-all hover:ci-text-glow">
                  Initialize Next Page Segment...
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

          </div>
  );
}
