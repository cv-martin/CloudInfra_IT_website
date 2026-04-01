import { ArrowLeft, MapPin, Briefcase, Calendar, ShieldCheck, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { mockJobs } from "@/lib/jobs";
import { notFound } from "next/navigation";

// Required for static export of dynamic routes
export function generateStaticParams() {
  return mockJobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = mockJobs.find(j => j.id.toString() === params.id);
  
  if (!job) {
    notFound();
  }

  // Structured Data for Google Job Search
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.datePosted,
    "validThrough": job.validThrough,
    "employmentType": job.type === "Contract" ? "CONTRACTOR" : "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "CloudInfra IT",
      "sameAs": "https://cloudinfrait.com",
      "logo": "https://cloudinfrait.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
            
      <main className="flex-1 bg-black">
        {/* ── Page Hero ── */}
        <section className="pt-40 pb-16 bg-black border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
          <div className="ci-container relative z-10">
            <Link href="/jobs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] hover:ci-text-glow transition-all mb-12 group">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" /> Back to Market Feed
            </Link>
            
            <div className="max-w-4xl">
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white leading-tight tracking-tighter mb-8">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-[11px] font-black uppercase tracking-[0.25em] text-white/30">
                <span className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-[#a4f07a]/40" /> {job.location}</span>
                <span className="flex items-center gap-2.5"><Briefcase className="h-4 w-4 text-[#a4f07a]/40" /> {job.type}</span>
                <span className="flex items-center gap-2.5 text-[#a4f07a]/60"><Calendar className="h-4 w-4" /> Posted {job.datePosted}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ci-container py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-white/5" />
                <div 
                  className="prose prose-invert prose-emerald max-w-none text-white/50 text-lg leading-relaxed font-light
                    prose-h3:text-white prose-h3:font-bold prose-h3:tracking-tight prose-h3:mt-12 prose-h3:mb-6
                    prose-ul:space-y-4 prose-li:marker:text-[#a4f07a]"
                  dangerouslySetInnerHTML={{ __html: job.description || "" }}
                />
              </div>
              
              <div className="pt-12 border-t border-white/5">
                <div className="flex items-start gap-6 p-8 rounded-3xl bg-[#a4f07a]/5 border border-[#a4f07a]/10 group">
                  <ShieldCheck className="h-6 w-6 text-[#a4f07a] shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="text-[11px] font-black uppercase tracking-widest text-white">Vetted Technical Role</p>
                    <p className="text-[15px] text-white/40 leading-relaxed font-light">
                      This position has been algorithmically verified and manually reviewed by the CloudInfra IT Infrastructure Team for technical accuracy and market standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Actions */}
            <aside className="lg:col-span-1">
              <div className="ci-card p-10 lg:sticky lg:top-32 space-y-10 overflow-hidden">
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-4">Compensation Plan</h3>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      {job.salary}
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <button className="ci-pill-btn ci-pill-btn-primary w-full group">
                      Quick Apply Now <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="ci-pill-btn ci-pill-btn-outline w-full flex items-center justify-center gap-3">
                      <Mail className="h-4 w-4" /> Message Recruiter
                    </button>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6 italic">Secure Share Hub</p>
                    <div className="flex gap-4">
                       <button aria-label="Share Job Posting" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-[#a4f07a] hover:border-[#a4f07a]/40 transition-all">
                          <ExternalLink className="h-4 w-4" />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

          </div>
  );
}
