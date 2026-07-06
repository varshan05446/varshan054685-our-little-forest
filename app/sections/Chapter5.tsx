"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/Section";
import { RainParticles } from "@/app/components/RainParticles";
import { siteContent } from "@/config/site-content";

export function Chapter5() {
  const { id, title, subtitle, lines } = siteContent.chapter5;

  return (
    <Section id={id} dark className="relative bg-gradient-to-b from-night to-background">
      <RainParticles count={60} />

      {/* Muted fog */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-night/60" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6">
        <SectionHeader title={title} subtitle={subtitle} light />

        <div className="mt-6 space-y-6 text-center">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="font-hand text-2xl leading-relaxed text-cream/90 md:text-3xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </Section>
  );
}
