"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WoodenSign } from "@/app/components/WoodenSign";
import { Fireflies } from "@/app/components/Fireflies";
import { FallingLeaves } from "@/app/components/FallingLeaves";
import { useLenis } from "@/hooks/useLenis";

/**
 * The dark opening scene.
 * Fireflies and leaves fade in after 2 seconds, then the wooden sign appears.
 * Clicking zooms into the forest and scrolls to Chapter 1.
 */
export function Opening() {
  const [showScene, setShowScene] = useState(false);
  const [zoom, setZoom] = useState(false);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setShowScene(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBegin = () => {
    setZoom(true);
    setTimeout(() => {
      scrollTo("#chapter-1", { offset: 0 });
    }, 900);
  };

  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-night"
      onClick={handleBegin}
    >
      {/* Forest background silhouette */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(46,36,28,1) 0%, rgba(28,18,15,1) 50%, rgba(15,11,20,1) 100%)",
          }}
        />
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMax slice"
          className="absolute bottom-0 left-0 w-full text-background opacity-90"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Zoomable foreground layer */}
      <motion.div
        animate={{
          scale: zoom ? 2.5 : 1,
          opacity: zoom ? 0 : 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center"
      >
        {showScene && (
          <>
            <Fireflies count={30} />
            <FallingLeaves count={12} />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="pointer-events-none absolute inset-0 z-0"
            >
              <div className="absolute left-[15%] top-[20%] h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
              <div className="absolute bottom-[30%] right-[10%] h-40 w-40 rounded-full bg-soft-orange/5 blur-3xl" />
            </motion.div>

            <WoodenSign onClick={handleBegin} />
          </>
        )}
      </motion.div>
    </section>
  );
}
