import Header from "@/components/Header";
import { Search, MapPin, Briefcase, Filter, ShieldAlert, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

import { mockJobs } from "@/lib/jobs";

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Fraud Warning Banner */}
        <div className="mb-12 rounded-xl bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-4">
          <ShieldAlert className="h-6 w-6 text-red-500 flex-none" />
          <p className="text-sm text-red-100 italic">
            <strong>Job Fraud Warning:</strong> CloudInfra IT will never ask for payment during the hiring process. 
            Official communications always come from <code className="bg-red-500/20 px-1 rounded">@cloudinfrait.com</code>. 
            <Link href="/fraud" className="underline hover:text-white ml-2">Learn more</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar (MVP Mockup) */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Keywords..." 
                    className="w-full bg-muted/40 border-border/50 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Location..." 
                    className="w-full bg-muted/40 border-border/50 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Work Mode</h3>
              <div className="space-y-2">
                {["Remote", "Hybrid", "On-site"].map(mode => (
                  <label key={mode} className="flex items-center gap-3 text-sm text-foreground/80 cursor-pointer">
                    <input type="checkbox" className="rounded border-border/50 bg-muted/40" />
                    {mode}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Employment Type</h3>
              <div className="space-y-2">
                {["Contract", "Direct Hire", "Contract-to-Hire"].map(type => (
                  <label key={type} className="flex items-center gap-3 text-sm text-foreground/80 cursor-pointer">
                    <input type="checkbox" className="rounded border-border/50 bg-muted/40" />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Job List */}
          <section className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-white">Latest Job Opportunities</h1>
              <p className="text-sm text-muted-foreground">{mockJobs.length} active roles</p>
            </div>

            <div className="space-y-4">
              {mockJobs.map(job => (
                <div key={job.id} className="glass-panel p-6 rounded-xl hover:border-accent/30 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <Link href={`/jobs/${job.id}`} className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {job.title}
                      </Link>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.company}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                        <span className="flex items-center gap-1.5 font-bold text-accent"><Clock className="h-4 w-4" /> {job.updated}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="px-3 py-1 rounded-full bg-white/5 border border-border/50 text-xs font-bold text-white uppercase tracking-wider">
                         {job.type}
                       </span>
                       <Link 
                         href={`/jobs/${job.id}`} 
                         className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all"
                       >
                         <ArrowRight className="h-5 w-5" />
                       </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <button className="text-sm font-bold text-muted-foreground hover:text-white transition-colors">
                Load more positions...
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
