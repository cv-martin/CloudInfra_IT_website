import { Users, Code2, ShieldCheck, Zap, ArrowRight, MessageSquare } from "lucide-react";
import { TransitionLink as Link } from "@/components/TransitionLink";

const models = [
  {
    name: "Contract Staffing",
    description: "Scale your team quickly for critical projects or peak periods. No long-term overhead.",
    icon: Zap,
  },
  {
    name: "Contract-to-Hire",
    description: "Evaluate cultural and technical fit before committing to a permanent hire.",
    icon: Users,
  },
  {
    name: "Direct Hire",
    description: "Build your core team with elite professionals vetted for long-term impact.",
    icon: ShieldCheck,
  },
];

export default function EmployersPage() {
  return (
    <div className="flex flex-col min-h-screen">
            <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-muted/20 border-b border-border/50 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Talent on demand. <span className="text-accent underline underline-offset-8 decoration-accent/30 tracking-tighter italic">Infrastructure by design.</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-9">
                Building a modern enterprise requires more than just resumes. We provide vetted specialists 
                in Cloud, Cyber, and Data Infrastructure who understand the high stakes of digital sovereignty.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                 <Link
                   href="/contact"
                   className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95"
                 >
                   <MessageSquare className="h-5 w-5" />
                   Book a Consultation
                 </Link>
                 <Link
                   href="#models"
                   className="flex items-center gap-2 rounded-full bg-white/5 border border-border px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
                 >
                   View Staffing Models
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop Cards */}
        <section className="py-24" id="models">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest text-[0.7rem]">Staffing Options</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flexible hiring built for speed.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {models.map((model) => (
                <div key={model.name} className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-all">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-white mb-6">
                      <model.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{model.name}</h3>
                    <p className="mt-4 text-muted-foreground leading-7">
                      {model.description}
                    </p>
                  </div>
                  <Link href="/contact" className="mt-8 text-accent font-bold flex items-center gap-2 hover:underline">
                    Request Talent <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The CloudInfra Advantage */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-6">The CloudInfra Advantage</h2>
                <div className="space-y-6">
                   <div className="flex gap-4">
                     <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none">
                       <Zap className="h-4 w-4" />
                     </div>
                     <div>
                       <h4 className="text-white font-bold">24-48 Hour Shortlist</h4>
                       <p className="text-muted-foreground text-sm mt-1">We don’t browse databases. We active recruit from a vetted network of trusted engineers.</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none">
                       <Code2 className="h-4 w-4" />
                     </div>
                     <div>
                       <h4 className="text-white font-bold">Technical Guardrails</h4>
                       <p className="text-muted-foreground text-sm mt-1">Every candidate is vetted by a technical lead, not just a keyword filter.</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none">
                       <ShieldCheck className="h-4 w-4" />
                     </div>
                     <div>
                       <h4 className="text-white font-bold">Compliance-Ready</h4>
                       <p className="text-muted-foreground text-sm mt-1">Full support for EEO, AA, and industry-specific background check requirements.</p>
                     </div>
                   </div>
                </div>
              </div>
              <div className="glass-panel p-10 rounded-3xl border-2 border-accent/20">
                 <h3 className="text-2xl font-bold text-white mb-4">Enterprise Pricing Signals</h3>
                 <p className="text-muted-foreground leading-7 mb-8">
                   We provide transparent market rates and scale-based discount models for long-term project partners.
                 </p>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 text-white font-semibold">
                      <ArrowRight className="h-4 w-4 text-accent" /> Custom project-based rates
                    </li>
                    <li className="flex items-center gap-3 text-white font-semibold">
                      <ArrowRight className="h-4 w-4 text-accent" /> Volume hiring discounts
                    </li>
                    <li className="flex items-center gap-3 text-white font-semibold">
                      <ArrowRight className="h-4 w-4 text-accent" /> Retained search options
                    </li>
                 </ul>
                 <Link 
                   href="/contact" 
                   className="block w-full text-center bg-white text-accent px-6 py-4 rounded-full font-extrabold text-lg hover:bg-slate-100 transition-colors shadow-lg"
                 >
                   Get a Custom Quote
                 </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
