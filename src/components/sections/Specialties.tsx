"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Specialties — IT and Healthcare with photo headers.
 * Each domain panel opens with a real professional photo,
 * then provides content below — makes each domain feel real and relatable.
 */

const itSkills = [
  "Cloud Architecture", "DevOps / SRE", "Data Engineering", "Cybersecurity",
  "Software Development", "ERP & SAP", "Web & App Dev", "Mobile Applications",
];

const healthRoles = [
  "Physicians & Surgeons", "Registered Nurses (RN)", "Licensed Practical Nurses",
  "Healthcare IT & EHR", "Medical Coders & Billers", "Clinical Administrators",
  "Allied Health Professionals", "Pharmacy & Life Sciences",
];

export default function Specialties() {
  return (
    <section className="bg-white ci-section ci-divider">
      <div className="ci-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-2xl"
        >
          <span className="ci-label">Our Primary Specialties</span>
          <h2 className="text-[var(--text-h2)] font-bold text-gray-900 leading-tight mt-1">
            Deep expertise in two domains
          </h2>
          <p className="text-base text-gray-500 mt-4 leading-relaxed">
            We are not a generalist firm. Our recruiters have direct experience in their domain — understanding the technical roles, regulatory requirements, and nuances that matter for each placement.
          </p>
        </motion.div>

        {/* Two domain panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* IT Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-[#F8F9FB]"
          >
            {/* Photo header */}
            <div className="relative h-52 w-full">
              <Image
                src="/CloudInfra_IT_website/img-it-professional.png"
                alt="IT professional and software engineer working at a modern workstation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Scrim + label */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120]/80" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#06B6D4]">
                  Information Technology
                </span>
              </div>
              {/* Cyan left accent line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#06B6D4]" />
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                Cloud, DevOps, Data, Security &amp; Software Engineering
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                IT encompasses software, hardware, services, and R&amp;D. As the landscape evolves rapidly, companies need a talent partner that truly understands technical roles — not just keywords on a resume.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                We maintain a diverse, qualified IT talent pool through extensive networks — filling multiple roles simultaneously while saving clients time and cost.
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {itSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium text-[#0891b2] bg-[#E0F7FA] px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/information-technology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline group"
              >
                View IT Staffing Solutions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Healthcare Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-[#F8F9FB]"
          >
            {/* Photo header */}
            <div className="relative h-52 w-full">
              <Image
                src="/CloudInfra_IT_website/img-healthcare-professional.png"
                alt="Healthcare professional — nurse or physician in a modern hospital setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Scrim + label */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120]/80" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Hospitals &amp; Healthcare
                </span>
              </div>
              {/* Emerald left accent line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-emerald-500" />
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                Clinical, Allied Health, Healthcare IT &amp; Administration
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                The health economy delivers curative, preventive, rehabilitative, and palliative care. Demand for qualified physicians, nurses, and health IT professionals consistently outpaces supply.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Our Healthcare team uses targeted strategies — referrals and deep network sourcing — evaluating both technical qualification and cultural fit.
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {healthRoles.map(role => (
                  <span
                    key={role}
                    className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <Link
                href="/hospitals-and-healthcare"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline group"
              >
                View Healthcare Staffing Solutions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
