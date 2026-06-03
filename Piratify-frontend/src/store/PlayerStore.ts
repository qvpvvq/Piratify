import { create } from "zustand";
import type { PlayerStore, Track } from "../types/types.ts";
import { devtools } from "zustand/middleware";

export const useStore = create<PlayerStore>()(
  devtools((set) => ({
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    setCurrentTrack: (track: Track) => {
      set({ currentTrack: track });
    },
    setIsPlaying: (value) => set({ isPlaying: value }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  })),
);
