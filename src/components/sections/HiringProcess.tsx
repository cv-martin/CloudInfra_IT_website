"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Zap, FileCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Briefing Call",
    desc: "We learn your exact stack, size, and compliance needs — HIPAA, SOC2, FedRAMP. Our team speaks the same language as your engineers.",
    icon: Clock,
  },
  {
    step: "02",
    title: "Expert Vetting",
    desc: "Domain specialists (ex-CloudOps engineers, healthcare IT leaders) screen every candidate technically. No resume padding gets through.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "48h Shortlist",
    desc: "Receive a scored candidate shortlist with vetting reports within 48 hours. Documented skills, compliance fit, and culture notes included.",
    icon: Zap,
  },
  {
    step: "04",
    title: "W2 Onboarding",
    desc: "Payroll, credentialing, benefits, and compliance fully managed by CloudInfra IT. Your team hits the ground running from day one.",
    icon: FileCheck,
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-black ci-section relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#a4f07a]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Delivery Protocol</span>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
            How we hire for <span className="opacity-40 italic">Industry Leaders</span>
          </h2>
          <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
            Every search is led by domain experts — not generalist recruiters. Compliance is verified at every stage of the pipeline.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/5 z-0" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 flex flex-col group items-start"
            >
              {/* Step Circle */}
              <div className="h-10 w-10 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:border-[#a4f07a]/40 group-hover:bg-[#a4f07a]/5 transition-all">
                <span className="text-[11px] font-black text-[#a4f07a] tracking-tighter">{item.step}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light mb-6">{item.desc}</p>
              
              <div className="mt-auto flex items-center gap-2.5">
                 <item.icon className="h-4 w-4 text-white/10 group-hover:text-[#a4f07a]/60 transition-colors" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/10 group-hover:text-white/20 transition-colors">Phase Protocol {item.step}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
             <div className="h-1.5 w-1.5 rounded-full bg-[#a4f07a] ci-glow animate-pulse" />
             <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/20">Secure Data Transmission Active</p>
          </div>
          <Link
            href="/consult-with-us"
            className="ci-pill-btn ci-pill-btn-primary group"
          >
            Start Your Hiring Brief <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
