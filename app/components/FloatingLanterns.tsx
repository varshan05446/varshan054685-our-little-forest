"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/random";
import { siteContent } from "@/config/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Lantern {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

interface FloatingLanternsProps {
  count?: number;
  className?: string;
}

/**
 * Paper lanterns gently rising into the night sky.
 */
export function FloatingLanterns({ count = 10, className = "" }: FloatingLanternsProps) {
  const reducedMotion = useReducedMotion();
  const activeCount = reducedMotion ? Math.min(4, count) : count;

  const lanterns = useMemo<Lantern[]>(() => {
    return Array.from({ length: activeCount }).map((_, i) => {
      const r1 = seededRandom(i + 1);
      const r2 = seededRandom(i + 1001);
      const r3 = seededRandom(i + 2001);
      return {
        id: i,
        left: 10 + r1 * 80,
        size: 16 + r2 * 24,
        delay: r3 * 6,
        duration: 12 + r1 * 10,
        color: r2 > 0.5 ? "#f6c46a" : "#e8a87c",
      };
    });
  }, [activeCount]);

  if (!siteContent.animation.enableParticles) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[5] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {lanterns.map((lantern) => (
        <span
          key={lantern.id}
          className="absolute rounded-full"
          style={{
            left: `${lantern.left}%`,
            bottom: "-10%",
            width: lantern.size,
            height: lantern.size * 1.4,
            background: `radial-gradient(circle at 30% 30%, ${lantern.color}, rgba(0,0,0,0.2))`,
            boxShadow: `0 0 ${lantern.size}px ${lantern.color}80`,
            animation: `lantern-rise ${lantern.duration}s ease-in-out ${lantern.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
