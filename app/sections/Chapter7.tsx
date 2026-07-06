"use client";

import { Section, SectionHeader } from "@/app/components/Section";
import { FlipCard } from "@/app/components/FlipCard";
import { FallingLeaves } from "@/app/components/FallingLeaves";
import { siteContent } from "@/config/site-content";

export function Chapter7() {
  const { id, title, subtitle, reasons } = siteContent.chapter7;

  return (
    <Section id={id} centered={false} className="relative bg-background py-24 md:py-32">
      <FallingLeaves count={8} />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <FlipCard
              key={index}
              title={reason.title}
              note={reason.note}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
