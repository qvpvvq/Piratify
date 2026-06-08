import {
  SkipForward,
  Play,
  Pause,
  SkipBack,
  Repeat1,
  Repeat,
} from "lucide-react";
import { usePlayerStore } from "@/store/PlayerStore";
import { memo } from "react";

export default memo(function ControlButtons() {
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const isLooped = usePlayerStore((state) => state.isLooped);
  const toggleLooped = usePlayerStore((state) => state.toggleLooped);

  return (
    <div className="play-control">
      <button className="skip">
        <SkipBack className="skip-icon" color="#fff" fill="#fff" />
      </button>
      <button onClick={togglePlay} className="play">
        {isPlaying ? (
          <Pause color="#323232" fill="#303030" size={20} />
        ) : (
          <Play color="#323232" fill="#303030" size={20} />
        )}
      </button>
      <button className="skip">
        <SkipForward className="skip-icon" color="#fff" fill="#fff" />
      </button>
      <button className="repeat-button" onClick={toggleLooped}>
        {isLooped ? (
          <Repeat1 className="repeat1-icon" />
        ) : (
          <Repeat className="repeat-icon" />
        )}
      </button>
    </div>
  );
});
