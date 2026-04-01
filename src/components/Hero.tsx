"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax scroll — image drifts slightly as user scrolls down
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center overflow-hidden pt-20 ci-grain"
    >
      {/* ── Layer 1: Aurora blobs — animated glow orbs ── */}
      <div className="ci-aurora-blob -top-1/5 left-1/2 -translate-x-1/2" />
      <div className="ci-aurora-blob-2 -bottom-10 -right-20 ci-aurora-blob-delay" />

      {/* ── Layer 2: Particle network — reduced count for performance ── */}
      <ParticleCanvas particleCount={50} maxDistance={140} className="opacity-60" />

      {/* ── Layer 3: Grid motif ── */}
      <div className="absolute inset-0 pointer-events-none ci-grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />

      {/* ── Layer 4: Content Wrapper ── */}
      <motion.div
        style={{ y: contentY, opacity: mounted ? opacity : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full ci-container flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#a4f07a]/30 bg-[#a4f07a]/5 px-4 py-1.5 backdrop-blur-md ci-float"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a4f07a] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a4f07a]" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a4f07a]">
            US-Based Specialists
          </span>
        </motion.div>

        {/* Main Headline — faster reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-[2.8rem] sm:text-[4.2rem] lg:text-[5.6rem] font-extrabold leading-[1.0] text-white tracking-tighter mb-8 max-w-5xl"
        >
          Connecting{" "}
          <span className="relative inline-block">
            <span className="text-[#a4f07a] ci-text-glow">Elite Talent</span>
            {/* Underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#a4f07a] origin-left ci-glow"
            />
          </span>
          <br />
          with the Infrastructure<br className="hidden sm:block" /> that Powers America.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl font-light mb-12 leading-relaxed"
        >
          Domain-specialist staffing for IT &amp; Healthcare professionals.
          48-hour shortlist SLA. Work-auth verified on every candidate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 mb-20"
        >
          <Link
            href="/consult-with-us"
            className="ci-pill-btn ci-pill-btn-primary group"
          >
            Request Talent
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/jobs"
            className="ci-pill-btn ci-pill-btn-outline"
          >
            Browse Openings
          </Link>
        </motion.div>

        {/* Hero Visual — faster reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: imageY }}
          className="relative w-full max-w-5xl aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 bg-[#0d0d0d] shadow-2xl group"
        >
          {/* Inner Grid */}
          <div className="absolute inset-0 ci-grid-bg-small opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

          <Image
            src="/hero-green-infra.png"
            alt="CloudInfra Digital Infrastructure Visualization"
            fill
            className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-1000"
            priority
          />

          {/* Edge ring */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />

          {/* Bottom badges — slide up on load */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-8 left-8 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <CheckCircle2 className="h-4 w-4 text-[#a4f07a] shrink-0" />
              <span className="text-[12px] text-white/80 font-medium tracking-tight">48-Hour Shortlist SLA</span>
            </div>
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <CheckCircle2 className="h-4 w-4 text-[#a4f07a] shrink-0" />
              <span className="text-[12px] text-white/80 font-medium tracking-tight">USCIS Compliance Guaranteed</span>
            </div>
          </motion.div>

          {/* Top-right version tag */}
          <div className="absolute top-6 right-8 opacity-30">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white font-mono">INFRA V2.0</span>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#a4f07a]/40 to-transparent"
        />
      </motion.div>

    </section>
  );
}
