"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PolaroidProps {
  src: string;
  caption: string;
  alt?: string;
  rotation?: number;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

/**
 * A vintage polaroid frame with a caption.
 */
export function Polaroid({
  src,
  caption,
  alt,
  rotation = -2,
  className = "",
  priority = false,
  onClick,
}: PolaroidProps) {
  return (
    <motion.figure
      whileHover={onClick ? { scale: 1.03, rotate: 0 } : { scale: 1.02 }}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`w-full max-w-[260px] ${onClick ? "cursor-pointer" : "cursor-default"} bg-paper p-3 pb-5 shadow-xl ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25), inset 0 0 20px rgba(92,58,33,0.05)",
      }}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-warm-brown/10">
        <Image
          src={src}
          alt={alt || caption}
          fill
          unoptimized
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 260px"
        />
      </div>
      <figcaption className="mt-3 text-center font-hand text-lg text-warm-brown">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
