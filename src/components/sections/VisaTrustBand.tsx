"use client";

import { ShieldCheck } from "lucide-react";

/**
 * VisaTrustBand — Work authorization compliance strip.
 * 
 * Position: Immediately below the Hero.
 * Purpose: Every international IT candidate on H-1B, OPT, or STEM OPT 
 *          sees in 2 seconds that they are supported here.
 * 
 * Ref: Mastech Digital, iGate/Capgemini, Randstad Technologies all 
 *      surface visa support prominently — it is a primary filtering signal 
 *      for this audience segment.
 */

const visaTypes = [
  { label: "H-1B Transfer & Sponsorship", abbr: "H-1B" },
  { label: "Optional Practical Training",  abbr: "OPT (F-1)" },
  { label: "STEM OPT Extension",           abbr: "STEM OPT" },
  { label: "Green Card Holders",           abbr: "Green Card" },
  { label: "Lawful Permanent Resident",    abbr: "LPR" },
  { label: "US Citizens",                  abbr: "US Citizen" },
  { label: "TN Visa",                      abbr: "TN Visa" },
];

export default function VisaTrustBand() {
  return (
    <div className="bg-[#000] border-t border-white/[0.06]">
      <div className="ci-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-8">

          {/* Left — Label + pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">

            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck 
                className="h-4 w-4 shrink-0 text-[#a4f07a]" 
                strokeWidth={2.5} 
              />
              <div>
                <p className="text-[10.5px] font-black uppercase tracking-[0.25em] text-white/50 leading-none">
                  Work Authorization Support
                </p>
                <p className="text-[11px] text-white/20 mt-0.5 font-light">
                  Placement for every US status
                </p>
              </div>
            </div>

            {/* Micro Divider */}
            <div className="hidden sm:block h-8 w-px bg-white/[0.08]" />

            {/* Visa pills */}
            <div className="flex flex-wrap gap-2">
              {visaTypes.map((v) => (
                <span
                  key={v.abbr}
                  title={v.label}
                  className="text-[11px] font-semibold text-white/60 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full hover:border-[#a4f07a]/40 hover:text-[#a4f07a] hover:bg-[#a4f07a]/[0.05] transition-all duration-250 cursor-default"
                >
                  {v.abbr}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Proof Point */}
          <div className="flex-col items-end gap-1 hidden xl:flex text-right">
            <p className="text-[14px] font-bold text-white/80 leading-none tracking-tight">
              3,248+ <span className="text-white/40 font-light italic">Placements</span>
            </p>
            <p className="text-[10px] uppercase font-black tracking-[0.2em] text-[#a4f07a]/60">
               Active US Workforce
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
