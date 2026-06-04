import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./Player.scss";
import Playback from "./Playback/Playback";
import { useStore } from "@/store/PlayerStore";
import NowPlaying from "./NowPlaying";
import { useEffect } from "react";
import { useAudioControl } from "@/hooks/useAudioControl";
export default function Player() {
  const isPlaying = useStore((state) => state.isPlaying);
  const togglePlay = useStore((state) => state.togglePlay);
  const currentTrack = useStore((state) => state.currentTrack);
  const { audioRef, play, pause } = useAudioControl();
  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, play, pause]);
  if (!currentTrack) {
    return null;
  }
  return (
    <div className="player">
      <div className="play-control">
        <button className="skip">
          <SkipBack className="skip-icon" color="#fff" fill="#fff" />
        </button>
        <button onClick={togglePlay} className="play">
          {isPlaying ? (
            <Pause color="#303030" fill="#303030" size={20} />
          ) : (
            <Play color="#303030" fill="#303030" size={20} />
          )}
        </button>
        <button className="skip">
          <SkipForward className="skip-icon" color="#fff" fill="#fff" />
        </button>
      </div>
      <Playback audioRef={audioRef} />
      <audio ref={audioRef} src={currentTrack.fileURL}></audio>
      <NowPlaying track={currentTrack} />
    </div>
  );
}
