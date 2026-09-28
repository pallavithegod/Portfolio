import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { MusicPlayerContext } from "./musicPlayerContext";

const AUDIO_SRC = "/piano.mp3";
const SONG_DURATION_MS = 177000;
const AUDIO_VOLUME = 0.26;

export function MusicPlayerProvider({ children }) {
  const { pathname } = useLocation();
  const audioRef = useRef(null);
  const visualStartedAtRef = useRef(null);
  const soundEnabledRef = useRef(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [playbackBlocked, setPlaybackBlocked] = useState(false);

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
    audio
      .play()
      .then(() => setPlaybackBlocked(false))
      .catch((error) => {
        if (error.name === "NotAllowedError") {
          setPlaybackBlocked(true);
        }
      });
  }, [getVisualProgress]);

  const resumeIfNeeded = useCallback((event) => {
    if (
      event?.target instanceof Element &&
      event.target.closest("[data-sound-toggle]")
    ) {
      return;
    }

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
      if (audio.paused) {
        syncAndPlay();
        return;
      }

      soundEnabledRef.current = false;
      setSoundEnabled(false);
      setPlaybackBlocked(false);
      audio.pause();
      return;
    }

    soundEnabledRef.current = true;
    setSoundEnabled(true);
    syncAndPlay();
  }, [syncAndPlay]);

  return (
    <MusicPlayerContext.Provider value={{ soundEnabled, playbackBlocked, toggleSound, getVisualProgress }}>
      <audio ref={audioRef} src={AUDIO_SRC} preload="auto" autoPlay loop playsInline />
      {children}
    </MusicPlayerContext.Provider>
  );
}
