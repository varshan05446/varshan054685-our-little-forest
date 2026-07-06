"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/random";
import { siteContent } from "@/config/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Drop {
  id: number;
  left: number;
  width: number;
  height: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface RainParticlesProps {
  count?: number;
  className?: string;
}

/**
 * Gentle rain streaks for emotional moments.
 */
export function RainParticles({ count = 48, className = "" }: RainParticlesProps) {
  const reducedMotion = useReducedMotion();
  const activeCount = reducedMotion ? Math.min(12, count) : count;

  const drops = useMemo<Drop[]>(() => {
    return Array.from({ length: activeCount }).map((_, i) => {
      const r1 = seededRandom(i + 1);
      const r2 = seededRandom(i + 1001);
      const r3 = seededRandom(i + 2001);
      return {
        id: i,
        left: r1 * 100,
        width: 1 + r2 * 1.5,
        height: 12 + r3 * 24,
        delay: r1 * 3,
        duration: 0.8 + r2 * 0.6,
        opacity: 0.2 + r3 * 0.3,
      };
    });
  }, [activeCount]);

  if (!siteContent.animation.enableParticles) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[5] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute rounded-full"
          style={{
            left: `${drop.left}%`,
            top: "-5vh",
            width: drop.width,
            height: drop.height,
            background: "linear-gradient(to bottom, transparent, rgba(200,210,220,0.4))",
            animation: `rain-fall ${drop.duration}s linear ${drop.delay}s infinite`,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
}
