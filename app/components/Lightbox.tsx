"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  src: string | null;
  caption: string;
  onClose: () => void;
}

/**
 * A focused image lightbox with a soft paper backdrop.
 */
export function Lightbox({ src, caption, onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-6 backdrop-blur-sm"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-paper/10 p-3 text-cream hover:bg-paper/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </motion.button>

          <motion.figure
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-3xl rounded-2xl bg-paper p-3 pb-6 shadow-2xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={caption}
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <figcaption className="mt-4 text-center font-hand text-2xl text-warm-brown">
              {caption}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
