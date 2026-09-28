import { createContext, useContext } from "react";

export const MusicPlayerContext = createContext(null);

export function useMusicPlayer() {
  const player = useContext(MusicPlayerContext);
  if (!player) {
    throw new Error("useMusicPlayer must be used within MusicPlayerProvider");
  }
  return player;
}
