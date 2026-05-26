import PlaybackTimeline from "./PlaybackProgress";
import "./Playback.scss";
import { useEffect, useState } from "react";

export default function Playback({ isPlaying }: { isPlaying: boolean }) {
  const [timepassed, setTimePassed] = useState(0);
  const duration = 98;
  const progress = (timepassed / duration) * 100;

  const formatTime = (seconds: number): string => {
    const getMinutes = String(Math.trunc(seconds / 60));
    const getSeconds = String(seconds % 60).padStart(2, "0");
    return `${getMinutes}:${getSeconds}`;
  };

  useEffect(() => {
    const tick = () =>
      setTimePassed((prev) => {
        if (prev >= duration) return prev;
        return prev + 1;
      });

    if (!isPlaying) return;
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="playback">
      <div className="playback-timepassed">
        <span>{formatTime(timepassed)}</span>
      </div>
      <PlaybackTimeline progress={progress} />
      <div className="playback-duration">
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
