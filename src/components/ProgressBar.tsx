"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * ProgressBar — Slim, neon-green indicator at the top of the viewport.
 * Provides immediate visual feedback during navigation to solve
 * the "navigation takes so long" perception.
 */
export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // We detect path changes to "complete" the progress
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  // We listen for any click on a link to "start" the progress
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      
      if (target && 
          target.href && 
          target.href.startsWith(window.location.origin) && 
          target.target !== "_blank" &&
          !target.href.includes("#") &&
          target.href !== window.location.href) {
        setIsNavigating(true);
      }
    };

    window.addEventListener("click", handleAnchorClick);
    return () => window.removeEventListener("click", handleAnchorClick);
  }, []);

  if (shouldReduceMotion) return null;

  const progressProps = isNavigating ? {
    role: "progressbar",
    "aria-valuenow": 70,
    "aria-label": "Page transition progress",
    "aria-hidden": "false" as const,
  } : {
    "aria-hidden": "true" as const,
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[200] pointer-events-none"
      {...progressProps}
    >
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "70%", opacity: 1 }}
            exit={{ width: "100%", opacity: 0 }}
            transition={{ 
              width: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.2 }
            }}
            className="h-[2px] bg-gradient-to-r from-[#a4f07a]/40 via-[#a4f07a] to-[#a4f07a]/40 shadow-[0_0_8px_#a4f07a]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
