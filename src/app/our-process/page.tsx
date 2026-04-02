"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Clock,
  Target, Search, FileSignature, Rocket, Users,
  Zap, Star, Shield
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   PROTOCOL-AS-CODE v2026.04
   CloudInfra IT Delivery Framework
   Design: DataSignify-inspired, Aurora Deep-Black, Technical-Grid
───────────────────────────────────────────────────────────── */

const protocolPhases = [
  {
    id: "01",
    name: "Strategic Alignment",
    tagline: "Architecture-first, alignment-always.",
    icon: Target,
    image: "/images/process-alignment.png",
    scenarioTag: "Phase 01: Scoping",
    desc: "Every deployment begins with a technical architectural audit. We don't just take a job description; we map out the business objective, tech-stack hurdles, and team culture dynamics.",
    employer: "A dedicated Hiring Partner reviews your staffing request and books an alignment call to finalize the delivery roadmap within hours.",
    candidate: "A specialist recruiter reviews your profile and identifies best-fit roles from our active client base — no generic job board spam.",
    bullets: [
      "Requirement scoping call (15–30 min)",
      "Role classification: permanent, contract, trial",
      "Work authorisation verified from day one",
    ],
  },
  {
    id: "02",
    name: "Domain Intelligence",
    tagline: "Specialist networks, not generalist databases.",
    icon: Search,
    image: "/images/process-intelligence.png",
    scenarioTag: "Phase 02: Sourcing",
    desc: "Our IT and Healthcare recruiters are domain-certified experts. We tap into deep referral networks and passive talent pools that traditional job boards never see.",
    employer: "We actively search through technical communities and clinical networks. You get candidates who are qualified, not just available.",
    candidate: "Your profile is matched against active requirements. If there's no current fit, you're prioritised for upcoming projects in your domain.",
    bullets: [
      "Active search — not passive job board waiting",
      "Technical screening by domain experts",
      "Pre-vetted pipeline activation",
    ],
  },
  {
    id: "03",
    name: "Technical Validation",
    tagline: "SLA-backed verification and proof-of-work.",
    icon: Shield,
    image: "/hero-servers.png",
    scenarioTag: "Phase 03: Vetting",
    desc: "We take the risk out of workforce scaling. Every candidate undergoes a rigorous technical and clinical validation process before they reach your desktop.",
    employer: "Shortlist delivered with technical feedback, reference checks, and verified credentials. You see the 'how', not just the 'who'.",
    candidate: "Full brief on client expectations, interview formats, and technical needs. We prepare you to succeed, not just to show up.",
    bullets: [
      "Technical capability assessments",
      "Full background & licence verification",
      "Employment history & reference validation",
    ],
  },
  {
    id: "04",
    name: "Deployment Activation",
    tagline: "Frictionless activation and onboarding.",
    icon: Rocket,
    image: "/cyber-tech.png",
    scenarioTag: "Phase 04: Activation",
    desc: "Speed-to-value is our core metric. We handle the friction of scheduling, contracting, and compliance so your team can focus on the mission.",
    employer: "Interview scheduling, offer negotiation, payroll setup, and compliance paperwork — all managed end-to-end by our team.",
    candidate: "Complete support during the offer stage, including onboarding coordination and first-day logistics. We're with you at every step.",
    bullets: [
      "24–48h shortlist for contract roles",
      "Complete offer & contract coordination",
      "Onboarding & payroll managed at source",
    ],
  },
  {
    id: "05",
    name: "Persistence Protocol",
    tagline: "Engaged tenure through long-term partnership.",
    icon: Zap,
    image: "/hero-perfect.jpg",
    scenarioTag: "Phase 05: Success",
    desc: "We don't disappear after the start date. We maintain a persistent feedback loop to ensure long-term alignment and performance excellence.",
    employer: "Scheduled check-ins at 30, 60, and 90 days. Rapid response to scaling needs or proactive issue resolution.",
    candidate: "Your recruiter stays your point of contact. We surfacing new opportunities and manage extensions or permanent conversions.",
    bullets: [
      "Proactive 30/60/90-day check-ins",
      "Rapid replacement SLA if required",
      "Scale-up support for growing teams",
    ],
  },
];

