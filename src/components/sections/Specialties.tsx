"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
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
    <section className="bg-black ci-section relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#a4f07a]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Our Core Infrastructure</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Domain Expertise in <span className="opacity-40 italic">Two Verticals</span>
          </h2>
          <p className="text-lg text-white/40 mt-6 leading-relaxed font-light">
            We are not a generalist firm. Each placement is handled by recruiters with direct industry experience who understand the technical roles and regulatory nuances.
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
            className="ci-card group overflow-hidden"
          >
            {/* Photo header */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/img-it-professional.png"
                alt="Information Technology infrastructure visualization"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Scrim + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a4f07a] bg-black/60 backdrop-blur-md px-3 py-1 rounded">
                  Information Technology
                </span>
              </div>
              {/* Left accent line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#a4f07a] ci-glow" />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white leading-snug mb-4 tracking-tight group-hover:text-[#a4f07a] transition-colors">
                Cloud, DevOps, Security &amp;<br />Software Engineering
              </h3>
              <p className="text-[15px] text-white/40 leading-relaxed mb-8 font-light">
                We maintain a diverse, qualified IT talent pool through extensive networks — sourcing top-tier engineering talent for permanent and contract-based engagements.
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {itSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-[10px] font-bold uppercase tracking-widest text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:border-[#a4f07a]/40 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/information-technology"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] hover:underline underline-offset-8 transition-all group/link"
              >
                Explore IT Capabilities
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Healthcare Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="ci-card group overflow-hidden"
          >
            {/* Photo header */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/img-healthcare-professional.png"
                alt="Healthcare professional in hospital setting"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Scrim + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded">
                  Hospitals &amp; Healthcare
                </span>
              </div>
              {/* Left accent line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-white/10" />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white leading-snug mb-4 tracking-tight group-hover:text-white/90 transition-colors">
                Clinical, Allied Health &amp;<br />Health IT Administration
              </h3>
              <p className="text-[15px] text-white/40 leading-relaxed mb-8 font-light">
                Evaluative and targeted sourcing strategies for clinical professionals. Full compliance verification and USCIS support for every candidate placement.
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {healthRoles.map(role => (
                  <span
                    key={role}
                    className="text-[10px] font-bold uppercase tracking-widest text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:border-white/30 hover:text-white transition-all"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <Link
                href="/hospitals-and-healthcare"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:underline underline-offset-8 transition-all group/link"
              >
                Explore Healthcare Capabilities
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
