"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, LucideIcon } from "lucide-react";

interface DomainHeroProps {
  title: string;
  subtitleAccent: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  trustLabel: string;
  trustTags: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  statusLabel?: string;
  statusText?: string;
}

export default function DomainHero({
  title,
  subtitleAccent,
  description,
  imageSrc,
  imageAlt,
  trustLabel,
  trustTags,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  statusLabel = "Operational Status",
  statusText = "Direct sourcing active in all 50 US States.",
}: DomainHeroProps) {
  return (
    <section className="ci-page-hero pb-24 bg-black border-b border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
      <div className="ci-aurora-blob -top-1/4 -right-1/4 opacity-40" />
      
      <div className="ci-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-12 h-1 bg-[#a4f07a] mb-10 ci-glow" />
            
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-tighter">
              {title} <br/>
              <span className="text-white/35">{subtitleAccent}</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/50 mt-8 max-w-xl leading-relaxed font-light">
              {description}
            </p>

            {/* Trust Band / Tags */}
            <div className="mt-12 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-[#a4f07a] ci-text-glow" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">
                  {trustLabel}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {trustTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#a4f07a]/70 bg-[#a4f07a]/5 border border-[#a4f07a]/15 px-3.5 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-5">
              <Link
                href={primaryCtaHref}
                className="ci-pill-btn ci-pill-btn-primary group"
              >
                {primaryCtaText}
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href={secondaryCtaHref}
                className="ci-pill-btn ci-pill-btn-outline"
              >
                {secondaryCtaText}
              </Link>
            </div>
          </motion.div>

          {/* Right — Image Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[540px] rounded-[2.5rem] overflow-hidden border border-white/10 ci-card group">
              <div className="absolute inset-0 ci-grid-bg-small opacity-[0.05] z-10 pointer-events-none" />
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover grayscale brightness-[0.4] contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />
              
              {/* Bottom Status Card */}
              <div className="absolute inset-x-8 bottom-8 z-30">
                <div className="ci-card p-6 bg-black/40 backdrop-blur-2xl border-white/10 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a4f07a] mb-2">
                    {statusLabel}
                  </p>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {statusText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
