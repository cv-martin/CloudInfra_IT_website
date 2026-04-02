"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, TrendingUp, Cpu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";

/**
 * Hero — The 2026 "Silicon Valley" First Impression.
 * 
 * Aesthetic: High-Frequency Exchange. 
 * Replaces aggressive "Neon" with sophisticated glows, 
 * technical precision, and rhythmic typography.
 */

const trustSignals = [
  { icon: Zap,         label: "48-Hour Shortlist",     sub: "Avg. SLA" },
  { icon: ShieldCheck, label: "USCIS Compliant",        sub: "Verified" },
  { icon: TrendingUp,  label: "98% Retention Rate",     sub: "Yearly" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY   = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "4%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center overflow-hidden pt-[72px] ci-grain"
    >
      {/* ── Background: Deep Depth ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-radial from-[#a4f07a]/[0.08] via-transparent to-transparent opacity-40 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-radial from-[#a4f07a]/[0.05] via-transparent to-transparent opacity-30 blur-[80px]" />
      </div>

      {/* ── Technical Overlay ────────────────────────────── */}
      <ParticleCanvas particleCount={40} maxDistance={120} className="opacity-[0.45]" />
      <div className="absolute inset-0 pointer-events-none ci-grid-bg opacity-[0.22]" />

      {/* ── Content Wrapper ─────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: mounted ? opacity : 0 }}
        className="relative z-10 w-full ci-container flex flex-col items-center text-center"
      >
        
        {/* ── Context Badge ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl"
        >
          <Cpu className="w-3 h-3 text-[#a4f07a] opacity-80" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            US Infrastructure Specialists
          </span>
        </motion.div>

        {/* ── Refined Headline ───────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-[2.8rem] sm:text-[4.8rem] lg:text-[6rem] font-bold leading-[1.0] text-white tracking-[-0.04em] mb-8 max-w-4xl"
        >
          The Elite Pipeline{" "}
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="bg-gradient-to-br from-[#a4f07a] via-[#a4f07a] to-white/60 bg-clip-text text-transparent">
              Built for IT
            </span>
            {/* Minimal Underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a4f07a]/40 to-transparent"
            />
          </span>
          <br className="hidden sm:block" />
          &amp; Healthcare.
        </motion.h1>

        {/* ── Subheadline ─────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[17px] sm:text-[19px] text-white/40 max-w-xl font-light mb-12 leading-relaxed tracking-tight"
        >
          Data-driven recruitment for high-compliance technical clusters. 
          Verified candidates delivered within <span className="text-white/80 font-medium">48 hours</span>.
        </motion.p>

        {/* ── Action Control ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-16"
        >
          <Link
            href="/consult-with-us"
            className="group relative px-9 py-3.5 rounded-full bg-[#a4f07a] text-black text-[13px] font-bold transition-all hover:bg-[#b8f58e] hover:shadow-[0_0_40px_rgba(164,240,122,0.35)]"
          >
            <span className="relative flex items-center gap-2">
              Request Talent
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/jobs"
            className="px-9 py-3.5 rounded-full border border-white/10 text-white/80 text-[13px] font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all"
          >
            Browse Openings
          </Link>
        </motion.div>

        {/* ── Command Bar (Trust signals) ────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-20"
        >
          {trustSignals.map((t, i) => (
            <div key={t.label} className="flex items-center gap-3.5 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all group-hover:border-[#a4f07a]/30 group-hover:bg-[#a4f07a]/[0.05]">
                <t.icon className="w-4 h-4 text-white/30 group-hover:text-[#a4f07a] transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-[12px] font-bold text-white/70 group-hover:text-white transition-colors leading-none mb-1">
                  {t.label}
                </p>
                <p className="text-[10px] text-white/25 font-medium uppercase tracking-widest leading-none">
                  {t.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Main Hero Visual ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: imageY }}
          className="relative w-full max-w-5xl aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/[0.1] bg-[#080808] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] group"
        >
          {/* Inner Layering for detail */}
          <div className="absolute inset-0 ci-grid-bg-small opacity-[0.12] z-10 pointer-events-none" />
          
          <Image
            src="/hero-green-infra.png"
            alt="CloudInfra Infrastructure Intelligence"
            fill
            className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-[3s]"
            priority
          />

          {/* Depth Mask */}
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 z-10 pointer-events-none" />
          
          {/* Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-8 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-xl"
          >
            <div className="w-2 h-2 rounded-full bg-[#a4f07a] animate-pulse" />
            <span className="text-[11px] font-bold text-white/80">3.2k Placements Active</span>
          </motion.div>

          <div className="absolute top-8 right-8 z-20 opacity-30">
            <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-white">System.v2.6_Stable</span>
          </div>
        </motion.div>

      </motion.div>

      {/* ── Minimal Scroll Guide ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ height: [12, 40, 12] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-[#a4f07a]/40 to-transparent"
        />
      </motion.div>

    </section>
  );
}
