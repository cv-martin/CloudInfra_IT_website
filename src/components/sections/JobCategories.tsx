"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { Server, Stethoscope, Lock, Database, Settings, Code2, ArrowRight } from "lucide-react";

/**
 * JobCategories — Vertical selection hub.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 */

const categories = [
  {
    icon: Server,
    title: "Cloud & DevOps",
    count: "120+",
    description: "AWS, Azure, Kubernetes, IaC engineers and architects.",
    tags: ["AWS", "Terraform", "K8s"],
    href: "/jobs?category=cloud",
  },
  {
    icon: Stethoscope,
    title: "Healthcare IT",
    count: "85+",
    description: "Epic, Cerner, HIPAA and clinical system specialists.",
    tags: ["Epic", "Cerner", "HL7"],
    href: "/jobs?category=healthcare",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    count: "60+",
    description: "SOC2, HITRUST, and pen testing professionals.",
    tags: ["SOC2", "SIEM", "Zero Trust"],
    href: "/jobs?category=cyber",
  },
  {
    icon: Database,
    title: "Data & AI",
    count: "75+",
    description: "Data engineers, ML engineers, and AI platform leads.",
    tags: ["Python", "MLOps", "Snowflake"],
    href: "/jobs?category=data",
  },
  {
    icon: Settings,
    title: "ERP & Systems",
    count: "40+",
    description: "SAP, Oracle, and enterprise platform implementers.",
    tags: ["SAP", "Oracle", "S/4HANA"],
    href: "/jobs?category=erp",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    count: "95+",
    description: "Full-stack, backend, and distributed systems engineers.",
    tags: ["React", "Java", "Go"],
    href: "/jobs?category=swe",
  },
];

export default function JobCategories() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
      
      <div className="ci-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#a4f07a]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Market Segments</span>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Vetted Expertise.</h2>
          </div>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] group">
            All active roles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                href={cat.href}
                className="ci-card group p-8 flex flex-col h-full hover:border-[#a4f07a]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="h-12 w-12 rounded-xl bg-[#a4f07a]/5 border border-[#a4f07a]/10 flex items-center justify-center group-hover:bg-[#a4f07a]/10 group-hover:border-[#a4f07a]/20 transition-all">
                    <cat.icon className="h-5 w-5 text-[#a4f07a]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a] bg-[#a4f07a]/10 px-3 py-1 rounded">
                    {cat.count} Roles
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-tight group-hover:text-[#a4f07a] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[15px] text-white/40 mb-8 leading-relaxed font-light">{cat.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-white/10 border border-white/5 bg-white/5 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
