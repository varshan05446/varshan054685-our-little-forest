"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineCardProps {
  date: string;
  title: string;
  caption: string;
  image: string;
  index: number;
}

/**
 * A single event on the friendship timeline.
 */
export function TimelineCard({ date, title, caption, image, index }: TimelineCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex w-full items-center justify-center md:justify-${isEven ? "start" : "end"}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cream bg-accent shadow-[0_0_12px_rgba(246,196,106,0.6)]" />

      {/* Card content */}
      <div
        className={`w-[85%] max-w-sm rounded-2xl border border-warm-brown/10 bg-paper/90 p-5 shadow-xl backdrop-blur-sm md:w-[45%] ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-warm-brown/10">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 85vw, 400px"
          />
        </div>
        <span className="inline-block rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage-dark">
          {date}
        </span>
        <h3 className="mt-2 font-hand text-2xl text-warm-brown">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-warm-brown/80">{caption}</p>
      </div>
    </motion.div>
  );
}
