"use client";

import { motion, type Variants } from "framer-motion";
import { siteContent } from "@/config/site-content";

/**
 * A handwritten letter that unfolds and reveals one line at a time.
 */
export function LetterPaper() {
  const { lines, signature, signatureEmoji } = siteContent.chapter6;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1.2, delayChildren: 0.6 },
    },
  };

  const lineVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.1, rotateX: 20 }}
      whileInView={{ opacity: 1, scaleY: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-2xl origin-top rounded-lg bg-paper p-8 shadow-2xl md:p-14"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(244,236,216,1) 0%, rgba(240,230,205,1) 100%)",
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.4), inset 0 0 40px rgba(92,58,33,0.06)",
      }}
    >
      {/* Paper tape decoration */}
      <div className="absolute -top-3 left-1/2 h-8 w-32 -translate-x-1/2 rotate-[-2deg] bg-sage/40 shadow-sm" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-5"
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            variants={lineVariant}
            className="font-hand text-2xl leading-relaxed text-warm-brown md:text-3xl"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: lines.length * 1.2 + 0.5, duration: 0.8 }}
        className="mt-10 text-right"
      >
        <p className="font-hand text-2xl text-warm-brown md:text-3xl">
          {signature} {signatureEmoji}
        </p>
      </motion.div>
    </motion.div>
  );
}
