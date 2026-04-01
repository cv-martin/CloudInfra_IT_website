"use client";

import { ShieldCheck } from "lucide-react";

/**
 * VisaTrustBand — Slim compliance strip immediately below the Hero.
 *
 * Standard placement for US IT staffing firms placing international talent.
 * (Ref: Mastech Digital, iGate/Capgemini, Randstad Technologies)
 *
 * Purpose: IT candidates on H-1B, OPT, STEM OPT immediately see they
 * are supported — this is a primary filtering criterion for this audience.
 */

const visaTypes = [
  { label: "H-1B Sponsorship",        abbr: "H-1B" },
  { label: "Optional Practical Training", abbr: "OPT (F-1)" },
  { label: "STEM OPT Extension",       abbr: "STEM OPT" },
  { label: "Green Card Holders",       abbr: "Green Card" },
  { label: "Lawful Permanent Resident",abbr: "LPR" },
  { label: "US Citizens",              abbr: "US Citizen" },
];

export default function VisaTrustBand() {
  return (
    <div className="bg-[#000000] border-t border-white/5 py-1">
      <div className="ci-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-5">

          {/* Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <ShieldCheck className="h-4 w-4 text-[#a4f07a] ci-text-glow" strokeWidth={2} />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/70 whitespace-nowrap">
              US Work Authorization
            </span>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden sm:block h-6 w-px bg-white/10" />

          {/* Visa type pills */}
          <div className="flex flex-wrap gap-2.5">
            {visaTypes.map((v) => (
              <span
                key={v.abbr}
                title={v.label}
                className="text-[11px] font-bold text-white/85 bg-white/5 border border-white/15 px-4 py-1.5 rounded-full hover:border-[#a4f07a]/60 hover:text-[#a4f07a] hover:bg-[#a4f07a]/8 transition-all cursor-default"
              >
                {v.abbr}
              </span>
            ))}
          </div>

          {/* Right — compliance note */}
          <div className="hidden lg:block ml-auto">
            <span className="text-[11px] text-white/55 font-medium tracking-tight">
              All placements are <span className="text-white/80">USCIS-compliant</span> &amp; employment-verified
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
