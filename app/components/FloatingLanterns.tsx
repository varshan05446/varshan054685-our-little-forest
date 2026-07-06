"use client";

import { useMemo } from "react";
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
    return Array.from({ length: activeCount }).map((_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      size: 16 + Math.random() * 24,
      delay: Math.random() * 6,
      duration: 12 + Math.random() * 10,
      color: Math.random() > 0.5 ? "#f6c46a" : "#e8a87c",
    }));
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
