"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2,400+", label: "Professionals Placed", sub: "across IT & Healthcare" },
  { value: "48h", label: "Avg. Time-to-Shortlist", sub: "from brief to candidates" },
  { value: "98%", label: "Client Retention", sub: "year over year" },
  { value: "HIPAA+", label: "Compliance Ready", sub: "SOC2, FedRAMP certified searches" },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-[#06B6D4]">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl lg:text-5xl font-black text-white mb-1 font-sans">{s.value}</div>
              <div className="text-sm font-bold text-white/90 mb-0.5">{s.label}</div>
              <div className="text-xs text-white/60">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
