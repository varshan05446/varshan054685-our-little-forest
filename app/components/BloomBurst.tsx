"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { seededRandom } from "@/lib/random";

interface BloomBurstProps {
  active: boolean;
  count?: number;
}

const EMOJIS = ["🌼", "🍂", "🍁", "✨", "🌿"];

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  delay: number;
  duration: number;
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }).map((_, i) => {
    const r1 = seededRandom(i + 1);
    const r2 = seededRandom(i + 1001);
    const r3 = seededRandom(i + 2001);
    const r4 = seededRandom(i + 3001);
    const r5 = seededRandom(i + 4001);
    return {
      id: i,
      emoji: EMOJIS[Math.floor(r1 * EMOJIS.length)],
      x: (r2 - 0.5) * 600,
      y: (r3 - 0.5) * 600,
      scale: 0.6 + r4,
      rotation: r5 * 360,
      delay: r1 * 0.3,
      duration: 1.5 + r2 * 1.5,
    };
  });
}

/**
 * A gentle explosion of flowers, leaves, and sparkles.
 */
export function BloomBurst({ active, count = 40 }: BloomBurstProps) {
  const particles = useMemo(() => createParticles(count), [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {active &&
          particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, p.scale, p.scale * 0.8, 0],
                x: p.x,
                y: p.y,
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: "easeOut",
              }}
              className="absolute text-2xl md:text-3xl"
            >
              {p.emoji}
            </motion.span>
          ))}
      </AnimatePresence>
    </div>
  );
}
