"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

/**
 * Footer — Real contact info from cloudinfrait.com.
 * Address: 2727 LBJ Freeway Suite 220, Farmers Branch, TX 75234
 * Email: info@cloudinfrait.com | Phone: (+1) 214-663-7826
 * Navigation mirrors the real site structure.
 */

const navColumns = [
  {
    heading: "For Candidates",
    links: [
      { label: "Job Opportunities", href: "/job-opportunities" },
      { label: "Hiring Process", href: "/hiring-process" },
      { label: "Contact a Recruiter", href: "/contact-a-recruiter" },
      { label: "FAQ for Candidates", href: "/faqs-for-candidates" },
    ],
  },
  {
    heading: "For Clients",
    links: [
      { label: "Custom Services", href: "/custom-services-provided" },
      { label: "Recruitment & Interview Process", href: "/recruitment-interview-process" },
      { label: "Request Consultation", href: "/consult-with-us" },
      { label: "FAQ for Clients", href: "/faq" },
    ],
  },
  {
    heading: "Specialties",
    links: [
      { label: "Information Technology", href: "/information-technology" },
      { label: "Hospitals & Healthcare", href: "/hospitals-and-healthcare" },
      { label: "Engineering", href: "/engineering" },
      { label: "Banking & Finance", href: "/banking-and-finance" },
      { label: "All Industries →", href: "/specialties" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Process", href: "/our-process" },
      { label: "Join Us", href: "/join-us" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      
      {/* Footer Grid Motif */}
      <div className="absolute top-0 right-0 w-full h-full ci-grid-bg opacity-[0.02] pointer-events-none" />

      {/* Main footer body */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand + Contact */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-8 group">
              <span className="text-2xl font-bold tracking-tighter">
                <span className="text-white">Cloud</span>
                <span className="text-[#a4f07a]">Infra IT</span>
              </span>
            </Link>

            <p className="text-[15px] text-white/40 leading-relaxed mb-8 font-light max-w-sm">
                Next-generation IT and Healthcare staffing solutions for the North American market. 
                Built on high-performance infrastructure and domain expertise.
            </p>

            {/* Compliance indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 transition-all hover:bg-white/[0.08]">
              <ShieldCheck className="h-4 w-4 text-[#a4f07a] shrink-0" />
              <span className="text-[11px] text-white/60 font-bold uppercase tracking-widest">Global Compliance Verified</span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <a href="tel:+12146637826" className="flex items-start gap-3 group">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#a4f07a]/40 transition-all">
                  <Phone className="h-3.5 w-3.5 text-white/40 group-hover:text-[#a4f07a]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Phone</span>
                  <span className="text-sm font-bold text-white/60">(+1) 214-663-7826</span>
                </div>
              </a>
              <a href="mailto:info@cloudinfrait.com" className="flex items-start gap-3 group">
                 <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#a4f07a]/40 transition-all">
                  <Mail className="h-3.5 w-3.5 text-white/40 group-hover:text-[#a4f07a]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Email</span>
                  <span className="text-sm font-bold text-white/60">info@cloudinfrait.com</span>
                </div>
              </a>
              <div className="flex items-start gap-3 group">
                 <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="h-3.5 w-3.5 text-white/40" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Headquarters</span>
                  <span className="text-sm font-medium text-white/40 leading-relaxed">2727 LBJ Freeway, Suite 220<br />Farmers Branch, TX 75234</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nav columns (shifted for data-heavy density) */}
          {navColumns.map((col) => (
            <div key={col.heading} className="lg:col-span-1">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/20 mb-8">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/40 hover:text-[#a4f07a] transition-all font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 relative z-10 bg-black">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
            © 2026 CloudInfra IT Group. Modernizing Recruitment Architecture.
          </p>
          <div className="flex gap-10">
            <Link href="/privacy-policy" className="text-[11px] font-black uppercase tracking-widest text-white/20 hover:text-[#a4f07a] transition-all">
              Privacy / Legal
            </Link>
            <Link href="/terms-service-conditions" className="text-[11px] font-black uppercase tracking-widest text-white/20 hover:text-[#a4f07a] transition-all">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
