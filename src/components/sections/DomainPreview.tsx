"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * DomainPreview — Slim two-panel teaser for IT and Healthcare.
 *
 * ONE job: show the two primary specialties exist, direct to their pages.
 * Full role lists, skill tags, partner descriptions → /information-technology
 * and /hospitals-and-healthcare. Not here.
 */

export default function DomainPreview() {
  return (
    <section className="bg-white ci-divider">
      <div className="ci-container py-14 lg:py-20">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="ci-label">Primary Specialties</span>
          <h2 className="text-[var(--text-h2)] font-bold text-gray-900 mt-1 leading-tight">
            IT and Healthcare — our two domains.
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl leading-relaxed">
            We staff with domain-specialist recruiters — not generalists. Every search is handled by someone who understands the role, the technology, and the compliance requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* IT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-200"
          >
            {/* Photo */}
            <div className="relative h-52">
              <Image
                src="/CloudInfra_IT_website/img-it-professional.png"
                alt="IT professional — software engineer at workstation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4]">Information Technology</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-[#F8F9FB]">
              <p className="text-sm font-semibold text-gray-800 mb-1">Cloud · DevOps · Data · Security · Software Engineering</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                From cloud architects and DevOps engineers to ERP consultants and mobile developers — we staff across the full IT spectrum for permanent, contract, and project-based engagements.
              </p>
              <Link
                href="/information-technology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline group/link"
              >
                Explore IT Staffing
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Healthcare */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-200"
          >
            {/* Photo */}
            <div className="relative h-52">
              <Image
                src="/CloudInfra_IT_website/img-healthcare-professional.png"
                alt="Healthcare professional — nurse in clinical setting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Hospitals &amp; Healthcare</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-[#F8F9FB]">
              <p className="text-sm font-semibold text-gray-800 mb-1">Physicians · Nurses · Allied Health · Healthcare IT · Administration</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Demand for qualified clinical and health IT professionals consistently outpaces supply. We source through deep referral networks, with thorough background checks and compliance verification.
              </p>
              <Link
                href="/hospitals-and-healthcare"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline group/link"
              >
                Explore Healthcare Staffing
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* All industries link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            We also staff across Engineering, Banking, Manufacturing, Pharma, Legal, Aerospace and more.{" "}
            <Link href="/services" className="text-gray-600 font-semibold hover:text-[#06B6D4] transition-colors hover:underline">
              View all 10 industries →
            </Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
