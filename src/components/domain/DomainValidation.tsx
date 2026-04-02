"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface ValidationPoint {
  text: string;
}

interface DomainValidationProps {
  category: string;
  title: string;
  description: string;
  points: ValidationPoint[];
  imageSrc: string;
  imageAlt: string;
  cardTitle: string;
}

export default function DomainValidation({
  category,
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  cardTitle,
}: DomainValidationProps) {
  return (
    <section className="bg-black relative overflow-hidden py-24 lg:py-32">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.01] pointer-events-none" />
      
      <div className="ci-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#a4f07a]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a]">
                {category}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-10">
              {title}
            </h2>
            
            <p className="text-lg lg:text-xl text-white/45 leading-relaxed font-light mb-14 max-w-xl">
              {description}
            </p>
            
            <div className="ci-card p-10 bg-white/[0.02] border-white/10 relative overflow-hidden group">
              {/* Background grid */}
              <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity" />
              
              <h3 className="text-sm font-bold text-white mb-8 relative z-10 opacity-70">
                {cardTitle}
              </h3>
              
              <div className="grid grid-cols-1 gap-6 relative z-10">
                {points.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 shrink-0 rounded-md bg-[#a4f07a]/15 border border-[#a4f07a]/30 flex items-center justify-center mt-0.5 shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#a4f07a]" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                      {p.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — High Impact Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="relative h-[340px] lg:h-[440px] rounded-[3rem] overflow-hidden border border-white/10 ci-card group shadow-2xl">
              <div className="absolute inset-0 ci-grid-bg-small opacity-[0.05] z-10 pointer-events-none" />
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover grayscale brightness-[0.4] contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
            </div>

            {/* Specialized Contact Node */}
            <div className="ci-card p-12 bg-[#0b0b0b] relative overflow-hidden group hover:border-[#a4f07a]/40 transition-colors cursor-default">
              <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-6 block relative z-10">
                Direct Domain Acquisition Node
              </p>
              <a 
                href="tel:+12146637826" 
                className="text-3xl lg:text-4xl font-bold text-white hover:text-[#a4f07a] transition-all tracking-tighter relative z-10 inline-block mb-3"
              >
                (+1) 214-663-7826
              </a>
              <div className="relative z-10">
                <a 
                  href="mailto:info@cloudinfrait.com" 
                  className="text-sm text-white/35 hover:text-[#a4f07a] transition-all font-light tracking-wide"
                >
                  info@cloudinfrait.com
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
