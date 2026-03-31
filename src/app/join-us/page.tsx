"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, Zap, Users, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openRoles = [
  {
    title: "Senior IT Recruiter",
    type: "Full-time",
    location: "Farmers Branch, TX / Remote",
    desc: "Own end-to-end searches across Cloud, DevOps, and Cybersecurity. You will have 3+ years of IT recruiting experience and a genuine interest in technology.",
  },
  {
    title: "Healthcare Recruiter",
    type: "Full-time",
    location: "Farmers Branch, TX / Hybrid",
    desc: "Place clinical professionals — Nurses, Allied Health, and Healthcare Admin — across hospital systems and home health agencies. Clinical staffing experience preferred.",
  },
  {
    title: "Talent Sourcer — Engineering",
    type: "Full-time or Contract",
    location: "Remote (US)",
    desc: "Build and maintain active candidate pipelines for Engineering and Industrial sectors. Strong Boolean search and LinkedIn Recruiter skills required.",
  },
  {
    title: "Client Success Manager",
    type: "Full-time",
    location: "Farmers Branch, TX",
    desc: "Own relationships with our employer clients post-placement. Manage renewals, account growth, and service satisfaction. Staffing or B2B account management background preferred.",
  },
];

const values = [
  { icon: Zap,   title: "Engineers first",     body: "We started with a deep belief that domain expertise makes better recruiters. Every team member is expected to understand the fields they recruit in — not just the job titles." },
  { icon: Heart, title: "Honest by default",   body: "We tell candidates which client they are being submitted to. We tell clients when a search is difficult. We don't oversell and we don't hide problems." },
  { icon: Users, title: "Small team, big reach", body: "We are deliberately lean. Every recruiter owns their discipline end-to-end — sourcing, screening, submission, and post-placement. No handoffs, no handoffs, no diluted service." },
  { icon: Globe, title: "Nationwide impact",   body: "We operate remotely across all 50 US states. Our team is distributed, and we expect people who can work independently and own outcomes without micromanagement." },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function JoinUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <span className="ci-label block mb-2">Careers</span>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Recruit smarter. Work with people who actually know the field.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              We are a small team of specialist recruiters who take domain knowledge seriously. If you are tired of generalist recruiting and want to own a vertical end-to-end, we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* Values */}
        <section className="bg-[#F8F9FB] border-b border-gray-100">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="ci-label block mb-2">Our Culture</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">What we stand for.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={v.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6">
                    <div className="w-9 h-9 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">{v.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="bg-white border-b border-gray-100">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
              <span className="ci-label block mb-2">Open Positions</span>
              <h2 className="text-xl font-bold text-[#0F1B2D]">Current openings.</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              {openRoles.map((r, i) => (
                <motion.div key={r.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6">
                  <div className="lg:col-span-9">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="text-sm font-bold text-[#0F1B2D]">{r.title}</p>
                      <span className="text-[11px] font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2.5 py-1 rounded-full">{r.type}</span>
                      <span className="text-[11px] text-gray-400">{r.location}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                  <div className="lg:col-span-3 flex lg:items-start lg:justify-end">
                    <a href={`mailto:info@cloudinfrait.com?subject=Application — ${r.title}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline">
                      Apply by email <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speculative */}
        <section className="bg-white">
          <div className="ci-container py-14">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="w-10 h-0.5 bg-[#06B6D4] mb-5" />
                <h2 className="text-xl font-bold text-[#0F1B2D] mb-3">Don&apos;t see a perfect fit?</h2>
                <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
                  We hire for attitude and domain knowledge. If you are an experienced recruiter who is serious about a specific field — send us your profile and we will have a conversation about where you might fit.
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {["3+ years recruiting in a defined vertical", "Track record of delivery, not just activity", "Based in the US or timezone-compatible"].map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <CheckCircle2 className="h-4 w-4 text-[#06B6D4] shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <a href="mailto:info@cloudinfrait.com?subject=Speculative Application — CloudInfra IT"
                  className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all">
                  Send Speculative Application <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
