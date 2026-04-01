"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

/**
 * TransitionLink — 2026-standard component for Native View Transitions.
 * Wraps next/link and triggers document.startViewTransition.
 */
interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
}

export function TransitionLink({
  href,
  children,
  className,
  onClick,
  target,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Skip standard click handling (CMD/Ctrl clicks etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    
    // 2. Skip if it's external or target="_blank"
    if (target === "_blank") return;
    const isInternal = href.toString().startsWith("/") || href.toString().startsWith(window.location.origin);
    if (!isInternal) return;

    // 3. Skip if it's the same URL or hash
    if (href.toString().includes("#") || href.toString() === window.location.pathname) return;

    e.preventDefault();

    // The current page is captured here
    if (!document.startViewTransition) {
      router.push(href.toString());
      return;
    }

    // Capture the state, then update the DOM (router changes path), then browser animates
    document.startViewTransition(() => {
      // Ensure scroll restoration is handled smoothly
      window.scrollTo(0, 0);
      router.push(href.toString());
    });

    if (onClick) onClick(e);
  };

  return (
    <Link href={href} className={className} onClick={handleTransition} target={target} {...props}>
      {children}
    </Link>
  );
}
