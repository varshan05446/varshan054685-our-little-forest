"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/random";
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
    return Array.from({ length: activeCount }).map((_, i) => {
      const r1 = seededRandom(i + 1);
      const r2 = seededRandom(i + 1001);
      const r3 = seededRandom(i + 2001);
      return {
        id: i,
        left: r1 * 100,
        top: r2 * 80,
        size: 1 + r3 * 2.5,
        delay: r1 * 4,
        duration: 2 + r2 * 3,
      };
    });
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
