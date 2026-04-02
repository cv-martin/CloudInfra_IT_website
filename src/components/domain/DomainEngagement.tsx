"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/TransitionLink";

interface EngagementModel {
  title: string;
  scenario: string;
  detail: string;
}

interface DomainEngagementProps {
  category: string;
  title: string;
  models: EngagementModel[];
}

export default function DomainEngagement({
  category,
  title,
  models,
}: DomainEngagementProps) {
  return (
    <section className="bg-[#050505] border-y border-white/5 relative overflow-hidden py-24 lg:py-32">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg-small opacity-[0.02] pointer-events-none" />
      
      <div className="ci-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="ci-card p-12 bg-black/40 backdrop-blur-sm relative overflow-hidden group hover:border-[#a4f07a]/30 transition-all"
            >
              <div className="absolute inset-0 ci-grid-bg opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-8 block relative z-10">
                {m.title}
              </p>
              <p className="text-xl lg:text-2xl font-bold text-white/50 italic mb-6 leading-snug relative z-10 group-hover:text-white transition-colors duration-500">
                &ldquo;{m.scenario}&rdquo;
              </p>
              <p className="text-base lg:text-lg text-white/40 leading-relaxed font-light relative z-10 group-hover:text-white/60 transition-colors duration-500">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/custom-services-provided" 
            className="text-xs font-black uppercase tracking-[0.4em] text-white/20 hover:text-[#a4f07a] transition-all hover:tracking-[0.5em] duration-500"
          >
            View Full Service Architecture <ArrowRight className="h-4 w-4 inline ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
