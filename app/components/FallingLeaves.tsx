"use client";

import { useMemo } from "react";
import { siteContent } from "@/config/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LEAF_COLORS = ["#e8a87c", "#c78055", "#f6c46a", "#8da399", "#d8a0a0"];

interface Leaf {
  id: number;
  left: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  blur: number;
}

interface FallingLeavesProps {
  count?: number;
  className?: string;
}

/**
 * Autumn leaves drifting down the screen.
 */
export function FallingLeaves({ count = 16, className = "" }: FallingLeavesProps) {
  const reducedMotion = useReducedMotion();
  const activeCount = reducedMotion ? 0 : count;

  const leaves = useMemo<Leaf[]>(() => {
    return Array.from({ length: activeCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 14,
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      delay: Math.random() * 8,
      duration: 7 + Math.random() * 10,
      blur: Math.random() > 0.7 ? 1 : 0,
    }));
  }, [activeCount]);

  if (!siteContent.animation.enableParticles || leaves.length === 0) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[5] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="absolute rounded-full opacity-80"
          style={{
            left: `${leaf.left}%`,
            top: "-5vh",
            width: leaf.size,
            height: leaf.size * 1.6,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            background: leaf.color,
            filter: `blur(${leaf.blur}px)`,
            animation: `fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
