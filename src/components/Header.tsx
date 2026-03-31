"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Header — Flat, clear navigation.
 *
 * Principle: A user should know where to go within 2 seconds.
 * Rule: Max 5 nav links. One simple dropdown per link if needed.
 * No icon grids. No mega-menus. No jargon tabs like "Talents."
 *
 * Two CTAs always visible: Find a Job (candidate) / Request Talent (employer).
 */

const servicesLinks = [
  { label: "Permanent Staffing",  href: "/services/permanent" },
  { label: "Contract Staffing",   href: "/services/contract" },
  { label: "Temporary Staffing",  href: "/services/temporary" },
  { label: "Temp-to-Hire",        href: "/services/temp-to-hire" },
  { label: "Custom Solutions",    href: "/custom-services-provided" },
];

const industriesLinks = [
  { label: "Information Technology",     href: "/information-technology" },
  { label: "Hospitals & Healthcare",     href: "/hospitals-and-healthcare" },
  { label: "Engineering",               href: "/engineering" },
  { label: "Banking & Finance",         href: "/banking-and-finance" },
  { label: "Manufacturing",             href: "/manufacturing-and-production" },
  { label: "Oil & Gas",                 href: "/oil-gas" },
  { label: "Pharmaceutical",            href: "/pharmaceutical" },
  { label: "Legal",                     href: "/legal-industry" },
  { label: "Aerospace",                 href: "/aerospace-industry" },
  { label: "Defence & Space",           href: "/defence-and-space" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopScrolled, setDesktopScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "industries" | null>(null);

  useEffect(() => {
    const handleScroll = () => setDesktopScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpanded = (key: "services" | "industries") =>
    setMobileExpanded((prev) => (prev === key ? null : key));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        desktopScrolled
          ? "bg-[#020510]/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-16 max-w-[1400px] mx-auto">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
          <span className="text-white">Cloud</span>
          <span className="text-[#06B6D4]">Infra IT</span>
        </Link>

        {/* ── Desktop nav ────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-1">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl py-2 w-52">
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Industries
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "industries" && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl py-2 w-56">
                  {industriesLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/our-process" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            Our Process
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            About
          </Link>
          <Link href="/contact" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            Contact
          </Link>
        </div>

        {/* ── Desktop CTAs ─────────────────────────── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/job-opportunities"
            className="text-sm font-semibold text-white/70 hover:text-white px-4 py-2 transition-colors"
          >
            Find a Job
          </Link>
          <Link
            href="/consult-with-us"
            className="inline-flex items-center rounded-full bg-[#06B6D4] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0891b2] transition-colors"
          >
            Request Talent
          </Link>
        </div>

        {/* ── Mobile hamburger ─────────────────────── */}
        <button
          className="lg:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close main navigation menu" : "Open main navigation menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mobile menu ──────────────────────────────── */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-0 bg-[#020510]/98 backdrop-blur-md z-40 overflow-y-auto">
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/8">
            <span className="text-xl font-bold">
              <span className="text-white">Cloud</span>
              <span className="text-[#06B6D4]">Infra IT</span>
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white/60 hover:text-white p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6 flex flex-col gap-1">

            {/* Services accordion */}
            <div>
              <button
                className="w-full flex justify-between items-center py-3 text-base font-medium text-white/80 border-b border-white/5"
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "services" && (
                <div className="pt-2 pb-3 flex flex-col gap-1 pl-3">
                  {servicesLinks.map(item => (
                    <Link key={item.label} href={item.href} className="py-2 text-sm text-white/60 hover:text-[#06B6D4] transition-colors" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries accordion */}
            <div>
              <button
                className="w-full flex justify-between items-center py-3 text-base font-medium text-white/80 border-b border-white/5"
                onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "industries" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "industries" && (
                <div className="pt-2 pb-3 flex flex-col gap-1 pl-3">
                  {industriesLinks.map(item => (
                    <Link key={item.label} href={item.href} className="py-2 text-sm text-white/60 hover:text-[#06B6D4] transition-colors" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/our-process" className="py-3 text-base font-medium text-white/80 border-b border-white/5" onClick={() => setMobileOpen(false)}>Our Process</Link>
            <Link href="/about" className="py-3 text-base font-medium text-white/80 border-b border-white/5" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="py-3 text-base font-medium text-white/80 border-b border-white/5" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="mt-6 flex flex-col gap-3">
              <Link href="/job-opportunities" className="w-full text-center rounded-full border border-white/20 py-3 text-base font-semibold text-white" onClick={() => setMobileOpen(false)}>
                Find a Job
              </Link>
              <Link href="/consult-with-us" className="w-full text-center rounded-full bg-[#06B6D4] py-3 text-base font-semibold text-white" onClick={() => setMobileOpen(false)}>
                Request Talent
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
