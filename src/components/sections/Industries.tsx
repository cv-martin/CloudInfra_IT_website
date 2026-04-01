"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
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
    <section className="bg-black ci-section relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left — editorial intro (2/5) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#a4f07a]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Global Verticals</span>
            </div>

            {/* Large accent number */}
            <div className="flex items-end gap-4 mt-3 mb-8">
              <span className="text-[100px] font-black text-[#a4f07a]/[0.05] leading-none select-none tracking-tighter">10</span>
              <div className="pb-3">
                <p className="text-2xl font-bold text-white tracking-tight leading-none">specialties.</p>
                <p className="text-base font-medium text-white/40 mt-1 leading-none">One delivery engine.</p>
              </div>
            </div>

            <p className="text-base text-white/40 leading-relaxed font-light mb-6">
              From Cloud Infrastructure to Clinical Care — we source professionals across the sectors that drive the North American economy.
            </p>
            <p className="text-sm text-white/20 leading-relaxed mb-10 font-light">
              Every practice is led by recruiters with direct industry experience. No generic applicants — only vetted, compliance-checked talent matched to your technical environment.
            </p>
            
            <Link
              href="/consult-with-us"
              className="ci-pill-btn ci-pill-btn-outline group"
            >
              Consult a Specialist
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                    className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white/70 hover:border-[#a4f07a] hover:bg-[#a4f07a]/5 hover:text-[#a4f07a] transition-all group`}
                  >
                    {ind.title}
                    <ArrowRight className="h-4 w-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-4">Coverage Architecture</p>
              <p className="text-xs text-white/40 mb-6 font-light leading-relaxed">
                Primary intake nodes include both IT and Healthcare clusters. Sector-adjacent roles are managed through our specialized partner network.
              </p>
              <Link
                href="/specialties"
                className="text-xs font-bold text-[#a4f07a] hover:underline underline-offset-4 transition-all"
              >
                Browse full specialty index →
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
