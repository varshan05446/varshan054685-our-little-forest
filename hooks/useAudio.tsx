"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { Howl } from "howler";
import { siteContent } from "@/config/site-content";

interface AudioContextValue {
  isPlaying: boolean;
  isMuted: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  mute: () => void;
  unmute: () => void;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [howl, setHowl] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const { musicPath, volume, loop } = siteContent.audio;

  useEffect(() => {
    const sound = new Howl({
      src: [musicPath],
      volume,
      loop,
      html5: true,
      preload: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onend: () => {
        if (!loop) setIsPlaying(false);
      },
      onmute: () => setIsMuted(sound.mute()),
    });

    setHowl(sound);

    return () => {
      sound.unload();
    };
  }, [musicPath, volume, loop]);

  const play = useCallback(() => {
    howl?.play();
  }, [howl]);

  const pause = useCallback(() => {
    howl?.pause();
  }, [howl]);

  const toggle = useCallback(() => {
    if (!howl) return;
    if (howl.playing()) {
      howl.pause();
    } else {
      howl.play();
    }
  }, [howl]);

  const mute = useCallback(() => {
    howl?.mute(true);
  }, [howl]);

  const unmute = useCallback(() => {
    howl?.mute(false);
  }, [howl]);

  const toggleMute = useCallback(() => {
    if (!howl) return;
    howl.mute(!howl.mute());
  }, [howl]);

  const value = useMemo(
    () => ({
      isPlaying,
      isMuted,
      play,
      pause,
      toggle,
      mute,
      unmute,
      toggleMute,
    }),
    [isPlaying, isMuted, play, pause, toggle, mute, unmute, toggleMute]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}
