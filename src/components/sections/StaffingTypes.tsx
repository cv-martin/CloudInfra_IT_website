"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CalendarDays, UserCheck, RefreshCw } from "lucide-react";
import { TransitionLink as Link } from "@/components/TransitionLink";

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
    tagColor: "text-white/40 bg-white/5",
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
    tagColor: "text-white/40 bg-white/5",
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
    tagColor: "text-[#a4f07a] bg-[#a4f07a]/10",
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
    tagColor: "text-white/40 bg-white/5",
  },
];

export default function StaffingTypes() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 ci-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="ci-container ci-section relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#a4f07a]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#a4f07a]">Engagement Models</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-1">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Responsive Hiring <span className="opacity-40 italic">Mechanics</span>
              </h2>
              <p className="text-lg text-white/40 mt-6 max-w-xl leading-relaxed font-light">
                Whether you need cover in 48 hours or a permanent hire for a long-term role — we match
                the engagement model to your timeline, budget, and risk tolerance.
              </p>
            </div>
            <Link
              href="/custom-services-provided"
              className="text-sm font-bold text-[#a4f07a] hover:underline underline-offset-8 flex items-center gap-2 shrink-0 group transition-all"
            >
              Enterprise Solutions <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex flex-col ci-card group transition-all ${
                m.highlighted
                  ? "border-[#a4f07a]/30 bg-[#a4f07a]/[0.02]"
                  : "hover:border-[#a4f07a]/20"
              }`}
            >
              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Tag */}
                <div className="flex items-center justify-between mb-2">
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center border transition-all ${
                    m.highlighted ? "bg-[#a4f07a]/10 border-[#a4f07a]/20" : "bg-white/5 border-white/10"
                  }`}>
                    <m.icon className={`h-4 w-4 ${m.highlighted ? "text-[#a4f07a]" : "text-white/40"}`} />
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                     m.highlighted ? "text-[#a4f07a] bg-[#a4f07a]/10" : "text-white/30 bg-white/5"
                  }`}>
                    {m.tag}
                  </span>
                </div>

                {/* Situation */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">{m.situation}</p>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">{m.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {m.description}
                </p>

                {/* Role examples */}
                <div className="flex-1 mt-2">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10 mb-4 pb-1 border-b border-white/5">
                    Common placement
                  </p>
                  <ul className="space-y-2">
                    {m.roles.map((r) => (
                      <li key={r} className="text-[11px] text-white/30 flex items-center gap-2 group-hover:text-white/40 transition-colors">
                        <span className={`h-1 w-1 rounded-full shrink-0 ${m.highlighted ? "bg-[#a4f07a]/40" : "bg-white/10"}`} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="pt-6 border-t border-white/5 mt-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/10">
                    Typical Cycle
                  </span>
                  <p className="text-sm font-bold text-white/60 mt-1">{m.duration}</p>
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
          className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-white/20 font-light max-w-lg text-center sm:text-left transition-colors hover:text-white/30">
            Uncertain about the best model for your technical environment? Your Hiring Partner provides full situational analysis — without obligation.
          </p>
          <Link
            href="/consult-with-us"
            className="ci-pill-btn ci-pill-btn-primary group whitespace-nowrap"
          >
            Consult with us <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
