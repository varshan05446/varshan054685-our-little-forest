"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string;
  note: string;
}

/**
 * A tap-to-flip card with a 3D paper feel.
 */
export function FlipCard({ title, note }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-48 w-full cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
      role="button"
      aria-pressed={flipped}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((prev) => !prev);
        }
      }}
    >
      <motion.div
        className="relative h-full w-full transform-style-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-warm-brown/20 bg-paper p-6 shadow-lg backface-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(246,196,106,0.08) 0%, transparent 50%)",
          }}
        >
          <span className="mb-2 text-sm uppercase tracking-widest text-muted">
            Thank you for
          </span>
          <h3 className="text-center font-hand text-3xl text-warm-brown">{title}</h3>
          <span className="mt-4 text-xs text-muted">tap to reveal</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl border border-warm-brown/20 bg-cream p-6 shadow-lg backface-hidden rotate-y-180"
          style={{
            backgroundImage:
              "linear-gradient(225deg, rgba(141,163,153,0.12) 0%, transparent 50%)",
          }}
        >
          <p className="text-center font-hand text-2xl leading-relaxed text-warm-brown">
            {note}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
