"use client";

import { Section, SectionHeader } from "@/app/components/Section";
import { TimelineCard } from "@/app/components/TimelineCard";
import { FallingLeaves } from "@/app/components/FallingLeaves";
import { siteContent } from "@/config/site-content";

export function Chapter2() {
  const { id, title, subtitle, events } = siteContent.chapter2;

  return (
    <Section id={id} centered={false} className="relative bg-background py-24 md:py-32">
      <FallingLeaves count={8} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="relative mt-8 space-y-16 md:space-y-24">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent/60 via-sage/40 to-transparent" />

          {events.map((event, index) => (
            <TimelineCard
              key={index}
              date={event.date}
              title={event.title}
              caption={event.caption}
              image={event.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
