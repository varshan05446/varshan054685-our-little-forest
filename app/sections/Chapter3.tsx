"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/Section";
import { Fireflies } from "@/app/components/Fireflies";
import { siteContent } from "@/config/site-content";

export function Chapter3() {
  const { id, title, subtitle, me, her } = siteContent.chapter3;

  return (
    <Section id={id} className="relative bg-background">
      <Fireflies count={16} />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-soft-orange/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-sage/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Chaotic Flower card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="rounded-3xl border border-warm-brown/20 bg-paper/90 p-8 shadow-2xl backdrop-blur-md md:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">{me.emoji}</span>
              <h3 className="font-hand text-3xl text-warm-brown">{me.label}</h3>
            </div>
            <ul className="space-y-4">
              {me.items.map((item, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-cream/60 p-4 text-warm-brown shadow-sm"
                >
                  <p className="font-hand text-xl">{item.title}</p>
                  <p className="text-sm text-warm-brown/70">{item.note}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Calm Bear card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="rounded-3xl border border-warm-brown/20 bg-paper/90 p-8 shadow-2xl backdrop-blur-md md:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">{her.emoji}</span>
              <h3 className="font-hand text-3xl text-warm-brown">{her.label}</h3>
            </div>
            <ul className="space-y-4">
              {her.items.map((item, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-cream/60 p-4 text-warm-brown shadow-sm"
                >
                  <p className="font-hand text-xl">{item.title}</p>
                  <p className="text-sm text-warm-brown/70">{item.note}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Together statement */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mx-auto mt-12 max-w-lg text-center font-hand text-2xl text-cream md:text-3xl"
        >
          Together, we somehow make perfect sense.
        </motion.p>
      </div>
    </Section>
  );
}
