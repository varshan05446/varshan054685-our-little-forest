"use client";

import { useMemo } from "react";
import { siteContent } from "@/config/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

interface StarFieldProps {
  count?: number;
  className?: string;
}

/**
 * Twinkling stars for the night-sky finale.
 */
export function StarField({ count = 64, className = "" }: StarFieldProps) {
  const reducedMotion = useReducedMotion();
  const activeCount = reducedMotion ? Math.min(16, count) : count;

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: activeCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 80,
      size: 1 + Math.random() * 2.5,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }));
  }, [activeCount]);

  if (!siteContent.animation.enableParticles) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-cream"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 3}px rgba(255,248,231,0.6)`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
