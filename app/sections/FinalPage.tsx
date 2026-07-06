"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/app/components/Section";
import { FlowerBearScene } from "@/app/components/FlowerBearScene";
import { StarField } from "@/app/components/StarField";
import { FloatingLanterns } from "@/app/components/FloatingLanterns";
import { Fireflies } from "@/app/components/Fireflies";
import { BloomBurst } from "@/app/components/BloomBurst";
import { siteContent } from "@/config/site-content";

export function FinalPage() {
  const { id, quote, question, buttonLabel, buttonEmoji } = siteContent.final;
  const [blooming, setBlooming] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleContinue = () => {
    setBlooming(true);
    setAnswered(true);
    setTimeout(() => setBlooming(false), 3000);
  };

  return (
    <Section id={id} className="relative min-h-screen bg-night">
      <StarField count={80} />
      <FloatingLanterns count={14} />
      <Fireflies count={24} />
      <BloomBurst active={blooming} />

      {/* Soft moon glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[20%] h-64 w-64 -translate-x-1/2 rounded-full bg-cream/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6"
      >
        <FlowerBearScene mode="sit" className="my-6" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-center font-hand text-3xl leading-relaxed text-cream md:text-5xl"
        >
          {quote}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-center font-hand text-xl text-cream/80 md:text-2xl"
        >
          {question}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={answered}
          className="mt-10 rounded-full bg-gradient-to-r from-rose to-soft-orange px-10 py-5 text-lg font-semibold text-cream shadow-[0_0_40px_rgba(232,168,124,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(232,168,124,0.6)] disabled:opacity-80 md:px-14 md:py-6 md:text-xl"
        >
          <span className="mr-2">{buttonEmoji}</span>
          {answered ? "Story continued" : buttonLabel}
        </motion.button>

        {answered && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center font-hand text-lg text-cream/70"
          >
            The next chapter is ours to write.
          </motion.p>
        )}
      </motion.div>
    </Section>
  );
}
