"use client";

import Link from "next/link";
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
    <footer className="bg-gray-900 border-t border-gray-800">

      {/* Main footer body */}
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">
                <span className="text-white">Cloud</span>
                <span className="text-[#06B6D4]">Infra IT</span>
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              US-based IT &amp; Healthcare staffing. Permanent, Contract, Temporary, and Temp-to-Hire across 10 industries.
            </p>

            {/* Compliance badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-6">
              <ShieldCheck className="h-4 w-4 text-[#06B6D4] shrink-0" />
              <span className="text-xs text-[#06B6D4] font-semibold">Compliant Staffing Partner</span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <a href="tel:+12146637826" className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#06B6D4] transition-colors">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gray-600" />
                (+1) 214-663-7826
              </a>
              <a href="mailto:info@cloudinfrait.com" className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#06B6D4] transition-colors">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gray-600" />
                info@cloudinfrait.com
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-600" />
                <span>2727 LBJ Freeway, Suite 220<br />Farmers Branch, TX 75234, USA</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#06B6D4] transition-colors"
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
      <div className="border-t border-gray-800">
        <div className="max-w-[1300px] mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © 2026 CloudInfra IT. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-service-conditions" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
