"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Server, Stethoscope, Lock, Database, Settings, Code2, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Server,
    title: "Cloud & DevOps",
    count: "120+",
    description: "AWS, Azure, Kubernetes, IaC engineers and architects.",
    tags: ["AWS", "Azure", "Kubernetes", "Terraform"],
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    countColor: "text-blue-500 bg-blue-50",
    href: "/jobs?category=cloud",
  },
  {
    icon: Stethoscope,
    title: "Healthcare IT",
    count: "85+",
    description: "Epic, Cerner, HIPAA and clinical system specialists.",
    tags: ["Epic", "Cerner", "HIPAA", "HL7"],
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    countColor: "text-emerald-600 bg-emerald-50",
    href: "/jobs?category=healthcare",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    count: "60+",
    description: "SOC2, HITRUST, and pen testing professionals.",
    tags: ["SOC2", "HITRUST", "SIEM", "Zero Trust"],
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    countColor: "text-red-500 bg-red-50",
    href: "/jobs?category=cyber",
  },
  {
    icon: Database,
    title: "Data & AI",
    count: "75+",
    description: "Data engineers, ML engineers, and AI platform leads.",
    tags: ["Python", "Databricks", "MLOps", "Snowflake"],
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    countColor: "text-purple-600 bg-purple-50",
    href: "/jobs?category=data",
  },
  {
    icon: Settings,
    title: "ERP & Systems",
    count: "40+",
    description: "SAP, Oracle, and enterprise platform implementers.",
    tags: ["SAP", "Oracle", "ServiceNow", "Workday"],
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    countColor: "text-amber-600 bg-amber-50",
    href: "/jobs?category=erp",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    count: "95+",
    description: "Full-stack, backend, and distributed systems engineers.",
    tags: ["React", "Java", "Go", "Microservices"],
    iconColor: "text-[#06B6D4]",
    iconBg: "bg-[#06B6D4]/10",
    countColor: "text-[#06B6D4] bg-[#06B6D4]/10",
    href: "/jobs?category=swe",
  },
];

export default function JobCategories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-2">Browse by Specialty</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">IT & Medical roles across the USA</h2>
          </div>
          <Link href="/jobs" className="text-sm font-semibold text-[#06B6D4] hover:underline flex items-center gap-1 shrink-0">
            All 400+ roles <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white hover:border-[#06B6D4]/30 hover:shadow-lg p-6 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                    <cat.icon className={`h-6 w-6 ${cat.iconColor}`} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${cat.countColor}`}>
                    {cat.count} Roles
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#06B6D4] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
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
