"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin progress line at the top of the page.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-soft-orange via-accent to-sage"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
