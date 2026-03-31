"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CalendarDays, UserCheck, RefreshCw } from "lucide-react";
import Link from "next/link";

/**
 * StaffingTypes — Scenario-driven engagement model selector.
 *
 * Each card leads with the CLIENT SITUATION, not the model name.
 * This removes the "generic label" feeling and makes each card
 * immediately relevant to where the employer is in their hiring process.
 *
 * Includes IT/Healthcare role examples for specificity.
 * Temp-to-Hire highlighted as the low-risk choice.
 */

const models = [
  {
    icon: Clock,
    situation: "Need cover — fast.",
    title: "Temporary Staffing",
    description:
      "Urgent clinical gap? Infrastructure sprint? We deploy qualified professionals within days. Short-term, fully compliant, no long-term commitment.",
    roles: ["Emergency RN cover", "DevOps sprint teams", "IT helpdesk surge", "ICU and ER backfill"],
    duration: "Days to 3 months",
    tag: "Fastest deployment",
    tagColor: "text-amber-400 bg-amber-400/10",
  },
  {
    icon: CalendarDays,
    situation: "Running a defined project?",
    title: "Contract Staffing",
    description:
      "Cloud migration, EHR rollout, or product development sprint? We staff your project team for the duration — specialist expertise, no permanent obligation.",
    roles: ["Cloud migration teams", "EHR/EMR implementations", "DevOps pipeline builds", "SAP rollouts"],
    duration: "3 to 18 months",
    tag: "Most flexible",
    tagColor: "text-[#06B6D4] bg-[#06B6D4]/10",
  },
  {
    icon: RefreshCw,
    situation: "Want to evaluate before committing?",
    title: "Temp-to-Hire",
    description:
      "Start the engagement as temporary. After 90–180 days, convert to permanent if it's the right fit. Assess technical ability and culture before you commit.",
    roles: ["Senior IT architects", "Specialised clinical roles", "Culture-sensitive leadership", "Hard-to-fill positions"],
    duration: "90–180 days → permanent",
    tag: "Zero hiring risk",
    tagColor: "text-emerald-400 bg-emerald-400/10",
    highlighted: true,
  },
  {
    icon: UserCheck,
    situation: "Building your core team?",
    title: "Permanent Placement",
    description:
      "We source, screen, and deliver qualified candidates for permanent roles — IT engineers, nurses, administrators. You hire once, and they grow with you.",
    roles: ["Software & DevOps engineers", "Registered Nurses (RN)", "IT leadership & architects", "Healthcare administrators"],
    duration: "Ongoing — no end date",
    tag: "Long-term growth",
    tagColor: "text-violet-400 bg-violet-400/10",
  },
];

export default function StaffingTypes() {
  return (
    <section className="bg-[#0B1120]">
      <div className="ci-container ci-section">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <span className="ci-label">Engagement Models</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-1">
            <div>
              <h2 className="text-[var(--text-h2)] font-bold text-white leading-tight">
                Match the model to your need
              </h2>
              <p className="text-sm text-gray-400 mt-3 max-w-xl leading-relaxed">
                Whether you need cover in 48 hours or a permanent hire for a long-term role — we match
                the engagement model to your timeline, budget, and risk tolerance.
              </p>
            </div>
            <Link
              href="/custom-services-provided"
              className="text-sm font-semibold text-[#06B6D4] hover:underline flex items-center gap-1.5 shrink-0 group"
            >
              Custom / enterprise solutions
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex flex-col rounded-2xl border overflow-hidden transition-all ${
                m.highlighted
                  ? "border-emerald-500/30 bg-[#0f1f18]"
                  : "border-white/5 bg-[#131C2E] hover:border-[#06B6D4]/20"
              }`}
            >
              {/* Top accent bar */}
              <div
                className={`h-0.5 w-full ${
                  m.highlighted ? "bg-emerald-500" : "bg-[#06B6D4]"
                }`}
              />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Tag */}
                <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${m.tagColor}`}>
                  {m.tag}
                </span>

                {/* Situation question — leads the card */}
                <div>
                  <p className="text-xs text-gray-500 italic mb-1">{m.situation}</p>
                  <div className="flex items-center gap-2">
                    <m.icon className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={1.75} />
                    <h3 className="text-base font-bold text-white">{m.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {m.description}
                </p>

                {/* Role examples */}
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">
                    Common roles
                  </p>
                  <ul className="space-y-1">
                    {m.roles.map((r) => (
                      <li key={r} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="h-1 w-1 bg-gray-600 rounded-full shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                    Typical duration
                  </span>
                  <p className="text-sm font-semibold text-gray-300 mt-0.5">{m.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decision helper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500">
            Not sure which model fits your situation? Your Hiring Partner will advise you — no obligation.
          </p>
          <Link
            href="/consult-with-us"
            className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0891b2] transition-colors shrink-0"
          >
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
