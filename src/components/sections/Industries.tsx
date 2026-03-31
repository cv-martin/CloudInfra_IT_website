"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Industries — All 10 specialties.
 * White background — visual rest between the dark process and dark CTA.
 * Left: large editorial headline with accent number.
 * Right: pill-style industry tags — scan-friendly and visually interesting.
 */

const industries = [
  { title: "Information Technology",    href: "/information-technology",   accent: "text-[#06B6D4]" },
  { title: "Hospitals & Healthcare",    href: "/hospitals-and-healthcare", accent: "text-emerald-600" },
  { title: "Engineering",               href: "/engineering",              accent: "text-gray-700" },
  { title: "Banking & Finance",         href: "/banking-and-finance",      accent: "text-gray-700" },
  { title: "Manufacturing & Production",href: "/manufacturing-and-production", accent: "text-gray-700" },
  { title: "Oil & Gas",                 href: "/oil-gas",                  accent: "text-gray-700" },
  { title: "Pharmaceutical",            href: "/pharmaceutical",            accent: "text-gray-700" },
  { title: "Legal",                     href: "/legal-industry",            accent: "text-gray-700" },
  { title: "Aerospace",                 href: "/aerospace-industry",        accent: "text-gray-700" },
  { title: "Defence & Space",           href: "/defence-and-space",         accent: "text-gray-700" },
];

export default function Industries() {
  return (
    <section className="bg-white ci-section ci-divider">
      <div className="ci-container">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left — editorial intro (2/5) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
            <span className="ci-label">Industries We Serve</span>

            {/* Large accent number */}
            <div className="flex items-end gap-3 mt-3 mb-5">
              <span className="text-[80px] font-black text-gray-100 leading-none select-none">10</span>
              <div className="pb-2">
                <p className="text-lg font-bold text-gray-900 leading-tight">industries.</p>
                <p className="text-lg font-bold text-gray-900 leading-tight">One trusted partner.</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              From Information Technology to Healthcare, Banking to Aerospace — we place professionals across the sectors that keep the US economy moving. Each practice is led by recruiters with direct industry experience.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Every search begins with a detailed requirements briefing. We send qualified, compliance-checked candidates matched to your specific technical needs — not generic applicants.
            </p>
            <Link
              href="/consult-with-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline group"
            >
              Talk to an industry specialist
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — industry tags grid (3/5) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={ind.href}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-white text-sm font-semibold hover:border-[#06B6D4]/40 hover:bg-[#F0FDFF] hover:text-[#06B6D4] transition-all group ${ind.accent}`}
                  >
                    {ind.title}
                    <ArrowRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-2">Primary specialties highlighted in colour. All others place both IT and Healthcare professionals into sector-adjacent roles.</p>
              <Link
                href="/specialties"
                className="text-xs text-gray-500 hover:text-[#06B6D4] hover:underline transition-colors"
              >
                View all specialty pages →
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
