// styles
import "./Player.scss";
// components
import NowPlaying from "./NowPlaying";
import Playback from "./Playback/Playback";
import ControlButtons from "./ControlButtons";
import VolumeController from "./VolumeController";
// hooks
import { usePlayerStore } from "@/store/PlayerStore";
import { useEffect } from "react";
import { useAudioControl } from "@/hooks/useAudioControl";

export default function Player() {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const { audioRef, play, pause } = useAudioControl();
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, play, pause]);

  useEffect(() => {
    const audio = audioRef.current;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    if (!audioRef.current) return;
    audio?.addEventListener("play", onPlay);
    audio?.addEventListener("pause", onPause);
    return () => {
      audio?.removeEventListener("play", onPlay);
      audio?.removeEventListener("pause", onPause);
    };
    // eslint-disable-next-line
  }, [setIsPlaying]);
  if (!currentTrack) {
    return null;
  }
  return (
    <div className="player">
      <ControlButtons />
      <Playback audioRef={audioRef} />
      <VolumeController />
      <audio ref={audioRef} src={currentTrack.fileURL}></audio>
      <NowPlaying />
    </div>
  );
}
