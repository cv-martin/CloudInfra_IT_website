"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown,
  Cloud, HeartPulse, Cog, Landmark, Factory,
  Flame, Pill, Scale, Plane, Shield,
  Layers, UserCheck, Clock, Building,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionLink } from "./TransitionLink";

/**
 * Header — Premium 2026 enterprise navigation.
 * Philosophy: Authority + Clarity. The user knows where they are in <2 sec.
 */

const servicesLinks = [
  {
    label: "Contract Staffing",
    href: "/services",
    description: "Flexible talent on-demand",
    Icon: Clock,
  },
  {
    label: "Permanent Staffing",
    href: "/services",
    description: "Full-time direct placements",
    Icon: UserCheck,
  },
  {
    label: "Temp-to-Hire",
    href: "/services",
    description: "Evaluate before committing",
    Icon: Layers,
  },
  {
    label: "Custom / Enterprise",
    href: "/custom-services-provided",
    description: "Tailored workforce solutions",
    Icon: Building,
  },
];

const industriesLinks = [
  { label: "Information Technology", href: "/information-technology",  Icon: Cloud },
  { label: "Hospitals & Healthcare",  href: "/hospitals-and-healthcare", Icon: HeartPulse },
  { label: "Engineering",            href: "/engineering",             Icon: Cog },
  { label: "Banking & Finance",      href: "/banking-and-finance",     Icon: Landmark },
  { label: "Manufacturing",          href: "/manufacturing",           Icon: Factory },
  { label: "Oil, Gas & Energy",      href: "/oil-and-gas",            Icon: Flame },
  { label: "Pharmaceutical",         href: "/pharmaceutical",          Icon: Pill },
  { label: "Legal",                  href: "/legal",                   Icon: Scale },
  { label: "Aerospace",              href: "/aerospace",               Icon: Plane },
  { label: "Defence & Space",        href: "/defence-and-space",       Icon: Shield },
];

