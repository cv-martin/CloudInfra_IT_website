import Header from "@/components/Header";
import { 
  Cloud, 
  Database, 
  Code2, 
  Lock, 
  Settings, 
  Activity, 
  ArrowRight,
  TrendingUp,
  Target,
  BarChart4
} from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    tagline: "Infrastructure as Code.",
    description: "Multi-cloud architecture (AWS/Azure/GCP), CI/CD orchestration, Kubernetes, and container security.",
    roles: ["Cloud Architect", "SRE", "Platform Engineer", "DevSecOps Lead"],
  },
  {
    name: "Data & AI",
    icon: Database,
    tagline: "Monetize Intelligence.",
    description: "Big data engineering, machine learning pipelines, vector database management, and data governance.",
    roles: ["ML Engineer", "Data Specialist", "BI Architect", "AI Security Lead"],
  },
  {
    name: "Software Engineering",
    icon: Code2,
    tagline: "Scalable Systems.",
    description: "Full-stack development, mobile ecosystem architecture, and complex backend systems (Go, Rust, Node).",
    roles: ["Staff Engineer", "Backend Architect", "Mobile Lead", "QA Automation"],
  },
  {
    name: "Cybersecurity",
    icon: Lock,
    tagline: "Resilient Defenses.",
    description: "Threat hunting, zero-trust implementation, penetration testing, and regulatory compliance (SOC2/PCI).",
    roles: ["CISO-as-a-Service", "Security Analyst", "Pen Tester", "Compliance Lead"],
  },
  {
    name: "ERP / SAP / Enterprise",
    icon: Settings,
    tagline: "Operational Core.",
    description: "S/4HANA migrations, Oracle Cloud implementations, and legacy modernization for global enterprises.",
    roles: ["SAP Consultant", "Oracle Developer", "ERP Architect", "Functional Lead"],
  },
  {
    name: "Banking & Healthcare Tech",
    icon: Activity,
    tagline: "High-Sovereignty Sectors.",
    description: "Specialized technology placement for sectors requiring high data sovereignty and complex compliance.",
    roles: ["Health-Tech Lead", "Fintech Engineer", "Sovereign Cloud Lead", "Privacy Officer"],
  },
];

export default function SpecialtiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-muted/20 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-6xl tracking-tight leading-10">
                Strategic focus. <span className="text-accent underline underline-offset-8 decoration-accent/30 tracking-tighter">Sovereign performance.</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-9">
                We don’t staff generalists. CloudInfra IT focuses on the high-sovereignty infrastructures 
                where uptime, security, and market speed are non-negotiable.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Specialty Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {specialties.map((specialty) => (
                <div key={specialty.name} className="glass-panel p-10 rounded-3xl border border-border/50 hover:border-accent/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-12 w-12 rounded-xl bg-accent text-white flex items-center justify-center">
                        <specialty.icon className="h-6 w-6" />
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold text-white leading-tight">{specialty.name}</h3>
                         <p className="text-sm font-semibold tracking-widest uppercase text-accent/80 mt-1">{specialty.tagline}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-8 mb-10 text-lg">
                      {specialty.description}
                    </p>
                    <div className="space-y-4 mb-10">
                       <p className="text-xs font-bold text-white uppercase tracking-widest">Typical Roles We Staff:</p>
                       <div className="flex flex-wrap gap-2">
                         {specialty.roles.map(role => (
                           <span key={role} className="bg-white/5 px-3 py-1.5 rounded-lg border border-border/50 text-sm font-semibold text-foreground/90">{role}</span>
                         ))}
                       </div>
                    </div>
                  </div>
                  <Link href="/jobs" className="flex items-center gap-2 font-extrabold text-white border-t border-white/5 pt-8 hover:text-accent transition-colors group">
                    Explore active roles <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vertical Summary CTA */}
        <section className="py-24 bg-muted/40 overflow-hidden relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="glass-panel py-12 px-8 rounded-2xl">
                   <TrendingUp className="h-8 w-8 text-accent mx-auto mb-4" />
                   <h4 className="text-white font-bold text-lg mb-2">Market Insights</h4>
                   <p className="text-muted-foreground text-sm">We provide salary benchmarking and market intelligence for every project.</p>
                </div>
                <div className="glass-panel py-12 px-8 rounded-2xl">
                   <Target className="h-8 w-8 text-accent mx-auto mb-4" />
                   <h4 className="text-white font-bold text-lg mb-2">Precision Placement</h4>
                   <p className="text-muted-foreground text-sm">A placement record that outperforms industry averages for time-to-fill.</p>
                </div>
                <div className="glass-panel py-12 px-8 rounded-2xl">
                   <BarChart4 className="h-8 w-8 text-accent mx-auto mb-4" />
                   <h4 className="text-white font-bold text-lg mb-2">Scalable Teams</h4>
                   <p className="text-muted-foreground text-sm">From single contractors to full-lifecycle infrastructure squads.</p>
                </div>
             </div>
             
             <div className="mt-24 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-10">Need a custom technical roadmap?</h2>
                <Link 
                  href="/contact" 
                  className="bg-accent px-10 py-5 rounded-full text-xl font-extrabold text-white shadow-xl shadow-accent/25 hover:brightness-110 active:scale-95 transition-all"
                >
                  Book a Strategic Consultation
                </Link>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
