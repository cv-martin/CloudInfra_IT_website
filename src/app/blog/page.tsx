"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

/**
 * Blog Page — Insights feed.
 * URL: /blog
 *
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 *   - ci-card components with grid motifs
 */

const posts = [
  {
    slug: "#",
    category: "IT Hiring",
    title: "Why Your DevOps Roles Stay Open: The Credential Inflation Problem",
    excerpt: "Job descriptions for DevOps engineers have inflated to the point where they describe unicorns. Here is how to scope a role that actually fills.",
    date: "March 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Healthcare Staffing",
    title: "Travel Nursing in 2026: What Hospitals Need to Know About Rate Changes",
    excerpt: "Post-pandemic travel nurse rates have normalised, but compliance requirements have increased. A practical guide for nursing directors.",
    date: "March 21, 2026",
    readTime: "7 min read",
  },
  {
    slug: "#",
    category: "Visa & Compliance",
    title: "H-1B Transfers for IT Contractors: A Hiring Manager's Guide",
    excerpt: "Hiring an H-1B holder currently placed at another employer? Here is what a clean, low-risk H-1B transfer looks like.",
    date: "March 14, 2026",
    readTime: "6 min read",
  },
  {
    slug: "#",
    category: "Engineering",
    title: "Temp-to-Hire vs. Direct Hire for Senior Engineers: When Each Model Wins",
    excerpt: "Both models have a place. Choosing the wrong one creates friction, delay, and cost. Here is how to decide based on your actual situation.",
    date: "March 7, 2026",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Candidate Advice",
    title: "How to Get a US Job on OPT (F-1): What Recruiters Actually Look For",
    excerpt: "OPT candidates face a compressed timeline and high rejection rates from generalist firms. Here is how to maximise your placement chances.",
    date: "February 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "#",
    category: "Market Insight",
    title: "The 2026 IT Salary Report: Contract Rates Across 8 Key Disciplines",
    excerpt: "Based on our active engagements in Q1 2026: Cloud architects, Cybersecurity leads, and Data engineers — with location breakdowns.",
    date: "February 21, 2026",
    readTime: "10 min read",
  },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-tight tracking-tighter">
                Analysis & <br/><span className="text-white/40">Market Intelligence.</span>
              </h1>
              <p className="text-lg text-white/40 mt-6 max-w-lg leading-relaxed font-light">
                Practical guides on IT and Healthcare hiring, visa compliance, salary benchmarks, and career strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-24">

          {/* Featured Post */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-20">
            <Link href={posts[0].slug}
              className="ci-card group flex flex-col lg:flex-row min-h-[400px] overflow-hidden">
              <div className="p-10 lg:p-14 flex flex-col justify-between flex-1 relative z-10">
                <div className="absolute inset-0 ci-grid-bg opacity-[0.015] group-hover:opacity-[0.03] transition-opacity" />
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[.25em] text-[#a4f07a] mb-8">
                    Featured Analysis
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-6 group-hover:text-[#a4f07a] transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-white/40 text-lg leading-relaxed font-light max-w-2xl">{posts[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-12 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <span>{posts[0].date}</span>
                    <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" />{posts[0].readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a]">
                    Access Intelligence <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" />
                  </span>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 bg-gradient-to-br from-[#a4f07a]/10 to-transparent relative border-l border-white/5">
                 <div className="absolute inset-0 ci-grid-bg opacity-10" />
              </div>
            </Link>
          </motion.div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.div key={post.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={post.slug}
                  className="ci-card p-10 h-full flex flex-col group relative overflow-hidden transition-all">
                  <div className="absolute inset-0 ci-grid-bg-small opacity-[0.015] group-hover:opacity-[0.03] transition-opacity pointer-events-none" />
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[.25em] text-[#a4f07a]/60 mb-8 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-4 group-hover:text-[#a4f07a] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light mb-10">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/10 flex items-center gap-2">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#a4f07a]/40">{post.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-24 ci-card p-12 bg-[#a4f07a]/5 border-[#a4f07a]/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 justify-between">
            <div className="absolute inset-0 ci-grid-bg opacity-[0.05] pointer-events-none" />
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight">Intelligence Briefing.</h3>
              <p className="text-white/40 text-lg mt-2 font-light">Salary benchmarks, compliance updates, and hiring strategy — delivered monthly.</p>
            </div>
            <a href="mailto:info@cloudinfrait.com?subject=Blog Newsletter Subscription"
              className="ci-pill-btn ci-pill-btn-primary group relative z-10">
              Subscribe to Feed <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>

        </div>
      </main>
          </div>
  );
}
