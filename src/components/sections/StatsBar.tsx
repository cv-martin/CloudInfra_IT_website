"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: "2,400+", label: "Placements Made",    sub: "across IT & Healthcare" },
  { value: "48h",    label: "Shortlist Delivery",  sub: "avg. time-to-candidates" },
  { value: "98%",    label: "Retention Rate",      sub: "year over year" },
  { value: "12",     label: "Industry Verticals",  sub: "specialized domains" },
];

export default function StatsBar() {
  return (
    <section className="bg-black relative overflow-hidden py-16">
      <div className="absolute inset-0 ci-grid-bg opacity-[0.025] pointer-events-none" />

      <div className="ci-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ci-stat-board p-8 lg:p-12"
        >
          {/* Board header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#a4f07a] ci-glow-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#a4f07a]">
                Performance Metrics — Live
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/20 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a4f07a]/40 inline-block" />
              All verified placements · Farmers Branch TX
            </div>
          </div>

          {/* Stat cells — animated counters fire on scroll into view */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="ci-stat-cell p-6 lg:p-8 group cursor-default"
              >
                <div className="text-4xl lg:text-5xl font-black text-[#a4f07a] leading-none tracking-tighter ci-text-glow mb-4">
                  <AnimatedCounter target={s.value} duration={1600} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 mb-1.5 group-hover:text-white/70 transition-colors">
                  {s.label}
                </div>
                <div className="text-[11px] text-white/25 font-light leading-relaxed">
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
