"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/Section";
import { Fireflies } from "@/app/components/Fireflies";
import { siteContent } from "@/config/site-content";

export function Chapter8() {
  const { id, title, subtitle, lines } = siteContent.chapter8;

  return (
    <Section id={id} className="relative bg-gradient-to-b from-background to-night">
      <Fireflies count={14} />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-soft-orange/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mt-4 space-y-6 text-center">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.4 }}
              className="font-hand text-2xl leading-relaxed text-cream md:text-4xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </Section>
  );
}
