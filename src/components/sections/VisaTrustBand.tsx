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
    <div className="bg-[#0B1120] border-t border-white/5">
      <div className="ci-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">

          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="h-4 w-4 text-[#06B6D4]" strokeWidth={1.75} />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
              Work Authorization Supported
            </span>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden sm:block h-4 w-px bg-white/10" />

          {/* Visa type pills */}
          <div className="flex flex-wrap gap-2">
            {visaTypes.map((v) => (
              <span
                key={v.abbr}
                title={v.label}
                className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full hover:border-[#06B6D4]/40 hover:text-[#06B6D4] transition-colors cursor-default"
              >
                {v.abbr}
              </span>
            ))}
          </div>

          {/* Right — compliance note */}
          <div className="hidden lg:block ml-auto">
            <span className="text-[11px] text-gray-600">
              All placements are USCIS-compliant &amp; employment-verified
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
