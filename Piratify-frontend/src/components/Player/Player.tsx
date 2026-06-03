import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./Player.scss";
import Playback from "./Playback/Playback";
import { useStore } from "@/store/PlayerStore";

export default function Player() {
  const isPlaying = useStore((state) => state.isPlaying);
  const togglePlay = useStore((state) => state.togglePlay);
  const currentTrack = useStore((state) => state.currentTrack);
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
      <Playback isPlaying={isPlaying} />
    </div>
  );
}
