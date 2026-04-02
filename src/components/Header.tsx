"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionLink } from "./TransitionLink";

/**
 * Header — Flat, clear navigation with 2026-standard active link highlighting.
 *
 * Principle: A user should know where they are and where to go within 2 seconds.
 */

const servicesLinks = [
  { label: "All Services",         href: "/services" },
  { label: "Contract Staffing",    href: "/services" },
  { label: "Permanent Staffing",   href: "/services" },
  { label: "Temp-to-Hire",         href: "/services" },
  { label: "Custom / Enterprise",  href: "/custom-services-provided" },
];

const industriesLinks = [
  { label: "Information Technology",  href: "/information-technology" },
  { label: "Hospitals & Healthcare",  href: "/hospitals-and-healthcare" },
  { label: "Engineering",            href: "/engineering" },
  { label: "Banking & Finance",      href: "/banking-and-finance" },
  { label: "Manufacturing",          href: "/manufacturing" },
  { label: "Oil, Gas & Energy",      href: "/oil-and-gas" },
  { label: "Pharmaceutical",         href: "/pharmaceutical" },
  { label: "Legal",                  href: "/legal" },
  { label: "Aerospace",              href: "/aerospace" },
  { label: "Defence & Space",        href: "/defence-and-space" },
];

const navLinks = [
  { label: "Our Process", href: "/our-process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopScrolled, setDesktopScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "industries" | null>(null);

  useEffect(() => {
    const handleScroll = () => setDesktopScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /*
   * Header style logic:
   *  - Homepage only: transparent on load, glass on scroll (cinematic hero beneath)
   *  - All inner pages: always solid glass from load (no juggling on arrival)
   */
  const isGlass = !isHome || desktopScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        isGlass
          ? "bg-black/88 backdrop-blur-xl border-b border-white/6 py-4 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 max-w-[1440px] mx-auto">

        {/* Logo */}
        <TransitionLink href="/" className="text-2xl font-bold tracking-tighter shrink-0 group">
          <span className="text-white transition-colors group-hover:text-white/90">Cloud</span>
          <span className="text-[#a4f07a] ci-text-glow ml-0.5">Infra IT</span>
        </TransitionLink>

        {/* ── Desktop nav ────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-2">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium transition-all rounded-full hover:bg-white/5 ${
              pathname === "/services" ? "text-[#a4f07a]" : "text-white/85 hover:text-[#a4f07a]"
            }`}>
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              {pathname === "/services" && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#a4f07a]/10 rounded-full border border-[#a4f07a]/20 -z-10"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 pt-3 z-50"
                >
                  <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl py-3 w-56 overflow-hidden">
                    {servicesLinks.map((item) => (
                      <TransitionLink
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-[13px] text-white/60 hover:text-[#a4f07a] hover:bg-white/5 transition-all"
                      >
                        {item.label}
                      </TransitionLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white/85 hover:text-[#a4f07a] transition-all rounded-full hover:bg-white/5">
              Industries
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 pt-3 z-50"
                >
                  <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl py-3 w-60 overflow-hidden">
                    {industriesLinks.map((item) => (
                      <TransitionLink
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-[13px] text-white/60 hover:text-[#a4f07a] hover:bg-white/5 transition-all"
                      >
                        {item.label}
                      </TransitionLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <TransitionLink
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium transition-all rounded-full hover:bg-white/5 ${
                  isActive ? "text-[#a4f07a]" : "text-white/85 hover:text-[#a4f07a]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#a4f07a]/10 rounded-full border border-[#a4f07a]/20 -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </TransitionLink>
            );
          })}
        </div>

        {/* ── Desktop CTAs ─────────────────────────── */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <TransitionLink
            href="/job-opportunities"
            className="text-[13px] font-semibold text-white/90 hover:text-white px-2 transition-all"
          >
            Find a Job
          </TransitionLink>
          <TransitionLink
            href="/consult-with-us"
            className="ci-pill-btn ci-pill-btn-primary !py-2.5 !px-6 text-[13px]"
          >
            Let&apos;s Talk
          </TransitionLink>
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            id="mobile-menu" 
            className="lg:hidden fixed inset-0 bg-black z-40 overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">
              <span className="text-xl font-bold">
                <span className="text-white">Cloud</span>
                <span className="text-[#a4f07a]">Infra IT</span>
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white/60 hover:text-white p-2">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-6 py-8 flex flex-col gap-2">
              {/* Mobile menu items with standard styles */}
              <button
                className="w-full flex justify-between items-center py-4 text-lg font-medium text-white/90 border-b border-white/5"
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "services" && (
                <div className="py-2 flex flex-col gap-1 pl-4 border-l border-[#a4f07a]/20 ml-2">
                  {servicesLinks.map(item => (
                    <TransitionLink key={item.label} href={item.href} className="py-2.5 text-white/60 hover:text-[#a4f07a]">
                      {item.label}
                    </TransitionLink>
                  ))}
                </div>
              )}

              <button
                className="w-full flex justify-between items-center py-4 text-lg font-medium text-white/90 border-b border-white/5"
                onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
              >
                Industries
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileExpanded === "industries" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "industries" && (
                <div className="py-2 flex flex-col gap-1 pl-4 border-l border-[#a4f07a]/20 ml-2">
                  {industriesLinks.map(item => (
                    <TransitionLink key={item.label} href={item.href} className="py-2.5 text-white/60 hover:text-[#a4f07a]">
                      {item.label}
                    </TransitionLink>
                  ))}
                </div>
              )}

              <TransitionLink href="/our-process" className="py-4 text-lg font-medium text-white/90 border-b border-white/5">Our Process</TransitionLink>
              <TransitionLink href="/about" className="py-4 text-lg font-medium text-white/90 border-b border-white/5">About</TransitionLink>
              <TransitionLink href="/contact" className="py-4 text-lg font-medium text-white/90 border-b border-white/5">Contact</TransitionLink>

              <div className="mt-10 flex flex-col gap-4">
                <TransitionLink href="/consult-with-us" className="ci-pill-btn ci-pill-btn-primary w-full text-center">
                  Let&apos;s Talk
                </TransitionLink>
                <TransitionLink href="/job-opportunities" className="ci-pill-btn ci-pill-btn-outline w-full text-center">
                  Find a Job
                </TransitionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

