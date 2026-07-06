"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/Section";
import { FlowerBearScene } from "@/app/components/FlowerBearScene";
import { FallingLeaves } from "@/app/components/FallingLeaves";
import { siteContent } from "@/config/site-content";

export function Chapter1() {
  const { id, title, text, flowerLabel, bearLabel } = siteContent.chapter1;

  return (
    <Section id={id} className="relative bg-background">
      <FallingLeaves count={10} />

      {/* Warm glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] h-56 w-56 rounded-full bg-soft-orange/10 blur-[90px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        <SectionHeader title={title} subtitle={`${flowerLabel} + ${bearLabel}`} />

        <FlowerBearScene mode="meet" className="my-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-md text-center font-hand text-2xl leading-relaxed text-cream md:text-3xl"
        >
          {text}
        </motion.p>
      </div>
    </Section>
  );
}