const trustPoints = [
  { icon: Clock, label: "24–48h Shortlist", sub: "Latency benchmark" },
  { icon: ShieldCheck, label: "Compliance-First", sub: "Verified at source" },
  { icon: Star, label: "SLA Guaranteed", sub: "Outcome-driven" },
];

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white ci-grain relative">
      
      {/* ── Page hero ── */}
      <section className="pt-48 pb-32 bg-[#000000] border-b border-white/8 relative overflow-hidden">
        {/* Layered depth for 2026 feel */}
        <div className="absolute inset-0 ci-grid-bg opacity-[0.035] pointer-events-none" />
        <div className="ci-aurora-blob -top-1/4 left-1/2 -translate-x-1/2" />
        <div className="ci-aurora-blob-2 -bottom-1/2 -right-1/4 ci-aurora-blob-delay opacity-40" />
        <div className="absolute inset-0 ci-radial-glow pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 ci-divider" />

        <div className="ci-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-10 px-6 py-2.5 rounded-full border border-[#a4f07a]/30 bg-[#a4f07a]/6 backdrop-blur-xl ci-float-delay-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] ci-glow-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">The Delivery Protocol v2026</span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,5.6rem)] font-extrabold text-white leading-[1.02] tracking-tighter mb-8">
              Engineered for <br className="hidden sm:block" />
              <span className="text-[#a4f07a] ci-text-glow">Verified Deployment.</span>
            </h1>
            
            <p className="text-xl text-white/80 mt-10 max-w-2xl mx-auto leading-relaxed font-light">
              A documented, SLA-backed framework for mission-critical IT and Healthcare staffing. 
              Not a resume dump. A verified deployment at the speed of infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary group !px-10">
                Activate the Protocol <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="ci-pill-btn ci-pill-btn-outline !px-10">
                Performance Metrics
              </Link>
            </div>
          </motion.div>

          {/* Trust bar */}
          <div className="mt-24 flex flex-wrap justify-center gap-12 lg:gap-20 border-t border-white/5 pt-16">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#a4f07a]/5 border border-[#a4f07a]/20 flex items-center justify-center shrink-0">
                  <tp.icon className="h-4 w-4 text-[#a4f07a] ci-glow-pulse" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-white tracking-tight leading-none mb-1.5">{tp.label}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-black">{tp.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1 bg-[#000000]">
        
        {/* ── Protocol Phases ── */}
        <section className="py-20 lg:py-32">
          <div className="ci-container flex flex-col gap-24 lg:gap-40">
            {protocolPhases.map((phase, i) => {
              const Icon = phase.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={phase.id}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-120px" }}
                  className="ci-card group relative overflow-hidden flex flex-col lg:flex-row hover:border-[#a4f07a]/30 transition-all duration-700"
                >
                  <div className={`flex flex-col lg:flex-row w-full ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Image Side - Higher contrast, lower brightness base */}
                    <div className="w-full lg:w-[48%] relative min-h-[350px] lg:min-h-[560px] overflow-hidden bg-[#0a0a0a]">
                      <motion.div 
                        initial={{ scale: 1.15, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 h-full w-full"
                      >
                        <img 
                          src={phase.image} 
                          alt={phase.name}
                          className="h-full w-full object-cover grayscale brightness-[0.4] group-hover:brightness-75 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        {/* 2026 Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-90" />
                        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-[#000] via-transparent to-transparent hidden lg:block opacity-60`} />
                      </motion.div>
                      
                      {/* Phase Tag - Pinned to visual side */}
                      <div className="absolute top-10 left-10 z-20">
                         <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border border-[#a4f07a]/30 bg-black/80 backdrop-blur-xl ci-glow-pulse">
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">
                              {phase.scenarioTag}
                            </span>
                         </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center relative">
                      {/* Interior decorative grid */}
                      <div className="absolute inset-0 ci-grid-bg-small opacity-[0.025] pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-10">
                          <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#111111] border border-white/12 flex items-center justify-center group-hover:border-[#a4f07a]/60 group-hover:bg-[#a4f07a]/10 transition-all duration-700 ci-float">
                             <Icon className="h-6 w-6 text-[#a4f07a]/80 group-hover:text-[#a4f07a] transition-all duration-500 ci-text-glow" />
                          </div>
                          <span className="text-[14px] font-black uppercase tracking-[0.4em] text-[#a4f07a]/60 font-mono">
                            Protocol::{phase.id}
                          </span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tighter ci-text-glow">
                          {phase.name}
                        </h2>
                        <p className="text-2xl text-[#a4f07a]/50 mb-10 font-light italic leading-relaxed">
                          &ldquo;{phase.tagline}&rdquo;
                        </p>

                        <p className="text-xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl">
                          {phase.desc}
                        </p>

                        {/* Staged Perspectives - Higher contrast for 2026 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-l border-[#a4f07a]/10 pl-8">
                          <div className="reveal-up stagger-1">
                            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a] mb-4 block">Stakeholder Deliverable</span>
                            <p className="text-base text-white leading-relaxed font-light">{phase.employer}</p>
                          </div>
                          <div className="reveal-up stagger-2">
                            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/50 mb-4 block">Deployment Lifecycle</span>
                            <p className="text-base text-white/90 leading-relaxed font-light">{phase.candidate}</p>
                          </div>
                        </div>

                        {/* Deliverables/Proof of Work */}
                        <div className="flex flex-wrap gap-5 border-t border-white/5 pt-12">
                          {phase.bullets.map((b) => (
                            <div key={b} className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#a4f07a]/20 transition-all">
                              <CheckCircle2 className="h-4 w-4 text-[#a4f07a] ci-glow-pulse" />
                              <span className="text-[12px] text-white/50 font-black uppercase tracking-widest">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Bottom CTA — v2026 Band ── */}
        <section className="bg-[#000000] border-t border-white/8 relative overflow-hidden">
          <div className="absolute inset-0 ci-grid-bg opacity-[0.035] pointer-events-none" />
          <div className="ci-aurora-blob -bottom-1/2 left-1/2 -translate-x-1/2 opacity-30" />
          
          <div className="ci-container py-32 lg:py-48 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto ci-cta-band p-16 lg:p-24 backdrop-blur-2xl"
            >
              <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-[1.02] mb-10">
                Ready to activate the <br />
                <span className="text-[#a4f07a] ci-text-glow italic">Protocol Engine?</span>
              </h2>
              <p className="text-xl text-white/70 mt-8 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
                Stop hiring through resume-dumps. Start deploying through methodology. 
                Our high-speed staffing engine is pre-staged for your next mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/consult-with-us"
                  className="ci-pill-btn ci-pill-btn-primary !px-16 !py-5 text-base shadow-[0_0_50px_rgba(164,240,122,0.3)]"
                >
                  Request Architecture Call <ArrowRight className="h-5 w-5 ml-3" />
                </Link>
                <Link
                  href="/jobs"
                  className="ci-pill-btn ci-pill-btn-outline !px-16 !py-5 text-base"
                >
                  Join the Network
                </Link>
              </div>

              <div className="mt-24 flex flex-wrap items-center justify-center gap-16 grayscale brightness-125 opacity-20">
                {[
                  { icon: Zap, text: "IT Sprints" },
                  { icon: Users, text: "Hybrid Models" },
                  { icon: Target, text: "Full Cycle" }
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="h-6 w-6" />
                    <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
