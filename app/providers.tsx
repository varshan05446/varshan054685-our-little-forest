"use client";

import { MotionConfig } from "framer-motion";
import { AudioProvider } from "@/hooks/useAudio";
import { LenisProvider } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ReactNode } from "react";

function ReducedMotionConfig({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AudioProvider>
      <LenisProvider>
        <ReducedMotionConfig>{children}</ReducedMotionConfig>
      </LenisProvider>
    </AudioProvider>
  );
}
