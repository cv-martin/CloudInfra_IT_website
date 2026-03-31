"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#020510] flex flex-col items-center justify-start overflow-hidden">

      {/* ===== BACKGROUND: Fine Cyan Grid ===== */}
      <div className="absolute inset-0 pointer-events-none ci-grid-bg" />

      {/* ===== MAIN CONTENT WRAPPER ===== */}
      <div className="relative z-10 w-full max-w-[1300px] px-8 lg:px-16 pt-36 pb-20">

        {/* ===== GLOWING NEON CONTAINER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden neon-cyan-box bg-[#020510]/60 min-h-[620px]"
        >
          {/* Inner grid on the container */}
          <div className="absolute inset-0 pointer-events-none ci-grid-bg-small" />

          {/* Small corner decoration — top right */}
          <div className="absolute top-0 right-0 w-32 h-24 rounded-bl-2xl opacity-30 bg-[#06B6D4]/10 border-l border-b border-[#06B6D4]/25" />

          {/* ===== TEXT CONTENT ===== */}
          <div className="relative z-20 flex flex-col items-center text-center px-8 sm:px-16 lg:px-24 pt-20 pb-16">
            <h1 className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem] font-bold leading-[1.15] text-white tracking-tight mb-6 font-sans">
              IT &amp; Healthcare Staffing<br />
              Built for the USA
            </h1>

            <p className="text-base sm:text-lg text-white/55 max-w-2xl font-light mb-12 leading-relaxed">
              Connecting skilled professionals with leading companies across<br className="hidden sm:block" />
              IT, Healthcare, Engineering and 10+ industries nationwide.
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="/job-opportunities"
                className="px-7 py-3 rounded-full font-semibold text-[15px] text-[#020510] bg-[#06B6D4] ci-glow-cyan transition-all hover:opacity-90"
              >
                Find a Job
              </a>

              <a
                href="/consult-with-us"
                className="px-7 py-3 rounded-full text-[15px] font-medium text-[#06B6D4] border border-[#06B6D4]/60 transition-all hover:bg-[#06B6D4]/10"
              >
                Hire Talent
              </a>
            </div>
          </div>

          {/* ===== ISOMETRIC SERVER ILLUSTRATION (Bottom Right) ===== */}
          <div className="absolute bottom-0 right-0 w-[55%] h-[65%] pointer-events-none select-none">
            <Image
              src="/hero-servers.png"
              alt="Isometric cloud server network"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 700px"
              className="object-contain object-right-bottom mix-blend-screen"
              priority
            />
          </div>

          {/* ===== NODE NETWORK (Bottom Left) ===== */}
          {/* Pure CSS glowing node dots and lines for the left constellation */}
          <div className="absolute bottom-0 left-0 w-[45%] h-[65%] pointer-events-none select-none overflow-hidden">
            <svg
              viewBox="0 0 400 320"
              className="w-full h-full opacity-70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lines */}
              <line x1="80" y1="280" x2="160" y2="220" stroke="#06B6D4" strokeWidth="0.7" strokeOpacity="0.4"/>
              <line x1="160" y1="220" x2="280" y2="200" stroke="#06B6D4" strokeWidth="0.7" strokeOpacity="0.3"/>
              <line x1="60" y1="200" x2="160" y2="220" stroke="#06B6D4" strokeWidth="0.7" strokeOpacity="0.35"/>
              <line x1="160" y1="220" x2="200" y2="160" stroke="#06B6D4" strokeWidth="0.7" strokeOpacity="0.3"/>
              <line x1="30" y1="140" x2="160" y2="220" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.2"/>
              <line x1="200" y1="160" x2="280" y2="200" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.2"/>
              {/* Glowing nodes */}
              <circle cx="80" cy="280" r="4" fill="#06B6D4" fillOpacity="0.8"/>
              <circle cx="80" cy="280" r="8" fill="#06B6D4" fillOpacity="0.15"/>
              <circle cx="160" cy="220" r="5" fill="#06B6D4" fillOpacity="0.9"/>
              <circle cx="160" cy="220" r="12" fill="#06B6D4" fillOpacity="0.12"/>
              <circle cx="60" cy="200" r="3" fill="#06B6D4" fillOpacity="0.7"/>
              <circle cx="60" cy="200" r="7" fill="#06B6D4" fillOpacity="0.12"/>
              <circle cx="30" cy="140" r="3" fill="#06B6D4" fillOpacity="0.5"/>
              <circle cx="30" cy="140" r="6" fill="#06B6D4" fillOpacity="0.1"/>
              <circle cx="200" cy="160" r="3" fill="#06B6D4" fillOpacity="0.5"/>
              <circle cx="200" cy="160" r="6" fill="#06B6D4" fillOpacity="0.1"/>
              <circle cx="280" cy="200" r="3" fill="#06B6D4" fillOpacity="0.4"/>
              {/* Star sparkle dots */}
              <circle cx="100" cy="150" r="1.5" fill="#06B6D4" fillOpacity="0.6"/>
              <circle cx="330" cy="140" r="1.5" fill="#06B6D4" fillOpacity="0.5"/>
              <circle cx="250" cy="100" r="1.5" fill="#06B6D4" fillOpacity="0.4"/>
              <circle cx="150" cy="80" r="1" fill="#06B6D4" fillOpacity="0.5"/>
              <circle cx="50" cy="250" r="1" fill="#06B6D4" fillOpacity="0.5"/>
            </svg>
          </div>
        </motion.div>

        {/* ===== 2026 CUTTING EDGE SIGNATURE ===== */}
        <div className="mt-8">
          <p className="text-sm font-bold tracking-[0.25em] uppercase font-sans text-[#06B6D4]">
            2026 CUTTING EDGE
          </p>
        </div>
      </div>
    </section>
  );
}
