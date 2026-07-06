"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/Section";
import { Polaroid } from "@/app/components/Polaroid";
import { Lightbox } from "@/app/components/Lightbox";
import { Fireflies } from "@/app/components/Fireflies";
import { siteContent } from "@/config/site-content";

export function Chapter4() {
  const { id, title, subtitle, photos } = siteContent.chapter4;
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <Section id={id} centered={false} className="relative bg-background py-24 md:py-32">
      <Fireflies count={12} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mt-8 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid flex justify-center"
            >
              <Polaroid
                src={photo.src}
                caption={photo.caption}
                rotation={index % 2 === 0 ? -3 : 3}
                onClick={() => setLightbox({ src: photo.src, caption: photo.caption })}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        caption={lightbox?.caption ?? ""}
        onClose={() => setLightbox(null)}
      />
    </Section>
  );
}
