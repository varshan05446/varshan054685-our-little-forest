"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/config/site-content";

function getInitialReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  if (!siteContent.animation.reducedMotionFallback) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Returns true if the user prefers reduced motion or if the config disables animations.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(getInitialReducedMotion);

  useEffect(() => {
    if (!siteContent.animation.reducedMotionFallback) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reduced;
}
