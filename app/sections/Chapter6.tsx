"use client";

import { Section, SectionHeader } from "@/app/components/Section";
import { LetterPaper } from "@/app/components/LetterPaper";
import { Fireflies } from "@/app/components/Fireflies";
import { siteContent } from "@/config/site-content";

export function Chapter6() {
  const { id, title } = siteContent.chapter6;

  return (
    <Section id={id} className="relative bg-background py-24 md:py-32">
      <Fireflies count={10} />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[10%] h-64 w-64 rounded-full bg-soft-orange/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-sage/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <SectionHeader title={title} />
        <LetterPaper />
      </div>
    </Section>
  );
}
