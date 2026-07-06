"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

/**
 * A gentle explosion of flowers, leaves, and sparkles.
 */
export function BloomBurst({ active, count = 40 }: BloomBurstProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      scale: 0.6 + Math.random() * 1,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.3,
      duration: 1.5 + Math.random() * 1.5,
    }));
  }, [count]);

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
