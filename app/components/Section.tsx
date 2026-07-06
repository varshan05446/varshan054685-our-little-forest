"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
  minHeight?: string;
  dark?: boolean;
}

/**
 * A reusable storybook chapter wrapper.
 */
export function Section({
  id,
  children,
  className = "",
  centered = true,
  minHeight = "min-h-screen",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden px-6 py-20 md:px-12 ${minHeight} ${
        centered ? "flex flex-col items-center justify-center" : ""
      } ${dark ? "bg-night text-cream" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-10 text-center md:mb-14"
    >
      <h2
        className={`font-hand text-4xl md:text-6xl ${
          light ? "text-cream" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
