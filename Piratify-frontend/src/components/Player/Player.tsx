import { useState } from "react";
import { Play, Pause } from "lucide-react";
import "./Player.scss";
export default function Player() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div className="player">
      <button onClick={() => setIsPlaying(!isPlaying)} className="play">
        {isPlaying ? (
          <Pause color="#303030" fill="#303030" size={20} />
        ) : (
          <Play color="#303030" fill="#303030" size={20} />
        )}
      </button>
    </div>
  );
}
