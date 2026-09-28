import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { MusicPlayerContext } from "./musicPlayerContext";

const AUDIO_SRC = "/piano.mp3";
const SONG_DURATION_MS = 177000;
const AUDIO_VOLUME = 0.12;

export function MusicPlayerProvider({ children }) {
  const { pathname } = useLocation();
  const audioRef = useRef(null);
  const visualStartedAtRef = useRef(null);
  const soundEnabledRef = useRef(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const getVisualProgress = useCallback(() => {
    if (visualStartedAtRef.current === null) {
      visualStartedAtRef.current = performance.now();
    }

    return ((performance.now() - visualStartedAtRef.current) % SONG_DURATION_MS) / SONG_DURATION_MS;
  }, []);

  const syncAndPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !soundEnabledRef.current || document.hidden) return;

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = getVisualProgress() * audio.duration;
    }
    audio.play().catch(() => {});
  }, [getVisualProgress]);

  const resumeIfNeeded = useCallback(() => {
    const audio = audioRef.current;
    if (
      audio &&
      audio.paused &&
      soundEnabledRef.current &&
      !document.hidden
    ) {
      syncAndPlay();
    }
  }, [syncAndPlay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = AUDIO_VOLUME;
    audio.loop = true;

    window.addEventListener("pointerdown", resumeIfNeeded, true);
    window.addEventListener("keydown", resumeIfNeeded, true);
    window.addEventListener("touchstart", resumeIfNeeded, true);
    window.addEventListener("pageshow", resumeIfNeeded);
    audio.addEventListener("loadedmetadata", syncAndPlay);
    audio.addEventListener("stalled", resumeIfNeeded);
    syncAndPlay();

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", syncAndPlay);
      audio.removeEventListener("stalled", resumeIfNeeded);
      window.removeEventListener("pointerdown", resumeIfNeeded, true);
      window.removeEventListener("keydown", resumeIfNeeded, true);
      window.removeEventListener("touchstart", resumeIfNeeded, true);
      window.removeEventListener("pageshow", resumeIfNeeded);
    };
  }, [resumeIfNeeded, syncAndPlay]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(resumeIfNeeded);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, resumeIfNeeded]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
      } else if (soundEnabledRef.current) {
        syncAndPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [syncAndPlay]);

  const toggleSound = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (soundEnabledRef.current) {
      soundEnabledRef.current = false;
      setSoundEnabled(false);
      audio.pause();
      return;
    }

    soundEnabledRef.current = true;
    setSoundEnabled(true);
    syncAndPlay();
  }, [syncAndPlay]);

  return (
    <MusicPlayerContext.Provider value={{ soundEnabled, toggleSound, getVisualProgress }}>
      <audio ref={audioRef} src={AUDIO_SRC} preload="auto" loop />
      {children}
    </MusicPlayerContext.Provider>
  );
}
