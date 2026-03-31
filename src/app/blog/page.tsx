"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    excerpt: "Post-pandemic travel nurse rates have normalised, but compliance requirements have increased. A practical guide for nursing directors and HR leads.",
    date: "March 21, 2026",
    readTime: "7 min read",
  },
  {
    slug: "#",
    category: "Visa & Compliance",
    title: "H-1B Transfers for IT Contractors: A Hiring Manager's Guide",
    excerpt: "Hiring an H-1B holder currently placed at another employer? Here is what a clean, low-risk H-1B transfer looks like from the employer side.",
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
    excerpt: "Based on our active engagements in Q1 2026: Cloud architects, Cybersecurity leads, Data engineers, and more — with location and remote breakdowns.",
    date: "February 21, 2026",
    readTime: "10 min read",
  },
];

const categoryColors: Record<string, string> = {
  "IT Hiring": "#06B6D4",
  "Healthcare Staffing": "#10B981",
  "Visa & Compliance": "#8B5CF6",
  "Engineering": "#F59E0B",
  "Candidate Advice": "#06B6D4",
  "Market Insight": "#0F1B2D",
};

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="ci-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#0F1B2D] leading-tight max-w-2xl">
              Insights from the field.
            </h1>
            <p className="text-sm text-gray-500 mt-5 max-w-xl leading-relaxed">
              Practical guides on IT and Healthcare hiring, visa compliance, salary benchmarks, and career strategy — written by recruiters who know the domains.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="ci-container py-14 lg:py-16">

          {/* Featured post */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <Link href={posts[0].slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-gray-100 bg-[#0F1B2D] overflow-hidden group">
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                    style={{ backgroundColor: `${categoryColors[posts[0].category]}20`, color: categoryColors[posts[0].category] }}>
                    {posts[0].category}
                  </span>
                  <h2 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-[#06B6D4] transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">{posts[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{posts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{posts[0].readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#06B6D4]">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="hidden lg:block bg-gradient-to-br from-[#06B6D4]/20 to-[#0F1B2D] min-h-48" />
            </Link>
          </motion.div>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.slice(1).map((post, i) => (
              <motion.div key={post.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={post.slug}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-[#F8F9FB] p-6 h-full hover:border-gray-200 hover:shadow-sm transition-all group">
                  <span className="inline-block self-start text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
                    style={{ backgroundColor: `${categoryColors[post.category]}15`, color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight mb-3 flex-1 group-hover:text-[#06B6D4] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                    <span className="text-[11px] font-semibold text-[#06B6D4]">{post.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-14 rounded-2xl border border-gray-100 bg-[#F8F9FB] p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <p className="text-sm font-bold text-[#0F1B2D] mb-1">Get insights in your inbox.</p>
              <p className="text-sm text-gray-500">Salary benchmarks, compliance updates, and hiring strategy — monthly, no spam.</p>
            </div>
            <a href="mailto:info@cloudinfrait.com?subject=Blog Newsletter Subscription"
              className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#1a2e4a] active:scale-95 transition-all shrink-0">
              Subscribe <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
