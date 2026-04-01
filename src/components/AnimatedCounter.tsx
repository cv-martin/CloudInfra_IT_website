"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string; // e.g. "2,400+", "98%", "48h"
  duration?: number;
  className?: string;
}

// Extracts leading number from a string like "2,400+", "98%", "48h", "12"
function parseTarget(str: string): { prefix: string; number: number; suffix: string } {
  const match = str.match(/^([^0-9]*)([0-9,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: str };
  return {
    prefix: match[1] || "",
    number: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3] || "",
  };
}

function formatNumber(n: number, originalHadComma: boolean): string {
  if (originalHadComma && n >= 1000) {
    return n.toLocaleString("en-US");
  }
  return n.toString();
}

export default function AnimatedCounter({
  target,
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const hasStarted = useRef(false);
  const originalHadComma = target.includes(",");
  const { prefix, number, suffix } = parseTarget(target);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * number);
      setDisplay(formatNumber(current, originalHadComma));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(formatNumber(number, originalHadComma));
    };
    requestAnimationFrame(tick);
  }, [isInView, number, duration, originalHadComma]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
