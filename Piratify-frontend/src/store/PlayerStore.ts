import { create } from "zustand";
import type { PlayerStore, Track } from "../types/types.ts";
import { devtools } from "zustand/middleware";

export const usePlayerStore = create<PlayerStore>()(
  devtools((set) => ({
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    volume: 0.7,
    setVolume: (value: number) =>
      set({ volume: Math.max(0, Math.min(1, value)) }),
    setCurrentTrack: (track: Track) => {
      set({ isPlaying: true, currentTrack: track });
    },
    setIsPlaying: (value) => set({ isPlaying: value }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  })),
);
