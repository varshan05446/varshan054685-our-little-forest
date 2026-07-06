"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/config/site-content";

interface WoodenSignProps {
  onClick?: () => void;
}

/**
 * A charming carved wooden sign that invites the reader into the story.
 */
export function WoodenSign({ onClick }: WoodenSignProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative z-20 w-full max-w-xs cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 rounded-2xl"
      aria-label={siteContent.opening.signText}
    >
      {/* Sign board */}
      <div className="relative overflow-hidden rounded-2xl border-4 border-warm-brown-light bg-gradient-to-b from-warm-brown to-warm-brown-light px-8 py-10 shadow-2xl">
        {/* Wood grain detail */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="pointer-events-none">
            <defs>
              <pattern id="woodGrain" width="20" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M0 20 Q10 10 20 20 T40 20"
                  fill="none"
                  stroke="#2a1d17"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#woodGrain)" />
          </svg>
        </div>

        {/* Nails */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-muted shadow-inner" />
        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-muted shadow-inner" />
        <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-muted shadow-inner" />
        <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-muted shadow-inner" />

        {/* Text */}
        <h1 className="relative z-10 text-center font-hand text-4xl text-cream drop-shadow-md md:text-5xl">
          {siteContent.opening.signText}
        </h1>
      </div>

      {/* Post */}
      <div className="mx-auto -mt-1 h-24 w-5 rounded-b-lg bg-gradient-to-b from-warm-brown-light to-warm-brown" />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 text-center text-sm text-cream/80 font-hand text-xl"
      >
        {siteContent.opening.subtitle}
      </motion.p>
    </motion.button>
  );
}
