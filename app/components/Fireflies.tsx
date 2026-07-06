"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/random";
import { siteContent } from "@/config/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Firefly {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

interface FirefliesProps {
  count?: number;
  className?: string;
}

/**
 * Warm glowing fireflies floating across the viewport.
 */
export function Fireflies({ count = 24, className = "" }: FirefliesProps) {
  const reducedMotion = useReducedMotion();
  const activeCount = reducedMotion ? Math.min(6, count) : count;

  const fireflies = useMemo<Firefly[]>(() => {
    return Array.from({ length: activeCount }).map((_, i) => {
      const r1 = seededRandom(i + 1);
      const r2 = seededRandom(i + 1001);
      const r3 = seededRandom(i + 2001);
      const r4 = seededRandom(i + 3001);
      return {
        id: i,
        left: r1 * 100,
        top: r2 * 100,
        size: 2 + r3 * 4,
        delay: r4 * 5,
        duration: 4 + r1 * 6,
        color: r2 > 0.3 ? "#f6c46a" : "#e8a87c",
      };
    });
  }, [activeCount]);

  if (!siteContent.animation.enableParticles) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {fireflies.map((f) => (
        <span
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: f.color,
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px ${f.color}80`,
            animation: `float ${f.duration}s ease-in-out ${f.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
"use client";

import { useMemo } from "react";
import { siteContent } from "@/config/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Firefly {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

interface FirefliesProps {
  count?: number;
  className?: string;
}

/**
 * Warm glowing fireflies floating across the viewport.
 */
export function Fireflies({ count = 24, className = "" }: FirefliesProps) {
  const reducedMotion = useReducedMotion();
  const activeCount = reducedMotion ? Math.min(6, count) : count;

  const fireflies = useMemo<Firefly[]>(() => {
    return Array.from({ length: activeCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
      color: Math.random() > 0.3 ? "#f6c46a" : "#e8a87c",
    }));
  }, [activeCount]);

  if (!siteContent.animation.enableParticles) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {fireflies.map((f) => (
        <span
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: f.color,
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px ${f.color}80`,
            animation: `float ${f.duration}s ease-in-out ${f.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
