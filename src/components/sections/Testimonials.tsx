"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CloudInfra filled our Epic implementation lead in 3 days. The candidate was HIPAA-certified and had live Epic go-live experience. This was not a resume match — they understood our clinical workflow.",
    author: "VP of Technology",
    company: "Regional Health System, Texas",
    rating: 5,
    initial: "V",
  },
  {
    quote:
      "We've placed 12 DevOps engineers through CloudInfra over 18 months. Every single one cleared our SOC2 audit without issue. The technical vetting is genuinely thorough — a completely different standard to other firms.",
    author: "CISO",
    company: "Fortune 500 FinTech",
    rating: 5,
    initial: "C",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-2">Client Stories</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted by Healthcare & Tech Leaders
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#06B6D4] to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