const navLinks = [
  { label: "Our Process", href: "/our-process" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Transparent on homepage hero, solid glass always on inner pages
  const isGlass = !isHome || desktopScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        isGlass
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-10 xl:px-14 max-w-[1440px] mx-auto h-[68px]">

        {/* ── Logo ──────────────────────────────────────────── */}
        <TransitionLink
          href="/"
          className="flex items-center gap-0.5 shrink-0 group"
          aria-label="CloudInfra IT Home"
        >
          <span className="text-[1.45rem] font-black tracking-[-0.04em] text-white transition-colors group-hover:text-white/90 leading-none">
            Cloud
          </span>
          <span className="text-[1.45rem] font-black tracking-[-0.04em] leading-none" style={{ color: "#a4f07a" }}>
            Infra
          </span>
          <span className="text-[1.45rem] font-black tracking-[-0.04em] text-white/50 leading-none ml-1">
            IT
          </span>
        </TransitionLink>

        {/* ── Desktop nav ───────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-1">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              id="services-menu-trigger"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "services"}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-200 rounded-lg ${
                pathname === "/services" || pathname === "/custom-services-provided"
                  ? "text-[#a4f07a]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  activeDropdown === "services" ? "rotate-180 text-[#a4f07a]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 pt-3 z-50 min-w-[260px]"
                >
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                    {/* Green accent top line */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-[#a4f07a]/60 via-[#a4f07a] to-[#a4f07a]/60" />

                    <div className="p-2">
                      {servicesLinks.map((item) => (
                        <TransitionLink
                          key={item.label}
                          href={item.href}
                          className="flex items-start gap-3.5 px-4 py-3.5 rounded-xl hover:bg-white/[0.04] transition-all group/item"
                        >
                          <div className="mt-0.5 h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover/item:bg-[#a4f07a]/10 group-hover/item:border-[#a4f07a]/20 transition-all">
                            <item.Icon className="h-3.5 w-3.5 text-white/30 group-hover/item:text-[#a4f07a] transition-colors" />
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-white/85 group-hover/item:text-white transition-colors">
                              {item.label}
                            </p>
                            <p className="text-[11px] text-white/35 mt-0.5 group-hover/item:text-white/50 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </TransitionLink>
                      ))}
                    </div>

                    <div className="border-t border-white/[0.05] px-4 py-3">
                      <TransitionLink
                        href="/services"
                        className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#a4f07a]/70 hover:text-[#a4f07a] transition-colors"
                      >
                        View All Services
                        <ArrowUpRight className="h-3 w-3" />
                      </TransitionLink>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries mega-dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              id="industries-menu-trigger"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "industries"}
              className="flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-semibold text-white/70 hover:text-white transition-all duration-200 rounded-lg"
            >
              Industries
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  activeDropdown === "industries" ? "rotate-180 text-[#a4f07a]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 pt-3 z-50 w-[480px]"
                >
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                    {/* Green accent top line */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-[#a4f07a]/60 via-[#a4f07a] to-[#a4f07a]/60" />

                    <div className="p-3">
                      <p className="px-3 pt-1 pb-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/25">
                        Sectors We Staff
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {industriesLinks.map((item) => (
                          <TransitionLink
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all group/item"
                          >
                            <item.Icon className="h-3.5 w-3.5 text-white/25 group-hover/item:text-[#a4f07a] transition-colors shrink-0" />
                            <span className="text-[12.5px] font-medium text-white/60 group-hover/item:text-white transition-colors">
                              {item.label}
                            </span>
                          </TransitionLink>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/[0.05] px-6 py-3 flex items-center justify-between">
                      <span className="text-[11px] text-white/20 font-medium">
                        10 specialized verticals
                      </span>
                      <TransitionLink
                        href="/services"
                        className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#a4f07a]/70 hover:text-[#a4f07a] transition-colors"
                      >
                        Explore All
                        <ArrowUpRight className="h-3 w-3" />
                      </TransitionLink>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standard nav links */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <TransitionLink
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-200 rounded-lg ${
                  isActive
                    ? "text-[#a4f07a]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-[#a4f07a]/8 rounded-lg border border-[#a4f07a]/15 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </TransitionLink>
            );
          })}
        </div>

        {/* ── Desktop CTAs ──────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">

          {/* Divider */}
          <div className="h-5 w-px bg-white/10 mr-1" />

          {/* Find a Job — ghost pill */}
          <TransitionLink
            href="/job-opportunities"
            className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-200 hover:bg-white/[0.04]"
          >
            Find a Job
          </TransitionLink>

          {/* Let's Talk — primary CTA */}
          <TransitionLink
            href="/consult-with-us"
            className="flex items-center gap-1.5 px-5 py-2 text-[13px] font-bold rounded-full bg-[#a4f07a] text-black hover:bg-[#b8f58e] transition-all duration-200 hover:shadow-[0_0_24px_rgba(164,240,122,0.4)] active:scale-95"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </TransitionLink>
        </div>

        {/* ── Mobile hamburger ──────────────────────────────── */}
        <button
          className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            id="mobile-menu"
            className="lg:hidden fixed inset-0 bg-[#050505] z-40 overflow-y-auto"
          >
            {/* Top bar */}
            <div className="flex justify-between items-center px-6 h-[68px] border-b border-white/[0.06]">
              <span className="text-[1.3rem] font-black tracking-[-0.04em]">
                <span className="text-white">Cloud</span>
                <span style={{ color: "#a4f07a" }}>Infra</span>
                <span className="text-white/40"> IT</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center h-9 w-9 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-6 flex flex-col gap-1">

              {/* Services accordion */}
              <button
                className="w-full flex justify-between items-center px-2 py-4 text-base font-semibold text-white/80 border-b border-white/[0.06] hover:text-white transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform text-white/30 ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileExpanded === "services" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="py-2 flex flex-col gap-0.5 ml-4 border-l border-[#a4f07a]/15 pl-4">
                      {servicesLinks.map(item => (
                        <TransitionLink
                          key={item.label}
                          href={item.href}
                          className="py-2.5 text-[14px] text-white/50 hover:text-[#a4f07a] transition-colors"
                        >
                          {item.label}
                        </TransitionLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Industries accordion */}
              <button
                className="w-full flex justify-between items-center px-2 py-4 text-base font-semibold text-white/80 border-b border-white/[0.06] hover:text-white transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform text-white/30 ${mobileExpanded === "industries" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileExpanded === "industries" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="py-2 flex flex-col gap-0.5 ml-4 border-l border-[#a4f07a]/15 pl-4">
                      {industriesLinks.map(item => (
                        <TransitionLink
                          key={item.label}
                          href={item.href}
                          className="py-2.5 text-[14px] text-white/50 hover:text-[#a4f07a] transition-colors"
                        >
                          {item.label}
                        </TransitionLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map(link => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-4 text-base font-semibold border-b border-white/[0.06] transition-colors ${
                    pathname === link.href ? "text-[#a4f07a]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </TransitionLink>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <TransitionLink
                  href="/consult-with-us"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#a4f07a] text-black text-[14px] font-bold transition-all active:scale-95"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" />
                </TransitionLink>
                <TransitionLink
                  href="/job-opportunities"
                  className="flex items-center justify-center w-full py-3.5 rounded-full border border-white/15 text-white/70 text-[14px] font-semibold hover:border-white/25 hover:text-white transition-all"
                >
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
