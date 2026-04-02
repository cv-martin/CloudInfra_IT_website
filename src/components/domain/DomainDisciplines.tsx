"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Discipline {
  icon: LucideIcon;
  label: string;
  tags: string[];
}

interface DomainDisciplinesProps {
  category: string;
  title: string;
  description: string;
  disciplines: Discipline[];
}

export default function DomainDisciplines({
  category,
  title,
  description,
  disciplines,
}: DomainDisciplinesProps) {
  return (
    <section className="bg-black relative overflow-hidden py-24 lg:py-32">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
      
      <div className="ci-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#a4f07a]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">
              {category}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-white/45 mt-6 max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="ci-card p-10 group relative overflow-hidden flex flex-col h-full hover:bg-white/[0.02]"
              >
                {/* Interior Background Motif */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#a4f07a]/[0.03] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:border-[#a4f07a]/40 transition-colors">
                  <Icon className="h-7 w-7 text-[#a4f07a] ci-text-glow" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight relative z-10">
                  {d.label}
                </h3>
                
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {d.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-black tracking-widest uppercase text-white/35 bg-white/[0.04] border border-white/5 px-3 py-1.5 rounded-lg group-hover:border-white/10 group-hover:text-white/50 transition-all transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
