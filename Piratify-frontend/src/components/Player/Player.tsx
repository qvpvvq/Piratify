import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./Player.scss";
import Playback from "./Playback/Playback";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handleTogglePlayback = (): void => {
    setIsPlaying((prev) => !prev);
    console.log(isPlaying ? "Пауза" : "Воспроизведение");
  };
  return (
    <div className="player">
      <div className="play-control">
        <button className="skip">
          <SkipBack className="skip-icon" color="#fff" fill="#fff" />
        </button>
        <button onClick={handleTogglePlayback} className="play">
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
