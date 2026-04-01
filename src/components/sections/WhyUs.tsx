"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Users, Zap, CheckCircle } from "lucide-react";

const strengths = [
  {
    icon: Building2,
    title: "US-Based, W2 Only",
    desc: "Every placement is a US professional on our W2 payroll. Zero offshore risk, zero 1099 liability for you.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA & SOC2 Vetted",
    desc: "Candidates are screened for compliance before the first interview. Not ticked on a form — actually verified.",
  },
  {
    icon: Users,
    title: "Domain Specialists",
    desc: "Our recruiters are former engineers and healthcare IT managers — not general staffing agents reading spec sheets.",
  },
  {
    icon: Zap,
    title: "48-Hour Guarantee",
    desc: "You receive a scored shortlist within 48 hours of briefing or we escalate internally at no additional charge.",
  },
];

const proofPoints = [
  "Purpose-built for medical and IT staffing",
  "Domain experts running every search",
  "W2 only — zero offshore or 1099 risk",
  "48-hour shortlist, every time",
  "HIPAA, SOC2, and FedRAMP ready",
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#020510]">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-3">Why CloudInfra IT</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Built for <span className="text-[#06B6D4]">Healthcare</span> &{" "}
              <span className="text-[#06B6D4]">Enterprise IT</span> — not everyone else
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              We are not a generalist staffing firm. Our recruiters are former engineers and healthcare IT leaders who understand what HIPAA compliance, cloud-native architecture, and EHR implementation experience actually looks like in practice.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {proofPoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="h-4 w-4 text-[#06B6D4] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/employers"
              className="inline-flex items-center gap-2 bg-[#06B6D4] text-[#020510] font-bold px-7 py-3 rounded-full hover:bg-[#00d4f0] transition-all text-sm"
            >
              See How It Works <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Right: Strength cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6 border border-white/8 bg-white/[0.03] hover:border-[#06B6D4]/30 hover:bg-[#06B6D4]/5 transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-[#06B6D4]/15 flex items-center justify-center mb-4 group-hover:bg-[#06B6D4]/25 transition-colors">
                  <s.icon className="h-5 w-5 text-[#06B6D4]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
