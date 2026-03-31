import Header from "@/components/Header";
import { CheckCircle2, Target, Globe, ShieldCheck, Zap, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    name: "01. Reach Out",
    description: "Submit your technical requirement or job role. We listen for outcomes, not just keywords.",
  },
  {
    name: "02. Connect",
    description: "A 15-minute alignment call with a technical recruiting lead to finalize the delivery roadmap.",
  },
  {
    name: "03. Review",
    description: "Receive a vetted shortlist of top-tier professionals within 24-48 hours. No data-dumping.",
  },
  {
    name: "04. Interview",
    description: "Streamlined scheduling and offer management to ensure elite talent isn't lost to the market.",
  },
  {
    name: "05. Onboard",
    description: "Seamless payroll, compliance, and onboarding integration for contract or permanent hires.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Story Section */}
        <section className="py-24 bg-muted/20 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-6xl tracking-tight leading-10 uppercase italic">
                The CloudInfra <span className="text-accent underline underline-offset-8 decoration-accent/30 tracking-tighter not-italic">Edge</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-9">
                Staffing isn’t about resumes; it’s about risk mitigation. At CloudInfra IT, we bridge the gap 
                between complex technical infrastructure and the high-performing professionals who build it.
              </p>
            </div>
          </div>
        </section>

        {/* Mission/Trust Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                   <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Our Methodology</h2>
                   <p className="text-muted-foreground text-lg mb-8 leading-8">
                     We operate at the intersection of executive search and technical consulting. 
                     By maintaining deep networks in high-sovereignty sectors, we deliver talent that 
                     understands the nuances of zero-trust, CI/CD orchestration, and regulatory compliance.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white font-bold">
                         <CheckCircle2 className="h-5 w-5 text-accent" /> Expert Technical Vetting
                      </div>
                      <div className="flex items-center gap-3 text-white font-bold">
                         <CheckCircle2 className="h-5 w-5 text-accent" /> 24-48 Hour Submission SLA
                      </div>
                      <div className="flex items-center gap-3 text-white font-bold">
                         <CheckCircle2 className="h-5 w-5 text-accent" /> Compliance-First Placement
                      </div>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="glass-panel p-8 rounded-2xl border-2 border-accent/20">
                      <Zap className="h-8 w-8 text-accent mb-4" />
                      <h4 className="text-white font-bold text-lg mb-1">Speed</h4>
                      <p className="text-xs text-muted-foreground">Shortlist delivery in under 48 hours for most IT roles.</p>
                   </div>
                   <div className="glass-panel p-8 rounded-2xl mt-8">
                      <Users className="h-8 w-8 text-accent mb-4" />
                      <h4 className="text-white font-bold text-lg mb-1">Scale</h4>
                      <p className="text-xs text-muted-foreground">From single contractors to entire cloud squads.</p>
                   </div>
                   <div className="glass-panel p-8 rounded-2xl">
                      <Globe className="h-8 w-8 text-accent mb-4" />
                      <h4 className="text-white font-bold text-lg mb-1">US-Based</h4>
                      <p className="text-xs text-muted-foreground">Specializing in US infrastructure and compliance.</p>
                   </div>
                   <div className="glass-panel p-8 rounded-2xl mt-8 border-2 border-white/10">
                      <Target className="h-8 w-8 text-accent mb-4" />
                      <h4 className="text-white font-bold text-lg mb-1">Focus</h4>
                      <p className="text-xs text-muted-foreground">Exclusively Cloud, Cyber, and Data Engineering.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* The 5-Step Process (Upgraded) */}
        <section className="py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="mx-auto max-w-2xl text-center mb-16">
               <h2 className="text-3xl font-bold tracking-tight text-white mb-4 uppercase underline decoration-accent underline-offset-8">Our Process</h2>
               <p className="text-muted-foreground leading-9">Five steps to a high-performing infrastructure hire.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {steps.map((step) => (
                  <div key={step.name} className="glass-panel p-8 rounded-3xl hover:border-accent/40 transition-all border border-border/50">
                     <h3 className="text-lg font-extrabold text-accent mb-4 whitespace-nowrap">{step.name}</h3>
                     <p className="text-sm text-foreground/80 leading-7">{step.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Strategic CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="glass-panel p-16 rounded-[3rem] text-center border-2 border-accent/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <h2 className="text-3xl font-extrabold text-white mb-6 sm:text-4xl">Ready to build the future of infrastructure?</h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                   Whether you are a hiring lead or a senior professional, let’s start the conversation.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                   <Link 
                     href="/contact" 
                     className="bg-accent px-8 py-4 rounded-full font-extrabold text-white shadow-xl shadow-accent/25 hover:brightness-110 transition-all"
                   >
                     Book a Consultation
                   </Link>
                   <Link 
                     href="/jobs" 
                     className="bg-white/5 border border-border px-8 py-4 rounded-full font-bold text-white hover:bg-white/10 transition-all"
                   >
                     Search active roles
                   </Link>
                </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
