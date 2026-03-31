"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Zap, FileCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Briefing Call",
    desc: "We learn your exact stack, size, and compliance needs — HIPAA, SOC2, FedRAMP. Our team speaks the same language as your engineers.",
    icon: Clock,
    gradient: "from-[#06B6D4] to-blue-500",
  },
  {
    step: "02",
    title: "Expert Vetting",
    desc: "Domain specialists (ex-CloudOps engineers, healthcare IT leaders) screen every candidate technically. No resume padding gets through.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "03",
    title: "48h Shortlist",
    desc: "Receive a scored candidate shortlist with vetting reports within 48 hours. Documented skills, compliance fit, and culture notes included.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    step: "04",
    title: "W2 Onboarding",
    desc: "Payroll, credentialing, benefits, and compliance fully managed by CloudInfra IT. Your team hits the ground running from day one.",
    icon: FileCheck,
    gradient: "from-purple-500 to-violet-500",
  },
];

export default function HiringProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-2">For Employers</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Hire for You</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Every search is led by domain experts — not generalist recruiters. Compliance is never an afterthought.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#06B6D4]/20 via-slate-200 to-purple-500/20 z-0" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative z-10 flex flex-col items-start"
            >
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg shrink-0`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <span className="text-xs font-black text-gray-300 mb-2 tracking-widest">STEP {item.step}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 text-center"
        >
          <Link
            href="/employers"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-gray-700 transition-all"
          >
            Start Your Hiring Brief <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
