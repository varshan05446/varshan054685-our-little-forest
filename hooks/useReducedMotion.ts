"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/config/site-content";

/**
 * Returns true if the user prefers reduced motion or if the config disables animations.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (!siteContent.animation.reducedMotionFallback) {
      setReduced(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reduced;
}
