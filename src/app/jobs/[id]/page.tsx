import Header from "@/components/Header";
import { ArrowLeft, MapPin, Briefcase, Calendar, Clock, ShieldCheck, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

// Mock data fetcher for MVP
const getJob = (id: string) => ({
  id,
  title: "Senior DevOps Engineer",
  company: "CloudInfra IT (Project Client)",
  location: "Remote (US)",
  type: "Contract",
  datePosted: "2026-03-29",
  validThrough: "2026-06-29",
  salary: "$140,000 - $180,000",
  description: `
    <p>CloudInfra IT is seeking a Senior DevOps Engineer to lead infrastructure automation for a tier-1 finance client. You will be responsible for architecting CI/CD pipelines and managing Kubernetes clusters at scale.</p>
    <h3 class="font-bold text-white mt-4">Key Responsibilities:</h3>
    <ul class="list-disc ml-4 mt-2 space-y-2">
      <li>Architect and maintain robust CI/CD pipelines using GitLab CI and Terraform.</li>
      <li>Manage multi-cluster Kubernetes environments across AWS and Azure.</li>
      <li>Design service mesh architectures with Istio.</li>
      <li>Implement zero-trust security policies for cloud infrastructure.</li>
    </ul>
    <h3 class="font-bold text-white mt-4">Requirements:</h3>
    <ul class="list-disc ml-4 mt-2 space-y-2">
       <li>5+ years of experience in DevOps/SRE roles.</li>
       <li>Deep expertise in Terraform and Kubernetes.</li>
       <li>Certified AWS Solutions Architect or CKA.</li>
       <li>Experience with SOC2 and PCI-DSS compliance is a plus.</li>
    </ul>
  `,
});

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = getJob(params.id);

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
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": 150000,
        "unitText": "YEAR"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <Link href="/jobs" className="flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Search
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b border-border/50 pb-8">
               <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{job.title}</h1>
               <div className="flex flex-wrap items-center gap-6 mt-4 text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.type}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Posted: {job.datePosted}</span>
               </div>
            </div>

            <div 
              className="prose prose-invert prose-accent max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
            
            <div className="pt-8 border-t border-border/50">
               <div className="flex items-center gap-4 bg-accent/10 p-4 rounded-xl border border-accent/20">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <p className="text-sm text-foreground/80">
                    <strong>Vetted Role:</strong> This position has been verified for technical accuracy and market standards by the CloudInfra IT Infrastructure Team.
                  </p>
               </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="glass-panel p-8 rounded-2xl sticky top-24">
               <h3 className="text-xl font-bold text-white mb-4">Interested?</h3>
               <p className="text-sm text-muted-foreground mb-8">
                 Expected compensation: {job.salary}
               </p>
               
               <div className="space-y-4">
                  <button className="w-full bg-accent text-white py-4 rounded-full font-bold shadow-lg shadow-accent/25 hover:brightness-110 active:scale-95 transition-all">
                    Quick Apply Now
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-white/5 border border-border py-4 rounded-full font-bold text-white hover:bg-white/10 transition-all">
                    <Mail className="h-4 w-4" /> Contact Recruiter
                  </button>
               </div>

               <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Share this role</p>
                  <div className="flex gap-4">
                     <button aria-label="Share Job Posting" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <ExternalLink className="h-4 w-4 text-white" />
                     </button>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
