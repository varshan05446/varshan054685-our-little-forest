"use client";

import { motion } from "framer-motion";
import { Music, Pause, Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";
import { siteContent } from "@/config/site-content";

/**
 * Floating music controls.
 * Large, thumb-friendly, and readable in the storybook UI.
 */
export function AudioControls() {
  const { isPlaying, isMuted, toggle, toggleMute } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-night/80 px-2 py-2 shadow-xl backdrop-blur-md border border-warm-brown/30"
    >
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={toggle}
        className="flex items-center gap-2 rounded-full bg-warm-brown px-4 py-3 text-cream shadow-md transition-colors hover:bg-warm-brown-light"
        aria-label={isPlaying ? siteContent.audio.pauseButtonLabel : siteContent.audio.playButtonLabel}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Music className="h-5 w-5" />
        )}
        <span className="text-sm font-medium">
          {isPlaying ? siteContent.audio.pauseButtonLabel : siteContent.audio.playButtonLabel}
        </span>
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={toggleMute}
        className="rounded-full p-3 text-cream transition-colors hover:bg-warm-brown/40"
        aria-label={isMuted ? siteContent.audio.unmuteButtonLabel : siteContent.audio.muteButtonLabel}
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </motion.button>
    </motion.div>
  );
}
