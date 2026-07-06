"use client";

import { motion } from "framer-motion";

interface FlowerBearSceneProps {
  mode?: "meet" | "sit";
  className?: string;
}

/**
 * Original SVG illustrations of the little flower and the calm teddy bear.
 */
export function FlowerBearScene({ mode = "meet", className = "" }: FlowerBearSceneProps) {
  const flowerVariants = {
    meet: { x: 0, opacity: 1, scale: 1 },
    sit: { x: -40, opacity: 1, scale: 1 },
  };

  const bearVariants = {
    meet: { x: 0, opacity: 1, scale: 1 },
    sit: { x: 40, opacity: 1, scale: 1 },
  };

  return (
    <div className={`relative flex items-end justify-center ${className}`}>
      {/* Flower */}
      <motion.div
        initial={{ x: -120, opacity: 0, scale: 0.8 }}
        animate={mode === "meet" ? "meet" : "sit"}
        variants={flowerVariants}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <svg width="100" height="140" viewBox="0 0 100 140" fill="none" className="drop-shadow-lg">
          {/* Stem */}
          <path
            d="M50 130 Q50 90 50 50"
            stroke="#5e7569"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <path
            d="M50 100 Q30 90 25 75 Q40 80 50 95"
            fill="#8da399"
          />
          <path
            d="M50 80 Q70 70 75 55 Q60 60 50 75"
            fill="#8da399"
          />
          {/* Petals */}
          <g>
            <circle cx="50" cy="35" r="12" fill="#e8a87c" />
            <circle cx="35" cy="45" r="12" fill="#f6c46a" />
            <circle cx="65" cy="45" r="12" fill="#f6c46a" />
            <circle cx="38" cy="25" r="12" fill="#e8a87c" />
            <circle cx="62" cy="25" r="12" fill="#e8a87c" />
            <circle cx="50" cy="20" r="12" fill="#f6c46a" />
          </g>
          {/* Center */}
          <circle cx="50" cy="35" r="8" fill="#5c3a21" />
          {/* Smile */}
          <path
            d="M46 38 Q50 42 54 38"
            stroke="#fff8e7"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Eyes */}
          <circle cx="46" cy="32" r="1.5" fill="#fff8e7" />
          <circle cx="54" cy="32" r="1.5" fill="#fff8e7" />
        </svg>
      </motion.div>

      {/* Bear */}
      <motion.div
        initial={{ x: 120, opacity: 0, scale: 0.8 }}
        animate={mode === "meet" ? "meet" : "sit"}
        variants={bearVariants}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative z-10"
      >
        <svg width="130" height="140" viewBox="0 0 130 140" fill="none" className="drop-shadow-lg">
          {/* Body */}
          <ellipse cx="65" cy="110" rx="45" ry="40" fill="#7a5230" />
          <ellipse cx="65" cy="115" rx="28" ry="24" fill="#a89b8c" opacity="0.4" />
          {/* Arms */}
          <ellipse cx="28" cy="105" rx="14" ry="22" fill="#7a5230" transform="rotate(20 28 105)" />
          <ellipse cx="102" cy="105" rx="14" ry="22" fill="#7a5230" transform="rotate(-20 102 105)" />
          {/* Head */}
          <circle cx="65" cy="55" r="38" fill="#7a5230" />
          {/* Ears */}
          <circle cx="35" cy="32" r="12" fill="#7a5230" />
          <circle cx="95" cy="32" r="12" fill="#7a5230" />
          <circle cx="35" cy="32" r="6" fill="#a89b8c" opacity="0.5" />
          <circle cx="95" cy="32" r="6" fill="#a89b8c" opacity="0.5" />
          {/* Muzzle */}
          <ellipse cx="65" cy="62" rx="16" ry="12" fill="#d8c4b0" />
          {/* Nose */}
          <ellipse cx="65" cy="58" rx="5" ry="4" fill="#2a1d17" />
          {/* Mouth */}
          <path
            d="M60 66 Q65 71 70 66"
            stroke="#2a1d17"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Eyes */}
          <circle cx="52" cy="50" r="3.5" fill="#2a1d17" />
          <circle cx="78" cy="50" r="3.5" fill="#2a1d17" />
          <circle cx="53" cy="49" r="1" fill="#fff8e7" />
          <circle cx="79" cy="49" r="1" fill="#fff8e7" />
          {/* Blush */}
          <circle cx="45" cy="60" r="4" fill="#d8a0a0" opacity="0.5" />
          <circle cx="85" cy="60" r="4" fill="#d8a0a0" opacity="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}
