"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * AudiencePaths — Replaces the old WhoWeServe.
 *
 * ONE job: route the two audience types to their correct path.
 * No bullet lists, no paragraphs, no stats.
 * Just two clear doors — one for candidates, one for employers.
 */

export default function AudiencePaths() {
  return (
    <section className="bg-white ci-divider">
      <div className="ci-container py-16 lg:py-20">

        {/* Stats — slim single row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-14 pb-12 border-b border-gray-100"
        >
          {[
            { n: "2,400+", l: "Professionals placed" },
            { n: "48h",    l: "Avg. time to shortlist" },
            { n: "98%",    l: "Client retention rate" },
            { n: "10",     l: "Industry specialties" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-2xl font-black text-gray-900">{s.n}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.l}</p>
            </div>
          ))}
        </motion.div>

        {/* Two audience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Candidate path */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative rounded-2xl overflow-hidden bg-[#F0FDFF] border border-[#06B6D4]/20 p-8 flex flex-col gap-5"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#06B6D4]">
                IT &amp; Healthcare Professionals
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 leading-snug">
                Looking for your next role?
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                We place IT and Healthcare professionals in permanent, contract, and temporary roles across the USA. Your recruiter responds within 24 hours.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" />
              H-1B · OPT · STEM OPT · Green Card · US Citizen — all supported
            </div>
            <Link
              href="/job-opportunities"
              className="self-start inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#0891b2] transition-colors group mt-auto"
            >
              Browse Open Positions
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Employer path */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden bg-gray-950 border border-white/10 p-8 flex flex-col gap-5"
          >
            {/* Subtle image overlay */}
            <div className="absolute inset-0">
              <Image
                src="/img-team-office.png"
                alt=""
                fill
                className="object-cover opacity-10"
                sizes="50vw"
              />
            </div>
            <div className="relative">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                Healthcare &amp; Technology Employers
              </span>
              <h2 className="text-2xl font-bold text-white mt-2 leading-snug">
                Need to hire skilled talent?
              </h2>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                We deliver a curated shortlist of pre-screened, compliance-checked candidates within 48 hours. Permanent, contract, or temp — fully managed.
              </p>
            </div>
            <Link
              href="/consult-with-us"
              className="relative self-start inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors group mt-auto"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
