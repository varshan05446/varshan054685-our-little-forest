"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/config/site-content";

/**
 * Subtle warm glow that follows the cursor on desktop.
 */
export function CursorGlow() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!siteContent.animation.enableCursorGlow) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="cursor-glow"
      style={{
        "--cursor-x": `${position.x}px`,
        "--cursor-y": `${position.y}px`,
      } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}
