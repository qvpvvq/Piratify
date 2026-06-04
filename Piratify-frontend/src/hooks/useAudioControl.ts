import { useRef } from "react";
export const useAudioControl = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    audioRef.current?.play();
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  const toggle = () => {
    if (audioRef.current?.paused) {
      play();
    } else {
      pause();
    }
  };

  return { audioRef, play, pause, toggle };
};
